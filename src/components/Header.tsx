import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'

const NAV_LINKS = [
  { label: 'PROJECTS', href: '#projects' },
  { label: 'BLOG', href: '#blog' },
  { label: 'ABOUT', href: '#about' },
  { label: 'RESUME', href: '#resume' },
] as const

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <>
      <header className="absolute inset-x-0 top-0 z-50">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:h-20 md:px-10">
          <a
            href="/"
            className="font-[family-name:var(--font-inter)] text-lg font-extrabold tracking-tight text-white md:text-xl"
            aria-label="CodeNest home"
          >
            CodeNest
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-[family-name:var(--font-inter)] text-base text-white/90 transition-colors hover:text-[#5ed29c]"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center text-white md:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((open) => !open)}
          >
            {mobileOpen ? <X size={24} strokeWidth={1.75} /> : <Menu size={24} strokeWidth={1.75} />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-[#070b0a]/95 md:hidden" role="dialog" aria-modal="true">
          <nav
            className="flex h-full flex-col items-center justify-center gap-8"
            aria-label="Mobile"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-[family-name:var(--font-inter)] text-2xl font-semibold tracking-wide text-white transition-colors hover:text-[#5ed29c]"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
