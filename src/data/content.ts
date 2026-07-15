/**
 * Central content module for the Transpaers India Pvt Ltd website.
 * Every string of marketing/informational copy used across the site should
 * live here so pages/components stay presentational and copy stays
 * consistent and easy to update in one place.
 *
 * Copy source: Transpaers India Pvt Ltd — Complete Website Content
 * Master Document (section-wise copywriting brief). Figures that were
 * bracketed drafts in the master document (e.g. "[35]+") have been
 * resolved to Transpaers India's stated figures and the brackets removed.
 */

// ---------------------------------------------------------------------------
// Shared types
// ---------------------------------------------------------------------------

export interface NavChild {
  label: string;
  path: string;
}

export interface NavItem {
  label: string;
  path: string;
  children?: NavChild[];
}

export interface SeoMeta {
  title: string;
  description: string;
}

export interface Stat {
  label: string;
  value: string;
  detail?: string;
}

export interface IconCard {
  icon: string;
  title: string;
  description: string;
}

export interface ProductPreviewCard {
  icon: string;
  title: string;
  description: string;
  path: string;
  cta: string;
}

export interface ParamRow {
  parameter: string;
  value: string;
}

export interface MaterialSpec {
  name: string;
  standards?: string;
  params: ParamRow[];
}

export interface RadiatorConfiguration {
  name: string;
  slug: string;
  path: string;
  description: string;
}

export interface Certification {
  name: string;
  description: string;
}

export interface Milestone {
  period: string;
  title: string;
  description: string;
}

export interface EffortItem {
  icon: string;
  title: string;
  description: string;
  metric?: string;
}

export interface CtaBlock {
  heading?: string;
  body: string;
  primaryCta: string;
  secondaryCta?: string;
}

// ---------------------------------------------------------------------------
// Brand
// ---------------------------------------------------------------------------

export const brand = {
  name: "Transpaers",
  shortName: "Transpaers",
  legalName: "Transpaers India Pvt Ltd",
  tagline: "Engineered to Keep Power Flowing",
  motto: "We Can and We Will.",
  primaryCta: "Request a Quote",
  secondaryCtas: ["Explore Products", "Download Brochure", "Talk to Our Engineers"],
};

// ---------------------------------------------------------------------------
// Navigation
// ---------------------------------------------------------------------------

export const nav: NavItem[] = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about-us" },
  {
    label: "Products",
    path: "/products",
    children: [
      { label: "Standard Radiators", path: "/products/standard-radiators" },
      { label: "Airfoil Radiators", path: "/products/airfoil-radiators" },
      { label: "Gooseneck Radiators", path: "/products/gooseneck-radiators" },
      { label: "Transformer Tanks", path: "/products/transformer-tanks" },
    ],
  },
  { label: "Applications", path: "/applications" },
  { label: "Quality & Certifications", path: "/quality-certifications" },
  { label: "Manufacturing", path: "/manufacturing" },
  { label: "Sustainability", path: "/sustainability" },
  { label: "Contact Us", path: "/contact-us" },
];

// ---------------------------------------------------------------------------
// SEO
// ---------------------------------------------------------------------------

export const seo: Record<
  | "home"
  | "about"
  | "products"
  | "applications"
  | "quality"
  | "manufacturing"
  | "sustainability"
  | "contact",
  SeoMeta
