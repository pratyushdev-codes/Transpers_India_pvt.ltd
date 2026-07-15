import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { brand, contact, nav } from '../../data/content'

export default function Footer() {
  const productLinks = nav.find((n) => n.children)?.children ?? []

  return (
    <footer className="bg-[#070b0a] text-white">
      <div className="container-site grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <p className="font-[family-name:var(--font-inter)] text-xl font-extrabold">{brand.name}</p>
          <p className="mt-1 text-sm text-white/60">{brand.legalName}</p>
          <p className="mt-4 text-sm leading-relaxed text-[#5ed29c]">{brand.tagline}</p>
          <p className="mt-3 font-[family-name:var(--font-instrument)] text-lg italic text-white/90">
            {brand.motto}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">Explore</h3>
          <ul className="mt-4 space-y-2">
            {nav
              .filter((n) => !n.children)
              .map((item) => (
                <li key={item.path}>
                  <Link to={item.path} className="text-sm text-white/80 hover:text-[#5ed29c]">
                    {item.label}
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">Products</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link to="/products" className="text-sm text-white/80 hover:text-[#5ed29c]">
                All Products
              </Link>
            </li>
            {productLinks.map((item) => (
              <li key={item.path}>
                <Link to={item.path} className="text-sm text-white/80 hover:text-[#5ed29c]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-bold uppercase tracking-[0.16em] text-white/50">Contact</h3>
          <ul className="mt-4 space-y-3 text-sm text-white/80">
            <li className="flex gap-2">
              <MapPin size={16} className="mt-0.5 shrink-0 text-[#5ed29c]" />
              <span>{contact.details.registeredOffice}</span>
            </li>
            <li className="flex gap-2">
              <Phone size={16} className="mt-0.5 shrink-0 text-[#5ed29c]" />
              <span>{contact.details.phone}</span>
            </li>
            <li className="flex gap-2">
              <Mail size={16} className="mt-0.5 shrink-0 text-[#5ed29c]" />
              <span>
                {contact.details.emails.map((email) => (
                  <a
                    key={email.value}
                    href={`mailto:${email.value}`}
                    className="block hover:text-[#5ed29c]"
                  >
                    {email.value}
                  </a>
                ))}
              </span>
            </li>
          </ul>
          <Link
            to="/contact-us"
            className="mt-5 inline-flex rounded-full bg-[#5ed29c] px-5 py-2.5 text-xs font-bold uppercase tracking-wide text-[#070b0a] hover:bg-[#4fc48d]"
          >
            {brand.primaryCta}
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-site flex flex-col gap-2 py-5 text-xs text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {brand.legalName}. All rights reserved.
          </p>
          <p>ISO 9001 · ISO 14001 · ISO 45001 · ISO 3834-2 · ISO 14064-3:2019</p>
        </div>
      </div>
    </footer>
  )
}
