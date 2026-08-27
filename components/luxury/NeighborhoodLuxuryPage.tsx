import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LuxuryShell from "@/components/luxury/LuxuryShell";
import PageHero from "@/components/luxury/PageHero";
import { REALSCOUT_AGENT_ID } from "@/lib/home-search";
import { MlsDisclaimer } from "@/components/luxury/NapBlock";
import { agentInfo, marketStats } from "@/lib/site-config";

export type NeighborhoodLuxuryContent = {
  slug: string;
  name: string;
  h1: string;
  h2: string;
  h3: string;
  subtitle: string;
  heroImage: string;
  sectionImage: string;
  body: string;
  schoolNote: string;
  commute: string;
  searchHref: string;
  median: string;
};

export const neighborhoodLuxury: Record<string, NeighborhoodLuxuryContent> = {
  summerlin: {
    slug: "summerlin",
    name: "Summerlin",
    h1: "Summerlin Family Homes",
    h2: "Parks, Trails, and Downtown Summerlin Access",
    h3: "3–5 Bedroom Houses Near the 215 and Red Rock",
    subtitle:
      "Master-planned villages on the west side — yards, pools, and 215 Beltway access.",
    heroImage: "/images/neighborhoods/summerlin.jpg",
    sectionImage: "/images/hero/master-planned.jpg",
    body: `Summerlin is a Howard Hughes master plan with 150-plus parks and trail links toward Red Rock Canyon. Village mix median in site data: ${marketStats.summerlin.medianPriceFormatted}. Shop 3–5 bedroom single-family homes near Downtown Summerlin retail and the 215.`,
    schoolNote:
      "Nearby school names often include Palo Verde High School, Victoria Fertitta Middle School, and Judy & John L. Goolsby Elementary — confirm the assigned campus on the listing.",
    commute:
      "Most villages sit 10–20 minutes from the Las Vegas Strip via the 215, depending on hour and village.",
    searchHref: "/home-search/listings/v2/nv/summerlin/single-family",
    median: marketStats.summerlin.medianPriceFormatted,
  },
  henderson: {
    slug: "henderson",
    name: "Henderson",
    h1: "Henderson Family Homes",
    h2: "Green Valley, Inspirada, and Lake Las Vegas Access",
    h3: "Yards and Pools Southeast of the Strip",
    subtitle:
      "Single-family houses in Henderson — lots, pools, and I-215 / I-15 routes.",
    heroImage: "/images/neighborhoods/henderson.jpg",
    sectionImage: "/images/collections/lake.jpg",
    body: `Henderson sits southeast of the Strip with Green Valley, Inspirada, Anthem-adjacent streets, and Lake Las Vegas. City median in site data: ${marketStats.henderson.medianPriceFormatted}. Filter for 3–5 bedrooms and a private yard.`,
    schoolNote:
      "Campus names you will see on listings include Coronado High School and other Clark County School District sites — always verify the assigned school on the MLS printout.",
    commute:
      "Henderson to the Strip is typically 20–35 minutes via I-215 or I-15, longer at event peaks.",
    searchHref: "/home-search/listings/v2/nv/henderson/single-family",
    median: marketStats.henderson.medianPriceFormatted,
  },
  "green-valley": {
    slug: "green-valley",
    name: "Green Valley",
    h1: "Green Valley Family Homes",
    h2: "Established Streets and Private Yards in Henderson",
    h3: "3–5 Bedroom Resale Homes with Patio Space",
    subtitle:
      "Mature trees, sidewalks, and single-family floor plans in Green Valley.",
    heroImage: "/images/neighborhoods/green-valley.jpg",
    sectionImage: "/images/hero/yards.jpg",
    body: "Green Valley is an established Henderson plan with a mix of 1980s–2000s single-family homes. Look for covered patios and usable rear yards rather than HOA-only turf.",
    schoolNote:
      "Listings cite Clark County School District campuses by name — match the street to the current zoning map before you write an offer.",
    commute:
      "Green Valley to McCarran/Harry Reid is often 15–25 minutes via I-215.",
    searchHref: "/home-search/listings/v2/nv/green-valley/single-family",
    median: marketStats.henderson.medianPriceFormatted,
  },
  "the-ridges": {
    slug: "the-ridges",
    name: "The Ridges",
    h1: "The Ridges Summerlin Homes",
    h2: "Guard-Gated Lots with Red Rock Views",
    h3: "Custom Square Footage Above the Village Mix",
    subtitle:
      "Guard-gated Summerlin — larger lots, view corridors, and custom floor plans.",
    heroImage: "/images/neighborhoods/ridges.jpg",
    sectionImage: "/images/hero/off-market.jpg",
    body: "The Ridges sits above the Summerlin villages with guard-gated entries and custom construction. Pricing is a different band than the village mix — we pull Ridges comps, not valley medians.",
    schoolNote:
      "Many addresses report Palo Verde High School and nearby CCSD campuses. Confirm on the listing.",
    commute:
      "The Ridges to Downtown Summerlin is a short village drive; Strip access is via the 215.",
    searchHref: "/home-search/listings/v2/nv/the-ridges/single-family",
    median: marketStats.summerlin.luxuryMedianFormatted,
  },
  "southern-highlands": {
    slug: "southern-highlands",
    name: "Southern Highlands",
    h1: "Southern Highlands Family Homes",
    h2: "South Valley Lots with Golf-Course Adjacent Streets",
    h3: "Two-Story and Single-Story Floor Plans",
    subtitle:
      "Southwest valley living with I-15 south access and desert foothill views.",
    heroImage: "/images/neighborhoods/southern-highlands.jpg",
    sectionImage: "/images/hero/single-story.jpg",
    body: "Southern Highlands sits in the south valley with a mix of production and custom homes. Buyers often want a three-car garage and a yard that can take a pool.",
    schoolNote:
      "Assigned CCSD campuses are printed on each MLS listing — we do not substitute ratings for names.",
    commute:
      "I-15 south to the Strip is the usual path; time it at your commute hour.",
    searchHref: "/home-search/listings/v2/nv/southern-highlands/single-family",
    median: marketStats.lasVegas.medianPriceFormatted,
  },
  "skye-canyon": {
    slug: "skye-canyon",
    name: "Skye Canyon",
    h1: "Skye Canyon Family Homes",
    h2: "Northwest Master Plan with Parks and Newer Inventory",
    h3: "3–5 Bedroom Houses Near the 215",
    subtitle:
      "Newer northwest Las Vegas floor plans, pocket parks, and HOA rec amenities.",
    heroImage: "/images/neighborhoods/skye.jpg",
    sectionImage: "/images/hero/bedrooms.jpg",
    body: "Skye Canyon is a northwest master plan with relatively new construction, parks, and HOA amenities. Bedroom counts skew 3–5 on single-family lots.",
    schoolNote:
      "Northwest CCSD campus names appear on each listing. Verify before you assume a feeder pattern.",
    commute:
      "The 215 is the spine. Centennial Hills retail is close; Strip times run longer than Summerlin.",
    searchHref: "/home-search/listings/v2/nv/skye-canyon/single-family",
    median: marketStats.lasVegas.medianPriceFormatted,
  },
  "centennial-hills": {
    slug: "centennial-hills",
    name: "Centennial Hills",
    h1: "Centennial Hills Family Homes",
    h2: "Northwest Las Vegas Yards and Two-Story Plans",
    h3: "Square Footage Near the 215 and Mountain Views",
    subtitle:
      "Northwest valley single-family homes with desert mountain backdrops.",
    heroImage: "/images/neighborhoods/centennial.jpg",
    sectionImage: "/images/hero/yards.jpg",
    body: "Centennial Hills offers production two-story homes, some single-story, and larger yards than many inner-valley lots. Shop bedroom count and garage first.",
    schoolNote:
      "CCSD campus names are on the MLS. We list the name, not a rating.",
    commute:
      "215 west to Summerlin; north to the 95. Time the drive for your workplace.",
    searchHref: "/home-search/listings/v2/nv/centennial-hills/single-family",
    median: marketStats.lasVegas.medianPriceFormatted,
  },
  inspirada: {
    slug: "inspirada",
    name: "Inspirada",
    h1: "Inspirada Family Homes",
    h2: "Henderson Master Plan with Pocket Parks",
    h3: "Modern Floor Plans and Private Patios",
    subtitle:
      "Newer Henderson streets, HOA amenities, and 3–5 bedroom production homes.",
    heroImage: "/images/neighborhoods/inspirada.jpg",
    sectionImage: "/images/sections/patio.jpg",
    body: "Inspirada is a Henderson master plan with contemporary elevations, pocket parks, and HOA rec. Patios are often more compact than Green Valley grass lots.",
    schoolNote:
      "Henderson CCSD campuses are named on each listing. Confirm zoning for the exact address.",
    commute:
      "I-15 and I-215 south/east. Strip times are longer than Green Valley on event nights.",
    searchHref: "/home-search/listings/v2/nv/inspirada/single-family",
    median: marketStats.henderson.medianPriceFormatted,
  },
  "north-las-vegas": {
    slug: "north-las-vegas",
    name: "North Las Vegas",
    h1: "North Las Vegas Family Homes",
    h2: "Aliante-Area Streets and Newer Northwest Inventory",
    h3: "3–5 Bedroom Houses with Yards",
    subtitle:
      "North Las Vegas single-family homes — yards, two-story plans, and I-15 north access.",
    heroImage: "/images/neighborhoods/north-las-vegas.jpg",
    sectionImage: "/images/hero/bedrooms.jpg",
    body: "North Las Vegas includes Aliante-area streets and other northwest plans. Pool inventory is often thinner than Henderson — say so if a pool is required.",
    schoolNote:
      "CCSD names the campus on the listing. We repeat the name, not a proxy for quality.",
    commute:
      "I-15 north and the 215. Downtown and Strip times vary widely by hour.",
    searchHref: "/home-search/listings/v2/nv/north-las-vegas/single-family",
    median: marketStats.lasVegas.medianPriceFormatted,
  },
  "mountains-edge": {
    slug: "mountains-edge",
    name: "Mountain's Edge",
    h1: "Mountain's Edge Family Homes",
    h2: "Southwest Valley Lots Near the 215",
    h3: "Two-Story Floor Plans with Desert Foothill Views",
    subtitle:
      "Southwest Las Vegas production homes, yards, and Beltway access.",
    heroImage: "/images/neighborhoods/mountains-edge.jpg",
    sectionImage: "/images/hero/pool.jpg",
    body: "Mountain's Edge sits in the southwest valley with production two-story homes and some pool lots. The 215 is the commute spine.",
    schoolNote:
      "Assigned school names are on the GLVAR listing. We will not imply ratings.",
    commute: "215 to Summerlin or the airport. Time it at your hour.",
    searchHref: "/home-search/listings/v2/nv/mountains-edge/single-family",
    median: marketStats.lasVegas.medianPriceFormatted,
  },
};

