/**
 * Luxury Presence–style Home Search SEO catalog.
 * URL pattern cloned from /home-search/listings/v2/{state}/{location}/{property-type}
 * Inventory is RealScout (GLVAR), not Luxury Presence MLS.
 */

import type { Metadata } from "next";
import {
  agentInfo,
  marketStats,
  officeInfo,
  siteConfig,
} from "@/lib/site-config";
import { getOgImage } from "@/lib/seo";

export const REALSCOUT_AGENT_ID = "QWdlbnQtMjI1MDUw";
export const REALSCOUT_SEARCH_URL = "http://drjanduffy.realscout.com/";
export const HOME_SEARCH_STATE = "nv" as const;
export const HOME_SEARCH_BASE_PATH = "/home-search/listings";

export type HomeSearchLocationKind = "city" | "community" | "zip";

export type HomeSearchPropertyTypeSlug =
  | "single-family"
  | "multi-family"
  | "condo"
  | "townhouse"
  | "land"
  | "manufactured"
  | "commercial"
  | "co-op"
  | "other";

export type HomeSearchLocation = {
  slug: string;
  name: string;
  kind: HomeSearchLocationKind;
  mapQuery: string;
  mapZoom: number;
  neighborhoodHref?: string;
  blurb: string;
};

export type HomeSearchPropertyType = {
  slug: HomeSearchPropertyTypeSlug;
  label: string;
  shortLabel: string;
  h1Noun: string;
  realscoutTypes: string;
  blurb: string;
};

export type HomeSearchConfig = {
  state: typeof HOME_SEARCH_STATE;
  location: HomeSearchLocation;
  propertyType: HomeSearchPropertyType | null;
  seoPath: string[];
  path: string;
  h1: string;
  title: string;
  description: string;
  locationChip: string;
  propertyTypeChip: string;
  realscoutTypes: string;
  listingStatus: "For Sale";
  mapEmbedUrl: string;
  intro: string;
  faqs: { question: string; answer: string }[];
};

export const HOME_SEARCH_PROPERTY_TYPES: Record<
  HomeSearchPropertyTypeSlug,
  HomeSearchPropertyType
> = {
  "single-family": {
    slug: "single-family",
    label: "Single-family",
    shortLabel: "Single-family",
    h1Noun: "Single-Family Homes",
    realscoutTypes: ",SFR",
    blurb:
      "Detached houses with 3–5 bedrooms, private yards, and living space across the Las Vegas Valley.",
  },
  "multi-family": {
    slug: "multi-family",
    label: "Multi-family",
    shortLabel: "Multi-family",
    h1Noun: "Multi-Family Properties",
    realscoutTypes: ",MF",
    blurb:
      "Duplexes, triplexes, and 2–4 unit buildings listed for sale — useful for rental income or house-hacking.",
  },
  condo: {
    slug: "condo",
    label: "Condo",
    shortLabel: "Condo",
    h1Noun: "Condos",
    realscoutTypes: ",TC",
    blurb:
      "Condominiums with shared amenities and HOA dues. RealScout groups condos with townhomes in the MLS feed.",
  },
  townhouse: {
    slug: "townhouse",
    label: "Townhouse",
    shortLabel: "Townhouse",
    h1Noun: "Townhouses",
    realscoutTypes: ",TC",
    blurb:
      "Townhomes with attached walls and private entries. RealScout groups townhomes with condos in the MLS feed.",
  },
  land: {
    slug: "land",
    label: "Land",
    shortLabel: "Land",
    h1Noun: "Land and Lots",
    realscoutTypes: ",LL",
    blurb:
      "Vacant lots and land listings. Confirm zoning, utilities, and HOA rules with Dr. Jan before you write an offer.",
  },
  manufactured: {
    slug: "manufactured",
    label: "Manufactured",
    shortLabel: "Manufactured",
    h1Noun: "Manufactured Homes",
    realscoutTypes: ",MH",
    blurb:
      "Manufactured and mobile homes on owned or leased lots. Confirm park rules, lot rent, and financing before touring.",
  },
  commercial: {
    slug: "commercial",
    label: "Commercial",
    shortLabel: "Commercial",
    h1Noun: "Commercial Properties",
    realscoutTypes: ",SFR,MF,TC",
    blurb:
      "Office, retail, and mixed-use searches run through RealScout and Dr. Jan’s commercial referrals. Call for current inventory.",
  },
  "co-op": {
    slug: "co-op",
    label: "Co-op",
    shortLabel: "Co-op",
    h1Noun: "Co-Op Properties",
    realscoutTypes: ",TC",
    blurb:
      "Nevada has very few residential co-ops. This page shows townhomes and condos as the closest MLS match.",
  },
  other: {
    slug: "other",
    label: "Other",
    shortLabel: "Other",
    h1Noun: "Other Property Types",
    realscoutTypes: ",SFR,MF,TC",
    blurb:
      "Listings that do not fit the standard house, condo, or multi-family buckets. Refine with RealScout filters.",
  },
};

