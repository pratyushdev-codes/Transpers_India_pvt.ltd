import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import Seo from '../components/ui/Seo'
import { SectionHeading, PageHero, CtaBand } from '../components/ui/Section'
import { productSeo, products, seo } from '../data/content'

export default function ProductDetailPage() {
  const { slug } = useParams<{ slug: string }>()

  const config = products.configurations.items.find((item) => item.slug === slug)
  const isTanks = slug === 'transformer-tanks'

  if (!config && !isTanks) {
    return (
      <>
        <Seo
          title="Product Not Found | Transpares Limited | Radiator Manufacturer Ahmedabad"
          description="The product you're looking for could not be found. Browse Transpares Limited's transformer radiators manufactured in Ahmedabad, Gujarat, India."
          keywords={seo.products.keywords}
          path="/products"
        />
        <PageHero
          title="Product Not Found"
          description="The product you're looking for doesn't exist or may have moved."
          breadcrumbs={[{ label: 'Home', path: '/' }, { label: 'Products', path: '/products' }]}
        />
        <section className="site-section bg-white">
          <div className="container-site">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 text-sm font-bold text-[#0f7a4f] hover:gap-3"
            >
              <ArrowLeft size={16} />
              Back to All Products
            </Link>
          </div>
        </section>
      </>
    )
  }

  const name = config ? config.name : products.tanks.heading
  const description = config ? config.description : products.tanks.body
  const meta = slug && productSeo[slug]

  return (
    <>
      <Seo
        title={meta?.title ?? `${name} Manufacturer in Ahmedabad, Gujarat | Transpares Limited`}
        description={
          meta?.description ??
          `${description.slice(0, 120)} Manufactured in Ahmedabad, Gujarat, India by Transpares Limited.`
        }
        keywords={
          meta?.keywords ?? [
            `${name} manufacturer Ahmedabad`,
            `${name} manufacturer Gujarat`,
            `${name} manufacturer India`,
            `${name} radiator`,
            ...seo.products.keywords,
          ]
        }
        path={meta?.path ?? config?.path ?? '/products'}
        productName={name}
        productImage={config?.image}
      />
      <PageHero
        title={name}
        description={description}
        breadcrumbs={[
          { label: 'Home', path: '/' },
          { label: 'Products', path: '/products' },
          { label: name },
        ]}
      />

      <section className="site-section bg-white">
        <div className="container-site">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0f7a4f] hover:gap-3"
          >
            <ArrowLeft size={16} />
            Back to All Products
          </Link>

          <div className="mt-8 max-w-3xl">
            {config?.image && (
              <div className="mb-8 overflow-hidden rounded-2xl border border-[#d8eee3] bg-[#e8f6ef]">
                <img
                  src={config.image}
                  alt={name}
                  className="h-52 w-full object-cover md:h-64"
                />
              </div>
            )}
            <SectionHeading eyebrow="Full Description" title={name} />
            <p className="mt-5 text-base leading-relaxed text-[#4d655a]">{description}</p>
          </div>

          {config && (
            <div className="mt-6 max-w-3xl text-sm leading-relaxed text-[#4d655a]">
              <p>
                Available in mild steel, stainless steel, and galvanized finishes, and manufactured to your
                required fin length, width, and coating specification. See our{' '}
                <Link to="/products" className="font-semibold text-[#0f7a4f]">
                  full materials and specifications
                </Link>{' '}
                for detailed parameters.
              </p>
            </div>
          )}

          {isTanks && (
            <div className="mt-6 max-w-3xl text-sm leading-relaxed text-[#4d655a]">
              <p>
                Leak-tested and finished with the same surface treatment options as our radiators — hot-dip
                galvanized, painted, or a duplex combination of both.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Materials reference for radiator configs */}
      {config && (
        <section className="site-section bg-[#e8f6ef]">
          <div className="container-site">
            <SectionHeading eyebrow="Materials & Finish" title="Available in Every Grade You Need" />
            <div className="mt-10 grid gap-6 md:grid-cols-3">
              {[products.materials.mildSteel, products.materials.stainlessSteel, products.materials.galvanizedSteel].map(
                (material) => (
                  <div key={material.name} className="rounded-2xl border border-[#d8eee3] bg-white p-6">
                    <h3 className="text-base font-bold text-[#123028]">{material.name}</h3>
                    {material.standards && (
                      <p className="mt-1 text-xs font-semibold uppercase tracking-[0.1em] text-[#0f7a4f]">
                        {material.standards}
                      </p>
                    )}
                    <ul className="mt-4 space-y-2">
                      {material.params.map((row) => (
                        <li key={row.parameter} className="flex justify-between gap-3 text-sm">
                          <span className="text-[#4d655a]">{row.parameter}</span>
                          <span className="text-right font-semibold text-[#123028]">{row.value}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ),
              )}
            </div>
          </div>
        </section>
      )}

      {/* Related application classes */}
      {config && (
        <section className="site-section bg-white">
          <div className="container-site">
            <SectionHeading eyebrow="Where It's Used" title={products.applicationClasses.heading} />
            <ul className="mt-8 grid gap-4 md:grid-cols-2">
              {products.applicationClasses.items.map((item) => (
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
      )}

      <section className="site-section bg-white pt-0">
        <div className="container-site">
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#0f7a4f] hover:gap-3"
          >
            View All Products
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      <CtaBand
        heading="Ready for a Technical Proposal?"
        body={`Share your drawing or specification for the ${name.toLowerCase()} you need — our engineering team will respond fast.`}
        primaryLabel="Request a Quote"
        primaryTo="/contact-us"
      />
    </>
  )
}