> = {
  home: {
    title: "Transformer Radiator & Tank Manufacturer in India | Transpaers India Pvt Ltd",
    description:
      "Transpaers India Pvt Ltd manufactures transformer radiators and corrugated tanks for power and distribution transformers. ISO-certified quality, in-house HDG, exports to 55+ countries. Request a quote today.",
  },
  about: {
    title: "About Transpaers India Pvt Ltd | Transformer Radiator & Tank Manufacturer",
    description:
      "Learn about Transpaers India Pvt Ltd — our journey, facilities, leadership, vision, and the values that make us a trusted global partner for transformer cooling solutions.",
  },
  products: {
    title: "Transformer Radiators — Standard, Airfoil & Gooseneck | Transformer Tanks | Transpaers India",
    description:
      "Explore Transpaers India's full product range: mild steel, stainless steel, and galvanized transformer radiators in standard, airfoil, and gooseneck configurations, plus corrugated transformer tanks.",
  },
  applications: {
    title: "Application Cases | Transformer Radiators in Power, Rail, Renewables & Offshore | Transpaers India",
    description:
      "See where Transpaers India radiators perform — grid substations, power plants, railway traction, renewables, and harsh coastal and offshore environments across 55+ countries.",
  },
  quality: {
    title: "Quality & Certifications | ISO 9001, ISO 3834-2 Certified Radiator Manufacturer | Transpaers India",
    description:
      "Quality at Transpaers India: ISO 9001, ISO 14001, ISO 45001, and ISO 3834-2 certified systems, NACE and FROSIO qualified professionals, and stage-wise inspection on every product.",
  },
  manufacturing: {
    title: "Manufacturing Facilities | In-House HDG & Automated Coating | Transpaers India Pvt Ltd",
    description:
      "Tour Transpaers India's manufacturing strength: 20,000 m² across 5 plants, 24,000 MT annual radiator capacity, in-house hot-dip galvanizing, and PLC-controlled internal cleaning and coating.",
  },
  sustainability: {
    title: "Sustainability | Responsible Transformer Radiator Manufacturing | Transpaers India",
    description:
      "Transpaers India's sustainability commitments: ISO 14064-3 verified GHG accounting, energy efficiency, circular economy practices, waste reduction, and a rigorous environmental policy.",
  },
  contact: {
    title: "Contact Transpaers India Pvt Ltd | Request a Quote for Transformer Radiators & Tanks",
    description:
      "Get in touch with Transpaers India for enquiries, quotations, and technical support on transformer radiators and tanks. Fast responses from an engineering-led team.",
  },
};

// ---------------------------------------------------------------------------
// Home
// ---------------------------------------------------------------------------

