import type { Metadata } from "next";
import Link from "next/link";
import LuxuryShell from "@/components/luxury/LuxuryShell";
import PageHero from "@/components/luxury/PageHero";

export const metadata: Metadata = {
  title: "September 2026 Coming Soon | Las Vegas Family Homes",
  description:
    "A new listing and sales showcase arrives September 2026. Register to be notified. Dr. Jan Duffy, (702) 222-1964.",
};

export default function ComingSoonPage() {
  return (
    <LuxuryShell>
      <PageHero
        title="September 2026"
        subtitle="A new listing and sales showcase is in production. Register and we will send the drop date."
        compact
      >
        <Link href="/opt-in" className="lp-btn lp-btn-light mt-10">
          Register for Deals
        </Link>
      </PageHero>
    </LuxuryShell>
  );
}
