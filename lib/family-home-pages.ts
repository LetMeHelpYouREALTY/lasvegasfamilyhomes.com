import type { Metadata } from "next";
import { REALSCOUT_AGENT_ID } from "@/lib/home-search";
import {
  agentInfo,
  marketStats,
  officeInfo,
  siteConfig,
} from "@/lib/site-config";

/**
 * H1/H2/H3 researched 2026-08-27 for the Las Vegas Family Homes theme.
 * Sources: Parallel Web Systems (Zapier async enrichment + search objective),
 * LVR August 2026 stats in site-config, Summerlin vs Henderson 2026 market coverage.
 * Fair Housing: square footage, amenities, school NAMES, commute times.
 * Never: family-friendly, safe neighborhood, good schools.
 */

export type FamilyHomeSection = {
  kicker?: string;
  heading: string;
  headingLevel: 2 | 3;
  body: string;
  image: string;
  alt: string;
  reverse?: boolean;
  tone?: "white" | "cream";
  cta?: { href: string; label: string };
};

export type FamilyHomePageContent = {
  slug: string;
  metadata: Metadata;
  h1: string;
  subtitle: string;
  heroImage: string;
  compact?: boolean;
  heroCtas?: { href: string; label: string }[];
  searchHtml?: string;
  sections: FamilyHomeSection[];
  faqs: { q: string; a: string }[];
  source?: string;
};

const listingsSearch = `<realscout-simple-search agent-encoded-id="${REALSCOUT_AGENT_ID}"></realscout-simple-search>`;

const phone = agentInfo.phone;
const nap = `${officeInfo.address.street}, ${officeInfo.address.city}, ${officeInfo.address.state} ${officeInfo.address.zip}`;

