// Site Configuration — lasvegasfamilyhomes.com
// Dr. Jan Duffy | Berkshire Hathaway HomeServices Nevada Properties

export const siteConfig = {
  name: "Las Vegas Family Homes",
  fullName: "Las Vegas Family Homes | Dr. Jan Duffy, REALTOR®",
  tagline:
    "3–5 bedroom homes, yards, and master-planned living across the Las Vegas Valley",
  brandLine:
    "Las Vegas Family Homes | Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties",
  brandName: "Las Vegas Family Homes",
  shortName: "LV Family Homes",
  url: "https://lasvegasfamilyhomes.com",
  description:
    "Search Las Vegas family homes for sale — 3–5 bedroom houses with yards in Summerlin, Henderson, Centennial Hills, Skye Canyon, Inspirada, and Mountain's Edge. Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties. Call (702) 222-1964.",
};

export const agentInfo = {
  name: "Dr. Jan Duffy",
  title: "REALTOR®",
  license: "S.0197614.LLC",
  phone: "(702) 222-1964",
  phoneFormatted: "(702) 222-1964",
  phoneTel: "tel:+17022221964",
  phoneE164: "+17022221964",
  email: "DrDuffy@bhhsnv.com",
  brokerage: "Berkshire Hathaway HomeServices Nevada Properties",
};

export const officeInfo = {
  name: "Berkshire Hathaway HomeServices Nevada Properties",
  address: {
    street: "9406 W Lake Mead Blvd, Suite 100",
    city: "Las Vegas",
    state: "NV",
    zip: "89134",
    full: "9406 W Lake Mead Blvd, Suite 100, Las Vegas, NV 89134",
  },
  coordinates: {
    lat: 36.1893,
    lng: -115.2821,
  },
  phone: "(702) 222-1964",
  phoneTel: "tel:+17022221964",
  hours: {
    weekday: "Monday–Friday 9am–6pm",
    weekend: "Saturday 10am–4pm",
    sunday: "Sunday by appointment",
  },
  mapsEmbed:
    "https://maps.google.com/maps?q=9406+W+Lake+Mead+Blvd+Suite+100,+Las+Vegas,+NV+89134&t=&z=15&ie=UTF8&iwloc=&output=embed",
  mapsDirections:
    "https://www.google.com/maps/dir//9406+W+Lake+Mead+Blvd+Suite+100,+Las+Vegas,+NV+89134",
  googleReviews:
    "https://www.google.com/search?q=Dr+Jan+Duffy+Berkshire+Hathaway+HomeServices+Nevada+Properties+reviews",
};

/** Valley-wide stats: Las Vegas REALTORS (LVR) August 2026 single-family report. */
export const marketStats = {
  lastUpdated: "August 2026",
  source: "Las Vegas REALTORS (LVR) August 2026 statistics",
  lasVegas: {
    medianPrice: 480000,
    medianPriceFormatted: "$480,000",
    yearOverYearChange: "-1.0%",
    daysOnMarket: 31,
    activeListings: 7442,
    closedSales: 2587,
    inventoryMonths: 4.0,
    pricePerSqFt: 267,
  },
  henderson: {
    medianPrice: 545000,
    medianPriceFormatted: "$545,000",
    yearOverYearChange: "June 2026 Redfin city median",
    daysOnMarket: 31,
    activeListings: 1280,
  },
  summerlin: {
    medianPrice: 537500,
    medianPriceFormatted: "$537,500",
    yearOverYearChange: "June 2026 village mix",
    daysOnMarket: 35,
    luxuryMedian: 1200000,
    luxuryMedianFormatted: "$1.2M",
  },
  luxury: {
    medianPrice: 1200000,
    medianPriceFormatted: "$1.2M",
    activeListings: 890,
    daysOnMarket: 45,
    pricePerSqFt: 327,
  },
};

export const agentStats = {
  servingSince: 2008,
  transactionsClosed: 500,
  volumeClosed: "$127M+",
  averageRating: 4.9,
  reviewCount: 200,
};

export const valuePropositions = {
  main: "When you work with a Berkshire Hathaway HomeServices agent, you're backed by a name synonymous with trust, ethical standards, and financial strength—the same principles that built Warren Buffett's empire.",
  trust:
    "Berkshire Hathaway HomeServices is the only real estate brand backed by Warren Buffett's Berkshire Hathaway Inc. This means unmatched financial stability, ethical standards, and a global referral network of 50,000+ agents.",
  expertise:
    "Serving Las Vegas since 2008 with $127M+ in closed transactions, Dr. Jan Duffy matches buyers with 3–5 bedroom homes, yards, and master-planned amenities across the valley.",
};

