import Seo from '../components/ui/Seo'
import { SectionHeading, PageHero, CtaBand } from '../components/ui/Section'
import { about, brand, seo } from '../data/content'

export default function AboutPage() {
  return (
    <>
      <Seo title={seo.about.title} description={seo.about.description} />
      <PageHero
        title="About Transpaers India Pvt Ltd"
        description={about.whoWeAre.paragraphs[0]}
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'About Us' }]}
      />

      {/* Who We Are */}
      <section className="site-section bg-white">
        <div className="container-site">
          <SectionHeading eyebrow="Our Story" title={about.whoWeAre.heading} />
          <div className="mt-8 max-w-3xl space-y-5 text-base leading-relaxed text-[#4d655a]">
            {about.whoWeAre.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* At a Glance */}
      <section className="site-section bg-[#e8f6ef]">
        <div className="container-site">
          <SectionHeading eyebrow="By the Numbers" title={about.glance.heading} />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {about.glance.items.map((item) => (
              <div
                key={item.label}
                className="rounded-2xl border border-[#d8eee3] bg-white p-6 shadow-sm"
              >
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0f7a4f]">
                  {item.label}
                </p>
                <p className="mt-3 text-base font-semibold leading-snug text-[#123028]">
                  {item.value}
                </p>
                {item.detail && (
                  <p className="mt-2 text-sm text-[#4d655a]">{item.detail}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision / Mission / Motto */}
      <section className="site-section bg-white">
        <div className="container-site">
          <SectionHeading eyebrow="What Drives Us" title="Vision, Mission & Motto" />
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {[about.visionMissionMotto.vision, about.visionMissionMotto.mission, about.visionMissionMotto.motto].map(
              (block) => (
                <article
                  key={block.heading}
                  className="flex flex-col rounded-2xl border border-[#d8eee3] bg-[#f7fcf9] p-7"
                >
                  <h3 className="text-lg font-bold text-[#0f7a4f]">{block.heading}</h3>
                  <p className="mt-4 flex-1 text-sm leading-relaxed text-[#4d655a]">{block.body}</p>
                </article>
              ),
            )}
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="site-section bg-[#0f7a4f] text-white">
        <div className="container-site">
          <SectionHeading tone="white" eyebrow="Leadership" title={about.leadership.heading} />
          <div className="mt-10 max-w-3xl rounded-2xl bg-white/10 p-8 md:p-10">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#5ed29c]">
              {about.leadership.founder.title}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-white/85 md:text-base">
              {about.leadership.founder.bio}
            </p>
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="site-section bg-white">
        <div className="container-site">
          <SectionHeading eyebrow="Our Journey" title="Milestones" />
          <ol className="mt-12 space-y-8 border-l-2 border-[#d8eee3] pl-8">
            {about.milestones.map((milestone) => (
              <li key={milestone.title} className="relative">
                <span className="absolute -left-[calc(2rem+5px)] top-1 h-3 w-3 rounded-full bg-[#0f7a4f]" />
                <p className="text-xs font-bold uppercase tracking-[0.14em] text-[#0f7a4f]">
                  {milestone.period}
                </p>
                <h3 className="mt-1 text-lg font-bold text-[#123028]">{milestone.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[#4d655a]">{milestone.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <CtaBand
        heading="Let's Build a Reliable Partnership"
        body={brand.tagline}
        primaryLabel={brand.primaryCta}
        primaryTo="/contact-us"
      />
    </>
  )
}
