import type { Metadata } from "next";
import LuxuryShell from "@/components/luxury/LuxuryShell";
import PageHero from "@/components/luxury/PageHero";
import ConnectForm from "@/components/luxury/ConnectForm";
import ImageSplit from "@/components/luxury/ImageSplit";
import { MlsDisclaimer } from "@/components/luxury/NapBlock";
import { REALSCOUT_AGENT_ID } from "@/lib/home-search";

export const metadata: Metadata = {
  title: "Vacation Homes & Estate Rentals | Dr. Jan Duffy",
  description:
    "Las Vegas estate rentals and vacation homes — Summerlin, Henderson, and the valley. Search leases with Dr. Jan Duffy. Call (702) 222-1964.",
};

export default function VacationRentalsPage() {
  return (
    <LuxuryShell>
      <PageHero
        title="Estate Rental Listings"
        subtitle="Seasonal stays, executive leases, and mid-term placements across the Las Vegas Valley."
        image="/images/hero/vacation.jpg"
        compact
        showOfficeListings={false}
      />
      <section className="lp-section bg-white">
        <div className="lp-container">
          <div
            dangerouslySetInnerHTML={{
              __html: `<realscout-office-listings agent-encoded-id="${REALSCOUT_AGENT_ID}" sort-order="NEWEST" listing-status="For Sale" property-types=",SFR,MF,TC" price-min="700000"></realscout-office-listings>`,
            }}
          />
          <p className="mt-6 text-center text-sm text-luxury-muted">
            Live MLS search is for sale inventory. For current leases, send
            dates, bedroom count, and a budget — we match from the rental
            portfolio and cooperating listings.
          </p>
          <MlsDisclaimer className="mt-8" />
        </div>
      </section>
      <ImageSplit
        image="/images/collections/rentals.jpg"
        alt="Las Vegas vacation rental living room opening to a pool"
        className="bg-luxury-cream"
      >
        <p className="lp-kicker">Seasonal · Executive · Mid-term</p>
        <h2 className="mt-3">Estate Rentals Across the Valley</h2>
        <h3 className="mt-4 text-[22px] md:text-[26px]">
          Bedroom count, dates, and a budget — then we match
        </h3>
        <p className="mt-5 text-sm leading-7 text-luxury-muted">
          Live MLS search above is for-sale inventory. For current leases, send
          dates, bedroom count, and a budget — we match from the rental
          portfolio and cooperating listings.
        </p>
      </ImageSplit>
      <section className="lp-section bg-white">
        <div className="lp-container max-w-3xl">
          <ConnectForm source="vacation-rentals" />
        </div>
      </section>
    </LuxuryShell>
  );
}
