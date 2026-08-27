import type { Metadata } from "next";
import Link from "next/link";
import LuxuryShell from "@/components/luxury/LuxuryShell";
import PageHero from "@/components/luxury/PageHero";
import { marketStats } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Market Trends | Las Vegas Real Estate | Dr. Jan Duffy",
  description:
    "Current Las Vegas Valley housing trends from GLVAR / LVR data. Median price, days on market, and inventory with Dr. Jan Duffy.",
};

const stats = [
  {
    value: marketStats.lasVegas.medianPriceFormatted,
    label: "Valley median (single-family)",
    sub: marketStats.lasVegas.yearOverYearChange + " YoY",
  },
  {
    value: String(marketStats.lasVegas.daysOnMarket),
    label: "Days on market",
    sub: marketStats.lastUpdated,
  },
  {
    value: marketStats.lasVegas.activeListings.toLocaleString(),
    label: "Active listings",
    sub: `${marketStats.lasVegas.inventoryMonths} months inventory`,
  },
  {
    value: marketStats.summerlin.medianPriceFormatted,
    label: "Summerlin village mix",
    sub: marketStats.summerlin.yearOverYearChange,
  },
];

export default function MarketTrendsPage() {
  return (
    <LuxuryShell>
      <PageHero
        title="Market Trends"
        subtitle={`${marketStats.source}. Figures move — verify before you price or offer.`}
        compact
      />
      <section className="lp-section bg-white">
        <div className="lp-container grid grid-cols-2 gap-10 md:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <p className="font-serif text-3xl md:text-4xl">{s.value}</p>
              <p className="mt-2 text-xs uppercase tracking-luxury text-luxury-muted">
                {s.label}
              </p>
              <p className="mt-1 text-xs text-neutral-400">{s.sub}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/market-report" className="lp-btn lp-btn-dark">
            Full Market Report
          </Link>
        </div>
      </section>
    </LuxuryShell>
  );
}