export const neighborhoods = [
  {
    name: "Summerlin",
    slug: "summerlin",
    description:
      "Master-planned community with 150+ parks, trails, and Downtown Summerlin",
    medianPrice: "$537,500",
    highlights: [
      "Red Rock views",
      "150+ parks",
      "Downtown Summerlin",
      "Golf courses",
    ],
  },
  {
    name: "Henderson",
    slug: "henderson",
    description:
      "Nevada's second-largest city with master-planned villages and I-215 access",
    medianPrice: "$545,000",
    highlights: [
      "Green Valley",
      "Inspirada",
      "Lake Las Vegas",
      "Parks and trails",
    ],
  },
  {
    name: "Green Valley",
    slug: "green-valley",
    description:
      "Henderson community with mature landscaping, The District, and golf",
    medianPrice: "$520,000+",
    highlights: ["Golf courses", "Walking trails", "The District", "Parks"],
  },
  {
    name: "The Ridges",
    slug: "the-ridges",
    description: "Guard-gated Summerlin community with custom estates",
    medianPrice: "$2.5M",
    highlights: [
      "Custom estates",
      "Bear's Best Golf",
      "Strip views",
      "Guard-gated",
    ],
  },
  {
    name: "Southern Highlands",
    slug: "southern-highlands",
    description:
      "Master-planned community with championship golf and mountain views",
    medianPrice: "$750,000",
    highlights: [
      "Golf community",
      "Guard-gated",
      "Mountain views",
      "Club amenities",
    ],
  },
  {
    name: "North Las Vegas",
    slug: "north-las-vegas",
    description:
      "Growing area with new construction and 3–4 bedroom floor plans",
    medianPrice: "$365,000+",
    highlights: ["New construction", "Aliante", "I-15 access", "Parks"],
  },
  {
    name: "Skye Canyon",
    slug: "skye-canyon",
    description:
      "Northwest master-planned community with Skye Center and mountain views",
    medianPrice: "$565,000",
    highlights: ["New homes", "Mountain views", "Skye Center", "Parks"],
  },
  {
    name: "Centennial Hills",
    slug: "centennial-hills",
    description:
      "Northwest Las Vegas community near Floyd Lamb Park and mountain trails",
    medianPrice: "$465,000+",
    highlights: ["Mountain access", "Parks", "Shopping", "3–5 bedroom homes"],
  },
  {
    name: "Inspirada",
    slug: "inspirada",
    description:
      "Henderson master-planned community with resort pools and walking trails",
    medianPrice: "$625,000",
    highlights: ["Resort pools", "Walking trails", "New construction", "Parks"],
  },
  {
    name: "Mountain's Edge",
    slug: "mountains-edge",
    description:
      "Southwest Las Vegas master-planned community with mountain views",
    medianPrice: "$535,000",
    highlights: [
      "Mountain views",
      "Parks",
      "Exploration Peak",
      "3–5 bedroom homes",
    ],
  },
];

export const services = [
  {
    name: "Home Buying",
    slug: "buyers",
    description:
      "Expert guidance through every step of the home buying process",
    icon: "Home",
  },
  {
    name: "3–4 Bedroom Homes",
    slug: "3-4-bedroom-homes",
    description:
      "Single-family homes with the bedrooms and living space you need",
    icon: "Home",
  },
  {
    name: "Homes with Yards",
    slug: "homes-with-yards",
    description:
      "Single-family lots with private outdoor space across the valley",
    icon: "TreePine",
  },
  {
    name: "Home Selling",
    slug: "sellers",
    description:
      "Maximize your home's value with professional marketing and negotiation",
    icon: "TrendingUp",
  },
  {
    name: "New Construction",
    slug: "new-construction",
    description: "Free buyer representation for new home purchases",
    icon: "Building",
  },
  {
    name: "Relocation",
    slug: "relocation",
    description: "Comprehensive relocation assistance for moves to Las Vegas",
    icon: "Truck",
  },
  {
    name: "Home Valuation",
    slug: "home-valuation",
    description: "Free property valuations using current market data",
    icon: "Calculator",
  },
  {
    name: "Market Analysis",
    slug: "market-report",
    description: "In-depth Las Vegas real estate market insights",
    icon: "BarChart",
  },
];

