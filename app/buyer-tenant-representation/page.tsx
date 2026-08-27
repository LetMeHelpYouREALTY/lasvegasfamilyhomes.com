import type { Metadata } from "next";
import Link from "next/link";
import LetsConnect from "@/components/lp/LetsConnect";
import LpPageChrome from "@/components/lp/LpPageChrome";
import WorkWithUs from "@/components/lp/WorkWithUs";
import { BUYER_REP_STEPS, getLpClonePage } from "@/lib/lp-clone";
import { generateFAQSchema } from "@/lib/schema";
import { agentInfo, commonFAQs, siteConfig } from "@/lib/site-config";

const page = getLpClonePage("/buyer-tenant-representation")!;
const faqs = commonFAQs.buying;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  keywords: [
    "Berkshire Hathaway HomeServices",
    "Las Vegas buyer agent",
    "BHHS Nevada Properties",
  ],
  alternates: { canonical: `${siteConfig.url}${page.path}` },
};

export default function BuyerTenantRepresentationPage() {
  const faqSchema = generateFAQSchema(faqs);

  return (
    <LpPageChrome>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-6xl px-4 pb-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
          Buyers / Tenants
        </p>
        <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
          {page.h1}
        </h1>
        <p className="mb-8 max-w-3xl text-lg text-slate-600">
          Purchase and lease representation for Las Vegas, Henderson, and
          Summerlin. License {agentInfo.license}. Call {agentInfo.phone}.
        </p>
        <div className="mb-10 flex flex-wrap gap-3">
          <Link
            href="/buyers"
            className="rounded-md bg-blue-600 px-5 py-2.5 font-medium text-white no-underline hover:bg-blue-700"
          >
            Purchase Questions
          </Link>
          <Link
            href="/for-rent"
            className="rounded-md border border-slate-300 px-5 py-2.5 font-medium text-slate-800 no-underline hover:bg-slate-50"
          >
            Renting Questions
          </Link>
          <Link
            href="/home-search/listings"
            className="rounded-md border border-slate-300 px-5 py-2.5 font-medium text-slate-800 no-underline hover:bg-slate-50"
          >
            Search Homes
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {BUYER_REP_STEPS.map((step) => (
            <article
              key={step.title}
              className="rounded-xl border border-slate-200 p-6"
            >
              <h2 className="mb-1 text-xl font-semibold text-slate-900">
                {step.title}
              </h2>
              <p className="mb-3 text-sm font-medium text-blue-700">
                {step.subtitle}
              </p>
              <p className="text-slate-600">{step.body}</p>
            </article>
          ))}
        </div>
      </div>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">
            Buyer questions
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
        source="buyer-rep-page"
        tags={["lp-clone", "buyer-tenant"]}
      />
      <WorkWithUs />
    </LpPageChrome>
  );
}
