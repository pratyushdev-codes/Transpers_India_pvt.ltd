import { Download, ExternalLink } from 'lucide-react'
import Seo from '../components/ui/Seo'
import { SectionHeading, PageHero, CtaBand } from '../components/ui/Section'
import { quality, seo } from '../data/content'

export default function QualityPage() {
  return (
    <>
      <Seo {...seo.quality} />
      <PageHero
        title="Quality & Certifications"
        description={quality.philosophy.paragraphs[0]}
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Quality & Certifications' }]}
      />

      {/* Credential PDFs */}
      <section className="site-section bg-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="Documents"
            title="Credentials"
            subtitle="View and download our performance certificates and company credentials."
            gradient
          />
          <div className="mt-10 grid gap-8 lg:grid-cols-2">
            {quality.documents.map((doc) => {
              const href = encodeURI(doc.file)
              return (
                <article
                  key={doc.file}
                  className="flex flex-col overflow-hidden rounded-2xl border border-[#d8eee3] bg-[#f7fcf9] shadow-sm"
                >
                  <div className="flex items-center justify-between gap-4 border-b border-[#d8eee3] bg-white px-5 py-4">
                    <h3 className="text-base font-bold text-[#123028] md:text-lg">{doc.title}</h3>
                    <div className="flex shrink-0 gap-2">
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 rounded-full border border-[#0f7a4f] px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-[#0f7a4f] transition hover:bg-[#e8f6ef]"
                      >
                        <ExternalLink size={14} />
                        View
                      </a>
                      <a
                        href={href}
                        download
                        className="inline-flex items-center gap-1.5 rounded-full bg-[#0f7a4f] px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-white transition hover:bg-[#0a5c3b]"
                      >
                        <Download size={14} />
                        Download
                      </a>
                    </div>
                  </div>
                  <iframe
                    src={`${href}#toolbar=0`}
                    title={doc.title}
                    className="h-[70vh] w-full bg-white"
                  />
                </article>
              )
            })}
          </div>
        </div>
      </section>

      {/* Approved Boards */}
      <section className="site-section bg-white">
        <div className="container-site">
          <SectionHeading
            eyebrow="Credentials"
            title="Approved Boards"
            subtitle="Images and certificates of our quality systems and utility approvals — ISO 9001, ISO 14001, NTPC, and PGCIL including 765 kV."
            gradient
          />
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {quality.certifications.boards.map((board) => (
              <article
                key={board.name}
                className="flex flex-col overflow-hidden rounded-2xl border border-[#d8eee3] bg-[#f7fcf9] shadow-sm"
              >
                <div className="relative flex aspect-[3/4] flex-col items-center justify-center bg-white p-6">
                  <div className="absolute inset-3 rounded-xl border-2 border-[#0f7a4f]/20" />
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#0f7a4f]">
                    Transpares Limited
                  </p>
                  <div className="mt-6 flex h-16 w-16 items-center justify-center rounded-full border-4 border-[#0f7a4f] text-lg font-extrabold text-[#0f7a4f]">
                    {board.name.split(' ')[0].slice(0, 3)}
                  </div>
                  <h3 className="mt-6 text-center text-xl font-extrabold text-[#123028]">{board.name}</h3>
                  <p className="mt-2 text-center text-xs font-semibold uppercase tracking-[0.12em] text-[#4d655a]">
                    {board.subtitle}
                  </p>
                  <p className="mt-6 text-[10px] font-medium tracking-wide text-[#0f7a4f]/70">
                    APPROVED BOARD · CERTIFICATE
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="site-section bg-[#f7fcf9]">
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
