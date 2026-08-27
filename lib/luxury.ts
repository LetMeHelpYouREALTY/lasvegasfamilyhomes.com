/**
 * Luxury Presence–inspired marketing clone of laluxuries.com,
 * adapted for Dr. Jan Duffy / Las Vegas Family Homes.
 * Visual language: Tenor Sans + Montserrat, cinematic hero, sidemenu.
 */

import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";

export const CTA_PHONE = agentInfo.phone;
export const CTA_TEL = agentInfo.phoneTel;
export const LICENSE = agentInfo.license;

export const luxuryNav = {
  left: [
    { href: "/vacation-rental-portfolio", label: "Vacation Rentals" },
    { href: "/neighborhoods", label: "Areas of Expertise" },
  ],
  right: [{ href: "/contact", label: "Contact Us", action: "contact" as const }],
};

export type SidemenuLink = { href: string; label: string; external?: boolean };
export type SidemenuItem =
  | { type: "link"; href: string; label: string; external?: boolean }
  | { type: "group"; label: string; children: SidemenuLink[] };

export const sidemenu: SidemenuItem[] = [
  { type: "link", href: "/", label: "Home" },
  {
    type: "group",
    label: "About",
    children: [
      { href: "/about", label: "About Us" },
      { href: "/about", label: "About Dr. Jan Duffy" },
      { href: "/agent-partnerships", label: "Agent Partnerships" },
    ],
  },
  { type: "link", href: "/coming-soon", label: "September 2026 Coming Soon" },
  {
    type: "group",
    label: "Representation",
    children: [
      {
        href: "/buyer-tenant-representation",
        label: "Buyer/Tenant Representation",
      },
      { href: "/listing-agency", label: "Listing Agency" },
      { href: "/estate-management", label: "Estate Management" },
    ],
  },
  {
    type: "link",
    href: "/vacation-rental-portfolio",
    label: "Vacation Rental Showcase",
  },
  {
    type: "link",
    href: "/off-market-listings",
    label: "Listing Portfolio (Sales)",
  },
  {
    type: "group",
    label: "Market for Sale",
    children: [
      { href: "/home-search/listings", label: "Active" },
      { href: "/home-search/listings", label: "Search All Las Vegas" },
      {
        href: "/home-search/listings/v2/nv/summerlin/single-family",
        label: "Summerlin",
      },
      {
        href: "/home-search/listings/v2/nv/henderson/single-family",
        label: "Henderson",
      },
    ],
  },
  {
    type: "group",
    label: "Market for Lease",
    children: [
      { href: "/vacation-rental-portfolio", label: "Estate Rentals" },
      {
        href: "/home-search/listings/v2/nv/las-vegas/single-family",
        label: "Search All Las Vegas",
      },
    ],
  },
  { type: "link", href: "/market-trends", label: "Market Trends" },
  { type: "link", href: "/neighborhoods", label: "Neighborhoods" },
  { type: "link", href: "/blog", label: "Blog" },
  { type: "link", href: "/contact", label: "Contact Us" },
  { type: "link", href: "/home-search/listings", label: "My Search Portal" },
  { type: "link", href: "/opt-in", label: "Register for Deals" },
];

export const marketPresence = [
  {
    name: "Summerlin",
    slug: "summerlin",
    image: "/images/neighborhoods/summerlin.jpg",
  },
  {
    name: "The Ridges",
    slug: "the-ridges",
    image: "/images/neighborhoods/ridges.jpg",
  },
  {
    name: "Henderson",
    slug: "henderson",
    image: "/images/neighborhoods/henderson.jpg",
  },
  {
    name: "Green Valley",
    slug: "green-valley",
    image: "/images/neighborhoods/green-valley.jpg",
  },
  {
    name: "Southern Highlands",
    slug: "southern-highlands",
    image: "/images/neighborhoods/southern-highlands.jpg",
  },
  {
    name: "Skye Canyon",
    slug: "skye-canyon",
    image: "/images/neighborhoods/skye.jpg",
  },
  {
    name: "Centennial Hills",
    slug: "centennial-hills",
    image: "/images/neighborhoods/centennial.jpg",
  },
  {
    name: "Inspirada",
    slug: "inspirada",
    image: "/images/neighborhoods/inspirada.jpg",
  },
  {
    name: "North Las Vegas",
    slug: "north-las-vegas",
    image: "/images/neighborhoods/north-las-vegas.jpg",
  },
  {
    name: "Mountain's Edge",
    slug: "mountains-edge",
    image: "/images/neighborhoods/mountains-edge.jpg",
  },
];

export const collectionCategories = [
  {
    title: "Vacation Rentals",
    href: "/vacation-rental-portfolio",
    image: "/images/collections/rentals.jpg",
  },
  {
    title: "Off Market Listings",
    href: "/off-market-listings",
    image: "/images/collections/off-market.jpg",
  },
  {
    title: "Estate Management",
    href: "/estate-management",
    image: "/images/collections/management.jpg",
  },
  {
    title: "Lake Las Vegas",
    href: "/neighborhoods/henderson",
    image: "/images/collections/views.jpg",
  },
  {
    title: "Guard-Gated",
    href: "/neighborhoods/the-ridges",
    image: "/images/collections/gated.jpg",
  },
  {
    title: "Luxury Pools",
    href: "/luxury-homes",
    image: "/images/collections/pool.jpg",
  },
  {
    title: "Seasonal Rentals",
    href: "/vacation-rental-portfolio",
    image: "/images/collections/seasonal.jpg",
  },
  {
    title: "Views",
    href: "/neighborhoods/summerlin",
    image: "/images/collections/views.jpg",
  },
];

