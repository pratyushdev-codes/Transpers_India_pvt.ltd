import { useEffect } from 'react'
import { brand, contact, products, site } from '../../data/content'
import type { SeoFaq } from '../../data/content'

export interface SeoProps {
  title: string
  description: string
  keywords?: string[]
  path?: string
  faq?: SeoFaq[]
  image?: string
  productName?: string
  productImage?: string
}

const ORG_ID = `${site.url}/#organization`
const WEBSITE_ID = `${site.url}/#website`

function absUrl(path = '/') {
  const origin = site.url.replace(/\/$/, '')
  if (!path || path === '/') return `${origin}/`
  return path.startsWith('http') ? path : `${origin}${path.startsWith('/') ? path : `/${path}`}`
}

function absAsset(path: string) {
  if (path.startsWith('http')) return path
  const origin = site.url.replace(/\/$/, '')
  const normalized = path.startsWith('/') ? path : `/${path}`
  return `${origin}${normalized.replace(/ /g, '%20')}`
}

function upsertMeta(attr: 'name' | 'property' | 'http-equiv', key: string, content: string) {
  const selector = `meta[${attr}="${key}"]`
  let el = document.head.querySelector(selector) as HTMLMetaElement | null
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel: string, href: string, extra?: Record<string, string>) {
  const extraKey = extra ? Object.entries(extra)[0] : null
  const selector = extraKey
    ? `link[rel="${rel}"][${extraKey[0].toLowerCase()}="${extraKey[1]}"]`
    : `link[rel="${rel}"]`
  let el = document.head.querySelector(selector) as HTMLLinkElement | null
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
  if (extra) {
    for (const [k, v] of Object.entries(extra)) el.setAttribute(k.toLowerCase(), v)
  }
}

function upsertJsonLd(id: string, data: unknown) {
  let el = document.getElementById(id) as HTMLScriptElement | null
  if (!el) {
    el = document.createElement('script')
    el.id = id
    el.type = 'application/ld+json'
    document.head.appendChild(el)
  }
  el.text = JSON.stringify(data)
}

function pathCrumbs(path: string): { name: string; item: string }[] {
  const labels: Record<string, string> = {
    '/': 'Home',
    '/about-us': 'About Us',
    '/products': 'Products',
    '/products/flange-type': 'Flange Type',
    '/products/weldable-type': 'Weldable Type',
    '/products/hot-dip-galvanized': 'Hot-Dip Galvanized',
    '/products/offset-type': 'Offset Type',
    '/products/goose-neck-type': 'Goose Neck Type',
    '/applications': 'Applications',
    '/manufacturing': 'Manufacturing',
    '/quality-certifications': 'Credentials',
    '/sustainability': 'Sustainability',
    '/contact-us': 'Contact Us',
    '/clients': 'Clients',
  }

  const crumbs: { name: string; item: string }[] = [{ name: 'Home', item: absUrl('/') }]
  if (path && path !== '/') {
    const parts = path.split('/').filter(Boolean)
    let acc = ''
    for (const part of parts) {
      acc += `/${part}`
      crumbs.push({
        name: labels[acc] ?? part.replace(/-/g, ' '),
        item: absUrl(acc),
      })
    }
  }
  return crumbs
}

