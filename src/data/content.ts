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
  image: string;
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
  image: string;
}

export interface Certification {
  name: string;
  description: string;
}

export interface Milestone {
  period: string;
  title: string;
  description?: string;
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
  name: "Transpares Limited",
  shortName: "Transpares",
  legalName: "Transpares Limited",
  tagline: "Power systems cooling — engineered to perform",
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
      { label: "Flange Type", path: "/products/flange-type" },
      { label: "Weldable Type", path: "/products/weldable-type" },
      { label: "Hot-Dip Galvanized", path: "/products/hot-dip-galvanized" },
      { label: "Offset Type", path: "/products/offset-type" },
      { label: "Goose Neck Type", path: "/products/goose-neck-type" },
    ],
  },
  { label: "Applications", path: "/applications" },
  { label: "Manufacturing", path: "/manufacturing" },
  { label: "Credentials", path: "/quality-certifications" },
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
  | "contact"
  | "clients",
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
    title: "Transformer Radiators — Flange, Weldable, Hot-Dip Galvanized & Offset | Transpaers India",
    description:
      "Explore Transpaers India's product range: flange type, weldable type, hot-dip galvanized, and offset type transformer radiators — engineered for secure installation, durability, and reliable performance.",
  },
  applications: {
    title: "Application Cases | Transformer Radiators in Power, Rail, Renewables & Offshore | Transpaers India",
    description:
      "See where Transpaers India radiators perform — grid substations, power plants, railway traction, renewables, and harsh coastal and offshore environments across 55+ countries.",
  },
  quality: {
    title: "Quality & Certifications | ISO 9001, ISO 14001, NTPC & PGCIL Approved | Transpares Limited",
    description:
      "Quality at Transpares Limited: ISO 9001, ISO 14001 certified systems, NTPC and PGCIL approved — including PGCIL 765 kV — with stage-wise inspection on every product.",
  },
  manufacturing: {
    title: "Manufacturing Facilities | In-House HDG & Automated Coating | Transpares Limited",
    description:
      "Tour Transpares Limited's manufacturing strength: 20,000 m² of production area, 12,000 MT annual radiator capacity, and moisture content (PPM) and particle count meters on the internal cleaning and coating process.",
  },
  sustainability: {
    title: "Sustainability | Responsible Transformer Radiator Manufacturing | Transpaers India",
    description:
      "Transpaers India's sustainability commitments: ISO 14064-3 verified GHG accounting, energy efficiency, circular economy practices, waste reduction, and a rigorous environmental policy.",
  },
  contact: {
    title: "Contact Transpares Limited | Transformer Radiators & Tanks",
    description:
      "Get in touch with Transpares Limited for quotations and technical support on transformer radiators and tanks. Fast responses from an engineering-led team.",
  },
  clients: {
    title: "Our Clients | Transformer OEM Partners | Transpares Limited",
    description:
      "Transpares Limited supplies pressed steel transformer radiators to OEMs and utilities across India and export markets, with NTPC and PGCIL approvals including 765 kV.",
  },
};

// ---------------------------------------------------------------------------
// Home
// ---------------------------------------------------------------------------

