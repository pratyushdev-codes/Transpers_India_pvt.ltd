export default function LiquidGlassCard() {
  return (
    <div
      className="liquid-glass relative z-20 h-[200px] w-[200px] translate-y-[-50px] overflow-hidden rounded-2xl p-5"
      style={{
        background: 'rgba(255, 255, 255, 0.01)',
        backgroundBlendMode: 'luminosity',
        backdropFilter: 'blur(4px)',
        WebkitBackdropFilter: 'blur(4px)',
        boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.1)',
      }}
    >
      <div className="relative z-10 flex h-full flex-col justify-between">
        <span
          className="font-[family-name:var(--font-inter)] font-medium tracking-wide text-white/80"
          style={{ fontSize: 14 }}
        >
          [ 30+ YEARS ]
        </span>

        <h2
          className="font-[family-name:var(--font-inter)] leading-snug text-white"
          style={{ fontSize: 18 }}
        >
          Cooling that powers the{' '}
          <em className="font-[family-name:var(--font-instrument)] italic text-white">world</em>
        </h2>

        <p className="font-[family-name:var(--font-inter)] leading-relaxed text-white/55" style={{ fontSize: 11 }}>
          Radiators & tanks for transformers — engineered in India, delivered worldwide.
        </p>
      </div>
    </div>
  )
}