export const HOME_SEARCH_PROPERTY_TYPE_ORDER: HomeSearchPropertyTypeSlug[] = [
  "single-family",
  "multi-family",
  "condo",
  "townhouse",
  "land",
  "manufactured",
  "commercial",
  "co-op",
  "other",
];

export const HOME_SEARCH_LOCATIONS: Record<string, HomeSearchLocation> = {
  "las-vegas": {
    slug: "las-vegas",
    name: "Las Vegas",
    kind: "city",
    mapQuery: "Las Vegas, NV",
    mapZoom: 11,
    blurb:
      "Valley-wide search covering Clark County listings with live MLS data through RealScout.",
  },
  henderson: {
    slug: "henderson",
    name: "Henderson",
    kind: "city",
    mapQuery: "Henderson, NV",
    mapZoom: 12,
    neighborhoodHref: "/neighborhoods/henderson",
    blurb:
      "Nevada’s second-largest city — Green Valley, Inspirada, Anthem, and Lake Las Vegas corridors.",
  },
  "north-las-vegas": {
    slug: "north-las-vegas",
    name: "North Las Vegas",
    kind: "city",
    mapQuery: "North Las Vegas, NV",
    mapZoom: 12,
    neighborhoodHref: "/neighborhoods/north-las-vegas",
    blurb:
      "North valley inventory including Aliante, Eldorado, and newer construction along I-15.",
  },
  summerlin: {
    slug: "summerlin",
    name: "Summerlin",
    kind: "community",
    mapQuery: "Summerlin, Las Vegas, NV",
    mapZoom: 13,
    neighborhoodHref: "/neighborhoods/summerlin",
    blurb:
      "Master-planned west valley villages with parks, trails, and Downtown Summerlin retail.",
  },
  "green-valley": {
    slug: "green-valley",
    name: "Green Valley",
    kind: "community",
    mapQuery: "Green Valley, Henderson, NV",
    mapZoom: 13,
    neighborhoodHref: "/neighborhoods/green-valley",
    blurb:
      "Henderson’s mature Green Valley villages near The District, parks, and the 215 beltway.",
  },
  "centennial-hills": {
    slug: "centennial-hills",
    name: "Centennial Hills",
    kind: "community",
    mapQuery: "Centennial Hills, Las Vegas, NV",
    mapZoom: 13,
    neighborhoodHref: "/neighborhoods/centennial-hills",
    blurb:
      "Northwest Las Vegas near Floyd Lamb Park, mountain trailheads, and the 215.",
  },
  "skye-canyon": {
    slug: "skye-canyon",
    name: "Skye Canyon",
    kind: "community",
    mapQuery: "Skye Canyon, Las Vegas, NV",
    mapZoom: 14,
    neighborhoodHref: "/neighborhoods/skye-canyon",
    blurb:
      "Northwest master-planned community with Skye Center amenities and mountain views.",
  },
  inspirada: {
    slug: "inspirada",
    name: "Inspirada",
    kind: "community",
    mapQuery: "Inspirada, Henderson, NV",
    mapZoom: 14,
    neighborhoodHref: "/neighborhoods/inspirada",
    blurb:
      "Henderson master-planned villages with resort pools, trails, and newer floor plans.",
  },
  "mountains-edge": {
    slug: "mountains-edge",
    name: "Mountain's Edge",
    kind: "community",
    mapQuery: "Mountain's Edge, Las Vegas, NV",
    mapZoom: 13,
    neighborhoodHref: "/neighborhoods/mountains-edge",
    blurb:
      "Southwest Las Vegas master-planned community near Exploration Peak and the 215.",
  },
  "southern-highlands": {
    slug: "southern-highlands",
    name: "Southern Highlands",
    kind: "community",
    mapQuery: "Southern Highlands, Las Vegas, NV",
    mapZoom: 13,
    neighborhoodHref: "/neighborhoods/southern-highlands",
    blurb:
      "South valley golf community with mountain views and larger lot inventory.",
  },
  "the-ridges": {
    slug: "the-ridges",
    name: "The Ridges",
    kind: "community",
    mapQuery: "The Ridges Summerlin, Las Vegas, NV",
    mapZoom: 14,
    neighborhoodHref: "/neighborhoods/the-ridges",
    blurb:
      "Guard-gated Summerlin custom estates near Bear’s Best and Red Rock Canyon.",
  },
  "89134": {
    slug: "89134",
    name: "89134",
    kind: "zip",
    mapQuery: "89134",
    mapZoom: 13,
    blurb:
      "ZIP 89134 covers the west valley around W Lake Mead Blvd, including Dr. Jan’s BHHS office.",
  },
  "89135": {
    slug: "89135",
    name: "89135",
    kind: "zip",
    mapQuery: "89135",
    mapZoom: 13,
    blurb: "ZIP 89135 covers Summerlin South and nearby west-valley streets.",
  },
  "89138": {
    slug: "89138",
    name: "89138",
    kind: "zip",
    mapQuery: "89138",
    mapZoom: 13,
    blurb: "ZIP 89138 covers Summerlin West villages near Red Rock Canyon.",
  },
  "89144": {
    slug: "89144",
    name: "89144",
    kind: "zip",
    mapQuery: "89144",
    mapZoom: 13,
    blurb: "ZIP 89144 covers central Summerlin villages and trail corridors.",
  },
  "89117": {
    slug: "89117",
    name: "89117",
    kind: "zip",
    mapQuery: "89117",
    mapZoom: 13,
    blurb: "ZIP 89117 covers Spring Valley west of the Strip toward Summerlin.",
  },
  "89131": {
    slug: "89131",
    name: "89131",
    kind: "zip",
    mapQuery: "89131",
    mapZoom: 13,
    blurb: "ZIP 89131 covers Centennial Hills and the northwest 215 corridor.",
  },
  "89166": {
    slug: "89166",
    name: "89166",
    kind: "zip",
    mapQuery: "89166",
    mapZoom: 13,
    blurb: "ZIP 89166 covers Skye Canyon and surrounding northwest villages.",
  },
  "89141": {
    slug: "89141",
    name: "89141",
    kind: "zip",
    mapQuery: "89141",
    mapZoom: 13,
    blurb: "ZIP 89141 covers Mountain's Edge and southwest valley streets.",
  },
  "89139": {
    slug: "89139",
    name: "89139",
    kind: "zip",
    mapQuery: "89139",
    mapZoom: 13,
    blurb: "ZIP 89139 covers Enterprise and the southwest 215/I-15 junction.",
  },
  "89148": {
    slug: "89148",
    name: "89148",
    kind: "zip",
    mapQuery: "89148",
    mapZoom: 13,
    blurb:
      "ZIP 89148 covers southwest Las Vegas near Rhodes Ranch and the 215.",
  },
  "89129": {
    slug: "89129",
    name: "89129",
    kind: "zip",
    mapQuery: "89129",
    mapZoom: 13,
    blurb: "ZIP 89129 covers the northwest valley near Lone Mountain.",
  },
  "89113": {
    slug: "89113",
    name: "89113",
    kind: "zip",
    mapQuery: "89113",
    mapZoom: 13,
    blurb: "ZIP 89113 covers Spring Valley south toward the 215 beltway.",
  },
  "89052": {
    slug: "89052",
    name: "89052",
    kind: "zip",
    mapQuery: "89052",
    mapZoom: 13,
    blurb: "ZIP 89052 covers Henderson near St. Rose and Anthem Hills.",
  },
  "89074": {
    slug: "89074",
    name: "89074",
    kind: "zip",
    mapQuery: "89074",
    mapZoom: 13,
    blurb: "ZIP 89074 covers Green Valley and The District in Henderson.",
  },
  "89012": {
    slug: "89012",
    name: "89012",
    kind: "zip",
    mapQuery: "89012",
    mapZoom: 13,
    blurb: "ZIP 89012 covers Green Valley South and nearby Henderson streets.",
  },
  "89011": {
    slug: "89011",
    name: "89011",
    kind: "zip",
    mapQuery: "89011",
    mapZoom: 13,
    blurb: "ZIP 89011 covers Henderson near Lake Las Vegas and the 95/215.",
  },
  "89044": {
    slug: "89044",
    name: "89044",
    kind: "zip",
    mapQuery: "89044",
    mapZoom: 13,
    blurb: "ZIP 89044 covers Inspirada and southern Henderson villages.",
  },
  "89084": {
    slug: "89084",
    name: "89084",
    kind: "zip",
    mapQuery: "89084",
    mapZoom: 13,
    blurb:
      "ZIP 89084 covers Aliante and north valley streets in North Las Vegas.",
  },
  "89031": {
    slug: "89031",
    name: "89031",
    kind: "zip",
    mapQuery: "89031",
    mapZoom: 13,
    blurb: "ZIP 89031 covers central North Las Vegas near Craig and the 215.",
  },
  "89032": {
    slug: "89032",
    name: "89032",
    kind: "zip",
    mapQuery: "89032",
    mapZoom: 13,
    blurb: "ZIP 89032 covers North Las Vegas near Cheyenne and the 95.",
  },
};

