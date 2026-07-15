import Seo from '../components/ui/Seo'
import { SectionHeading, PageHero, CtaBand } from '../components/ui/Section'
import { applications, seo } from '../data/content'

export default function ApplicationsPage() {
  return (
    <>
      <Seo title={seo.applications.title} description={seo.applications.description} />
      <PageHero
        title="Application Cases"
        description={applications.overview.paragraphs[0]}
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Applications' }]}
      />

      {/* Overview */}
      <section className="site-section bg-white">
        <div className="container-site">
          <SectionHeading eyebrow="Overview" title={applications.overview.heading} />
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-[#4d655a]">
            {applications.overview.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="site-section bg-[#e8f6ef]">
        <div className="container-site">
          <SectionHeading eyebrow="Where We Serve" title={applications.sectors.heading} />
          <div className="mt-10 flex flex-wrap gap-3">
            {applications.sectors.items.map((sector) => (
              <span
                key={sector}
                className="rounded-full border border-[#0f7a4f]/25 bg-white px-4 py-2.5 text-sm font-medium text-[#123028]"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Domestic highlights */}
      <section className="site-section bg-white">
        <div className="container-site">
          <SectionHeading eyebrow="Case Studies" title={applications.domesticHighlights.heading} />
          <ul className="mt-8 space-y-4">
            {applications.domesticHighlights.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-[#d8eee3] bg-[#f7fcf9] p-5 text-sm leading-relaxed text-[#4d655a] md:text-base"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#0f7a4f]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* International highlights */}
      <section className="site-section bg-[#0f7a4f] text-white">
        <div className="container-site">
          <SectionHeading tone="white" eyebrow="Global Reach" title={applications.internationalHighlights.heading} />
          <ul className="mt-8 space-y-4">
            {applications.internationalHighlights.items.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-white/20 bg-white/10 p-5 text-sm leading-relaxed text-white/90 md:text-base"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#5ed29c]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Closing */}
      <section className="site-section bg-white">
        <div className="container-site">
          <p className="max-w-3xl text-base leading-relaxed text-[#4d655a] md:text-lg">
            {applications.closing.body}
          </p>
        </div>
      </section>

      <CtaBand
        heading={applications.cta.body}
        body="Tell us about your project's environment and duty requirements — our engineers will help you specify the right radiator."
        primaryLabel={applications.cta.primaryCta}
        primaryTo="/contact-us"
      />
    </>
  )
}
