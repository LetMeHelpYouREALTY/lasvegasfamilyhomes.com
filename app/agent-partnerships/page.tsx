import type { Metadata } from "next";
import Link from "next/link";
import LuxuryShell from "@/components/luxury/LuxuryShell";
import PageHero from "@/components/luxury/PageHero";
import ImageSplit from "@/components/luxury/ImageSplit";

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
        image="/images/hero/partnerships.jpg"
        compact
      />
      <ImageSplit
        image="/images/hero/partnerships.jpg"
        alt="Referral meeting table with Las Vegas home plans"
      >
        <h2 className="mt-3">Keep the Originating Advisor in the Loop</h2>
        <p className="mt-5 text-sm leading-7 text-luxury-muted">
          Inbound California relocation, 55+ community placements, and luxury
          listings move faster when the originating advisor stays in the loop.
          We honor cooperating agreements, share live MLS access through
          RealScout, and keep communication on one thread.
        </p>
        <p className="mt-4 text-sm leading-7 text-luxury-muted">
          If you have a client landing in Las Vegas, Henderson, or Summerlin,
          send the criteria. We tour, negotiate, and report back.
        </p>
        <Link href="/contact" className="lp-btn lp-btn-dark mt-10">
          Start a Referral
        </Link>
      </ImageSplit>
    </LuxuryShell>
  );
}