export const HOME_SEARCH_LOCATION_ORDER = Object.keys(HOME_SEARCH_LOCATIONS);

export const DEFAULT_HOME_SEARCH_PATH = [
  HOME_SEARCH_STATE,
  "las-vegas",
  "single-family",
] as const;

function isPropertyTypeSlug(
  value: string,
): value is HomeSearchPropertyTypeSlug {
  return value in HOME_SEARCH_PROPERTY_TYPES;
}

export function buildHomeSearchPath(
  locationSlug: string,
  propertyTypeSlug?: HomeSearchPropertyTypeSlug | null,
): string {
  const parts = [HOME_SEARCH_BASE_PATH, "v2", HOME_SEARCH_STATE, locationSlug];
  if (propertyTypeSlug) {
    parts.push(propertyTypeSlug);
  }
  return parts.join("/");
}

export function parseSeoPath(
  seoPath: string[] | undefined,
): HomeSearchConfig | null {
  if (!seoPath || seoPath.length < 2 || seoPath.length > 3) {
    return null;
  }

  const [state, locationSlug, typeSlug] = seoPath;
  if (state !== HOME_SEARCH_STATE) {
    return null;
  }

  const location = HOME_SEARCH_LOCATIONS[locationSlug];
  if (!location) {
    return null;
  }

  if (typeSlug) {
    if (!isPropertyTypeSlug(typeSlug)) {
      return null;
    }
    return buildHomeSearchConfig(
      location,
      HOME_SEARCH_PROPERTY_TYPES[typeSlug],
    );
  }

  return buildHomeSearchConfig(location, null);
}

