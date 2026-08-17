import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Seo from '../components/ui/Seo'
import { SectionHeading, PageHero, CtaBand } from '../components/ui/Section'
import type { MaterialSpec } from '../data/content'
import { products, seo } from '../data/content'

function MaterialTable({ material }: { material: MaterialSpec }) {
  return (
    <div className="rounded-2xl border border-[#d8eee3] bg-white p-6 md:p-7">
      <h3 className="text-lg font-bold text-[#123028]">{material.name}</h3>
      {material.standards && (
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#0f7a4f]">
          {material.standards}
        </p>
      )}
      <table className="mt-5 w-full text-sm">
        <tbody>
          {material.params.map((row) => (
            <tr key={row.parameter} className="border-t border-[#e8f6ef]">
              <td className="py-2.5 pr-4 font-medium text-[#4d655a]">{row.parameter}</td>
              <td className="py-2.5 text-right font-semibold text-[#123028]">{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default function ProductsPage() {
  return (
    <>
      <Seo title={seo.products.title} description={seo.products.description} />
      <PageHero
        title="Transformer Radiators & Tanks"
        description={products.overview.paragraphs[0]}
        breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Products' }]}
      />

      {/* Overview */}
      <section className="site-section bg-white">
        <div className="container-site">
          <SectionHeading eyebrow="Overview" title={products.overview.heading} />
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-relaxed text-[#4d655a]">
            {products.overview.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Configurations */}
      <section className="site-section bg-[#e8f6ef]">
        <div className="container-site">
          <SectionHeading eyebrow="Configurations" title={products.configurations.heading} />
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {products.configurations.items.map((config) => (
              <article
                key={config.slug}
                className="flex flex-col overflow-hidden rounded-2xl border border-[#d8eee3] bg-white"
              >
                <div className="h-40 overflow-hidden bg-[#e8f6ef] md:h-44">
                  <img
                    src={config.image}
                    alt={config.name}
                    className="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="flex flex-1 flex-col p-7">
                  <h3 className="text-xl font-bold text-[#123028]">{config.name}</h3>
                  <p className="mt-3 flex-1 text-sm leading-relaxed text-[#4d655a]">
                    {config.description}
                  </p>
                  <Link
                    to={config.path}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-[#0f7a4f] hover:gap-3"
                  >
                    View Details
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Materials */}
      <section className="site-section bg-white">
        <div className="container-site">
          <SectionHeading eyebrow="Specifications" title={products.materials.heading} />
          <div className="mt-10 grid gap-6 lg:grid-cols-3">
            <MaterialTable material={products.materials.mildSteel} />
            <MaterialTable material={products.materials.stainlessSteel} />
            <MaterialTable material={products.materials.galvanizedSteel} />
          </div>
        </div>
      </section>

      {/* Application classes */}
      <section className="site-section bg-[#f7fcf9]">
        <div className="container-site">
          <SectionHeading eyebrow="Range" title={products.applicationClasses.heading} />
          <ul className="mt-8 grid gap-4 md:grid-cols-2">
            {products.applicationClasses.items.map((item) => (
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

      {/* Surface treatment */}
      <section className="site-section bg-[#0f7a4f] text-white">
        <div className="container-site">
          <SectionHeading tone="white" eyebrow="Corrosion Protection" title={products.surfaceTreatment.heading} />
          <div className="mt-6 max-w-3xl space-y-4 text-sm leading-relaxed text-white/85 md:text-base">
            {products.surfaceTreatment.paragraphs.map((p) => (
              <p key={p.slice(0, 40)}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      {/* Tanks teaser */}
      <section className="site-section bg-white">
        <div className="container-site grid gap-8 rounded-3xl bg-[#e8f6ef] p-8 md:grid-cols-[1.1fr_auto] md:items-center md:p-12">
          <div>
            <SectionHeading eyebrow="Also From Transpaers" title={products.tanks.heading} />
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#4d655a]">
              {products.tanks.body}
            </p>
          </div>
          <Link
            to={products.tanks.path}
            className="inline-flex items-center justify-center gap-2 rounded-full bg-[#0f7a4f] px-7 py-3.5 text-sm font-bold uppercase tracking-wide text-white hover:bg-[#0a5c3b]"
          >
            {products.tanks.cta}
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* NPD */}
      <section className="site-section bg-white pt-0">
        <div className="container-site">
          <SectionHeading eyebrow="Custom Engineering" title={products.npd.heading} />
          <p className="mt-6 max-w-3xl text-base leading-relaxed text-[#4d655a]">{products.npd.body}</p>
        </div>
      </section>

      <CtaBand
        heading={products.cta.body}
        body="Send your specifications and our engineering team will respond with a detailed technical and commercial proposal."
        primaryLabel={products.cta.primaryCta}
        primaryTo="/contact-us"
      />
    </>
  )
}