export const familyHomePages: Record<string, FamilyHomePageContent> = {
  "family-homes": {
    slug: "family-homes",
    metadata: {
      title: "Las Vegas Family Homes for Sale | Dr. Jan Duffy",
      description: `Search 3–5 bedroom Las Vegas family homes with yards in Summerlin, Henderson, and Clark County. Dr. Jan Duffy, ${agentInfo.brokerage}. Call ${phone}.`,
    },
    h1: "Las Vegas Family Homes for Sale",
    subtitle:
      "Square footage, yards, and floor plans that fit — Summerlin, Henderson, and the valley. Call (702) 222-1964.",
    heroImage: "/images/hero/family-homes.jpg",
    heroCtas: [
      { href: "/home-search/listings", label: "Search Listings" },
      { href: "/3-5-bedroom-homes", label: "3–5 Bedrooms" },
    ],
    searchHtml: listingsSearch,
    sections: [
      {
        kicker: "Clark County · Single-Family",
        heading: "Square Footage, Yards, and Floor Plans That Fit",
        headingLevel: 2,
        body: `Most buyers who land here are shopping 3–5 bedroom houses, not condos. LVR’s August 2026 single-family report puts the valley median at ${marketStats.lasVegas.medianPriceFormatted} with ${marketStats.lasVegas.daysOnMarket} days on market and ${marketStats.lasVegas.inventoryMonths} months of inventory. We match bedroom count, lot, and commute — then tour.`,
        image: "/images/sections/kitchen.jpg",
        alt: "Open kitchen and great room in a Las Vegas family home",
        cta: { href: "/homes-with-yards", label: "Homes with Yards" },
      },
      {
        kicker: "Summerlin · Henderson · North Las Vegas",
        heading: "Compare 3–5 Bedroom Homes in Clark County",
        headingLevel: 3,
        body: "Start with Summerlin villages near Downtown Summerlin and the 215, Henderson near Green Valley and Inspirada, or northwest options in Skye Canyon and Centennial Hills. Name the commute (Strip, Summerlin Hospital, Allegiant, Henderson Executive) and we filter the MLS.",
        image: "/images/hero/master-planned.jpg",
        alt: "Master-planned Las Vegas streets with parks and tiled-roof homes",
        reverse: true,
        tone: "cream",
        cta: {
          href: "/master-planned-communities",
          label: "Master-Planned Communities",
        },
      },
    ],
    faqs: [
      {
        q: "What counts as a Las Vegas family home on this site?",
        a: "Single-family houses, typically 3–5 bedrooms, with a private yard or patio. We also search single-story floor plans and pool homes when those are on your list.",
      },
      {
        q: "Which areas does Dr. Jan Duffy cover?",
        a: "Las Vegas, Henderson, Summerlin, The Ridges, Green Valley, Inspirada, Skye Canyon, Centennial Hills, Southern Highlands, Mountain's Edge, and North Las Vegas.",
      },
    ],
  },
  "homes-with-yards": {
    slug: "homes-with-yards",
    metadata: {
      title: "Las Vegas Homes with Yards | Dr. Jan Duffy",
      description: `Find Las Vegas homes with backyards, patios, and grass lots in Summerlin, Henderson, and Clark County. Call ${phone}.`,
    },
    h1: "Las Vegas Homes with Yards",
    subtitle:
      "Backyards, patios, and room to gather — from Summerlin villages to Henderson lots.",
    heroImage: "/images/hero/yards.jpg",
    heroCtas: [
      { href: "/home-search/listings", label: "Search Yards" },
      { href: "/pool-homes", label: "Pool Homes" },
    ],
    searchHtml: listingsSearch,
    sections: [
      {
        kicker: "Outdoor Living",
        heading: "Backyards, Patios, and Room to Gather",
        headingLevel: 2,
        body: "Desert lots range from compact patios with turf to quarter-acre grass. Covered patios matter more than the July slab. Tell us if you want grass, low-water landscaping, a side yard for storage, or a pad for a future pool.",
        image: "/images/sections/patio.jpg",
        alt: "Covered Las Vegas patio with desert landscaping and mountain view",
        cta: { href: "/contact", label: "Send Lot Criteria" },
      },
      {
        kicker: "Summerlin to Henderson",
        heading: "Grass Lots from Summerlin to Henderson",
        headingLevel: 3,
        body: "Northwest villages (Skye Canyon, Centennial Hills, Mountain's Edge) often trade larger side yards. Henderson’s Green Valley and Inspirada mix pocket parks with private patios. We measure usable yard — not just lot acres on the MLS printout.",
        image: "/images/hero/yards.jpg",
        alt: "Las Vegas backyard lawn with patio and desert mountains",
        reverse: true,
        tone: "cream",
      },
    ],
    faqs: [
      {
        q: "Do most Las Vegas listings include a yard?",
        a: "Single-family homes typically include a private rear yard. Size and cover vary by village and year built. Condos and many townhomes share common space instead.",
      },
      {
        q: "Can I add a pool later?",
        a: "Many lots can. We check setbacks, HOA rules, and utility easements before you write an offer so the pad is not a surprise.",
      },
    ],
  },
  "3-5-bedroom-homes": {
    slug: "3-5-bedroom-homes",
    metadata: {
      title: "3 to 5 Bedroom Homes in Las Vegas | Dr. Jan Duffy",
      description: `Search 3, 4, and 5 bedroom houses in Las Vegas, Summerlin, and Henderson. Floor plans with offices and lofts. Call ${phone}.`,
    },
    h1: "3 to 5 Bedroom Homes in Las Vegas",
    subtitle:
      "Floor plans with space for work and sleep — search by bedroom count across Clark County.",
    heroImage: "/images/hero/bedrooms.jpg",
    heroCtas: [
      { href: "/home-search/listings", label: "Filter Bedrooms" },
      { href: "/single-story-homes", label: "Single-Story" },
    ],
    searchHtml: listingsSearch,
    sections: [
      {
        kicker: "Floor Plans",
        heading: "Floor Plans with Space for Work and Sleep",
        headingLevel: 2,
        body: "A fourth bedroom is often the office. A fifth is a guest suite or loft. We search 3, 4, and 5 bedroom single-family homes and note downstairs bedrooms, jack-and-jill baths, and casitas so the count on the MLS matches how you will actually use the house.",
        image: "/images/hero/bedrooms.jpg",
        alt: "Wide Las Vegas family home exterior suggesting a 4-5 bedroom floor plan",
        cta: { href: "/buying-a-home-in-las-vegas", label: "Buying Guide" },
      },
      {
        kicker: "Clark County MLS",
        heading: "Search by Bedroom Count Across Clark County",
        headingLevel: 3,
        body: "Summerlin 89135 listings near Palo Verde High School and Downtown Summerlin often run 2,400–3,800 square feet. Henderson 89052 and 89074 mix 3-bedroom single-story with two-story 5-bedroom plans. We set the bedroom filter first, then price and zip.",
        image: "/images/sections/kitchen.jpg",
        alt: "Las Vegas kitchen island in a multi-bedroom family home",
        reverse: true,
        tone: "cream",
      },
    ],
    faqs: [
      {
        q: "Should a den count as a bedroom?",
        a: "Only if it meets egress and closet standards you actually need. We will not stretch the count to win a search.",
      },
      {
        q: "What square footage is typical for 4 bedrooms?",
        a: "It varies by village and year. Many 4-bedroom valley homes fall in the 1,800–3,200 square foot range. We pull comps for the zip you want, not a valley average.",
      },
    ],
  },
  "single-story-homes": {
    slug: "single-story-homes",
    metadata: {
      title: "Single-Story Homes in Las Vegas | Dr. Jan Duffy",
      description: `Ranch and one-level Las Vegas homes without stairs. Henderson, Summerlin, and valley-wide. Call ${phone}.`,
    },
    h1: "Single-Story Homes in Las Vegas",
    subtitle:
      "Ranch floor plans without stairs — one-level living in Henderson and Summerlin.",
    heroImage: "/images/hero/single-story.jpg",
    searchHtml: listingsSearch,
    sections: [
      {
        kicker: "One Level",
        heading: "Ranch Floor Plans Without Stairs",
        headingLevel: 2,
        body: "Single-story inventory is tighter than two-story. We watch new listings daily in Green Valley, Anthem-adjacent Henderson, Sun City-adjacent Summerlin edges (age-restricted communities are listed separately), and northwest ranch plans.",
        image: "/images/hero/single-story.jpg",
        alt: "Single-story ranch-style Las Vegas home with desert landscaping",
        cta: { href: "/55-plus-communities", label: "55+ Communities" },
      },
      {
        kicker: "Henderson · Summerlin",
        heading: "One-Level Living in Henderson and Summerlin",
        headingLevel: 3,
        body: "Ask for a true one-story — not a two-story with a downstairs primary and unused upstairs. We confirm the MLS story count on the listing and on the floor-plan PDF before you tour.",
        image: "/images/sections/patio.jpg",
        alt: "Single-level Las Vegas home patio opening to the yard",
        reverse: true,
        tone: "cream",
      },
    ],
    faqs: [
      {
        q: "Are single-story homes only in 55+ communities?",
        a: "No. Age-restricted communities have many one-level plans, but resale ranch homes exist throughout Henderson, Summerlin villages, and the northwest valley.",
      },
    ],
  },
  "pool-homes": {
    slug: "pool-homes",
    metadata: {
      title: "Las Vegas Homes with Pools | Dr. Jan Duffy",
      description: `Search Las Vegas and Henderson homes with private pools and spas. Call ${phone}.`,
    },
    h1: "Las Vegas Homes with Pools",
    subtitle:
      "Private pools and covered patios — filter MLS listings for pool and spa.",
    heroImage: "/images/hero/pool.jpg",
    searchHtml: listingsSearch,
    sections: [
      {
        kicker: "Private Water",
        heading: "Private Pools and Covered Patios",
        headingLevel: 2,
        body: "Local portals note that a large share of Las Vegas and Henderson single-family listings include a pool. We still filter explicitly: in-ground, spa, water feature, and whether the equipment is on a timer you can live with in August.",
        image: "/images/hero/pool.jpg",
        alt: "Las Vegas backyard swimming pool with stone deck and desert landscaping",
        cta: { href: "/home-search/listings", label: "Search Pool Homes" },
      },
      {
        kicker: "Henderson · Summerlin",
        heading: "Filter MLS Listings for Pool and Spa",
        headingLevel: 3,
        body: "Henderson historically shows more pool inventory than North Las Vegas. We pair pool + covered patio + bedroom count so you are not touring a pool with no shade. Ask about heater type, pebble vs plaster, and HOA equipment rules.",
        image: "/images/collections/pool.jpg",
        alt: "Twilight Las Vegas luxury pool with turquoise water",
        reverse: true,
        tone: "cream",
      },
    ],
    faqs: [
      {
        q: "Do pools always add value?",
        a: "They add buyers in this climate and they add maintenance. We price against recent pool and no-pool comps in the same village, not a flat premium.",
      },
    ],
  },
  "master-planned-communities": {
    slug: "master-planned-communities",
    metadata: {
      title: "Master-Planned Communities in Las Vegas | Dr. Jan Duffy",
      description: `Summerlin, Inspirada, Skye Canyon, Mountain's Edge, and more. Parks, trails, and 215 access. Call ${phone}.`,
    },
    h1: "Master-Planned Communities in Las Vegas",
    subtitle:
      "Parks, trails, and Downtown Summerlin access — Summerlin, Inspirada, Skye Canyon, and Mountain's Edge.",
    heroImage: "/images/hero/master-planned.jpg",
    searchHtml: listingsSearch,
    sections: [
      {
        kicker: "Villages & Amenities",
        heading: "Parks, Trails, and Downtown Summerlin Access",
        headingLevel: 2,
        body: "Summerlin is the largest master plan on the west side — 150-plus parks, trail connections to Red Rock Canyon, and Downtown Summerlin retail. Inspirada (Henderson) and Skye Canyon (northwest) are newer plans with pocket parks and HOA rec centers. We match HOA dues to the amenities you will actually use.",
        image: "/images/hero/master-planned.jpg",
        alt: "Aerial-style view of a Las Vegas master-planned community with parks",
        cta: { href: "/neighborhoods", label: "All Neighborhoods" },
      },
      {
        kicker: "Named Communities",
        heading: "Summerlin, Inspirada, Skye Canyon, and Mountain's Edge",
        headingLevel: 3,
        body: "Name the village, not just the city. The Ridges is not The Paseos. Inspirada is not Green Valley Ranch. Commute along the 215 Beltway vs I-15 changes which plan actually fits a Strip, airport, or Henderson Executive schedule.",
        image: "/images/neighborhoods/summerlin.jpg",
        alt: "Summerlin Las Vegas home with Red Rock mountains behind",
        reverse: true,
        tone: "cream",
      },
    ],
    faqs: [
      {
        q: "Which master plan is closest to the 215?",
        a: "Most Summerlin villages, Skye Canyon, Centennial Hills, and Mountain's Edge sit on or near the 215. Henderson plans (Inspirada, Green Valley) lean on I-215 east and I-15 south. We time the drive at your hour, not noon.",
      },
    ],
  },
  "open-houses": {
    slug: "open-houses",
    metadata: {
      title: "Las Vegas Open Houses | Dr. Jan Duffy",
      description: `This weekend’s Las Vegas and Henderson open houses. Tour with Dr. Jan Duffy. Call ${phone}.`,
    },
    h1: "Las Vegas Open Houses",
    subtitle:
      "Walk through homes this weekend — get times for Summerlin and Henderson showings.",
    heroImage: "/images/hero/open-houses.jpg",
    heroCtas: [
      { href: "/contact", label: "Request This Weekend’s List" },
      { href: "/home-search/listings", label: "See Active Listings" },
    ],
    searchHtml: listingsSearch,
    sections: [
      {
        kicker: "This Weekend",
        heading: "Walk Through Homes This Weekend",
        headingLevel: 2,
        body: "Open houses are useful for a first pass. Offers still need a private showing, a seller disclosure read, and a number that matches the last three closings. Text (702) 222-1964 with zip, bedrooms, and Saturday or Sunday — we send a short list, not a flyer dump.",
        image: "/images/hero/open-houses.jpg",
        alt: "Open house sign on a Las Vegas suburban lawn",
        cta: { href: "/contact", label: "Get Open House Times" },
      },
      {
        kicker: "Summerlin · Henderson",
        heading: "Get Times for Summerlin and Henderson Showings",
        headingLevel: 3,
        body: "Broker opens and public opens post on the GLVAR MLS. We add private windows when the listing agent will allow it — useful when you are flying in from California for one afternoon.",
        image: "/images/hero/buying.jpg",
        alt: "Las Vegas home front entry ready for a showing",
        reverse: true,
        tone: "cream",
      },
    ],
    faqs: [
      {
        q: "Do I need an agent to attend an open house?",
        a: "You can walk in. If you want representation on the offer, call first so we register you and avoid a dual-agency surprise.",
      },
    ],
  },
  "buying-a-home-in-las-vegas": {
    slug: "buying-a-home-in-las-vegas",
    metadata: {
      title: "Buying a Home in Las Vegas | Dr. Jan Duffy",
      description: `How to buy a Las Vegas home in 2026: criteria, tours, offer, escrow. Relocation and first purchase. Call ${phone}.`,
    },
    h1: "Buying a Home in Las Vegas",
    subtitle:
      "From offer to keys with a local agent — relocation, first purchase, and move-up paths.",
    heroImage: "/images/hero/buying.jpg",
    heroCtas: [
      { href: "/buyers", label: "Buyer Services" },
      { href: "/relocation", label: "Relocation" },
    ],
    searchHtml: listingsSearch,
    sections: [
      {
        kicker: "The Process",
        heading: "From Offer to Keys with a Local Agent",
        headingLevel: 2,
        body: "Write criteria (zip, bedrooms, yard, pool, stairs, commute). Tour a short list. Offer on comps, not asking price. Inspect, appraise, close. Nevada uses a 30-day-ish escrow more often than a 21-day California sprint — we calendar it so your lease or sale lines up.",
        image: "/images/hero/buying.jpg",
        alt: "Welcoming front entry of a Las Vegas home for sale",
        cta: {
          href: "/buyer-tenant-representation",
          label: "Buyer Representation",
        },
      },
      {
        kicker: "Paths",
        heading: "Relocation, First Purchase, and Move-Up Paths",
        headingLevel: 3,
        body: "California relocators often start in Summerlin or Henderson for 215 access and yard size. First purchases usually land in the 3-bedroom, 1,600–2,200 square foot band. Move-up buyers trade a northwest two-story for a Summerlin village or a Henderson lot. We run the numbers on both houses.",
        image: "/images/hero/buyer-rep.jpg",
        alt: "House keys on a table with a Las Vegas home in the background",
        reverse: true,
        tone: "cream",
      },
    ],
    faqs: [
      {
        q: "Do I need a Nevada agent if I already have a California agent?",
        a: "Yes for the Nevada contract. We partner on referrals so your originating advisor stays in the loop.",
      },
    ],
  },
  "selling-your-las-vegas-home": {
    slug: "selling-your-las-vegas-home",
    metadata: {
      title: "Selling Your Las Vegas Home | Dr. Jan Duffy",
      description: `Price, prep, and market a Las Vegas home with GLVAR comps. Dr. Jan Duffy, License ${agentInfo.license}. Call ${phone}.`,
    },
    h1: "Selling Your Las Vegas Home",
    subtitle:
      "Pricing, prep, and targeted marketing — a comp-based strategy for your zip code.",
    heroImage: "/images/hero/selling.jpg",
    heroCtas: [
      { href: "/home-valuation", label: "Home Valuation" },
      { href: "/listing-agency", label: "Listing Agency" },
    ],
    sections: [
      {
        kicker: "Pricing",
        heading: "Pricing, Prep, and Targeted Marketing",
        headingLevel: 2,
        body: `LVR’s August 2026 valley median is ${marketStats.lasVegas.medianPriceFormatted} with ${marketStats.lasVegas.daysOnMarket} days on market. Your number is the last three closings on your street, not that median. We pull GLVAR comps, recommend paint and landscape, then launch on this site and the MLS.`,
        image: "/images/hero/selling.jpg",
        alt: "Twilight curb appeal of a Las Vegas home staged for sale",
        cta: { href: "/listing-agency", label: "See the Listing Process" },
      },
      {
        kicker: "Your Zip Code",
        heading: "Get a Comp-Based Strategy for Your Zip Code",
        headingLevel: 3,
        body: "89134 (Sun City-adjacent Summerlin), 89135 (Summerlin South), 89052 (Henderson), 89131 (Centennial Hills) do not price the same. Send the address. We return a range, a prep list, and a launch week — not a portal estimate.",
        image: "/images/hero/listing-agency.jpg",
        alt: "Staged Las Vegas living room prepared for listing photos",
        reverse: true,
        tone: "cream",
      },
    ],
    faqs: [
      {
        q: "How long will my home take to sell?",
        a: `Valley-wide DOM was ${marketStats.lasVegas.daysOnMarket} days in ${marketStats.lastUpdated}. Well-priced, photographed listings in Summerlin and Henderson can move faster. Overpriced listings sit. We will say so.`,
      },
    ],
  },
  reviews: {
    slug: "reviews",
    metadata: {
      title: "Client Reviews | Dr. Jan Duffy | Las Vegas Family Homes",
      description: `Read Google reviews for Dr. Jan Duffy, ${agentInfo.brokerage}. ${siteConfig.name}. Call ${phone}.`,
    },
    h1: "Client Reviews for Dr. Jan Duffy",
    subtitle:
      "4.9 stars from buyers and sellers — read Google reviews and share yours.",
    heroImage: "/images/hero/reviews.jpg",
    compact: true,
    heroCtas: [
      { href: officeInfo.googleReviews, label: "View Google Reviews" },
      { href: "/contact", label: "Work With Us" },
    ],
    sections: [
      {
        kicker: "Google",
        heading: "4.9 Stars from Buyers and Sellers",
        headingLevel: 2,
        body: `${agentInfo.name} is a REALTOR® with ${agentInfo.brokerage}, License ${agentInfo.license}. Client ratings live on Google Business Profile. We do not ghost-write testimonials. Read the source, then call ${phone} if the work matches what you need.`,
        image: "/images/hero/reviews.jpg",
        alt: "Patio conversation setting overlooking a Las Vegas backyard pool",
        cta: { href: officeInfo.googleReviews, label: "Open Google Reviews" },
      },
      {
        kicker: "NAP",
        heading: "Read Google Reviews and Share Yours",
        headingLevel: 3,
        body: `Office: ${nap}. Hours: ${officeInfo.hours.weekday}; ${officeInfo.hours.weekend}; ${officeInfo.hours.sunday}. After closing, Google is the right place to leave the review so the next buyer sees the same NAP.`,
        image: "/images/hero/about.jpg",
        alt: "Professional Las Vegas real estate office interior",
        reverse: true,
        tone: "cream",
      },
    ],
    faqs: [
      {
        q: "Where should I leave a review?",
        a: "Google Business Profile is the primary public review surface. It should match this site’s name, address, and (702) 222-1964.",
      },
    ],
  },
};

export const familyHomeSlugs = Object.keys(familyHomePages);