export const home = {
  hero: {
    headline: "Precision-Engineered Transformer Radiators & Tanks. Delivered Worldwide.",
    subheadline:
      "For over 35 years, Transpaers India Pvt Ltd has helped transformer manufacturers keep the world's power flowing — with radiators and tanks built for cooling performance, long service life, and dependable on-time delivery.",
    primaryCta: "Request a Quote",
    secondaryCta: "Explore Our Products",
  },
  welcome: {
    heading: "Keeping the World's Transformers Cool",
    paragraphs: [
      "Transpaers India Pvt Ltd is a professional manufacturer of radiators and tanks for power and distribution transformers. From a modern, fully equipped production base, we combine internationally advanced manufacturing technology with a rigorous quality system to build products that perform reliably for decades — in national grids, power plants, industrial facilities, renewable energy projects, and some of the harshest operating environments on earth.",
      "Every product we ship reflects one simple belief: a transformer is only as reliable as its cooling. That is why leading OEMs and utilities across 55+ countries trust Transpaers as their long-term manufacturing partner.",
    ],
    linkLabel: "More About Us",
  },
  stats: [
    { value: "35+", label: "Years Since Inception" },
    { value: "55+", label: "Countries We Export To" },
    { value: "400+", label: "Clients Served" },
    { value: "20,000 m²", label: "Production Area" },
  ] as Stat[],
  advantages: {
    intro:
      "Four commitments sit at the heart of everything we manufacture — experience, technology, quality, and service. Here is what they look like in practice.",
    cards: [
      {
        icon: "Factory",
        title: "Professional Manufacturer",
        description:
          "Decades of experience dedicated exclusively to transformer radiators and tanks, backed by a modern production base purpose-built for the demands of the transformer industry.",
      },
      {
        icon: "Cpu",
        title: "Advanced Technology",
        description:
          "Internationally advanced production equipment and proven mastery of core heat-dissipation technology — including a PLC-controlled, fully automated internal cleaning and coating process.",
      },
      {
        icon: "ShieldCheck",
        title: "Assured Quality",
        description:
          "A rigorous, end-to-end quality control system certified by multiple international bodies — ISO 9001, ISO 14001, ISO 45001, and ISO 3834-2 — supported by manual verification for absolute accuracy.",
      },
      {
        icon: "Layers",
        title: "One-Stop Service",
        description:
          "A single accountable partner from design and new product development through manufacturing, logistics, and after-sales support.",
      },
      {
        icon: "Container",
        title: "In-House Hot-Dip Galvanizing",
        description:
          "A state-of-the-art HDG facility with a 5 m × 2.5 m × 2.5 m zinc bath gives us complete control over corrosion protection, quality, and lead time.",
      },
      {
        icon: "BadgeCheck",
        title: "Certified Specialists",
        description:
          "NACE-certified engineers, FROSIO-qualified coating professionals, and 100+ inspectors trained under the IWE (International Welding Engineer) programme.",
      },
      {
        icon: "Zap",
        title: "Built for Urgency",
        description:
          "Flexible operations and optimized systems engineered to meet urgent customer requirements with minimal lead time — without ever compromising on quality.",
      },
      {
        icon: "GraduationCap",
        title: "Engineering-Led Team",
        description:
          "A mechanical engineering degree is the minimum qualification for our business development and operations roles. Our young, dynamic team brings international exposure and a relentless focus on innovation.",
      },
    ] as IconCard[],
  },
  productsPreview: {
    heading: "Our Products",
    subheading: "We professionally manufacture every major type of transformer radiator — quality guaranteed.",
    cards: [
      {
        icon: "PanelsTopLeft",
        title: "Standard Radiators",
        description:
          "The industry workhorse: units of the same specification or size connected in parallel, delivering dependable cooling for power and distribution transformers.",
        path: "/products/standard-radiators",
        cta: "View Details",
      },
      {
        icon: "Wind",
        title: "Airfoil Radiators",
        description:
          "A combined configuration built from two common radiator types, engineered for enhanced heat dissipation where space and airflow demand it.",
        path: "/products/airfoil-radiators",
        cta: "View Details",
      },
      {
        icon: "GitCommitVertical",
        title: "Gooseneck Radiators",
        description:
          "Units of two different specifications or sizes connected in parallel — the ideal solution where mounting geometry or clearances require a stepped profile.",
        path: "/products/gooseneck-radiators",
        cta: "View Details",
      },
      {
        icon: "Container",
        title: "Transformer Tanks",
        description:
          "Corrugated flat-wall tanks for distribution transformers, fabricated and tested to exacting dimensional and leak-tightness standards.",
        path: "/products/transformer-tanks",
        cta: "View Details",
      },
    ] as ProductPreviewCard[],
  },
  applicationsPreview: {
    heading: "Trusted Across Industries and Continents",
    body: "From national grid substations and nuclear power plants to railway traction, offshore wind, and solar parks — Transpaers radiators perform wherever transformers work hardest, including coastal and offshore environments that punish lesser products.",
    sectors: [
      "Power Utilities",
      "EHV/UHV Substations",
      "Nuclear & Thermal Power",
      "Hydropower",
      "Railways & Metro",
      "Renewables",
      "Oil & Gas / Offshore",
      "Mining & Heavy Industry",
    ],
    cta: "See Application Cases",
  },
  certifications: {
    strip: "ISO 9001 · ISO 14001 · ISO 45001 · ISO 3834-2 · ISO 14064-3:2019 · Certified Three Star Export House",
  },
  sustainability: {
    heading: "Manufacturing Responsibly",
    body: "Sustainability is built into how we operate — from ISO 14064-3-verified greenhouse gas accounting and daily energy-saving targets to circular economy practices and continuous waste reduction across our plants.",
    cta: "Our Sustainability Efforts",
  },
  closingCta: {
    heading: "Have a Drawing Ready?",
    body: "Send us your specifications and our engineering team will respond with a detailed technical and commercial proposal — fast.",
    primaryCta: "Request a Quote",
  } as CtaBlock,
};

