import Seo from '../components/ui/Seo'
import { SectionHeading, PageHero, CtaBand } from '../components/ui/Section'
import IconByName from '../components/ui/IconByName'
import { seo, sustainability } from '../data/content'

export default function SustainabilityPage() {
  return (
    <>
      <Seo {...seo.sustainability} />
      <PageHero
        title="Sustainability"
        description={sustainability.commitment.body}
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Sustainability' }]}
      />

      {/* Commitment */}
      <section className="site-section bg-white">
        <div className="container-site">
          <SectionHeading eyebrow="Our Commitment" title={sustainability.commitment.heading} />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#4d655a]">
            {sustainability.commitment.body}
          </p>
        </div>
      </section>

      {/* Environmental policy */}
      <section className="site-section bg-[#e8f6ef]">
        <div className="container-site">
          <SectionHeading eyebrow="Policy" title={sustainability.environmentalPolicy.heading} />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#4d655a]">
            {sustainability.environmentalPolicy.body}
          </p>
        </div>
      </section>

      {/* Efforts grid */}
      <section className="site-section bg-white">
        <div className="container-site">
          <SectionHeading eyebrow="In Practice" title={sustainability.efforts.heading} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sustainability.efforts.items.map((effort) => (
              <article
                key={effort.title}
                className="flex flex-col rounded-2xl border border-[#d8eee3] bg-white p-6 shadow-sm transition hover:border-[#0f7a4f] hover:shadow-md"
              >
                <div className="mb-4 inline-flex w-fit rounded-xl bg-[#e8f6ef] p-3 text-[#0f7a4f]">
                  <IconByName name={effort.icon} size={22} />
                </div>
                <h3 className="text-lg font-bold text-[#123028]">{effort.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4d655a]">{effort.description}</p>
                {effort.metric && (
                  <p className="mt-4 text-2xl font-extrabold text-[#0f7a4f]">{effort.metric}</p>
                )}
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="site-section bg-[#0f7a4f] text-white">
        <div className="container-site">
          <SectionHeading tone="white" eyebrow="Verified" title={sustainability.certifications.heading} />
          <div className="mt-8 flex flex-wrap gap-3">
            {sustainability.certifications.items.map((cert) => (
              <span
                key={cert}
                className="rounded-full border border-white/25 bg-white/10 px-5 py-2.5 text-sm font-semibold text-white"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Partner With a Responsible Manufacturer"
        body="Ask us for our sustainability report and GHG verification documentation when you get in touch."
        primaryLabel="Request a Quote"
        primaryTo="/contact-us"
      />
    </>
  )
}
