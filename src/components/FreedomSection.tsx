import { useEffect, useRef, type CSSProperties } from 'react'
import Hls from 'hls.js'
import IconByName from './ui/IconByName'

const HLS_SRC = 'https://stream.mux.com/bnYL6x5cAX6WiJv2pOKpITehZd3NVdXpj3ylJFpX5Lk.m3u8'

const items = [
  {
    icon: 'Factory',
    title: 'Professional Manufacturer',
    description:
      'Decades of experience dedicated exclusively to transformer radiators and tanks, backed by a modern production base purpose-built for the demands of the transformer industry.',
  },
  {
    icon: 'Cpu',
    title: 'Advanced Technology',
    description:
      'Internationally advanced production equipment and proven mastery of core heat-dissipation technology — including moisture content (PPM) and particle count meters on the internal cleaning and coating process.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Assured Quality',
    description:
      'A rigorous, end-to-end quality control system certified by multiple international bodies — ISO 9001, ISO 14001, ISO 45001, and ISO 3834-2 — supported by manual verification for absolute accuracy.',
  },
  {
    icon: 'Layers',
    title: 'One-Stop Service',
    description:
      'A single accountable partner from design and new product development through manufacturing, logistics, and after-sales support.',
  },
  {
    icon: 'BadgeCheck',
    title: 'Certified Specialists',
    description:
      'NACE-certified engineers and a dedicated inspection team supporting coating integrity and welding quality on every product.',
  },
  {
    icon: 'Zap',
    title: 'Built for Urgency',
    description:
      'Flexible operations and optimized systems engineered to meet urgent customer requirements with minimal lead time — without ever compromising on quality.',
  },
  {
    icon: 'GraduationCap',
    title: 'Engineering-Led Team',
    description:
      'A mechanical engineering degree is the minimum qualification for our business development and operations roles. Our young, dynamic team brings international exposure and a relentless focus on innovation.',
  },
]

/** Evenly spaced around the orb, starting at top, clockwise. */
function orbitStyle(index: number, total: number): CSSProperties {
  const angle = (index / total) * Math.PI * 2 - Math.PI / 2
  const x = 50 + Math.cos(angle) * 38
  const y = 50 + Math.sin(angle) * 40
  return {
    left: `${x}%`,
    top: `${y}%`,
    transform: 'translate(-50%, -50%)',
  }
}

function AdvantageCard({
  item,
  className = '',
  style,
}: {
  item: (typeof items)[number]
  className?: string
  style?: CSSProperties
}) {
  return (
    <div
      className={`flex flex-col ${className}`}
      style={{
        gap: '8px',
        padding: '12px 14px',
        borderRadius: '16px',
        backgroundColor: 'rgb(255, 255, 255)',
        boxShadow: '0 3px 9.1px #3f4a7e0d, 0 1px 29px #3f4a7e1a',
        border: '1px solid rgba(15, 122, 79, 0.08)',
        ...style,
      }}
    >
      <div
        className="inline-flex rounded-xl bg-[#e8f6ef] p-2 text-[#0f7a4f]"
        style={{ width: 'fit-content' }}
      >
        <IconByName name={item.icon} size={16} />
      </div>
      <div>
        <div
          style={{
            color: 'rgb(26, 11, 84)',
            fontWeight: 500,
            fontSize: '13px',
            lineHeight: 1.3,
          }}
        >
          {item.title}
        </div>
        <div
          style={{
            color: 'rgb(131, 121, 158)',
            marginTop: '5px',
            fontSize: '11.5px',
            lineHeight: 1.4,
            display: '-webkit-box',
            WebkitLineClamp: 3,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}
        >
          {item.description}
        </div>
      </div>
    </div>
  )
}

function CenterOrb({ size = 'desktop' }: { size?: 'desktop' | 'mobile' }) {
  const outer = size === 'desktop' ? 'clamp(200px, 20vw, 300px)' : 'clamp(200px, 50vw, 280px)'
  const inner = size === 'desktop' ? 'clamp(170px, 17vw, 260px)' : 'clamp(170px, 42vw, 240px)'

  return (
    <div
      style={{
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: outer,
        height: outer,
        flexShrink: 0,
      }}
    >
      <div
        aria-hidden
        style={{
          position: 'absolute',
          inset: '8%',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(94, 210, 156, 0.45) 0%, rgba(15, 122, 79, 0.22) 45%, transparent 70%)',
          filter: 'blur(18px)',
          pointerEvents: 'none',
        }}
      />

      <div
        style={{
          position: 'relative',
          borderRadius: '50%',
          padding: '3px',
          background:
            'conic-gradient(from 210deg, #5ed29c, #0f7a4f, #0a5c3b, #a8e6c7, #5ed29c)',
          boxShadow:
            '0 0 40px rgba(94, 210, 156, 0.35), 0 0 80px rgba(15, 122, 79, 0.18)',
        }}
      >
        <div
          style={{
            position: 'relative',
            borderRadius: '50%',
            overflow: 'hidden',
            width: inner,
            height: inner,
            backgroundColor: '#e8f6ef',
          }}
        >
          <div
            style={{
              position: 'absolute',
              inset: 0,
              filter: 'hue-rotate(95deg) saturate(1.15)',
            }}
          >
            <HlsVideo />
          </div>
          <div
            aria-hidden
            style={{
              position: 'absolute',
              inset: 0,
              borderRadius: '50%',
              background:
                'radial-gradient(circle at 40% 35%, rgba(94, 210, 156, 0.2) 0%, rgba(15, 122, 79, 0.28) 55%, rgba(10, 92, 59, 0.35) 100%)',
              mixBlendMode: 'color',
              pointerEvents: 'none',
            }}
          />
        </div>
      </div>
    </div>
  )
}