// ---------------------------------------------------------------------------
// About
// ---------------------------------------------------------------------------

export const about = {
  whoWeAre: {
    heading: "Who We Are",
    paragraphs: [
      "Founded over 35 years ago, Transpaers India Pvt Ltd has grown from a modest 1,800 m² workshop into one of the industry's most trusted manufacturers of transformer radiators and corrugated tanks — today operating 20,000 m² of state-of-the-art facilities across 5 plants.",
      "That growth has been deliberate. Year after year, we have reinvested in advanced machinery, automation, and technology: a PLC-controlled internal cleaning and coating line that guarantees contamination-free internals, and an in-house hot-dip galvanizing facility that gives us full command over corrosion protection and delivery schedules. The result for our customers is simple — shorter lead times, tighter quality control, and greater operational flexibility.",
      "Today, Transpaers serves 400+ clients through 200+ business partners across 55+ countries, supported by 250+ professionals, 1,200+ skilled workers, and 100+ trained inspectors.",
    ],
  },
  glance: {
    heading: "Transpaers at a Glance",
    items: [
      { label: "Export Status", value: "Certified Three Star Export House" },
      { label: "Certifications", value: "ISO 9001 · ISO 14001 · ISO 45001 · ISO 3834-2" },
      { label: "Annual Operational Capability", value: "24,000 MT of radiators and 7,200 MT of tanks" },
      { label: "Manufacturing Area", value: "20,000 m² across 5 plants" },
      { label: "Design Capability", value: "Dedicated New Product Development (NPD) team" },
      {
        label: "Certified Specialists",
        value: "NACE-certified engineers · FROSIO-qualified professionals · IWE-trained inspectors",
      },
      { label: "Connectivity", value: "X hrs by road from International Airport · X hrs from Major Sea Port" },
    ] as Stat[],
  },
  visionMissionMotto: {
    vision: {
      heading: "Our Vision",
      body: "To be a world-class company and, in turn, the leading radiator manufacturer for the global transformer industry.",
    },
    mission: {
      heading: "Our Mission",
      body: "To deliver dependable, high-performance cooling solutions to transformer manufacturers worldwide through engineering excellence, advanced manufacturing, uncompromising quality, and partnerships built to last.",
    },
    motto: {
      heading: "Our Motto",
      body: "We Can and We Will.",
    },
  },
  leadership: {
    heading: "Leadership",
    founder: {
      title: "Founder & Chairman",
      bio: "Transpaers India Pvt Ltd was founded by our Founder & Chairman, whose vision transformed a small fabrication unit into a globally recognized manufacturer of galvanized fin-type radiators and corrugated flat-wall tanks. With over three decades of industry experience, our Founder & Chairman brought the technical depth and long-term thinking that shaped the company from its earliest days. As Chairman, our Founder & Chairman continues to oversee the company's strategic direction while championing the culture of innovation, quality, and customer commitment that defines Transpaers to this day. Under this leadership, the company's story has become one of steady, values-driven growth — and of long-term trust earned from transformer manufacturers around the world.",
    },
  },
  milestones: [
    {
      period: "Foundation",
      title: "Company Founded",
      description: "Company founded in a 1,800 m² facility.",
    },
    {
      period: "Early Growth",
      title: "First Export Shipment",
      description: "First export shipment.",
    },
    {
      period: "Capability Investment",
      title: "In-House HDG Facility Commissioned",
      description: "In-house HDG facility commissioned.",
    },
    {
      period: "Process Automation",
      title: "Automated Coating Line Installed",
      description: "PLC-controlled internal cleaning & coating line installed.",
    },
    {
      period: "Global Milestone",
      title: "55+ Countries, 400+ Clients",
      description: "Crossed 55+ export countries / 400+ clients.",
    },
    {
      period: "Continued Growth",
      title: "Latest Expansion",
      description: "Latest expansion or certification.",
    },
  ] as Milestone[],
};

