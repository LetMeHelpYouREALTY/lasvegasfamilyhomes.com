import type { Metadata } from "next";
import Link from "next/link";
import LetsConnect from "@/components/lp/LetsConnect";
import LpPageChrome from "@/components/lp/LpPageChrome";
import WorkWithUs from "@/components/lp/WorkWithUs";
import { LISTING_AGENCY_PILLARS, getLpClonePage } from "@/lib/lp-clone";
import { generateFAQSchema } from "@/lib/schema";
import { agentInfo, commonFAQs, siteConfig } from "@/lib/site-config";

const page = getLpClonePage("/listing-agency")!;
const faqs = commonFAQs.selling;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  keywords: [
    "Berkshire Hathaway HomeServices",
    "Las Vegas listing agent",
    "BHHS Nevada Properties",
  ],
  alternates: { canonical: `${siteConfig.url}${page.path}` },
};

export default function ListingAgencyPage() {
  const faqSchema = generateFAQSchema(faqs);

  return (
    <LpPageChrome>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-6xl px-4 pb-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
          {agentInfo.brokerage}
        </p>
        <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
          {page.h1}
        </h1>
        <p className="mb-8 max-w-3xl text-lg text-slate-600">
          Sell your Las Vegas or Henderson home with listing marketing that
          stays on this site and the MLS — not a lead portal. License{" "}
          {agentInfo.license}. Call {agentInfo.phone}.
        </p>
        <div className="mb-10 flex flex-wrap gap-3">
          <Link
            href="/sellers"
            className="rounded-md bg-blue-600 px-5 py-2.5 font-medium text-white no-underline hover:bg-blue-700"
          >
            Sell Your Home
          </Link>
          <Link
            href="/for-rent"
            className="rounded-md border border-slate-300 px-5 py-2.5 font-medium text-slate-800 no-underline hover:bg-slate-50"
          >
            Lease Your Home
          </Link>
          <Link
            href="/home-valuation"
            className="rounded-md border border-slate-300 px-5 py-2.5 font-medium text-slate-800 no-underline hover:bg-slate-50"
          >
            Request a Valuation
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {LISTING_AGENCY_PILLARS.map((pillar) => (
            <article
              key={pillar.title}
              className="rounded-xl border border-slate-200 p-6"
            >
              <h2 className="mb-1 text-xl font-semibold text-slate-900">
                {pillar.title}
              </h2>
              <p className="mb-3 text-sm font-medium text-blue-700">
                {pillar.subtitle}
              </p>
              <p className="text-slate-600">{pillar.body}</p>
            </article>
          ))}
        </div>
      </div>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">
            Listing questions
          </h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-lg border border-slate-200 bg-white p-6"
              >
                <h3 className="mb-2 font-semibold text-slate-900">
                  {faq.question}
                </h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <LetsConnect
        source="listing-agency-page"
        tags={["lp-clone", "listing-agency", "seller"]}
      />
      <WorkWithUs />
    </LpPageChrome>
  );
}