export const home = {
  hero: {
    headline: "Precision-Engineered Transformer Radiators & Tanks. Delivered Worldwide.",
    subheadline:
      "For over 30 years, Transpares Limited has helped transformer manufacturers keep the world's power flowing — with radiators and tanks built for cooling performance, long service life, and dependable on-time delivery.",
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
    { value: "30+", label: "Years Since Inception" },
    { value: "55+", label: "Countries We Export To" },
    { value: "400+", label: "Clients Served" },
    { value: "20,000 m²", label: "Production Area" },
  ] as Stat[],
  marqueeChips: [
    "30+ Years Since Inception",
    "55+ Countries We Export To",
    "400+ Clients Served",
    "20,000 m² Production Area",
    "Fin widths: 300 / 380 / 520 mm",
    "Pitch sizes: 40 / 45 / 50 / 55 / 60 mm",
    "Centre lengths up to 4000 mm",
    "ISO 9001:2015 Certified",
    "ISO 14001 Certified",
    "NTPC & PGCIL Approved",
    "PGCIL 765 kV",
    "Capacity: 12,000 MT / Year",
    "Flood Coating Process",
    "100% Leak Tested",
    "Custom Dimensions & Finishes",
    "Proven at scale",
    "International packing for exports",
    "Serial-number traceability",
  ],
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
          "Internationally advanced production equipment and proven mastery of core heat-dissipation technology — including moisture content (PPM) and particle count meters on the internal cleaning and coating process.",
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
          "A state-of-the-art in-house HDG facility gives us complete control over corrosion protection, quality, and lead time.",
      },
      {
        icon: "BadgeCheck",
        title: "Certified Specialists",
        description:
          "NACE-certified engineers and a dedicated inspection team supporting coating integrity and welding quality on every product.",
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
        title: "Flange Type Transformer",
        description:
          "Designed with flange-mounted fittings for secure and easy installation. It provides excellent mechanical stability and simplifies maintenance or replacement in power distribution systems.",
        path: "/products/flange-type",
        cta: "View Details",
        image: "/hot-dip-galvanized.jpeg",
      },
      {
        icon: "Zap",
        title: "Weldable Type Transformer",
        description:
          "Features a weldable mounting structure that allows permanent and robust installation. It is ideal for applications requiring high structural strength and long-term reliability.",
        path: "/products/weldable-type",
        cta: "View Details",
        image: "/weldable-type-radiators.jpeg",
      },
      {
        icon: "ShieldCheck",
        title: "Hot-Dip Galvanized Transformer",
        description:
          "Manufactured with hot-dip galvanized components to provide superior corrosion resistance. This protective coating enhances durability, making it suitable for harsh outdoor and industrial environments.",
        path: "/products/hot-dip-galvanized",
        cta: "View Details",
        image: "/hot-dip-galvanized-radiators.png",
      },
      {
        icon: "GitCommitVertical",
        title: "Offset Type Transformer",
        description:
          "Designed with an offset mounting configuration to accommodate specific installation requirements where space or alignment is constrained. It offers greater flexibility while maintaining reliable electrical performance.",
        path: "/products/offset-type",
        cta: "View Details",
        image: "/offset-type-radiators.jpeg",
      },
      {
        icon: "Wind",
        title: "Goose Neck Type Transformer",
        description:
          "Swan neck / goose neck / sky type radiators use offset, elbowed headers so tank connections stay accessible where a straight header cannot. The curved neck simplifies installation without compromising cooling performance.",
        path: "/products/goose-neck-type",
        cta: "View Details",
        image: "/hot-dip-galvanized-radiators.png",
      },
    ] as ProductPreviewCard[],
  },
  applicationsPreview: {
    heading: "Trusted Across Industries and Continents",
    body: "From national grid substations and nuclear power plants to railway traction, offshore wind, and solar parks — Transpares radiators perform wherever transformers work hardest, including coastal and offshore environments.",
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
    strip: "ISO 9001 · ISO 14001 · NTPC Approved · PGCIL Approved · PGCIL 765 kV",
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
      "Founded over 30 years ago, Transpares Limited has grown from a modest 1,800 m² workshop into one of the industry's most trusted manufacturers of transformer radiators and corrugated tanks — today operating 20,000 m² of state-of-the-art facilities.",
      "That growth has been deliberate. Year after year, we have reinvested in advanced machinery, automation, and technology: a PLC-controlled internal cleaning and coating line that guarantees contamination-free internals, and an hot-dip galvanizing facility that gives us full command over corrosion protection and delivery schedules. The result for our customers is simple — shorter lead times, tighter quality control, and greater operational flexibility.",
    ],
  },
  glance: {
    heading: "Transpaers at a Glance",
    items: [
      { label: "Export Status", value: "Certified Three Star Export House" },
      { label: "Certifications", value: "ISO 9001 · ISO 14001 · NTPC · PGCIL" },
      { label: "Annual Operational Capability", value: "12,000 MT of radiators" },
      { label: "Manufacturing Area", value: "20,000 m²" },
      { label: "Design Capability", value: "Dedicated New Product Development (NPD) team" },
      {
        label: "Certified Specialists",
        value: "NACE-certified engineers",
      },
      { label: "Connectivity", value: "Kandla Port — 250 km" },
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
      title: "Managing Director",
      name: "Hitendra Doshi",
      bio: "Transpares Limited is led by Hitendra Doshi, whose vision transformed a small fabrication unit into a globally recognized manufacturer of galvanized fin-type radiators and corrugated flat-wall tanks. With over three decades of industry experience, he brought the technical depth and long-term thinking that shaped the company from its earliest days. As Managing Director, Hitendra Doshi continues to oversee the company's strategic direction while championing the culture of innovation, quality, and customer commitment that defines Transpares to this day. Under this leadership, the company's story has become one of steady, values-driven growth — and of long-term trust earned from transformer manufacturers around the world.",
    },
  },
  milestones: [
    { period: "1995", title: "Incorporation" },
    { period: "2003", title: "NTPC Approvals" },
    { period: "2006", title: "PGCIL (220 kV) Approvals" },
    { period: "2008", title: "RDSO Approvals" },
    { period: "2015", title: "HDG Radiators" },
    { period: "2024", title: "Automation Line" },
    { period: "2025", title: "PGCIL (765 kV) Approvals" },
  ] as Milestone[],
};