function organizationGraph() {
  return {
    '@type': ['Organization', 'LocalBusiness', 'Manufacturer'],
    '@id': ORG_ID,
    name: brand.name,
    legalName: brand.legalName,
    alternateName: ['Transpares', 'Transpares India', 'Transpaers India Pvt Ltd', 'Transpares Limited Ahmedabad'],
    url: absUrl('/'),
    logo: {
      '@type': 'ImageObject',
      url: absAsset('/Transpers Logo.jpeg'),
    },
    image: absAsset(site.ogImage),
    description:
      'Leading transformer radiator manufacturer in Ahmedabad, Gujarat, India. Pressed steel radiators for power and distribution transformers. ISO 9001, NTPC and PGCIL 765 kV approved.',
    slogan: brand.tagline,
    keywords:
      'best radiator manufacturers in Gujarat, best radiator manufacturers in Ahmedabad, best radiator manufacturers in India, transformer radiator manufacturer Ahmedabad, transformer radiator manufacturer Gujarat, transformer radiator manufacturer India',
    email: contact.details.email,
    telephone: contact.details.phone,
    foundingDate: '1995',
    foundingLocation: {
      '@type': 'Place',
      name: 'Ahmedabad, Gujarat, India',
    },
    address: {
      '@type': 'PostalAddress',
      streetAddress: '14-15 Ashwamegh Industrial Estate, Sarkhej-Bavla Hwy, Changodar',
      addressLocality: site.geo.locality,
      addressRegion: site.geo.regionName,
      postalCode: site.geo.postalCode,
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.geo.latitude,
      longitude: site.geo.longitude,
    },
    hasMap: `https://www.google.com/maps/search/?api=1&query=${site.geo.latitude},${site.geo.longitude}`,
    areaServed: [
      { '@type': 'City', name: 'Ahmedabad' },
      { '@type': 'State', name: 'Gujarat' },
      { '@type': 'Country', name: 'India' },
      'Worldwide',
    ],
    knowsAbout: [
      'Best radiator manufacturers in Gujarat',
      'Best radiator manufacturers in Ahmedabad',
      'Best radiator manufacturers in India',
      'Transformer radiators',
      'Pressed steel radiators',
      'Hot-dip galvanized radiators',
      'Flange type transformer radiators',
      'Weldable type transformer radiators',
      'Offset type transformer radiators',
      'Goose neck transformer radiators',
      'Radiator manufacturing in Ahmedabad',
      'Radiator manufacturing in Gujarat',
      'Radiator manufacturing in India',
    ],
    brand: { '@type': 'Brand', name: brand.name },
    numberOfEmployees: {
      '@type': 'QuantitativeValue',
      minValue: 220,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
    contactPoint: [
      {
        '@type': 'ContactPoint',
        telephone: contact.details.phone,
        email: contact.details.email,
        contactType: 'sales',
        areaServed: ['IN', 'Worldwide'],
        availableLanguage: ['English', 'Hindi', 'Gujarati'],
      },
    ],
    award: [
      'ISO 9001:2015 Quality Management System',
      'NTPC Approved Vendor',
      'PGCIL Approved including 765 kV',
      'Certified Three Star Export House',
    ],
    makesOffer: [
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Product', name: 'Flange Type Transformer Radiator' },
        areaServed: ['Ahmedabad', 'Gujarat', 'India'],
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Product', name: 'Weldable Type Transformer Radiator' },
        areaServed: ['Ahmedabad', 'Gujarat', 'India'],
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Product', name: 'Hot-Dip Galvanized Transformer Radiator' },
        areaServed: ['Ahmedabad', 'Gujarat', 'India'],
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Product', name: 'Offset Type Transformer Radiator' },
        areaServed: ['Ahmedabad', 'Gujarat', 'India'],
      },
      {
        '@type': 'Offer',
        itemOffered: { '@type': 'Product', name: 'Goose Neck Type Transformer Radiator' },
        areaServed: ['Ahmedabad', 'Gujarat', 'India'],
      },
    ],
    sameAs: site.sameAs,
  }
}