export function neighborhoodMetadata(n: NeighborhoodLuxuryContent): Metadata {
  return {
    title: `${n.h1} | Dr. Jan Duffy`,
    description: `${n.subtitle} ${agentInfo.name}, ${agentInfo.brokerage}. Call ${agentInfo.phone}.`,
  };
}

export default function NeighborhoodLuxuryPage({
  neighborhood,
}: {
  neighborhood: NeighborhoodLuxuryContent;
}) {
  const n = neighborhood;
  return (
    <LuxuryShell>
      <PageHero title={n.h1} subtitle={n.subtitle} image={n.heroImage} />
      <section className="lp-section bg-white">
        <div className="lp-container grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={n.sectionImage}
              alt={`${n.name} Las Vegas homes`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
          <div>
            <p className="lp-kicker">
              Median {n.median} · verify before you offer
            </p>
            <h2 className="mt-3">{n.h2}</h2>
            <p className="mt-5 text-sm leading-7 text-luxury-muted">{n.body}</p>
            <Link href={n.searchHref} className="lp-btn lp-btn-dark mt-8">
              Search {n.name} Listings
            </Link>
          </div>
        </div>
      </section>
      <section className="lp-section bg-luxury-cream">
        <div className="lp-container grid items-center gap-10 md:grid-cols-2 md:gap-16">
          <div>
            <p className="lp-kicker">Commute · Campuses</p>
            <h3 className="mt-3">{n.h3}</h3>
            <p className="mt-5 text-sm leading-7 text-luxury-muted">
              {n.commute}
            </p>
            <p className="mt-4 text-sm leading-7 text-luxury-muted">
              {n.schoolNote}
            </p>
            <Link href="/contact" className="lp-btn lp-btn-outline mt-8">
              Tour {n.name}
            </Link>
          </div>
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={n.heroImage}
              alt={`${n.name} streetscape in the Las Vegas Valley`}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>
      <section className="lp-section bg-luxury-charcoal text-white">
        <div className="lp-container">
          <h2 className="text-center text-white">Search Live MLS in {n.name}</h2>
          <div
            className="realscout-wrapper mt-10"
            dangerouslySetInnerHTML={{
              __html: `<realscout-simple-search agent-encoded-id="${REALSCOUT_AGENT_ID}"></realscout-simple-search>`,
            }}
          />
          <MlsDisclaimer className="mt-10 text-white/45" />
        </div>
      </section>
    </LuxuryShell>
  );
}