export function getDefaultHomeSearchConfig(): HomeSearchConfig {
  return buildHomeSearchConfig(
    HOME_SEARCH_LOCATIONS["las-vegas"],
    HOME_SEARCH_PROPERTY_TYPES["single-family"],
  );
}

export function generateAllSeoPaths(): string[][] {
  const paths: string[][] = [];
  for (const locationSlug of HOME_SEARCH_LOCATION_ORDER) {
    paths.push([HOME_SEARCH_STATE, locationSlug]);
    for (const typeSlug of HOME_SEARCH_PROPERTY_TYPE_ORDER) {
      paths.push([HOME_SEARCH_STATE, locationSlug, typeSlug]);
    }
  }
  return paths;
}

export function generateAllHomeSearchUrls(): string[] {
  return [
    "/home-search",
    HOME_SEARCH_BASE_PATH,
    ...generateAllSeoPaths().map(
      (segments) => `${HOME_SEARCH_BASE_PATH}/v2/${segments.join("/")}`,
    ),
  ];
}

export function buildHomeSearchConfig(
  location: HomeSearchLocation,
  propertyType: HomeSearchPropertyType | null,
): HomeSearchConfig {
  const seoPath = propertyType
    ? [HOME_SEARCH_STATE, location.slug, propertyType.slug]
    : [HOME_SEARCH_STATE, location.slug];
  const path = `${HOME_SEARCH_BASE_PATH}/v2/${seoPath.join("/")}`;
  const place = locationLabel(location);
  const noun = propertyType?.h1Noun ?? "Real Estate & Homes";
  const h1 = `${place} ${noun} for Sale`;
  const realscoutTypes = propertyType?.realscoutTypes ?? ",SFR,MF,TC";
  const intro = buildIntro(location, propertyType);
  const description = buildDescription(location, propertyType, h1);
  const title = `${h1} | Dr. Jan Duffy, REALTOR®`;

  return {
    state: HOME_SEARCH_STATE,
    location,
    propertyType,
    seoPath,
    path,
    h1,
    title,
    description,
    locationChip: `${place}, US`,
    propertyTypeChip: propertyType ? `Property type · 1` : "All property types",
    realscoutTypes,
    listingStatus: "For Sale",
    mapEmbedUrl: googleMapEmbed(location.mapQuery, location.mapZoom),
    intro,
    faqs: buildFaqs(location, propertyType),
  };
}

