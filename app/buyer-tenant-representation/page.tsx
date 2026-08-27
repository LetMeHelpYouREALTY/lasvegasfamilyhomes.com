import type { Metadata } from "next";
import Link from "next/link";
import LuxuryShell from "@/components/luxury/LuxuryShell";
import PageHero from "@/components/luxury/PageHero";
import ImageSplit from "@/components/luxury/ImageSplit";
import { agentInfo } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Buyer & Tenant Representation | Dr. Jan Duffy",
  description:
    "Buyer and tenant representation in Las Vegas, Henderson, and Summerlin. Criteria, curated lists, paperwork, and escrow support. Call (702) 222-1964.",
};

const steps = [
  {
    title: "Criteria",
    kicker: "Determine Your Needs",
    body: "Dates, budget, bedrooms, location, commute, and amenities — written down before the first tour.",
  },
  {
    title: "Curated List",
    kicker: "Dedicated time to you",
    body: "A short list drawn from live MLS, builder inventory, and off-market conversations. Not 200 emails a day.",
  },
  {
    title: "Answer Questions",
    kicker: `NV License ${agentInfo.license}`,
    body: "Available options, inspection strategy, and the resulting contract — from our portfolio and the open market.",
  },
  {
    title: "Paperwork",
    kicker: "Document Package",
    body: "Contracts, addenda, and escrow. One advisor through the packet.",
  },
];

export default function BuyerTenantPage() {
  return (
    <LuxuryShell>
      <PageHero
        title="Representation"
        subtitle="Buyers / Tenants — a step-by-step purchase and lease guide."
        image="/images/hero/buyer-rep.jpg"
      >
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/home-search/listings" className="lp-btn lp-btn-light">
            Purchase Questions
          </Link>
          <Link
            href="/vacation-rental-portfolio"
            className="lp-btn lp-btn-light"
          >
            Renting Questions
          </Link>
        </div>
      </PageHero>
      <ImageSplit
        image="/images/hero/buying.jpg"
        alt="Front entry of a Las Vegas home ready for a buyer tour"
      >
        <p className="lp-kicker">Buyers &amp; Tenants</p>
        <h2 className="mt-3">Criteria, Tours, and a Short List</h2>
        <p className="mt-5 text-sm leading-7 text-luxury-muted">
          Dates, budget, bedrooms, commute, and amenities — written down before
          the first tour. Then a curated list from live MLS, builder inventory,
          and off-market conversations. Not 200 emails a day.
        </p>
      </ImageSplit>
      <section className="lp-section bg-luxury-cream">
        <div className="lp-container grid gap-12 md:grid-cols-2">
          {steps.map((s) => (
            <article key={s.title}>
              <p className="lp-kicker">{s.kicker}</p>
              <h2 className="mt-3 text-[28px]">{s.title}</h2>
              <p className="mt-4 text-sm leading-7 text-luxury-muted">
                {s.body}
              </p>
            </article>
          ))}
        </div>
      </section>
    </LuxuryShell>
  );
}