export const expertQuotes = {
  market: `"The valley median for a single-family home was $480,000 in August 2026, with 31 days on market and about 4 months of inventory. Buyers have room to negotiate on overpriced listings."`,
  buyers: `"My job isn't just to show you houses—it's to make sure you don't overpay, that you understand what you're buying, and that you're protected through every step of the transaction."`,
  sellers: `"Pricing your home correctly from day one is the single most important factor in getting top dollar. Overpriced homes sit, and every day on market costs you money."`,
  luxury: `"Luxury buyers expect discretion, market expertise, and flawless execution. In this price range, one wrong move can cost hundreds of thousands of dollars."`,
  investment: `"Las Vegas rental yields are among the best in the country right now. But you need to know which neighborhoods are appreciating and which have peaked."`,
  relocation: `"Moving to a new city is stressful enough. I handle neighborhood tours, commute mapping, and contractor referrals so you can focus on the move."`,
  newConstruction: `"Builders have sales agents who work for them, not you. Having your own representation costs you nothing but can save you tens of thousands in upgrades and negotiations."`,
  valueProposition: `"When clients ask why they should choose a Berkshire Hathaway HomeServices agent, I tell them: you're not just getting me—you're getting a global network of 50,000 agents, world-class marketing, and a brand that's synonymous with trust."`,
};

export const commonFAQs = {
  general: [
    {
      question: "What is a Las Vegas family home on this site?",
      answer:
        "We focus on single-family houses with 3–5 bedrooms, private yards, and access to parks and rec centers in Summerlin, Henderson, Centennial Hills, Skye Canyon, Inspirada, and Mountain's Edge. Dr. Jan Duffy matches square footage, lot size, and commute — not marketing labels.",
    },
    {
      question: "What is the current Las Vegas single-family median price?",
      answer:
        "Per Las Vegas REALTORS (LVR) August 2026 statistics, the valley single-family median sale price was $480,000, down about 1% year-over-year. Median days on market were 31, with 7,442 active single-family listings and 4.0 months of inventory. Neighborhood medians vary by village — call (702) 222-1964 for current comps.",
    },
    {
      question: "Which neighborhoods have 3–5 bedroom homes with yards?",
      answer:
        "Summerlin, Henderson (Green Valley and Inspirada), Centennial Hills, Skye Canyon, Mountain's Edge, Southern Highlands, and North Las Vegas all have large inventories of 3–5 bedroom single-family homes. Dr. Jan maps floor plans, lot size, and commute times to your list.",
    },
    {
      question:
        "Why work with Dr. Jan Duffy at Berkshire Hathaway HomeServices?",
      answer:
        "Berkshire Hathaway HomeServices is backed by Warren Buffett's Berkshire Hathaway Inc. Dr. Jan has served Las Vegas since 2008, with $127M+ in closed transactions. Call or text (702) 222-1964 — she answers her own phone.",
    },
  ],
  buying: [
    {
      question: "How long does the home buying process take in Las Vegas?",
      answer:
        "Typically 30-45 days from offer acceptance to closing. Cash purchases can close in as little as 7-14 days. The timeline depends on financing, inspections, and other contingencies.",
    },
    {
      question: "Do I need a pre-approval before looking at homes?",
      answer:
        "Yes, a pre-approval letter is essential. It shows sellers you're serious and gives you a clear budget. Dr. Jan can connect you with trusted local lenders who offer competitive rates.",
    },
    {
      question: "How much do I need for a down payment?",
      answer:
        "Down payment requirements vary: FHA loans require 3.5%, conventional loans typically 3-20%, and VA/USDA loans may require 0% down. Dr. Jan can connect you with lenders who specialize in various loan programs.",
    },
  ],
  selling: [
    {
      question: "What is my home worth in today's Las Vegas market?",
      answer:
        "Home values depend on location, condition, size, and recent comparable sales. Dr. Jan provides free, comprehensive home valuations using current MLS data and her expertise serving Las Vegas since 2008.",
    },
    {
      question: "How long will it take to sell my home?",
      answer:
        "As of August 2026, the valley median days on market for residential properties was 31 days (LVR). Well-priced single-family homes still move; overpriced listings sit. Pricing strategy is the lever.",
    },
    {
      question: "What do I need to do to prepare my home for sale?",
      answer:
        "Dr. Jan provides a personalized preparation checklist for every listing. Generally, decluttering, minor repairs, fresh paint, and professional photography are the highest-ROI improvements.",
    },
  ],
};