export function locationLabel(location: HomeSearchLocation): string {
  if (location.kind === "zip") {
    return `${location.name}, NV`;
  }
  return `${location.name}, NV`;
}

export function googleMapEmbed(query: string, zoom: number): string {
  const q = encodeURIComponent(query);
  return `https://maps.google.com/maps?q=${q}&t=&z=${zoom}&ie=UTF8&iwloc=&output=embed`;
}

export function nearbyLocationLinks(
  current: HomeSearchLocation,
  propertyType: HomeSearchPropertyType | null,
): { href: string; label: string }[] {
  return HOME_SEARCH_LOCATION_ORDER.filter((slug) => {
    const loc = HOME_SEARCH_LOCATIONS[slug];
    return loc.kind !== "zip" && loc.slug !== current.slug;
  })
    .slice(0, 8)
    .map((slug) => {
      const loc = HOME_SEARCH_LOCATIONS[slug];
      return {
        href: buildHomeSearchPath(loc.slug, propertyType?.slug ?? null),
        label: loc.name,
      };
    });
}

export function propertyTypeLinks(
  location: HomeSearchLocation,
  current: HomeSearchPropertyType | null,
): { href: string; label: string }[] {
  const links: { href: string; label: string }[] = [
    {
      href: buildHomeSearchPath(location.slug, null),
      label: "All property types",
    },
  ];
  for (const slug of HOME_SEARCH_PROPERTY_TYPE_ORDER) {
    if (current?.slug === slug) continue;
    const type = HOME_SEARCH_PROPERTY_TYPES[slug];
    links.push({
      href: buildHomeSearchPath(location.slug, slug),
      label: type.label,
    });
  }
  return links;
}

