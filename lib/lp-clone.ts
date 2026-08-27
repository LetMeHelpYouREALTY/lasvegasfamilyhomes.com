/**
 * Luxury Presence site clone (laluxuries.com) adapted for Las Vegas.
 * Layout and URL patterns only — inventory is RealScout/GLVAR.
 * Do not copy LA listings, celebrity rolodexes, or invented prices.
 */

import { agentInfo, agentStats, marketStats } from "@/lib/site-config";
import { buildHomeSearchPath } from "@/lib/home-search";

export const REALSCOUT_LISTING_STATUSES = [
  "For Sale",
  "Sold",
  "For Rent",
] as const;

export type RealScoutListingStatus =
  (typeof REALSCOUT_LISTING_STATUSES)[number];

export type LpClonePage = {
  path: string;
  title: string;
  description: string;
  h1: string;
  changeFrequency: "daily" | "weekly" | "monthly";
  priority: number;
};

export type LpRedirect = {
  source: string;
  destination: string;
};

export type CollectionTile = {
  href: string;
  title: string;
  subtitle: string;
};

export const LP_CLONE_PAGES: LpClonePage[] = [
  {
    path: "/sold",
    title: "Sold Las Vegas Homes | Recent Closings",
    description: `Recently sold homes across Las Vegas, Henderson, and Summerlin. Live RealScout sold inventory. Dr. Jan Duffy, ${agentInfo.brokerage}. Call ${agentInfo.phone}.`,
    h1: "Sold",
    changeFrequency: "daily",
    priority: 0.8,
  },
  {
    path: "/for-rent",
    title: "Las Vegas Homes for Rent | Long-Term Leases",
    description: `Houses, condos, and townhomes for rent in Las Vegas, Henderson, and Summerlin. RealScout for-rent listings. Dr. Jan Duffy. Call ${agentInfo.phone}.`,
    h1: "For Rent",
    changeFrequency: "daily",
    priority: 0.8,
  },
  {
    path: "/off-market-listings",
    title: "Off-Market Las Vegas Listings | Pocket & Coming Soon",
    description: `Ask Dr. Jan Duffy about pocket and coming-soon Las Vegas listings before they hit the MLS. New-to-market RealScout inventory plus a private inquiry form. Call ${agentInfo.phone}.`,
    h1: "Off-Market Listings",
    changeFrequency: "weekly",
    priority: 0.8,
  },
  {
    path: "/testimonials",
    title: "Client Testimonials | Dr. Jan Duffy",
    description: `Reviews from Las Vegas and Henderson buyers and sellers who worked with Dr. Jan Duffy at ${agentInfo.brokerage}. Call ${agentInfo.phone}.`,
    h1: "Testimonials",
    changeFrequency: "monthly",
    priority: 0.7,
  },
  {
    path: "/listing-agency",
    title: "Listing Agency | Sell Your Las Vegas Home",
    description: `Listing marketing, pricing, photography, and MLS exposure for Las Vegas sellers. Dr. Jan Duffy, ${agentInfo.brokerage}. Call ${agentInfo.phone}.`,
    h1: "Listing Agency",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/buyer-tenant-representation",
    title: "Buyer & Tenant Representation | Las Vegas",
    description: `Buyer and tenant representation for Las Vegas purchases and leases. Criteria, search, offers, and paperwork with Dr. Jan Duffy. Call ${agentInfo.phone}.`,
    h1: "Representation",
    changeFrequency: "monthly",
    priority: 0.8,
  },
  {
    path: "/agent-partnerships",
    title: "Agent Partnerships & Referrals | Dr. Jan Duffy",
    description: `Refer a buyer, seller, or tenant to Dr. Jan Duffy. BHHS Nevada Properties referral care and brokerage-to-brokerage payment. Call ${agentInfo.phone}.`,
    h1: "Partner with Us",
    changeFrequency: "monthly",
    priority: 0.7,
  },
];

/** Luxury Presence market URLs → Las Vegas routes. */
export const LP_REDIRECTS: LpRedirect[] = [
  {
    source: "/market-for-sale",
    destination: "/home-search/listings",
  },
  {
    source: "/market-for-sale/active",
    destination: "/home-search/listings",
  },
  {
    source: "/market-for-sale/sold",
    destination: "/sold",
  },
  {
    source: "/market-for-lease",
    destination: "/for-rent",
  },
  {
    source: "/market-for-lease/:path*",
    destination: "/for-rent",
  },
  {
    source: "/vacation-rental-portfolio",
    destination: "/vacation-rentals",
  },
  {
    source: "/off-market",
    destination: "/off-market-listings",
  },
  {
    source: "/estate-management",
    destination: "/listing-agency",
  },
];

