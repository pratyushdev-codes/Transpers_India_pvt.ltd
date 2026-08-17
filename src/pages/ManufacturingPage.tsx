import Seo from '../components/ui/Seo'
import { SectionHeading, PageHero, CtaBand } from '../components/ui/Section'
import { manufacturing, seo } from '../data/content'

export default function ManufacturingPage() {
  return (
    <>
      <Seo title={seo.manufacturing.title} description={seo.manufacturing.description} />
      <PageHero
        title="Manufacturing Facilities"
        description={manufacturing.scale.body}
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Manufacturing' }]}
      />

      {/* Scale */}
      <section className="site-section bg-white">
        <div className="container-site">
          <SectionHeading eyebrow="Capacity" title={manufacturing.scale.heading} />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#4d655a]">{manufacturing.scale.body}</p>
          <div className="mt-8 inline-flex rounded-2xl bg-[#e8f6ef] px-6 py-4">
            <p className="text-sm font-bold text-[#0f7a4f] md:text-base">{manufacturing.scale.capability}</p>
          </div>
        </div>
      </section>

      {/* Automation */}
      <section className="site-section bg-[#e8f6ef]">
        <div className="container-site">
          <SectionHeading eyebrow="Process Control" title={manufacturing.automation.heading} />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#4d655a]">{manufacturing.automation.body}</p>
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {manufacturing.automation.equipment.map((item) => (
              <li
                key={item}
                className="flex gap-3 rounded-xl border border-[#d8eee3] bg-white p-5 text-sm leading-relaxed text-[#4d655a]"
              >
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-[#0f7a4f]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* People */}
      <section className="site-section bg-[#0f7a4f] text-white">
        <div className="container-site">
          <SectionHeading tone="white" eyebrow="Our Team" title={manufacturing.people.heading} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {manufacturing.people.items.map((item) => (
              <div key={item} className="rounded-2xl border border-white/20 bg-white/10 p-6">
                <p className="text-sm leading-relaxed text-white/90">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logistics */}
      <section className="site-section bg-white">
        <div className="container-site">
          <SectionHeading eyebrow="Connectivity" title={manufacturing.logistics.heading} />
          <ul className="mt-8 grid gap-4 md:grid-cols-3">
            {manufacturing.logistics.items.map((item) => (
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

      <CtaBand
        heading="See Our Facilities in Action"
        body="Ask us for a virtual tour of our plants, or schedule an in-person visit to see our HDG line and automated coating process firsthand."
        primaryLabel="Request a Quote"
        primaryTo="/contact-us"
      />
    </>
  )
}
