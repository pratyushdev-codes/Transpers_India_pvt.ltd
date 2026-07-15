import { useEffect, useRef } from 'react'
import Hls from 'hls.js'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import LiquidGlassCard from './LiquidGlassCard'
import { brand, home } from '../data/content'
import Button from './ui/Button'

const HLS_SRC =
  'https://stream.mux.com/tLkHO1qZoaaQOUeVWo8hEBeGQfySP02EPS02BmnNFyXys.m3u8'

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let hls: Hls | null = null

    if (Hls.isSupported()) {
      hls = new Hls({ enableWorker: false })
      hls.loadSource(HLS_SRC)
      hls.attachMedia(video)
      hls.on(Hls.Events.MANIFEST_PARSED, () => {
        void video.play().catch(() => {})
      })
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      video.src = HLS_SRC
      void video.play().catch(() => {})
    }

    return () => {
      hls?.destroy()
    }
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#070b0a]">
      <video
        ref={videoRef}
        className="absolute inset-0 h-full w-full object-cover opacity-60"
        muted
        loop
        playsInline
        autoPlay
        aria-hidden="true"
      />

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(to right, #070b0a 0%, transparent 65%)' }}
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: 'linear-gradient(to top, #070b0a 0%, transparent 55%)' }}
      />

      <div className="pointer-events-none absolute inset-0 z-[2] hidden md:block" aria-hidden="true">
        <div className="absolute top-0 bottom-0 left-[25%] w-px bg-white/10" />
        <div className="absolute top-0 bottom-0 left-[50%] w-px bg-white/10" />
        <div className="absolute top-0 bottom-0 left-[75%] w-px bg-white/10" />
      </div>

      <svg
        className="pointer-events-none absolute top-[8%] left-1/2 z-[2] h-[280px] w-[min(90vw,900px)] -translate-x-1/2"
        viewBox="0 0 900 280"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <filter id="transpaers-glow" x="-40%" y="-80%" width="180%" height="260%">
            <feGaussianBlur stdDeviation="25" />
          </filter>
        </defs>
        <ellipse
          cx="450"
          cy="140"
          rx="380"
          ry="70"
          fill="rgba(94, 210, 156, 0.35)"
          filter="url(#transpaers-glow)"
        />
        <ellipse
          cx="450"
          cy="140"
          rx="280"
          ry="45"
          fill="rgba(15, 122, 79, 0.35)"
          filter="url(#transpaers-glow)"
        />
      </svg>

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col justify-end px-6 pb-16 pt-28 md:justify-center md:px-10 md:pb-24 md:pt-32">
        <LiquidGlassCard />

        <p
          className="mb-4 font-[family-name:var(--font-jakarta)] font-bold tracking-wide text-[#5ed29c]"
          style={{ fontSize: 11 }}
        >
          {brand.tagline}
        </p>

        <h1 className="max-w-4xl font-[family-name:var(--font-inter)] text-[34px] leading-[1.08] font-extrabold tracking-tight text-white md:text-[56px] lg:text-[64px]">
          {home.hero.headline}
        </h1>

        <p
          className="mt-5 max-w-xl font-[family-name:var(--font-inter)] leading-relaxed text-white/70"
          style={{ fontSize: 14, maxWidth: 560 }}
        >
          {home.hero.subheadline}
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Button to="/contact-us" variant="secondary" size="lg">
            {home.hero.primaryCta}
            <ArrowRight size={18} strokeWidth={2.25} aria-hidden="true" />
          </Button>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 rounded-full border border-white/35 px-7 py-3.5 text-sm font-bold tracking-wide text-white uppercase transition hover:bg-white/10"
          >
            {home.hero.secondaryCta}
          </Link>
        </div>
      </div>
    </section>
  )
}
