import type { Metadata } from "next";
import Link from "next/link";
import LuxuryShell from "@/components/luxury/LuxuryShell";
import PageHero from "@/components/luxury/PageHero";

export const metadata: Metadata = {
  title: "Agent Partnerships | Dr. Jan Duffy",
  description:
    "Cooperating-broker and referral partnerships with Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties. Call (702) 222-1964.",
};

export default function AgentPartnershipsPage() {
  return (
    <LuxuryShell>
      <PageHero
        title="Agent Partnerships"
        subtitle="Referral and cooperating-broker relationships across Nevada and inbound relocation."
        compact
      />
      <section className="lp-section bg-white">
        <div className="lp-container max-w-3xl text-sm leading-7 text-luxury-muted">
          <p>
            Inbound California relocation, 55+ community placements, and luxury
            listings move faster when the originating advisor stays in the loop.
            We honor cooperating agreements, share live MLS access through
            RealScout, and keep communication on one thread.
          </p>
          <p className="mt-4">
            If you have a client landing in Las Vegas, Henderson, or Summerlin,
            send the criteria. We tour, negotiate, and report back.
          </p>
          <Link href="/contact" className="lp-btn lp-btn-dark mt-10">
            Start a Referral
          </Link>
        </div>
      </section>
    </LuxuryShell>
  );
}
