import Link from "next/link";
import { MARKET_PRESENCE_AREAS } from "@/lib/lp-clone";

export default function MarketPresence() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-3 text-3xl font-bold text-slate-900">
          Market Presence
        </h2>
        <p className="mb-8 max-w-3xl text-slate-600">
          Areas of expertise across the Las Vegas Valley. Each link opens a
          dedicated home-search page with live RealScout listings.
        </p>
        <ul className="flex flex-wrap gap-2">
          {MARKET_PRESENCE_AREAS.map((area) => (
            <li key={area.href}>
              <Link
                href={area.href}
                className="inline-flex rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-medium text-slate-800 no-underline hover:border-blue-400 hover:bg-blue-50"
              >
                {area.name}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8">
          <Link
            href="/neighborhoods"
            className="font-semibold text-blue-700 no-underline hover:underline"
          >
            Show All Neighborhoods
          </Link>
        </p>
      </div>
    </section>
  );
}