function applyHead({
  title,
  description,
  keywords,
  path,
  faq,
  image,
  productName,
  productImage,
}: SeoProps) {
  const url = absUrl(path ?? '/')
  const ogImage = absAsset(productImage || image || site.ogImage)
  const keywordList = (keywords ?? []).join(', ')

  document.title = title
  document.documentElement.lang = 'en-IN'

  upsertMeta('name', 'description', description)
  if (keywordList) upsertMeta('name', 'keywords', keywordList)
  upsertMeta('name', 'author', brand.name)
  upsertMeta('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1')
  upsertMeta('name', 'googlebot', 'index, follow')
  upsertMeta('name', 'bingbot', 'index, follow')
  upsertMeta('name', 'geo.region', site.geo.region)
  upsertMeta('name', 'geo.placename', site.geo.placename)
  upsertMeta('name', 'geo.position', site.geo.position)
  upsertMeta('name', 'ICBM', site.geo.icbm)
  upsertMeta('name', 'language', 'English')
  upsertMeta('name', 'revisit-after', '7 days')
  upsertMeta('name', 'rating', 'general')
  upsertMeta('name', 'distribution', 'global')
  upsertMeta('name', 'coverage', 'Worldwide')
  upsertMeta('name', 'target', 'all')
  upsertMeta('name', 'HandheldFriendly', 'True')
  upsertMeta('name', 'MobileOptimized', '320')
  upsertMeta('name', 'theme-color', '#0f7a4f')
  upsertMeta('name', 'application-name', brand.name)
  upsertMeta('name', 'apple-mobile-web-app-title', brand.shortName)
  upsertMeta('name', 'classification', 'Transformer Radiator Manufacturer')
  upsertMeta(
    'name',
    'category',
    'Manufacturing, Transformer Radiators, Industrial Cooling, Power Equipment',
  )
  upsertMeta(
    'name',
    'subject',
    'Best radiator manufacturers in Ahmedabad, Gujarat and India — Transpares Limited transformer radiators',
  )
  upsertMeta('name', 'copyright', brand.name)
  upsertMeta('name', 'designer', brand.name)
  upsertMeta('name', 'reply-to', contact.details.email)
  upsertMeta('name', 'owner', brand.name)
  upsertMeta('name', 'directory', 'submission')
  upsertMeta('name', 'pagename', title)
  upsertMeta('name', 'subtitle', brand.tagline)
  upsertMeta('name', 'identifier-url', url)
  upsertMeta('name', 'abstract', description)

  upsertLink('canonical', url)
  upsertLink('alternate', url, { hreflang: 'en-IN' })
  upsertLink('alternate', url, { hreflang: 'en' })
  upsertLink('alternate', url, { hreflang: 'x-default' })
  upsertLink('image_src', ogImage)

  upsertMeta('property', 'og:type', productName ? 'product' : 'website')
  upsertMeta('property', 'og:site_name', brand.name)
  upsertMeta('property', 'og:locale', site.locale)
  upsertMeta('property', 'og:locale:alternate', 'en_US')
  upsertMeta('property', 'og:title', title)
  upsertMeta('property', 'og:description', description)
  upsertMeta('property', 'og:url', url)
  upsertMeta('property', 'og:image', ogImage)
  upsertMeta('property', 'og:image:alt', `${brand.name} — transformer radiator manufacturer in Ahmedabad, Gujarat, India`)
  upsertMeta('property', 'og:image:type', 'image/jpeg')
  upsertMeta('property', 'business:contact_data:street_address', '14-15 Ashwamegh Industrial Estate, Sarkhej-Bavla Hwy, Changodar')
  upsertMeta('property', 'business:contact_data:locality', site.geo.locality)
  upsertMeta('property', 'business:contact_data:region', site.geo.regionName)
  upsertMeta('property', 'business:contact_data:postal_code', site.geo.postalCode)
  upsertMeta('property', 'business:contact_data:country_name', site.geo.country)
  upsertMeta('property', 'place:location:latitude', String(site.geo.latitude))
  upsertMeta('property', 'place:location:longitude', String(site.geo.longitude))

  upsertMeta('name', 'twitter:card', 'summary_large_image')
  upsertMeta('name', 'twitter:title', title)
  upsertMeta('name', 'twitter:description', description)
  upsertMeta('name', 'twitter:image', ogImage)
  upsertMeta('name', 'twitter:image:alt', `${brand.name} transformer radiators, Ahmedabad Gujarat`)

  const pagePath = path ?? '/'
  const webPageType =
    pagePath === '/contact-us'
      ? ['WebPage', 'ContactPage']
      : pagePath === '/about-us'
        ? ['WebPage', 'AboutPage']
        : pagePath === '/products'
          ? ['WebPage', 'CollectionPage']
          : 'WebPage'

  const crumbs = pathCrumbs(pagePath)
  const graph: Record<string, unknown>[] = [
    organizationGraph(),
    {
      '@type': 'WebSite',
      '@id': WEBSITE_ID,
      url: absUrl('/'),
      name: brand.name,
      alternateName: ['Transpares India', 'Transpares Limited Ahmedabad'],
      description:
        'Best radiator manufacturers in Ahmedabad, Gujarat and India — Transpares Limited pressed steel transformer radiators.',
      publisher: { '@id': ORG_ID },
      inLanguage: 'en-IN',
      about: [
        'Transformer radiator manufacturers in Gujarat',
        'Transformer radiator manufacturers in Ahmedabad',
        'Transformer radiator manufacturers in India',
      ],
    },
    {
      '@type': webPageType,
      '@id': `${url}#webpage`,
      url,
      name: title,
      description,
      isPartOf: { '@id': WEBSITE_ID },
      about: { '@id': ORG_ID },
      inLanguage: 'en-IN',
      primaryImageOfPage: ogImage,
      keywords: keywordList,
      breadcrumb: { '@id': `${url}#breadcrumb` },
      speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', 'title'],
      },
    },
    {
      '@type': 'BreadcrumbList',
      '@id': `${url}#breadcrumb`,
      itemListElement: crumbs.map((c, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: c.name,
        item: c.item,
      })),
    },
  ]

  if (faq && faq.length > 0) {
    graph.push({
      '@type': 'FAQPage',
      '@id': `${url}#faq`,
      mainEntity: faq.map((item) => ({
        '@type': 'Question',
        name: item.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: item.answer,
        },
      })),
    })
  }

  if (productName) {
    graph.push({
      '@type': 'Product',
      '@id': `${url}#product`,
      name: productName,
      description,
      image: ogImage,
      brand: { '@id': ORG_ID },
      manufacturer: { '@id': ORG_ID },
      category: 'Transformer Radiators',
      countryOfOrigin: {
        '@type': 'Country',
        name: 'India',
      },
      material: 'Mild steel, stainless steel, hot-dip galvanized steel',
      additionalProperty: [
        { '@type': 'PropertyValue', name: 'Manufacturing location', value: 'Changodar, Ahmedabad, Gujarat, India' },
        { '@type': 'PropertyValue', name: 'Annual capacity', value: '12,000 MT' },
      ],
    })
  }

  if (pagePath === '/products') {
    graph.push({
      '@type': 'ItemList',
      '@id': `${url}#product-list`,
      name: 'Transformer radiators manufactured in Ahmedabad, Gujarat, India',
      itemListElement: products.configurations.items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        url: absUrl(item.path),
      })),
    })
  }

  upsertJsonLd('seo-structured-data', {
    '@context': 'https://schema.org',
    '@graph': graph,
  })
}

export default function Seo(props: SeoProps) {
  if (typeof document !== 'undefined') {
    document.title = props.title
  }

  useEffect(() => {
    applyHead(props)
  }, [
    props.title,
    props.description,
    props.path,
    props.image,
    props.productName,
    props.productImage,
    props.keywords?.join('|'),
    props.faq?.map((f) => f.question).join('|'),
  ])

  return null
}
