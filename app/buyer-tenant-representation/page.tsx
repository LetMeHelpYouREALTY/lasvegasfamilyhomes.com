import type { Metadata } from "next";
import Link from "next/link";
import LuxuryShell from "@/components/luxury/LuxuryShell";
import PageHero from "@/components/luxury/PageHero";
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
        image="/images/collections/off-market.jpg"
      >
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/home-search/listings" className="lp-btn lp-btn-light">
            Purchase Questions
          </Link>
          <Link href="/vacation-rental-portfolio" className="lp-btn lp-btn-light">
            Renting Questions
          </Link>
        </div>
      </PageHero>
      <section className="lp-section bg-white">
        <div className="lp-container max-w-3xl text-center">
          <p className="font-serif text-2xl leading-snug md:text-3xl">
            Our mission is to turn a property’s walls into a calling of home.
          </p>
        </div>
      </section>
      <section className="lp-section bg-luxury-cream">
        <div className="lp-container grid gap-12 md:grid-cols-2">
          {steps.map((s) => (
            <article key={s.title}>
              <p className="lp-kicker">{s.kicker}</p>
              <h2 className="mt-3 text-[28px]">{s.title}</h2>
              <p className="mt-4 text-sm leading-7 text-luxury-muted">{s.body}</p>
            </article>
          ))}
        </div>
      </section>
    </LuxuryShell>
  );
}
