import type { Metadata } from "next";
import LetsConnect from "@/components/lp/LetsConnect";
import LpPageChrome from "@/components/lp/LpPageChrome";
import WorkWithUs from "@/components/lp/WorkWithUs";
import { PARTNERSHIP_PILLARS, getLpClonePage } from "@/lib/lp-clone";
import { agentInfo, siteConfig } from "@/lib/site-config";

const page = getLpClonePage("/agent-partnerships")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  keywords: [
    "Berkshire Hathaway HomeServices",
    "real estate referral Las Vegas",
    "BHHS Nevada Properties",
  ],
  alternates: { canonical: `${siteConfig.url}${page.path}` },
};

export default function AgentPartnershipsPage() {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Agent Partnerships & Referrals",
    description: page.description,
    url: `${siteConfig.url}${page.path}`,
    provider: {
      "@type": "RealEstateAgent",
      name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
      telephone: agentInfo.phoneE164,
    },
  };

  return (
    <LpPageChrome>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <div className="mx-auto max-w-6xl px-4 pb-8">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
          Refer and receive
        </p>
        <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
          {page.h1}
        </h1>
        <p className="mb-8 max-w-3xl text-lg text-slate-600">
          Agents and advisors can refer buyers, sellers, or tenants to{" "}
          {agentInfo.name} at {agentInfo.brokerage}. Fees are written,
          brokerage-paid, and sized to the file. Call {agentInfo.phone}.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {PARTNERSHIP_PILLARS.map((pillar) => (
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
      <LetsConnect
        source="agent-partnerships-page"
        tags={["lp-clone", "agent-referral"]}
        heading="Inquire Now"
        subheading="Send the client's name, market, and what they need. We reply with a referral agreement."
      />
      <WorkWithUs />
    </LpPageChrome>
  );
}
