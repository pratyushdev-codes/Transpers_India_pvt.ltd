import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ChevronDown, Menu, X } from 'lucide-react'
import { brand, nav } from '../../data/content'

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [productsOpen, setProductsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  const closeMobile = () => {
    setMobileOpen(false)
    setProductsOpen(false)
  }

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-colors ${
          scrolled || mobileOpen
            ? 'bg-white/95 text-[#123028] shadow-sm backdrop-blur'
            : 'bg-transparent text-white'
        }`}
      >
        <div className="container-site flex h-16 items-center gap-8 md:h-20 lg:gap-10">
          <Link
            to="/"
            className="flex shrink-0 items-center gap-2.5"
            onClick={closeMobile}
            aria-label={`${brand.name} home`}
          >
            <img
              src="/Transpers%20Logo.jpeg"
              alt=""
              className="h-9 w-9 rounded-sm object-contain md:h-10 md:w-10"
            />
            <span className="font-[family-name:var(--font-inter)] text-lg font-extrabold tracking-tight md:text-xl">
              {brand.name}
            </span>
          </Link>

          <nav
            className="hidden min-w-0 flex-1 items-center justify-end gap-x-6 xl:gap-x-8 lg:flex"
            aria-label="Primary"
          >
            {nav.map((item) =>
              item.children ? (
                <div key={item.path} className="group relative">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `inline-flex items-center gap-1 whitespace-nowrap py-2 text-sm font-medium transition-colors hover:text-[#0f7a4f] ${
                        isActive ? 'text-[#0f7a4f]' : ''
                      }`
                    }
                  >
                    {item.label}
                    <ChevronDown size={14} />
                  </NavLink>
                  <div className="invisible absolute left-0 top-full z-50 min-w-[240px] rounded-xl border border-[#e8f6ef] bg-white py-2 opacity-0 shadow-lg transition group-hover:visible group-hover:opacity-100">
                    {item.children.map((child) => (
                      <Link
                        key={child.path}
                        to={child.path}
                        className="block px-4 py-2.5 text-sm text-[#123028] hover:bg-[#e8f6ef] hover:text-[#0f7a4f]"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <NavLink
                  key={item.path}
                  to={item.path}
                  className={({ isActive }) =>
                    `whitespace-nowrap py-2 text-sm font-medium transition-colors hover:text-[#0f7a4f] ${
                      isActive ? 'text-[#0f7a4f]' : ''
                    }`
                  }
                >
                  {item.label}
                </NavLink>
              ),
            )}
          </nav>

          <button
            type="button"
            className="ml-auto inline-flex lg:hidden"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((o) => !o)}
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </header>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 overflow-y-auto bg-white pt-20 lg:hidden">
          <nav className="container-site flex flex-col gap-1 pb-10" aria-label="Mobile">
            {nav.map((item) => (
              <div key={item.path} className="border-b border-[#e8f6ef]">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      className="flex w-full items-center justify-between py-4 text-left text-base font-semibold text-[#123028]"
                      onClick={() => setProductsOpen((o) => !o)}
                    >
                      {item.label}
                      <ChevronDown
                        size={18}
                        className={`transition ${productsOpen ? 'rotate-180' : ''}`}
                      />
                    </button>
                    {productsOpen && (
                      <div className="mb-3 flex flex-col gap-1 pl-3">
                        <Link
                          to={item.path}
                          className="py-2 text-sm font-medium text-[#0f7a4f]"
                          onClick={closeMobile}
                        >
                          All Products
                        </Link>
                        {item.children.map((child) => (
                          <Link
                            key={child.path}
                            to={child.path}
                            className="py-2 text-sm text-[#4d655a]"
                            onClick={closeMobile}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className="block py-4 text-base font-semibold text-[#123028]"
                    onClick={closeMobile}
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}
          </nav>
        </div>
      )}
    </>
  )
}
