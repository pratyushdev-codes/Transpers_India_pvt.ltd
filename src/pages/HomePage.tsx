import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'
import FreedomSection from '../components/FreedomSection'
import MottoBox from '../components/MottoBox'
import PrecisionSection from '../components/PrecisionSection'
import Seo from '../components/ui/Seo'
import { SectionHeading, CtaBand } from '../components/ui/Section'
import { home, seo, searchTags } from '../data/content'

export default function HomePage() {
  return (
    <>
      <Seo {...seo.home} faq={home.faqs} />
      <Hero />

      {/* Welcome — green & white */}
      <section className="site-section bg-white">
        <div className="container-site grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Welcome" title={home.welcome.heading} gradient />
            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#4d655a]">
              {home.welcome.paragraphs.map((p) => (
                <p key={p.slice(0, 40)}>{p}</p>
              ))}
            </div>
            <Link
              to="/about-us"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#0f7a4f] hover:gap-3"
            >
              {home.welcome.linkLabel}
              <ArrowRight size={16} />
            </Link>
          </div>
          <MottoBox />
        </div>
      </section>

      <section className="site-section bg-[#f7fcf9]" aria-label="Transformer radiator manufacturer in Ahmedabad, Gujarat, India">
        <div className="container-site">
          <SectionHeading
            eyebrow="Ahmedabad · Gujarat · India"
            title={home.location.heading}
            gradient
          />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#4d655a]">
            {home.location.body}
          </p>
          <ul className="mt-8 flex flex-wrap gap-2.5" aria-label="Search tags">
            {searchTags.map((tag) => (
              <li key={tag.label}>
                <Link
                  to={tag.path}
                  className="inline-flex rounded-full border border-[#d8eee3] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#0f7a4f] transition hover:border-[#0f7a4f] hover:bg-[#e8f6ef]"
                >
                  {tag.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Highlights marquee */}
      <section
        className="stats-marquee overflow-hidden bg-[#e8f6ef] py-3 md:py-3.5"
        aria-label="Scrolling product highlights"
      >
        <div className="stats-marquee__track" role="list">
          {[0, 1].map((copy) => (
            <div
              key={copy}
              className="stats-marquee__group"
              aria-hidden={copy === 1 ? true : undefined}
            >
              {home.marqueeChips.map((chip) => (
                <div key={`${copy}-${chip}`} className="stats-marquee__chip" role="listitem">
                  {chip}
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <FreedomSection />

      {/* Products preview */}
      <section className="relative site-section overflow-hidden bg-[#f7fcf9]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[70%] bg-[radial-gradient(ellipse_90%_100%_at_50%_100%,rgba(15,122,79,0.28)_0%,rgba(94,210,156,0.14)_35%,transparent_70%)]"
        />
        <div className="container-site relative">
          <SectionHeading
            eyebrow="Product Range"
            title={home.productsPreview.heading}
            subtitle={home.productsPreview.subheading}
            gradient
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {home.productsPreview.cards.map((card) => (
              <article
                key={card.title}
                className="flex flex-col overflow-hidden rounded-2xl border border-[#d8eee3] bg-white"
              >
                <div className="h-40 overflow-hidden bg-[#e8f6ef] md:h-44">
                  <img
                    src={card.image}
                    alt={card.title}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-bold text-[#123028]">{card.title}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4d655a]">{card.description}</p>
                  <Link
                    to={card.path}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0f7a4f]"
                  >
                    {card.cta} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PrecisionSection />

      {/* Applications preview */}
      <section className="relative site-section overflow-hidden text-white">
        <video
          className="absolute inset-0 h-full w-full object-cover"
          src="/applications-bg.mp4"
          muted
          loop
          playsInline
          autoPlay
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(to bottom, rgba(7, 11, 10, 0.72) 0%, rgba(15, 122, 79, 0.55) 45%, rgba(7, 11, 10, 0.78) 100%)',
          }}
        />
        <div className="container-site relative z-10">
          <SectionHeading
            tone="white"
            eyebrow="Applications"
            title={home.applicationsPreview.heading}
            subtitle={home.applicationsPreview.body}
          />
          <div className="mt-10 flex flex-wrap gap-3">
            {home.applicationsPreview.sectors.map((sector) => (
              <span
                key={sector}
                className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm"
              >
                {sector}
              </span>
            ))}
          </div>
          <Link
            to="/applications"
            className="mt-8 inline-flex items-center gap-2 text-sm font-bold text-[#5ed29c]"
          >
            {home.applicationsPreview.cta}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Certifications strip */}
      <section className="border-y border-[#d8eee3] bg-white py-8">
        <div className="container-site">
          <p className="text-center text-sm font-semibold tracking-wide text-[#0f7a4f] md:text-base">
            {home.certifications.strip}
          </p>
        </div>
      </section>

      <section className="site-section bg-[#f7fcf9]">
        <div className="container-site">
          <SectionHeading
            eyebrow="FAQs"
            title="Radiator manufacturers in Gujarat, Ahmedabad & India"
            gradient
          />
          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {home.faqs.map((item) => (
              <article
                key={item.question}
                className="rounded-2xl border border-[#d8eee3] bg-white p-6"
              >
                <h3 className="text-base font-bold leading-snug text-[#123028]">{item.question}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4d655a]">{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading={home.closingCta.heading}
        body={home.closingCta.body}
        primaryLabel={home.closingCta.primaryCta}
        primaryTo="/contact-us"
        backgroundImage="/bg%204.jpeg"
      />
    </>
  )
}
