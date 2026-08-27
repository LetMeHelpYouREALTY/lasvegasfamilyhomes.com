import type { Metadata } from "next";
import LuxuryShell from "@/components/luxury/LuxuryShell";
import PageHero from "@/components/luxury/PageHero";
import ConnectForm from "@/components/luxury/ConnectForm";
import { smsConsentCopy } from "@/lib/luxury";

export const metadata: Metadata = {
  title: "Register for Deals | Opt In | Dr. Jan Duffy",
  description:
    "Opt in for new Las Vegas listings, off-market homes, and rental alerts from Dr. Jan Duffy. Call (702) 222-1964.",
};

export default function OptInPage() {
  return (
    <LuxuryShell>
      <PageHero
        title="Register for Deals"
        subtitle="New listings, quiet shops, and rental inventory — sent when it matches what you asked for."
        image="/images/hero/coming-soon.jpg"
        compact
      />
      <section className="lp-section bg-white">
        <div className="lp-container max-w-3xl">
          <ConnectForm
            source="opt-in"
            heading="Opt In"
            subheading={smsConsentCopy}
          />
        </div>
      </section>
    </LuxuryShell>
  );
}