// ---------------------------------------------------------------------------
// Products
// ---------------------------------------------------------------------------

export const products = {
  overview: {
    heading: "Overview",
    paragraphs: [
      "We professionally manufacture the complete range of transformer radiators — from compact units for oil-immersed distribution transformers to large plate radiators for 550 kV-class power transformers — along with corrugated tanks. Every product is engineered for maximum heat dissipation, long service life, and full compliance with international standards, and every product is backed by our quality guarantee.",
    ],
  },
  configurations: {
    heading: "Radiator Configurations",
    items: [
      {
        name: "Standard (Typical) Radiators",
        slug: "standard-radiators",
        path: "/products/standard-radiators",
        description:
          "Composed of units of the same specification or size connected in parallel, the standard configuration is the proven workhorse of transformer cooling — simple to install, easy to maintain, and dependable across power and distribution applications.",
      },
      {
        name: "Airfoil Radiators",
        slug: "airfoil-radiators",
        path: "/products/airfoil-radiators",
        description:
          "A combined configuration built from two common radiator types. The airfoil design maximizes effective cooling surface and airflow, making it the preferred choice where enhanced heat dissipation must be achieved within a constrained footprint.",
      },
      {
        name: "Gooseneck Radiators",
        slug: "gooseneck-radiators",
        path: "/products/gooseneck-radiators",
        description:
          "Composed of units of two different specifications or sizes connected in parallel, the gooseneck configuration provides a stepped profile — ideal where mounting geometry, bushing clearances, or tank design call for a non-standard arrangement without sacrificing cooling performance.",
      },
    ] as RadiatorConfiguration[],
  },
  materials: {
    heading: "Radiators by Material & Finish",
    mildSteel: {
      name: "Mild Steel Radiators",
      standards: "IS 513 CR · ISO 12944-5",
      params: [
        { parameter: "Length", value: "900 mm – 4,500 mm" },
        { parameter: "Width", value: "520 mm" },
        { parameter: "Fin thickness", value: "1.0 mm & 1.2 mm" },
        { parameter: "Material", value: "IS 513 CR" },
        { parameter: "Painting standard", value: "ISO 12944-5" },
        { parameter: "Coating options", value: "Hot-Dip Galvanized (HDG) · Painted · HDG + Painted" },
      ],
    } as MaterialSpec,
    stainlessSteel: {
      name: "Stainless Steel Radiators",
      standards: "SS-304 & SS-316 · ISO 12944-5",
      params: [
        { parameter: "Length", value: "900 mm – 4,500 mm" },
        { parameter: "Width", value: "520 mm" },
        { parameter: "Fin thickness", value: "1.0 mm & 1.2 mm" },
        { parameter: "Material", value: "SS-304 & SS-316" },
        { parameter: "Painting standard", value: "ISO 12944-5" },
        { parameter: "Coating options", value: "Painted" },
      ],
    } as MaterialSpec,
    galvanizedSteel: {
      name: "Galvanized Radiators",
      standards: "IS 513 CR",
      params: [
        { parameter: "Length", value: "900 mm – 4,500 mm" },
        { parameter: "Width", value: "520 mm" },
        { parameter: "Fin thickness", value: "1.0 mm & 1.2 mm" },
        { parameter: "Material", value: "IS 513 CR" },
        { parameter: "Zinc coating thickness", value: "55 – 70 microns" },
      ],
    } as MaterialSpec,
  },
  applicationClasses: {
    heading: "Product Range by Application Class",
    items: [
      "Plate radiators for power transformers up to 550 kV class, including 110 kV and 220 kV systems",
      "Radiators for oil-immersed and oil-filled distribution transformers — our highest-volume product line",
      "Flanged and flange-less plate radiators for distribution transformers",
      "Radiators for special-duty transformers: railway traction, rectifier, and electric-furnace applications",
      "Custom-engineered radiators developed to customer drawings or performance requirements",
    ],
  },
  surfaceTreatment: {
    heading: "Surface Treatment & Corrosion Protection",
    paragraphs: [
      "Corrosion protection is where radiators live or die — so we brought it entirely in-house.",
      "Our hot-dip galvanizing facility, with a zinc bath of 5 m × 2.5 m × 2.5 m, delivers uniform, deeply bonded zinc coverage on every fin and header. For painted finishes, our coating systems conform to ISO 12944-5 and can be specified for aggressive service conditions, including coastal and offshore environments. Where maximum protection is required, we offer a duplex system: hot-dip galvanizing followed by painting.",
      "Internally, our PLC-controlled automated cleaning and coating process ensures every radiator ships with contamination-free internal surfaces — protecting transformer oil quality from day one.",
    ],
  },
  tanks: {
    heading: "Transformer Tanks",
    body: "Alongside radiators, Transpaers manufactures corrugated flat-wall tanks for distribution transformers, with an annual capability of 7,200 MT. Tanks are fabricated under our ISO 3834-2-certified welding quality system, leak-tested, and finished with the same surface treatment options as our radiators — giving transformer builders a matched, single-source cooling and enclosure package.",
    path: "/products/transformer-tanks",
  },
  npd: {
    heading: "Custom Development & NPD",
    body: "Our dedicated New Product Development team works directly with customer engineering departments — from first drawings and thermal requirements through prototyping, validation, and serial production. If your transformer design demands something the catalogue doesn't cover, we will build it with you.",
  },
  cta: {
    body: "Share your drawing — get a technical proposal.",
    primaryCta: "Request a Quote",
  } as CtaBlock,
};

