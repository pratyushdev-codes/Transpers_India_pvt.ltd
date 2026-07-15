import type { ReactNode } from 'react'
import { Link } from 'react-router-dom'

interface SectionHeadingProps {
  eyebrow?: string
  title: string
  subtitle?: string
  align?: 'left' | 'center'
  tone?: 'green' | 'white' | 'dark'
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  tone = 'green',
}: SectionHeadingProps) {
  const titleColor =
    tone === 'white' ? 'text-white' : tone === 'dark' ? 'text-[#070b0a]' : 'text-[#123028]'
  const subColor =
    tone === 'white' ? 'text-white/80' : 'text-[#4d655a]'
  const eyeColor = tone === 'white' ? 'text-[#5ed29c]' : 'text-[#0f7a4f]'

  return (
    <div className={`max-w-3xl ${align === 'center' ? 'mx-auto text-center' : ''}`}>
      {eyebrow && (
        <p
          className={`mb-3 font-[family-name:var(--font-jakarta)] text-[11px] font-bold uppercase tracking-[0.18em] ${eyeColor}`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight md:text-4xl lg:text-[2.75rem] ${titleColor}`}
      >
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-base leading-relaxed md:text-lg ${subColor}`}>{subtitle}</p>
      )}
    </div>
  )
}

interface PageHeroProps {
  title: string
  description?: string
  breadcrumbs?: { label: string; path?: string }[]
}

export function PageHero({ title, description, breadcrumbs }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#0f7a4f] text-white">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute -top-24 right-0 h-72 w-72 rounded-full bg-[#5ed29c] blur-3xl" />
        <div className="absolute bottom-0 left-10 h-48 w-48 rounded-full bg-white/20 blur-3xl" />
      </div>
      <div className="container-site relative py-16 md:py-24">
        {breadcrumbs && (
          <nav className="mb-6 flex flex-wrap items-center gap-2 text-sm text-white/70" aria-label="Breadcrumb">
            {breadcrumbs.map((crumb, i) => (
              <span key={crumb.label} className="inline-flex items-center gap-2">
                {i > 0 && <span aria-hidden="true">/</span>}
                {crumb.path ? (
                  <Link to={crumb.path} className="hover:text-white">
                    {crumb.label}
                  </Link>
                ) : (
                  <span className="text-white">{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        <h1 className="max-w-4xl font-[family-name:var(--font-inter)] text-3xl font-extrabold tracking-tight md:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-3xl text-base leading-relaxed text-white/85 md:text-lg">
            {description}
          </p>
        )}
      </div>
    </section>
  )
}

interface CtaBandProps {
  heading: string
  body: string
  primaryLabel: string
  primaryTo?: string
  secondaryLabel?: string
  secondaryTo?: string
  children?: ReactNode
}

export function CtaBand({
  heading,
  body,
  primaryLabel,
  primaryTo = '/contact-us',
  secondaryLabel,
  secondaryTo,
}: CtaBandProps) {
  return (
    <section className="site-section bg-[#0f7a4f]">
      <div className="container-site flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
        <div className="max-w-2xl">
          <h2 className="font-[family-name:var(--font-inter)] text-3xl font-extrabold text-white md:text-4xl">
            {heading}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-white/85 md:text-lg">{body}</p>
        </div>
        <div className="flex flex-wrap gap-3">
          <Link
            to={primaryTo}
            className="inline-flex items-center rounded-full bg-white px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-[#0f7a4f] transition hover:bg-[#e8f6ef]"
          >
            {primaryLabel}
          </Link>
          {secondaryLabel && secondaryTo && (
            <Link
              to={secondaryTo}
              className="inline-flex items-center rounded-full border-2 border-white px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white transition hover:bg-white/10"
            >
              {secondaryLabel}
            </Link>
          )}
        </div>
      </div>
    </section>
  )
}
