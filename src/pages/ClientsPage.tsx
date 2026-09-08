import Seo from '../components/ui/Seo'
import { SectionHeading, PageHero, CtaBand } from '../components/ui/Section'
import { clients, seo } from '../data/content'

export default function ClientsPage() {
  return (
    <>
      <Seo {...seo.clients} />
      <PageHero
        title="Our Clients"
        description={clients.intro}
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Clients' }]}
      />

      <section className="site-section bg-white">
        <div className="container-site">
          <SectionHeading eyebrow="Trusted Partners" title={clients.heading} align="center" gradient />
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {clients.items.map((name) => (
              <article
                key={name}
                className="flex min-h-[140px] items-center justify-center rounded-2xl border border-[#d8eee3] bg-[#f7fcf9] px-6 py-8 text-center"
              >
                <p className="text-lg font-extrabold tracking-tight text-[#123028]">{name}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <CtaBand
        heading="Work with Transpares"
        body="Share your drawing and our engineering team will respond with a technical and commercial proposal."
        primaryLabel="Contact Us"
        primaryTo="/contact-us"
      />
    </>
  )
}