// ---------------------------------------------------------------------------
// Applications
// ---------------------------------------------------------------------------

export const applications = {
  overview: {
    heading: "Overview",
    paragraphs: [
      "Our products have been successfully applied across the full spectrum of transformer duty — in national grid infrastructure, generation, transport, heavy industry, and renewable energy. They are engineered to perform not just in controlled substation yards, but in the environments that punish equipment hardest: coastal installations, offshore platforms, deserts, and mines.",
    ],
  },
  sectors: {
    heading: "Sectors We Serve",
    items: [
      "Power transformers — grid and utility-scale transmission",
      "Distribution transformers — urban and rural network electrification",
      "Special transformers — engineered-to-order duty",
      "Ultra-high voltage (UHV) and extra-high voltage (EHV) substations",
      "Nuclear power plants and conventional thermal & hydro power plants",
      "Railway traction transformers — mainline rail and metro systems",
      "Rectifier and electric-furnace transformers — steel, smelting, and process industries",
      "Renewable energy — onshore/offshore wind and solar PV projects",
      "Coastal and offshore environments — including offshore oil drilling platforms",
      "Mining and heavy industrial projects",
    ],
  },
  domesticHighlights: {
    heading: "Domestic Application Highlights",
    items: [
      "220 kV power transformer radiators — Utility name substation, State",
      "500 kV power transformer — National grid operator substation, Location",
      "Main transformer radiators — Offshore/onshore wind project name",
      "Combined transformer for hydropower project name",
      "Traction/gas-insulated transformer radiators — Metro or railway project, City",
    ],
  },
  internationalHighlights: {
    heading: "International Application Highlights",
    items: [
      "National grid strengthening project — Country",
      "Transformer radiators for MW offshore wind platform — Project name",
      "Solar PV generation project — Project name, Country/Region",
      "Supporting equipment for new-energy projects — Region",
      "Combined transformer for export — Country",
      "Transformer for mining project — Country",
    ],
  },
  closing: {
    body: "With independent export capability and a delivery track record spanning 55+ countries, Transpaers continuously supports customers in improving transformer energy efficiency and reliability. Our references reach major projects across most regions of the world — and our reputation travels with every shipment.",
  },
  cta: {
    body: "Planning a project in a demanding environment?",
    primaryCta: "Talk to Our Engineers",
  } as CtaBlock,
};

