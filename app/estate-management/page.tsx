import type { Metadata } from "next";
import Link from "next/link";
import LuxuryShell from "@/components/luxury/LuxuryShell";
import PageHero from "@/components/luxury/PageHero";

export const metadata: Metadata = {
  title: "Estate Management | Dr. Jan Duffy | Las Vegas Family Homes",
  description:
    "Estate and vacation-home management in Las Vegas and Henderson: marketing, vendors, showings, and leases. Dr. Jan Duffy, License S.0197614.LLC.",
};

export default function EstateManagementPage() {
  return (
    <LuxuryShell>
      <PageHero
        title="Vacation Rental Management"
        subtitle="Full-service handling for owners who want income without the noise."
        image="/images/collections/management.jpg"
      />
      <section className="lp-section bg-white">
        <div className="lp-container max-w-3xl">
          <p className="lp-kicker">Client Success</p>
          <h2 className="mt-3">A Proven Path to Sales</h2>
          <p className="mt-6 text-sm leading-7 text-luxury-muted">
            Luxury buyers can afford to try before they buy. A well-run lease
            keeps the lights on, the landscaping sharp, and qualified residents
            inside the house while we continue a sale conversation. That is how
            an empty listing becomes a living asset — and often, a closed sale.
          </p>
          <p className="mt-4 text-sm leading-7 text-luxury-muted">
            We handle marketing, scheduling, vendor dispatch, and contracts so
            you collect income without running a second job.
          </p>
          <Link href="/contact" className="lp-btn lp-btn-dark mt-10">
            Find Out Which Services Are Right for You
          </Link>
        </div>
      </section>
      <section className="lp-section bg-luxury-cream">
        <div className="lp-container max-w-3xl text-center">
          <p className="lp-kicker">Our Definition</p>
          <h2 className="mt-3">Real Results</h2>
          <p className="mt-6 text-left text-sm leading-7 text-luxury-muted">
            Award-winning marketing focused on local, targeted exposure.
            Personal service, valley knowledge, and a vendor bench — from
            photographers to cleaners to escrow — until every option is seized.
          </p>
        </div>
      </section>
    </LuxuryShell>
  );
}