export const blogPosts = [
  {
    slug: "summer-entertaining-ideas-for-your-summerlin-home",
    title: "Summer Entertaining Ideas for Your Summerlin Home",
    excerpt: "Making the most of warm days and cool desert evenings.",
    image: "/images/blog/entertaining.jpg",
    date: "2026-06-12",
  },
  {
    slug: "the-best-cafes-and-coffee-spots-in-summerlin",
    title: "The Best Cafés and Coffee Spots in Summerlin",
    excerpt: "Where to get your coffee fix among the palm trees.",
    image: "/images/blog/cafes.jpg",
    date: "2026-05-28",
  },
  {
    slug: "why-the-ridges-most-expensive-listings-rarely-linger",
    title: "Why The Ridges’ Most Expensive Listings Rarely Linger",
    excerpt: "Access, presentation, and timing in Summerlin’s top tier.",
    image: "/images/blog/leases.jpg",
    date: "2026-04-09",
  },
];

export const interestOptions = [
  "Selling & Buying",
  "Selling",
  "Buying",
  "Renting",
  "Investing",
  "Management",
  "Area Information",
  "Other",
];

export const smsConsentCopy = `I agree to be contacted by ${siteConfig.name} and ${agentInfo.name} via call, email, and text for real estate services. To opt out, you can reply 'stop' at any time or reply 'help' for assistance. You can also click the unsubscribe link in the emails. Message and data rates may apply. Message frequency may vary.`;

export const mlsDisclaimer =
  "Listings displayed are courtesy of the Greater Las Vegas Association of REALTORS® Multiple Listing Service. Information is deemed reliable but not guaranteed. Listing broker and listing agent information is displayed with each property. Dr. Jan Duffy, License S.0197614.LLC, Berkshire Hathaway HomeServices Nevada Properties.";

export const aboutCopy = {
  subtitleLeft: `NV License ${LICENSE}`,
  subtitleRight: "Luxury Estate Sales, Leases & Advisory",
  paragraphs: [
    `${agentInfo.name} built ${siteConfig.name} to specialize in branded marketing geared to families relocating to the Las Vegas Valley, and to facilitate property sales and leases by targeting clients through direct, data-driven marketing through our relationships.`,
    "The practice is built on a foundation of cooperation, meticulous preparation, custom marketing target strategies, and dedicated effort — ensuring unparalleled success for its clients.",
    "My approach is built on relationships, access, and targeting. I focus on connecting the right clients with the right properties, leveraging a curated network of buyers, investors, and off-market opportunities. Rather than operating as a traditional listing mill, I work in a more advisory capacity — ensuring each search and each listing is fully aligned before it ever reaches the market.",
    "Much of my work begins before a property is publicly available. I am often engaged by owners and developers early in the process to help position a home for the right audience, ensuring the product, presentation, and strategy resonate with qualified buyers and renters. This allows me to operate with intention, prioritizing access, discretion, and execution.",
    "My strength lies in understanding both sides of the equation: the client and the asset. By maintaining a strong network and a constant pulse on the market, I am able to deliver a more curated, efficient, and results-driven experience — consistently aligning exceptional homes with the clients they are meant for across Las Vegas, Henderson, Summerlin, and beyond.",
  ],
};

export const nap = {
  name: businessName(),
  street: officeInfo.address.street,
  cityStateZip: `${officeInfo.address.city}, ${officeInfo.address.state} ${officeInfo.address.zip}`,
  full: officeInfo.address.full,
  phone: agentInfo.phone,
  tel: agentInfo.phoneTel,
  email: agentInfo.email,
  hoursWeekday: officeInfo.hours.weekday,
  hoursWeekend: officeInfo.hours.weekend,
  hoursSunday: officeInfo.hours.sunday,
  mapsEmbed: officeInfo.mapsEmbed,
  mapsDirections: officeInfo.mapsDirections,
  googleReviews: officeInfo.googleReviews,
  license: LICENSE,
};

function businessName() {
  return `${agentInfo.name} — ${agentInfo.brokerage}`;
}

export const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: nap.name,
  url: siteConfig.url,
  telephone: agentInfo.phoneE164,
  email: agentInfo.email,
  image: `${siteConfig.url}/opengraph-image`,
  address: {
    "@type": "PostalAddress",
    streetAddress: officeInfo.address.street,
    addressLocality: officeInfo.address.city,
    addressRegion: officeInfo.address.state,
    postalCode: officeInfo.address.zip,
    addressCountry: "US",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: officeInfo.coordinates.lat,
    longitude: officeInfo.coordinates.lng,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: "Saturday",
      opens: "10:00",
      closes: "16:00",
    },
  ],
  priceRange: "$$$",
  areaServed: [
    "Las Vegas, NV",
    "Henderson, NV",
    "Summerlin, NV",
    "North Las Vegas, NV",
  ],
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "4.9",
    reviewCount: "200",
  },
};