// ---------------------------------------------------------------------------
// Quality & Certifications
// ---------------------------------------------------------------------------

export const quality = {
  philosophy: {
    heading: "Our Quality Philosophy",
    paragraphs: [
      "At Transpaers, quality is not a department — it is the way we manufacture. Every radiator and tank passes through a rigorous, stage-wise quality control system in which automated processes are deliberately supported by manual verification, because accuracy is never left to chance. From incoming raw material to final dispatch, nothing ships until it has earned the right to carry our name.",
    ],
  },
  certifications: {
    heading: "Certifications",
    items: [
      { name: "ISO 9001", description: "Quality Management System" },
      { name: "ISO 14001", description: "Environmental Management System" },
      { name: "ISO 45001", description: "Occupational Health & Safety Management" },
      { name: "ISO 3834-2", description: "Comprehensive quality requirements for fusion welding" },
      { name: "ISO 14064-3:2019", description: "Verification of greenhouse gas assertions" },
      { name: "Certified Three Star Export House", description: "Government of India recognition for export excellence" },
    ] as Certification[],
  },
  people: {
    heading: "Certified People, Not Just Certified Paper",
    intro: "Standards only matter when people live them. Our payroll includes:",
    items: [
      "NACE-certified engineers for corrosion control and coating integrity",
      "FROSIO-qualified professionals for surface treatment and painting inspection",
      "100+ inspectors trained under the IWE (International Welding Engineer) programme",
      "Mechanical engineering graduates as the minimum qualification for business development and operations roles",
    ],
  },
  testing: {
    heading: "Testing & Inspection Regime",
    items: [
      "Incoming raw material verification against mill test certificates",
      "Welder qualification and welding procedure control under ISO 3834-2",
      "In-process dimensional and visual inspection at every stage",
      "Leak and pressure testing of every radiator and tank",
      "Coating verification: zinc coating and dry film thickness (DFT) measurement",
      "Final inspection and documentation; third-party inspection welcomed",
    ],
  },
  cta: {
    body: "Request our quality dossier with your next enquiry.",
    primaryCta: "Contact Us",
  } as CtaBlock,
};

// ---------------------------------------------------------------------------
// Manufacturing
// ---------------------------------------------------------------------------

export const manufacturing = {
  scale: {
    heading: "Built for Scale, Tuned for Speed",
    body: "Transpaers operates 20,000 m² of manufacturing area across 5 plants, engineered as one integrated flow — from sheet forming and fin welding to surface treatment, testing, and packing. Our operations and systems are optimized for one outcome: exceptional quality at minimal lead time, with the flexibility to absorb urgent customer requirements.",
    capability: "Annual operational capability: 24,000 MT of radiators · 7,200 MT of tanks",
  },
  hdg: {
    heading: "In-House Hot-Dip Galvanizing",
    body: "Our state-of-the-art HDG facility — with a zinc bath measuring 5 m × 2.5 m × 2.5 m — means corrosion protection never leaves our control. No third-party queues, no handling damage in transit, no compromise on coating quality or schedule.",
  },
  automation: {
    heading: "Automation Where It Counts",
    body: "A PLC-controlled, fully automated internal cleaning and coating process guarantees clean, protected internal surfaces on every radiator — a decisive factor in transformer oil integrity and long-term reliability.",
  },
  people: {
    heading: "Our People",
    items: [
      "250+ professionals across 5 plants",
      "1,200+ skilled workers on the shop floor",
      "100+ inspectors trained under the IWE programme",
      "A young, dynamic team with international exposure and an engineering-first culture",
    ],
  },
  logistics: {
    heading: "Logistics Advantage",
    items: [
      "International Airport — approx. X hrs by road",
      "Major sea port — approx. X hrs by road",
      "Export-ready packing and documentation for 55+ destination countries",
    ],
  },
};

