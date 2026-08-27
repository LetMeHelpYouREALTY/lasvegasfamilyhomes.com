import type { Metadata } from "next";
import Link from "next/link";
import LuxuryShell from "@/components/luxury/LuxuryShell";
import PageHero from "@/components/luxury/PageHero";
import ImageSplit from "@/components/luxury/ImageSplit";
import { aboutCopy, localBusinessJsonLd } from "@/lib/luxury";
import { agentInfo } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "About Las Vegas Family Homes | Dr. Jan Duffy",
  description:
    "Dr. Jan Duffy specializes in branded marketing for families, investors, and high-net-worth clients buying, selling, and leasing homes across Las Vegas, Henderson, and Summerlin. License S.0197614.LLC.",
};

const services = [
  {
    title: "Local Listing Marketing",
    kicker: "Premier Property Marketing",
    body: "We excel in high-intent sales marketing for residents, investors, and companies owning homes in the Las Vegas Valley. Market knowledge and tailored positioning put each listing in front of qualified buyers.",
  },
  {
    title: "Curated Purchase Representation",
    kicker: "Seamless Acquisition Experiences",
    body: "Buyer representation from off-market introductions through escrow. Dates, budget, bedrooms, commute, and amenities — then a curated list, not a dump of every MLS match.",
  },
  {
    title: "Boutique Estate Management",
    kicker: "Dedicated Property Solutions",
    body: "Pre-sale preparation, vendor coordination, and lease oversight so the asset is presented at its best through the transaction.",
  },
  {
    title: "Local Vacation Rentals",
    kicker: "Exclusive Retreats",
    body: "Executive and seasonal stays across Summerlin, Henderson, and the Las Vegas Valley — representation from search through lease.",
  },
  {
    title: "Hands-On Leadership",
    kicker: "Personalized Luxury",
    body: `${agentInfo.name} answers her own phone. One advisor, one strategy, from first call through closing.`,
  },
  {
    title: "Freedom & Convenience",
    kicker: "Full-Service Property Solutions",
    body: "Sell or lease without the noise. We prioritize privacy, quality, and a clean listing experience from start to finish.",
  },
];

export default function AboutPage() {
  return (
    <LuxuryShell jsonLd={localBusinessJsonLd} showNap>
      <PageHero
        title="Las Vegas Family Homes"
        subtitle="High-intent marketing, off-market access, and advisory representation for Las Vegas, Henderson, and Summerlin."
        image="/images/hero/about.jpg"
      />
      <ImageSplit
        image="/images/hero/family-homes.jpg"
        alt="Las Vegas family home at golden hour with Spring Mountains"
      >
        <p className="lp-kicker">
          {aboutCopy.subtitleLeft} · {aboutCopy.subtitleRight}
        </p>
        <h2 className="mt-3">
          3–5 Bedroom Houses with Yards Across the Valley
        </h2>
        <div className="mt-8 space-y-5 text-left text-sm leading-7 text-luxury-muted">
          {aboutCopy.paragraphs.map((p) => (
            <p key={p.slice(0, 32)}>{p}</p>
          ))}
        </div>
      </ImageSplit>
      <section className="lp-section bg-luxury-cream">
        <div className="lp-container grid gap-16 md:grid-cols-2">
          {services.map((s) => (
            <article key={s.title}>
              <p className="lp-kicker">{s.kicker}</p>
              <h2 className="mt-3 text-[28px] md:text-[32px]">{s.title}</h2>
              <p className="mt-4 text-sm leading-7 text-luxury-muted">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section className="py-16 text-center">
        <Link href="/contact" className="lp-btn lp-btn-dark">
          Work With Us
        </Link>
      </section>
    </LuxuryShell>
  );
}
