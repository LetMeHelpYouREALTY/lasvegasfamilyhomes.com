import type { Metadata } from "next";
import Link from "next/link";
import LuxuryShell from "@/components/luxury/LuxuryShell";
import PageHero from "@/components/luxury/PageHero";
import ConnectForm from "@/components/luxury/ConnectForm";
import ImageSplit from "@/components/luxury/ImageSplit";
import { MlsDisclaimer } from "@/components/luxury/NapBlock";
import { REALSCOUT_AGENT_ID } from "@/lib/home-search";

export const metadata: Metadata = {
  title: "Off-Market Listings & Sales Portfolio | Dr. Jan Duffy",
  description:
    "Off-market and on-market Las Vegas listings with Dr. Jan Duffy. Summerlin, Henderson, The Ridges, and valley-wide. Call (702) 222-1964.",
};

export default function OffMarketPage() {
  return (
    <LuxuryShell>
      <PageHero
        title="Listing Portfolio (Sales)"
        subtitle="On-market MLS inventory plus privately shopped homes that never hit the portal first."
        image="/images/hero/off-market.jpg"
        compact
        showOfficeListings={false}
      />
      <section className="lp-section bg-white">
        <div className="lp-container">
          <div className="mb-10 flex flex-wrap justify-center gap-4">
            <Link href="/home-search/listings" className="lp-btn lp-btn-dark">
              Search All Las Vegas
            </Link>
            <Link
              href="/home-search/listings/v2/nv/summerlin/single-family"
              className="lp-btn lp-btn-outline"
            >
              Summerlin
            </Link>
            <Link
              href="/home-search/listings/v2/nv/henderson/single-family"
              className="lp-btn lp-btn-outline"
            >
              Henderson
            </Link>
          </div>
          <div
            dangerouslySetInnerHTML={{
              __html: `<realscout-office-listings agent-encoded-id="${REALSCOUT_AGENT_ID}" sort-order="NEWEST" listing-status="For Sale" property-types=",SFR" price-min="800000"></realscout-office-listings>`,
            }}
          />
          <MlsDisclaimer className="mt-10" />
        </div>
      </section>
      <ImageSplit
        image="/images/collections/gated.jpg"
        alt="Guard-gated Las Vegas community entry for off-market listings"
        className="bg-white"
      >
        <p className="lp-kicker">Quiet shops</p>
        <h2 className="mt-3">Homes That Never Hit the Portal First</h2>
        <h3 className="mt-4 text-[22px] md:text-[26px]">
          Neighborhood, bedrooms, and a budget — then we call
        </h3>
        <p className="mt-5 text-sm leading-7 text-luxury-muted">
          Off-market inventory is shared by conversation. Tell us Summerlin,
          Henderson, or The Ridges plus bedroom count. We do not publish a
          public feed of private listings.
        </p>
      </ImageSplit>
      <section className="lp-section bg-luxury-cream">
        <div className="lp-container max-w-3xl">
          <ConnectForm
            source="off-market"
            heading="Request Off-Market Access"
            subheading="Tell us the neighborhoods, bedroom count, and a budget. Quiet listings are shared by conversation, not a public feed."
          />
        </div>
      </section>
    </LuxuryShell>
  );
}
