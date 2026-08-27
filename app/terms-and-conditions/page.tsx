import type { Metadata } from "next";
import LuxuryShell from "@/components/luxury/LuxuryShell";
import PageHero from "@/components/luxury/PageHero";
import { smsConsentCopy } from "@/lib/luxury";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Terms & Privacy | Las Vegas Family Homes",
  description:
    "Privacy policy, SMS terms, and website terms for Las Vegas Family Homes / Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties.",
};

export default function TermsPage() {
  return (
    <LuxuryShell showWorkWithUs={false}>
      <PageHero title="Terms & Privacy" compact />
      <section className="lp-section bg-white">
        <div className="lp-container max-w-3xl space-y-6 text-sm leading-7 text-luxury-muted">
          <p>
            {siteConfig.name} is operated by {agentInfo.name}, License{" "}
            {agentInfo.license}, {agentInfo.brokerage}, {officeInfo.address.full}.
            Phone {agentInfo.phone}. Email {agentInfo.email}.
          </p>
          <h2 className="text-2xl text-luxury-ink">SMS and email consent</h2>
          <p>{smsConsentCopy}</p>
          <h2 className="text-2xl text-luxury-ink">Information collected</h2>
          <p>
            Forms on this site collect name, email, phone, and message content
            so we can respond to real estate inquiries. Data may be stored in
            Follow Up Boss. We do not sell lead data to third-party portals.
          </p>
          <h2 className="text-2xl text-luxury-ink">Equal housing</h2>
          <p>
            We follow the Fair Housing Act. Listings and copy describe
            properties, square footage, amenities, and commute times — not
            people or protected classes.
          </p>
        </div>
      </section>
    </LuxuryShell>
  );
}
