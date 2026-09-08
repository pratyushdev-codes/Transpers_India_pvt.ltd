import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { MapPin, Mail, Phone } from 'lucide-react'
import { contact } from '../../data/content'

const BG_IMAGE = '/Gemini_Generated_Image_kr0ynukr0ynukr0y.png'

const productLinks = [
  { label: 'Flange Type', path: '/products/flange-type' },
  { label: 'Weldable Type', path: '/products/weldable-type' },
  { label: 'Hot-Dip Galvanized', path: '/products/hot-dip-galvanized' },
  { label: 'Offset Type', path: '/products/offset-type' },
  { label: 'Goose Neck Type', path: '/products/goose-neck-type' },
  { label: 'All Products', path: '/products' },
]

const supportLinks = [
  { label: 'Facilities', path: '/manufacturing' },
  { label: 'Credentials', path: '/quality-certifications' },
  { label: 'Clients', path: '/clients' },
  { label: 'Contact Us', path: '/contact-us' },
]

export default function Footer() {
  return (
    <div className="bg-[#f8f9fa] font-sans">
      {/* Top spacer — creates scroll room for the parallax footer */}

      {/* Main parallax container */}
      <section
        className="relative h-screen overflow-hidden bg-cover bg-bottom"
        style={{ backgroundImage: `url(${BG_IMAGE})` }}
      >
        {/* Top-aligned footer card */}
        <div className="absolute top-0 z-30 w-full px-4 pt-12 md:px-6 md:pt-24 lg:pt-12">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="mx-auto max-w-7xl overflow-hidden rounded-2xl bg-white/95 shadow-xl backdrop-blur-sm lg:rounded-3xl"
          >
            {/* Top half — brand + link columns */}
            <div className="flex flex-col justify-between gap-10 p-6 md:flex-row md:gap-12 md:p-10 lg:p-12">
              <div className="max-w-sm shrink-0">
                <div className="flex items-center gap-3">
                  <img
                    src="/Transpers%20Logo.jpeg"
                    alt="Transpares"
                    className="h-10 w-auto object-contain md:h-12"
                  />
                  <p className="text-2xl font-bold tracking-tighter text-gray-900 md:text-3xl">
                    TRANSPARES
                  </p>
                </div>
                <p className="mt-4 flex gap-2 text-sm leading-relaxed text-gray-500">
                  <MapPin size={16} className="mt-0.5 shrink-0 text-orange-500" />
                  <span>{contact.details.registeredOffice}</span>
                </p>
                <p className="mt-3 text-sm leading-relaxed text-gray-500">
                  Leading transformer radiator manufacturer in Ahmedabad, Gujarat, India.
                </p>
              </div>

              <div className="flex flex-col gap-8 sm:flex-row sm:gap-12 md:gap-16 lg:gap-20">
                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900">
                    Products
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {productLinks.map((item) => (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          className="text-sm font-medium text-gray-500 transition-colors hover:text-orange-600"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900">
                    Support
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {supportLinks.map((item) => (
                      <li key={item.path}>
                        <Link
                          to={item.path}
                          className="text-sm font-medium text-gray-500 transition-colors hover:text-orange-600"
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-sm font-bold uppercase tracking-widest text-gray-900">
                    Contact
                  </h3>
                  <ul className="mt-4 space-y-2.5">
                    {contact.details.phones.map((phone) => (
                      <li key={phone}>
                        <a
                          href={`tel:${phone.replace(/\s/g, '')}`}
                          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-orange-600"
                        >
                          <Phone size={14} className="shrink-0" />
                          {phone}
                        </a>
                      </li>
                    ))}
                    {contact.details.emails.map((item) => (
                      <li key={item.value}>
                        <a
                          href={`mailto:${item.value}`}
                          className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-orange-600"
                        >
                          <Mail size={14} className="shrink-0" />
                          {item.value}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="border-t border-gray-100 bg-white px-6 py-5 md:px-10 lg:px-12">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500">
                  A group co. of Transformers and Rectifiers (India) Ltd
                </p>
                <p className="text-xs font-medium text-gray-400">
                  ISO 9001 · ISO 14001 · NTPC · PGCIL
                </p>
              </div>
            </div>

            {/* Credit line */}
            <div className="flex items-center justify-center gap-2 border-t border-gray-100 bg-white px-6 py-4 md:px-10 lg:px-12">
              <p className="text-sm font-semibold text-gray-500">
                Developed and Maintained by
              </p>
              <a
                href="http://algoryx.io/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Algoryx"
                className="inline-flex shrink-0 transition-opacity hover:opacity-80"
              >
                <img
                  src="/Aglroyx.png"
                  alt="AlgoryX Labs and Tech"
                  className="h-8 w-auto object-contain md:h-9"
                />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