// ---------------------------------------------------------------------------
// Sustainability
// ---------------------------------------------------------------------------

export const sustainability = {
  commitment: {
    heading: "Our Commitment",
    body: "Reliable power should not come at the planet's expense. At Transpaers, sustainability is not a report we publish once a year — it is a set of measurable targets we work toward every single day, on every shift, in every plant.",
  },
  environmentalPolicy: {
    heading: "Environmental Policy",
    body: "Transpaers India is dedicated to preserving the environment by minimizing the impact of its operations on surrounding ecosystems. We invest in advanced processes and equipment that keep our activities aligned with — and ahead of — statutory environmental norms. Every employee is trained to understand the environmental implications of their role, building a culture of sustainable practice from the shop floor up. All discharges conform to statutory norms; emergency preparedness plans are reviewed and tested regularly; and every new product and process is assessed for environmental compliance before adoption.",
  },
  efforts: {
    heading: "Our Efforts",
    items: [
      {
        icon: "Leaf",
        title: "Carbon Footprint Reduction",
        description:
          "Certified to ISO 14064-3:2019, we maintain verified greenhouse gas accounting and a demonstrated commitment to reducing emissions across operations.",
      },
      {
        icon: "FileText",
        title: "Sustainability Reporting",
        description:
          "Our sustainability report transparently documents strategy, outcomes, and the roadmap for embedding sustainability deeper into future operations.",
      },
      {
        icon: "Zap",
        title: "Energy Efficiency",
        description:
          "Structured initiatives target daily savings of 50 units of electricity — cutting energy costs while maintaining full productivity.",
        metric: "50 units/day",
      },
      {
        icon: "Globe2",
        title: "Global Standards",
        description:
          "We develop and adhere to international GHG accounting and reporting standards, ensuring transparency and accountability in everything we measure.",
      },
      {
        icon: "Recycle",
        title: "Circular Economy",
        description:
          "Circular economy principles are embedded in our business strategy — protecting the natural environment and reducing resource wastage at every stage.",
      },
      {
        icon: "Trash2",
        title: "Waste Reduction",
        description:
          "Focused waste-minimization programmes, including a target to reduce hot-dip galvanizing sludge by 10% daily.",
        metric: "10%",
      },
    ] as EffortItem[],
  },
  certifications: {
    heading: "Environmental Certifications",
    items: ["ISO 14001", "ISO 14064-3:2019"],
  },
};

// ---------------------------------------------------------------------------
// Contact
// ---------------------------------------------------------------------------

export const contact = {
  intro: {
    body: "Whether you need a budgetary offer, a detailed technical discussion, or an urgent delivery, our engineering-led team responds quickly and speaks your language — specifications, standards, and schedules.",
  },
  details: {
    registeredOffice: "Full address, City, State, PIN, India",
    phone: "+91-XXXXXXXXXX",
    emails: [
      { label: "Sales", value: "sales@transpaersindia.com" },
      { label: "General Enquiries", value: "info@transpaersindia.com" },
    ],
    businessHours: "Mon–Sat, 9:00 AM – 6:00 PM IST",
    connectivity: "X hrs from International Airport · X hrs from Sea Port",
  },
  formFields: {
    fields: ["Name", "Company", "Country", "Email", "Phone", "Product of Interest", "Message", "Attach Drawing"],
    productOptions: [
      "Standard Radiator",
      "Airfoil Radiator",
      "Gooseneck Radiator",
      "Transformer Tank",
      "Custom",
    ],
  },
  rfqChecklist: {
    heading: "Help Us Quote Faster — RFQ Checklist",
    intro: "To receive the fastest, most accurate quotation, please include:",
    items: [
      "Radiator type and configuration (standard / airfoil / gooseneck)",
      "Fin length, width, thickness, and number of fins/sections",
      "Material grade and surface treatment required (HDG / painted / HDG + painted)",
      "Applicable standards and inspection requirements",
      "Quantity and delivery schedule",
      "Destination port or delivery location",
    ],
  },
};
