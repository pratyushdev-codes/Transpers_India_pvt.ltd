import Seo from '../components/ui/Seo'
import { SectionHeading, PageHero, CtaBand } from '../components/ui/Section'
import { quality, seo } from '../data/content'

export default function QualityPage() {
  return (
    <>
      <Seo title={seo.quality.title} description={seo.quality.description} />
      <PageHero
        title="Quality & Certifications"
        description={quality.philosophy.paragraphs[0]}
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Quality & Certifications' }]}
      />

      {/* Philosophy */}
      <section className="site-section bg-white">
        <div className="container-site">
          <SectionHeading eyebrow="Our Approach" title={quality.philosophy.heading} />
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-[#4d655a]">
            {quality.philosophy.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="site-section bg-[#e8f6ef]">
        <div className="container-site">
          <SectionHeading eyebrow="Accreditations" title={quality.certifications.heading} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {quality.certifications.items.map((cert) => (
              <article key={cert.name} className="rounded-2xl border border-[#d8eee3] bg-white p-6">
                <h3 className="text-lg font-bold text-[#0f7a4f]">{cert.name}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4d655a]">{cert.description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Certified people */}
      <section className="site-section bg-white">
        <div className="container-site">
          <SectionHeading eyebrow="Our People" title={quality.people.heading} />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#4d655a]">{quality.people.intro}</p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {quality.people.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-[#d8eee3] bg-[#f7fcf9] p-5 text-sm leading-relaxed text-[#4d655a]"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#0f7a4f]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Testing regime */}
      <section className="site-section bg-[#0f7a4f] text-white">
        <div className="container-site">
          <SectionHeading tone="white" eyebrow="Process Control" title={quality.testing.heading} />
          <ol className="mt-10 space-y-4">
            {quality.testing.items.map((item, index) => (
              <li key={item} className="flex gap-4 rounded-xl border border-white/20 bg-white/10 p-5">
                <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#5ed29c] text-xs font-bold text-[#070b0a]">
                  {index + 1}
                </span>
                <span className="text-sm leading-relaxed text-white/90 md:text-base">{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        heading={quality.cta.body}
        body="Our team can walk you through our full quality documentation, certificates, and inspection reports."
        primaryLabel={quality.cta.primaryCta}
        primaryTo="/contact-us"
      />
    </>
  )
}