export const COLLECTION_TILES: CollectionTile[] = [
  {
    href: "/home-search/listings",
    title: "Homes for Sale",
    subtitle: "Active Las Vegas Valley MLS listings",
  },
  {
    href: "/sold",
    title: "Sold",
    subtitle: "Recent closings and sold comps",
  },
  {
    href: "/for-rent",
    title: "For Rent",
    subtitle: "Houses, condos, and townhomes for lease",
  },
  {
    href: "/vacation-rentals",
    title: "Vacation Rentals",
    subtitle: "Seasonal and furnished leases",
  },
  {
    href: "/off-market-listings",
    title: "Off-Market Listings",
    subtitle: "Pocket and coming-soon inquiries",
  },
  {
    href: "/neighborhoods/the-ridges",
    title: "Gated",
    subtitle: "Guard-gated Summerlin estates at The Ridges",
  },
  {
    href: "/neighborhoods/inspirada",
    title: "Pools",
    subtitle: "Henderson homes near resort-style pools",
  },
  {
    href: "/neighborhoods/southern-highlands",
    title: "Views",
    subtitle: "Mountain and valley views in Southern Highlands",
  },
  {
    href: "/new-construction",
    title: "New Construction",
    subtitle: "Builder inventory with buyer representation",
  },
];

export const MARKET_PRESENCE_AREAS = [
  {
    name: "Las Vegas",
    href: buildHomeSearchPath("las-vegas", "single-family"),
  },
  {
    name: "Henderson",
    href: buildHomeSearchPath("henderson", "single-family"),
  },
  {
    name: "North Las Vegas",
    href: buildHomeSearchPath("north-las-vegas", "single-family"),
  },
  {
    name: "Summerlin",
    href: buildHomeSearchPath("summerlin", "single-family"),
  },
  {
    name: "Green Valley",
    href: buildHomeSearchPath("green-valley", "single-family"),
  },
  {
    name: "Centennial Hills",
    href: buildHomeSearchPath("centennial-hills", "single-family"),
  },
  {
    name: "Skye Canyon",
    href: buildHomeSearchPath("skye-canyon", "single-family"),
  },
  {
    name: "Inspirada",
    href: buildHomeSearchPath("inspirada", "single-family"),
  },
  {
    name: "Mountain's Edge",
    href: buildHomeSearchPath("mountains-edge", "single-family"),
  },
  {
    name: "Southern Highlands",
    href: buildHomeSearchPath("southern-highlands", "single-family"),
  },
  {
    name: "The Ridges",
    href: buildHomeSearchPath("the-ridges", "single-family"),
  },
] as const;

export const WORK_WITH_US_STATS = [
  {
    value: `${agentStats.transactionsClosed}+`,
    label: "Closed transactions",
  },
  {
    value: agentStats.volumeClosed,
    label: "Closed volume",
  },
  {
    value: `${agentStats.averageRating}★`,
    label: "Client rating",
  },
] as const;

export const LISTING_AGENCY_PILLARS = [
  {
    title: "Guidance & Positioning",
    subtitle: "Targeted visibility for your property",
    body: "Price to the August 2026 Las Vegas REALTORS data, not last year’s peak. Dr. Jan walks the house, sets a list strategy, and decides what goes public versus what stays quiet.",
  },
  {
    title: "Listing marketing",
    subtitle: "Local MLS plus BHHS exposure",
    body: "Professional photography, a listing page on this site, RealScout/GLVAR MLS, the Berkshire Hathaway HomeServices 50,000-agent network, and an agent email blast. Yard sign and open houses only with your permission.",
  },
  {
    title: "Your agent, your advocate",
    subtitle: `Nevada license ${agentInfo.license}`,
    body: "Unlimited consult time on pricing, repairs, and offer review. Dr. Jan represents you in escrow — not the buyer’s lender, not the portal that sold your lead.",
  },
  {
    title: "Showings & contracts",
    subtitle: "Seamless on-site experience",
    body: "Showings are scheduled, lights on, and the house ready. Offers come with a clear net sheet so you can say yes, no, or counter with numbers — not vibes.",
  },
] as const;

export const BUYER_REP_STEPS = [
  {
    title: "Criteria",
    subtitle: "Determine your needs",
    body: "Budget, bedrooms, ZIP or village, lot size, commute, and HOA. We write it down before we tour.",
  },
  {
    title: "Curated list",
    subtitle: "Dedicated search time",
    body: "RealScout MLS plus pocket inventory. You get a short list that matches the brief — not 80 tabs.",
  },
  {
    title: "Tours & offers",
    subtitle: "Navigating the process",
    body: "Inspections, comps, and negotiation. Cash or financed. Dr. Jan writes the offer and stays on the file through closing.",
  },
  {
    title: "Paperwork",
    subtitle: "Document package",
    body: "Purchase contracts, lease addenda, and escrow. Tenant representation uses the same discipline as a purchase.",
  },
] as const;

