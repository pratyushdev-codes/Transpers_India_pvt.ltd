import { useEffect, useState } from 'react'
import { brand } from '../data/content'

const IMAGES = ['/Bg1.jpg', '/bg2.jpg'] as const
const INTERVAL_MS = 4000

export default function MottoBox() {
  const [active, setActive] = useState(0)

  useEffect(() => {
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % IMAGES.length)
    }, INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [])

  return (
    <div className="motto-box relative aspect-[4/5] overflow-hidden rounded-3xl sm:aspect-[5/4] lg:aspect-auto lg:min-h-[420px]">
      {IMAGES.map((src, index) => (
        <img
          key={src}
          src={src}
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out"
          style={{ opacity: index === active ? 1 : 0 }}
        />
      ))}

      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(160deg, rgba(7, 11, 10, 0.72) 0%, rgba(15, 122, 79, 0.55) 45%, rgba(7, 11, 10, 0.78) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 flex h-full flex-col justify-end p-8 text-white md:p-10">

        <p className="mt-6 text-sm leading-relaxed text-white/85">{brand.tagline}</p>

        <div className="mt-8 flex gap-2" role="tablist" aria-label="Motto images">
          {IMAGES.map((_, index) => (
            <button
              key={IMAGES[index]}
              type="button"
              role="tab"
              aria-selected={index === active}
              aria-label={`Show image ${index + 1}`}
              onClick={() => setActive(index)}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: index === active ? 28 : 10,
                backgroundColor: index === active ? '#5ed29c' : 'rgba(255,255,255,0.35)',
              }}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