function HlsVideo() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (Hls.isSupported()) {
      const hls = new Hls({
        startLevel: -1,
        capLevelToPlayerSize: false,
        maxMaxBufferLength: 60,
        enableWorker: true,
      })
      hls.loadSource(HLS_SRC)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        hls.currentLevel = hls.levels.length - 1
        video.play().catch(() => {})
      })
      return () => hls.destroy()
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = HLS_SRC
      video.play().catch(() => {})
    }
  }, [])

  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      style={{
        width: '160%',
        height: '160%',
        objectFit: 'cover',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      }}
    />
  )
}

export default function FreedomSection() {
  return (
    <section
      className="flex w-full flex-col items-center"
      style={{
        backgroundColor: '#ffffff',
        padding: 'clamp(48px, 6vw, 80px) clamp(16px, 3vw, 40px)',
        gap: '28px',
      }}
    >
      <div className="flex flex-col items-center text-center">
        <h2
          className="font-medium"
          style={{
            fontSize: 'clamp(32px, 4vw, 56px)',
            color: '#123028',
            lineHeight: 1.15,
            margin: 0,
          }}
        >
          Why Choose Transpaers
          <br />
          <span
            style={{
              backgroundImage:
                'linear-gradient(90deg, #5ed29c, #0f7a4f 50%, #0a5c3b)',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              color: 'transparent',
              paddingBottom: '0.3vw',
              display: 'inline-block',
            }}
          >
            Our Advantages
          </span>
        </h2>
      </div>

      {/* Mobile */}
      <div className="flex w-full flex-col items-center gap-6 lg:hidden">
        <CenterOrb size="mobile" />
        <div className="flex w-full flex-col gap-3">
          {items.map((item) => (
            <AdvantageCard key={item.title} item={item} />
          ))}
        </div>
      </div>

      {/* Desktop circular orbit */}
      <div
        className="relative mx-auto hidden w-full max-w-[980px] lg:block"
        style={{ height: '720px' }}
      >
        {/* Soft orbit guide */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
          style={{
            width: '56%',
            height: '56%',
            border: '1px dashed rgba(15, 122, 79, 0.12)',
          }}
        />

        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2">
          <CenterOrb />
        </div>

        {items.map((item, index) => (
          <AdvantageCard
            key={item.title}
            item={item}
            className="absolute z-20"
            style={{
              ...orbitStyle(index, items.length),
              width: '200px',
            }}
          />
        ))}
      </div>
    </section>
  )
}