// ---------------------------------------------------------------------------
// Products
// ---------------------------------------------------------------------------

export const products = {
  overview: {
    heading: "Overview",
    paragraphs: [
      "We professionally manufacture flange type, weldable type, hot-dip galvanized, offset type, and goose neck (swan neck / sky type) transformer radiators — engineered for secure installation, structural strength, corrosion resistance, and flexible mounting. Every product is built for maximum heat dissipation, long service life, and full compliance with international standards, and every product is backed by our quality guarantee.",
    ],
  },
  configurations: {
    heading: "Our Products",
    items: [
      {
        name: "Flange Type Transformer",
        slug: "flange-type",
        path: "/products/flange-type",
        description:
          "Designed with flange-mounted fittings for secure and easy installation. It provides excellent mechanical stability and simplifies maintenance or replacement in power distribution systems.",
        image: "/hot-dip-galvanized.jpeg",
      },
      {
        name: "Weldable Type Transformer",
        slug: "weldable-type",
        path: "/products/weldable-type",
        description:
          "Features a weldable mounting structure that allows permanent and robust installation. It is ideal for applications requiring high structural strength and long-term reliability.",
        image: "/weldable-type-radiators.jpeg",
      },
      {
        name: "Hot-Dip Galvanized Transformer",
        slug: "hot-dip-galvanized",
        path: "/products/hot-dip-galvanized",
        description:
          "Manufactured with hot-dip galvanized components to provide superior corrosion resistance. This protective coating enhances durability, making it suitable for harsh outdoor and industrial environments.",
        image: "/hot-dip-galvanized-radiators.png",
      },
      {
        name: "Offset Type Transformer",
        slug: "offset-type",
        path: "/products/offset-type",
        description:
          "Designed with an offset mounting configuration to accommodate specific installation requirements where space or alignment is constrained. It offers greater flexibility while maintaining reliable electrical performance.",
        image: "/offset-type-radiators.jpeg",
      },
      {
        name: "Goose Neck Type Transformer",
        slug: "goose-neck-type",
        path: "/products/goose-neck-type",
        description:
          "Swan neck / goose neck / sky type radiators use offset, elbowed headers so tank connections stay accessible where a straight header cannot. The curved neck simplifies installation without compromising cooling performance.",
        image: "/hot-dip-galvanized-radiators.png",
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
      "Our hot-dip galvanizing facility delivers uniform, deeply bonded coverage on every fin and header. For painted finishes, our coating systems conform to ISO 12944-5 and can be specified for aggressive service conditions, including coastal and offshore environments. Where maximum protection is required, we offer a duplex system: hot-dip galvanizing followed by painting.",
      "Internally, moisture content (PPM) and particle count meters on our automated cleaning and coating process ensure every radiator ships with contamination-free internal surfaces — protecting transformer oil quality from day one.",
    ],
  },
  tanks: {
    heading: "Transformer Tanks",
    body: "Alongside radiators, Transpares manufactures corrugated flat-wall tanks for distribution transformers. Tanks are fabricated, leak-tested, and finished with the same surface treatment options as our radiators — giving transformer builders a matched, single-source cooling and enclosure package.",
    path: "/contact-us",
    cta: "Contact Us",
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
  documents: [
    {
      title: "Performance Certificates",
      file: "/23.Performance Certificates.pdf",
    },
    {
      title: "Transpares Limited — 11 December 2026",
      file: "/Transpares Limited_ 11.Dec.2026.pdf",
    },
  ],
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
      { name: "NTPC Approved", description: "Approved vendor for NTPC transformer radiator supply" },
      { name: "PGCIL Approved", description: "Approved for Power Grid Corporation of India Limited, including 765 kV class" },
      { name: "ISO 45001", description: "Occupational Health & Safety Management" },
      { name: "ISO 3834-2", description: "Comprehensive quality requirements for fusion welding" },
    ] as Certification[],
    boards: [
      {
        name: "ISO 9001:2015",
        subtitle: "Quality Management System",
        image: "",
      },
      {
        name: "ISO 14001",
        subtitle: "Environmental Management System",
        image: "",
      },
      {
        name: "NTPC",
        subtitle: "Approved Board",
        image: "",
      },
      {
        name: "PGCIL 765 kV",
        subtitle: "Approved Board",
        image: "",
      },
    ],
  },
  people: {
    heading: "Certified People, Not Just Certified Paper",
    intro: "Standards only matter when people live them. Our payroll includes:",
    items: [
      "NACE-certified engineers for corrosion control and coating integrity",
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
    body: "Request our quality dossier when you get in touch.",
    primaryCta: "Contact Us",
  } as CtaBlock,
};

// ---------------------------------------------------------------------------
// Manufacturing
// ---------------------------------------------------------------------------

export const manufacturing = {
  scale: {
    heading: "Built for Scale, Tuned for Speed",
    body: "Transpares operates 20,000 m² of manufacturing area, engineered as one integrated flow — from sheet forming and fin welding to surface treatment, testing, and packing. Our operations and systems are optimized for one outcome: exceptional quality at minimal lead time, with the flexibility to absorb urgent customer requirements.",
    capability: "Annual operational capability: 12,000 MT of radiators",
  },
  hdg: {
    heading: "In-House Hot-Dip Galvanizing",
    body: "Our state-of-the-art HDG facility — with a zinc bath measuring 5 m × 2.5 m × 2.5 m — means corrosion protection never leaves our control. No third-party queues, no handling damage in transit, no compromise on coating quality or schedule.",
  },
  automation: {
    heading: "Automation Where It Counts",
    body: "Moisture content (PPM) and particle count meters on our internal cleaning and coating process guarantee clean, protected internal surfaces on every radiator — a decisive factor in transformer oil integrity and long-term reliability.",
    equipment: [
      "Fin Automation Machine",
      "Orbital Welding machine",
      "Shot blasting automated machine",
      "CNC based paint flow system",
      "Moisture content (PPM) and Particle Count meters for internal cleaning and coating process",
    ],
  },
  people: {
    heading: "Our People",
    items: [
      "250+ professionals",
      "1,200+ skilled workers on the shop floor",
      "A dedicated inspection team on every production line",
      "A young, dynamic team with international exposure and an engineering-first culture",
    ],
  },
  logistics: {
    heading: "Logistics Advantage",
    items: [
      "Kandla Port — 250 km",
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
    registeredOffice:
      "14-15 Ashwamegh Industrial Estate, Sarkhej-Bavla Hwy, Changodar, Ahmedabad, Gujarat 382213",
    phones: ["(02717) 250633", "+91 96876 59985"],
    phone: "+91 96876 59985",
    email: "tpmarketing@transparesindia.com",
    emails: [
      { label: "Marketing", value: "tpmarketing@transparesindia.com" },
      { label: "Sales", value: "rahil.doshi@transparesindia.com" },
    ],
    businessHours: "Mon–Sat, 9:00 AM – 6:00 PM IST",
    connectivity: "Kandla Port — 250 km",
  },
  formFields: {
    fields: ["Name", "Company", "Country", "Email", "Phone", "Product of Interest", "Message", "Attach Drawing"],
    productOptions: [
      "Flange Type Transformer",
      "Weldable Type Transformer",
      "Hot-Dip Galvanized Transformer",
      "Offset Type Transformer",
      "Goose Neck Type Transformer",
      "Custom",
    ],
  },
  rfqChecklist: {
    heading: "Help Us Quote Faster — RFQ Checklist",
    intro: "To receive the fastest, most accurate quotation, please include:",
    items: [
      "Radiator type and configuration (flange / weldable / hot-dip galvanized / offset / goose neck)",
      "Fin length, width, thickness, and number of fins/sections",
      "Material grade and surface treatment required (HDG / painted / HDG + painted)",
      "Applicable standards and inspection requirements",
      "Quantity and delivery schedule",
      "Destination port or delivery location",
    ],
  },
};

// ---------------------------------------------------------------------------
// Clients
// ---------------------------------------------------------------------------

export const clients = {
  heading: "Our Clients",
  intro:
    "Transpares Limited supplies pressed steel transformer radiators to OEMs and utilities across India and export markets — backed by NTPC and PGCIL approvals, including 765 kV.",
  items: [
    "Transformers & Rectifiers (India) Ltd",
    "NTPC",
    "PGCIL",
    "Power Utilities",
    "Transformer OEMs",
    "Export Partners",
  ],
};
