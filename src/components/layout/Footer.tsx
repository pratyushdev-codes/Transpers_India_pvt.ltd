import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import { Facebook, Twitter, Instagram, Linkedin, MapPin, Mail, Phone } from 'lucide-react'
import { contact } from '../../data/content'

const BG_IMAGE = '/Gemini_Generated_Image_kr0ynukr0ynukr0y.png'

const productLinks = [
  { label: 'Flange Type', path: '/products/flange-type' },
  { label: 'Weldable Type', path: '/products/weldable-type' },
  { label: 'Hot-Dip Galvanized', path: '/products/hot-dip-galvanized' },
  { label: 'Offset Type', path: '/products/offset-type' },
  { label: 'All Products', path: '/products' },
]

const supportLinks = [
  { label: 'Facilities', path: '/manufacturing' },
  { label: 'Certifications', path: '/quality-certifications' },
  { label: 'Contact Us', path: '/contact-us' },
]

const socialLinks = [
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Twitter, label: 'Twitter', href: '#' },
  { icon: Instagram, label: 'Instagram', href: '#' },
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
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
                    <li>
                      <a
                        href={`mailto:${contact.details.email}`}
                        className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 transition-colors hover:text-orange-600"
                      >
                        <Mail size={14} className="shrink-0" />
                        {contact.details.email}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Bottom bar */}
            <div className="flex flex-col gap-4 border-t border-gray-100 bg-white px-6 py-5 md:flex-row md:items-center md:justify-between md:px-10 lg:px-12">
              <div className="space-y-1">
                <p className="text-sm font-medium text-gray-500">
                  © {new Date().getFullYear()} TRANSPARES LIMITED. All Rights Reserved
                </p>
                <p className="text-xs font-medium text-gray-400">
                  ISO 9001 · ISO 14001 · ISO 45001 · ISO 3834-2 · ISO 14064-3:2019
                </p>
              </div>

              <div className="flex items-center gap-3">
                {socialLinks.map(({ icon: Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-100 text-gray-500 transition-all duration-300 hover:border-orange-500 hover:bg-orange-500 hover:text-white"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                ))}
              </div>
            </div>

            {/* Credit line */}
            <div className="flex items-center justify-center gap-2 border-t border-gray-100 bg-white px-6 py-4 md:px-10 lg:px-12">
              <p className="text-sm font-semibold text-gray-500">
                Developed and Maintained by
              </p>
              <img
                src="/Aglroyx.png"
                alt="AlgoryX Labs and Tech"
                className="h-8 w-auto object-contain md:h-9"
              />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
