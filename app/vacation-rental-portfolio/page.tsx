import type { Metadata } from "next";
import LuxuryShell from "@/components/luxury/LuxuryShell";
import PageHero from "@/components/luxury/PageHero";
import ConnectForm from "@/components/luxury/ConnectForm";
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
        image="/images/collections/rentals.jpg"
        compact
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
      <section className="lp-section bg-luxury-cream">
        <div className="lp-container max-w-3xl">
          <ConnectForm source="vacation-rentals" />
        </div>
      </section>
    </LuxuryShell>
  );
}