export function buildHomeSearchMetadata(config: HomeSearchConfig): Metadata {
  const canonicalUrl = siteConfig.url;
  const pageUrl = `${canonicalUrl}${config.path}`;
  const ogImage = getOgImage(canonicalUrl);

  return {
    metadataBase: new URL(canonicalUrl),
    title: config.title,
    description: config.description,
    keywords: [
      config.h1,
      `${config.location.name} homes for sale`,
      `${config.location.name} real estate`,
      "Las Vegas MLS",
      "Dr. Jan Duffy",
      "Berkshire Hathaway HomeServices Nevada Properties",
    ],
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: pageUrl,
      siteName: siteConfig.name,
      title: config.h1,
      description: config.description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: config.h1,
      description: config.description,
      images: [ogImage.url],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}

export function buildHomeSearchJsonLd(config: HomeSearchConfig) {
  const pageUrl = `${siteConfig.url}${config.path}`;
  const breadcrumbs = [
    { name: "Home", url: siteConfig.url },
    { name: "Home Search", url: `${siteConfig.url}/home-search` },
    {
      name: "Listings",
      url: `${siteConfig.url}${HOME_SEARCH_BASE_PATH}`,
    },
    { name: config.location.name, url: pageUrl },
  ];

  const agent = {
    "@context": "https://schema.org",
    "@type": "RealEstateAgent",
    "@id": `${siteConfig.url}#organization`,
    name: `${agentInfo.name} - ${agentInfo.brokerage}`,
    url: siteConfig.url,
    telephone: agentInfo.phoneE164,
    email: agentInfo.email,
    image: `${siteConfig.url}/images/dr-jan-duffy.jpg`,
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
    areaServed: ["Las Vegas", "Henderson", "Summerlin", "North Las Vegas"],
  };

  const webPage = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: config.h1,
    description: config.description,
    url: pageUrl,
    isPartOf: { "@id": `${siteConfig.url}#website` },
    about: {
      "@type": "Place",
      name: locationLabel(config.location),
    },
    provider: { "@id": `${siteConfig.url}#organization` },
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: config.faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const breadcrumb = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: breadcrumbs.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };

  return [agent, webPage, faq, breadcrumb];
}

function buildIntro(
  location: HomeSearchLocation,
  propertyType: HomeSearchPropertyType | null,
): string {
  const typeLine =
    propertyType?.blurb ??
    "All property types currently listed for sale — houses, multi-family, townhomes, and condos.";
  const median =
    propertyType?.slug === "single-family"
      ? ` The valley single-family median was ${marketStats.lasVegas.medianPriceFormatted} in ${marketStats.lastUpdated} (${marketStats.source}), with ${marketStats.lasVegas.daysOnMarket} median days on market.`
      : "";
  return `${typeLine} ${location.blurb}${median} Listings update through RealScout. Call ${agentInfo.phone} to tour.`;
}

function buildDescription(
  location: HomeSearchLocation,
  propertyType: HomeSearchPropertyType | null,
  h1: string,
): string {
  const typeBit = propertyType
    ? propertyType.blurb
    : "Browse houses, multi-family, townhomes, and condos.";
  return `${h1}. ${typeBit} Live MLS via RealScout. ${agentInfo.name}, ${agentInfo.brokerage}. Call ${agentInfo.phone}.`;
}

function buildFaqs(
  location: HomeSearchLocation,
  propertyType: HomeSearchPropertyType | null,
): { question: string; answer: string }[] {
  const place = locationLabel(location);
  const typeName = propertyType?.label.toLowerCase() ?? "homes";
  return [
    {
      question: `How do I search ${typeName} for sale in ${place}?`,
      answer: `Use the RealScout widgets on this page to filter price, beds, and baths, or open the full map search at RealScout. ${agentInfo.name} can also run a saved search and send matches. Call ${agentInfo.phone}.`,
    },
    {
      question: `Are these ${place} listings live MLS?`,
      answer: `Yes. Cards and search results come from RealScout’s GLVAR feed, not a custom listing database. Information is deemed reliable but not guaranteed. Confirm details before you write an offer.`,
    },
    {
      question: `Can I save this ${place} search?`,
      answer: `Save Search opens RealScout, where you create an account and get listing alerts. That is RealScout’s native alert system — we do not duplicate it.`,
    },
    {
      question: `Who is the listing agent for these ${place} properties?`,
      answer: `${agentInfo.name} with ${agentInfo.brokerage} (License ${agentInfo.license}) can represent you as a buyer at no extra listing-side cost. Office: ${officeInfo.address.full}. Hours: ${officeInfo.hours.weekday}; ${officeInfo.hours.weekend}; ${officeInfo.hours.sunday}.`,
    },
  ];
}

export function getNamedLocations(): HomeSearchLocation[] {
  return HOME_SEARCH_LOCATION_ORDER.map(
    (slug) => HOME_SEARCH_LOCATIONS[slug],
  ).filter((loc) => loc.kind !== "zip");
}

export function getZipLocations(): HomeSearchLocation[] {
  return HOME_SEARCH_LOCATION_ORDER.map(
    (slug) => HOME_SEARCH_LOCATIONS[slug],
  ).filter((loc) => loc.kind === "zip");
}
