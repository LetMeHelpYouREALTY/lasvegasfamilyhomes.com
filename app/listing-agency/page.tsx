import type { Metadata } from "next";
import Link from "next/link";
import LuxuryShell from "@/components/luxury/LuxuryShell";
import PageHero from "@/components/luxury/PageHero";
import { agentInfo } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Listing Agency | Luxury Listing Process | Dr. Jan Duffy",
  description:
    "How Dr. Jan Duffy lists Las Vegas homes: custom property sites, targeted campaigns, photography, and escrow representation. License S.0197614.LLC. Call (702) 222-1964.",
};

const local = [
  "A custom property page on this site, so inquiries stay with you — not a third-party lead mill.",
  "A color brochure and photography package.",
  "Yard signage when you want it.",
  "Email introduction to cooperating Las Vegas Valley agents.",
  "Select open houses on dates you approve.",
];

const digital = [
  "Placement on lasvegasfamilyhomes.com and the RealScout / GLVAR MLS network.",
  "Syndication through cooperating broker sites.",
  "Direct campaigns to relocating buyers and local executives.",
  "Pre-market positioning for off-market and pocket listings.",
];

export default function ListingAgencyPage() {
  return (
    <LuxuryShell>
      <PageHero
        title="Listing Agency"
        subtitle="Targeted visibility for your property — sales and leases."
        image="/images/hero/interior.jpg"
      >
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/contact" className="lp-btn lp-btn-light">
            Sell Your Home
          </Link>
          <Link href="/vacation-rental-portfolio" className="lp-btn lp-btn-light">
            Lease Your Home
          </Link>
        </div>
      </PageHero>

      <section className="lp-section bg-white">
        <div className="lp-container max-w-3xl text-center">
          <p className="lp-kicker">Guidance &amp; Positioning</p>
          <h2 className="mt-3">Your Agent, Your Advocate</h2>
          <p className="mt-3 font-sans text-[11px] uppercase tracking-luxury text-luxury-muted">
            Guiding You Home · NV License {agentInfo.license}
          </p>
          <p className="mt-8 text-left text-sm leading-7 text-luxury-muted">
            We bring your listing live inside a curated network, marketing to
            specific clientele based on timeline and budget. That includes a
            property walk-through, unlimited consulting on the online and onsite
            process, professional photography, prep, and representation through
            escrow.
          </p>
        </div>
      </section>

      <section className="lp-section bg-luxury-cream">
        <div className="lp-container grid gap-16 md:grid-cols-2">
          <div>
            <p className="lp-kicker">Huge Local Exposure</p>
            <h3 className="mt-3">Custom Property Website</h3>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-luxury-muted">
              {local.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>
          <div>
            <p className="lp-kicker">Custom Online Exposure</p>
            <h3 className="mt-3">MLS, RealScout &amp; This Site</h3>
            <ul className="mt-6 space-y-3 text-sm leading-7 text-luxury-muted">
              {digital.map((item) => (
                <li key={item}>— {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="lp-section bg-white">
        <div className="lp-container grid gap-16 md:grid-cols-2">
          <article>
            <p className="lp-kicker">Listing Agreement</p>
            <h3 className="mt-3">Strategic Selling Solutions</h3>
            <p className="mt-4 text-sm leading-7 text-luxury-muted">
              We market to a curated audience — not every inbox in the valley.
              Request a sample agreement and a pricing strategy built on current
              GLVAR comps.
            </p>
            <Link href="/contact" className="lp-btn lp-btn-dark mt-8">
              Request Agreement
            </Link>
          </article>
          <article>
            <p className="lp-kicker">Showings &amp; Contracts</p>
            <h3 className="mt-3">Seamless &amp; Inviting Experiences</h3>
            <p className="mt-4 text-sm leading-7 text-luxury-muted">
              Showings are staged for how the house should feel: lights, doors,
              and a quiet path through the rooms so the home can speak for
              itself.
            </p>
            <Link href="/contact" className="lp-btn lp-btn-outline mt-8">
              Request Sample Contract
            </Link>
          </article>
        </div>
      </section>
    </LuxuryShell>
  );
}