export const PARTNERSHIP_PILLARS = [
  {
    title: "Agents",
    subtitle: "Refer and receive",
    body: "Refer a buyer, seller, or tenant. Referral fee is agreed in writing, paid brokerage-to-brokerage, and sized to the file.",
  },
  {
    title: "Referrals",
    subtitle: "Dedicated referral care",
    body: "Referred clients get the same call-back standard as a local lead. You get status updates until the check clears.",
  },
  {
    title: "Partnerships",
    subtitle: "Sale and lease exposure",
    body: "Listings that need another channel — including qualified tenants who later buy — can be dual-tracked without a second MLS engine.",
  },
  {
    title: "Payments",
    subtitle: "Brokerage distribution",
    body: `${agentInfo.brokerage} processes referral invoices through the cooperating brokerage. No side deals.`,
  },
] as const;

export type InventoryPageConfig = {
  path: string;
  h1: string;
  kicker: string;
  intro: string;
  listingStatus: RealScoutListingStatus;
  propertyTypes: string;
  faqs: { question: string; answer: string }[];
  formSource: string;
  formTags: string[];
};

export const SOLD_INVENTORY: InventoryPageConfig = {
  path: "/sold",
  h1: "Sold",
  kicker: "Recent Las Vegas Valley closings",
  intro: `Sold comps from RealScout — the same MLS feed used on the for-sale search. Use these to price a listing or check what actually closed, not what a portal guessed. Median single-family sale in August 2026 was ${marketStats.lasVegas.medianPriceFormatted} (LVR).`,
  listingStatus: "Sold",
  propertyTypes: ",SFR,MF,TC",
  formSource: "sold-page",
  formTags: ["lp-clone", "sold"],
  faqs: [
    {
      question: "Are these Dr. Jan Duffy’s personal solds?",
      answer:
        "The grid is live RealScout sold inventory for the valley, not a hand-built trophy wall. Ask for a personal sold book if you want files she closed.",
    },
    {
      question: "Can I use solds to price my house?",
      answer: `Yes — but filter by village, beds, and lot. Valley median was ${marketStats.lasVegas.medianPriceFormatted} in ${marketStats.lastUpdated}. Call ${agentInfo.phone} for a net sheet.`,
    },
  ],
};

export const FOR_RENT_INVENTORY: InventoryPageConfig = {
  path: "/for-rent",
  h1: "For Rent",
  kicker: "Long-term leases, not vacation stays",
  intro:
    "Houses, condos, and townhomes listed for rent on the MLS. This is not a vacation-rental brand. Short-term and mid-term stays are a separate conversation — start with the form if that is what you need.",
  listingStatus: "For Rent",
  propertyTypes: ",SFR,MF,TC",
  formSource: "for-rent-page",
  formTags: ["lp-clone", "for-rent"],
  faqs: [
    {
      question: "Do you manage vacation rentals?",
      answer:
        "Long-term leases stay on this page. Seasonal and furnished stays are on /vacation-rentals. Call for either.",
    },
    {
      question: "Can Dr. Jan represent a tenant?",
      answer: `Yes. Tenant representation uses the same criteria-first process as a purchase. Call ${agentInfo.phone} or open Buyer & Tenant Representation.`,
    },
  ],
};

export const OFF_MARKET_INVENTORY: InventoryPageConfig = {
  path: "/off-market-listings",
  h1: "Off-Market Listings",
  kicker: "Pocket, coming soon, and new-to-market",
  intro:
    "Las Vegas pocket listings are not published as a fake “price upon request” grid. Tell Dr. Jan the beds, budget, and village. Below is the newest public MLS inventory so you can see what just hit — then ask what has not hit yet.",
  listingStatus: "For Sale",
  propertyTypes: ",SFR,MF,TC",
  formSource: "off-market-page",
  formTags: ["lp-clone", "off-market"],
  faqs: [
    {
      question: "Why isn’t there a private address list on this page?",
      answer:
        "Off-market addresses are shown only to qualified buyers after a conversation. Publishing them here would be a listing we do not have.",
    },
    {
      question: "How fast do coming-soon homes go public?",
      answer: `Some never do. Others hit the MLS within days. Call ${agentInfo.phone} with your criteria so the match happens before the sign goes up.`,
    },
  ],
};

export function getLpCloneSitemapEntries(baseUrl: string) {
  return LP_CLONE_PAGES.map((page) => ({
    url: `${baseUrl}${page.path}`,
    changeFrequency: page.changeFrequency,
    priority: page.priority,
  }));
}

export function getLpClonePage(path: string): LpClonePage | undefined {
  return LP_CLONE_PAGES.find((page) => page.path === path);
}
