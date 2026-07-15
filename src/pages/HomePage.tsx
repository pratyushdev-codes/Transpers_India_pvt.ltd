import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Hero from '../components/Hero'
import Seo from '../components/ui/Seo'
import { SectionHeading, CtaBand } from '../components/ui/Section'
import IconByName from '../components/ui/IconByName'
import { brand, home, seo } from '../data/content'

export default function HomePage() {
  return (
    <>
      <Seo title={seo.home.title} description={seo.home.description} />
      <Hero />

      {/* Welcome — green & white */}
      <section className="site-section bg-white">
        <div className="container-site grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div>
            <SectionHeading eyebrow="Welcome" title={home.welcome.heading} />
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
          <div className="rounded-3xl bg-[#0f7a4f] p-8 text-white md:p-10">
            <p className="font-[family-name:var(--font-jakarta)] text-[11px] font-bold uppercase tracking-[0.18em] text-[#5ed29c]">
              Company Motto
            </p>
            <p className="mt-4 font-[family-name:var(--font-instrument)] text-3xl italic md:text-4xl">
              {brand.motto}
            </p>
            <p className="mt-6 text-sm leading-relaxed text-white/80">{brand.tagline}</p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#e8f6ef] py-12 md:py-16">
        <div className="container-site grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
          {home.stats.map((stat) => (
            <div key={stat.label} className="text-center md:text-left">
              <p className="font-[family-name:var(--font-inter)] text-3xl font-extrabold text-[#0f7a4f] md:text-4xl">
                {stat.value}
              </p>
              <p className="mt-2 text-sm font-medium text-[#4d655a]">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advantages */}
      <section className="site-section bg-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="Why Choose Transpaers"
            title="Our Advantages"
            subtitle={home.advantages.intro}
          />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {home.advantages.cards.map((card) => (
              <article
                key={card.title}
                className="rounded-2xl border border-[#d8eee3] bg-white p-6 shadow-sm transition hover:border-[#0f7a4f] hover:shadow-md"
              >
                <div className="mb-4 inline-flex rounded-xl bg-[#e8f6ef] p-3 text-[#0f7a4f]">
                  <IconByName name={card.icon} size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#123028]">{card.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4d655a]">{card.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Products preview */}
      <section className="site-section bg-[#f7fcf9]">
        <div className="container-site">
          <SectionHeading
            eyebrow="Product Range"
            title={home.productsPreview.heading}
            subtitle={home.productsPreview.subheading}
          />
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {home.productsPreview.cards.map((card) => (
              <article
                key={card.title}
                className="flex flex-col rounded-2xl border border-[#d8eee3] bg-white p-7"
              >
                <div className="mb-4 inline-flex w-fit rounded-xl bg-[#0f7a4f] p-3 text-white">
                  <IconByName name={card.icon} size={22} />
                </div>
                <h3 className="text-xl font-bold text-[#123028]">{card.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4d655a]">{card.description}</p>
                <Link
                  to={card.path}
                  className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0f7a4f]"
                >
                  {card.cta} →
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Applications preview */}
      <section className="site-section bg-[#0f7a4f] text-white">
        <div className="container-site">
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
                className="rounded-full border border-white/25 bg-white/10 px-4 py-2 text-sm font-medium text-white"
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

      {/* Sustainability snippet */}
      <section className="site-section bg-[#e8f6ef]">
        <div className="container-site grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <SectionHeading title={home.sustainability.heading} subtitle={home.sustainability.body} />
          </div>
          <Link
            to="/sustainability"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0f7a4f] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-[#0a5c3b]"
          >
            {home.sustainability.cta}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <CtaBand
        heading={home.closingCta.heading}
        body={home.closingCta.body}
        primaryLabel={home.closingCta.primaryCta}
        primaryTo="/contact-us"
      />
    </>
  )
}
