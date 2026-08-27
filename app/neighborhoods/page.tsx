import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import LuxuryShell from "@/components/luxury/LuxuryShell";
import PageHero from "@/components/luxury/PageHero";
import { marketPresence } from "@/lib/luxury";
import { neighborhoods as neighborhoodStats } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Las Vegas Neighborhoods | Areas of Expertise | Dr. Jan Duffy",
  description:
    "Summerlin, Henderson, The Ridges, Skye Canyon, Centennial Hills, Inspirada, Green Valley, Southern Highlands, Mountain's Edge, and North Las Vegas. Dr. Jan Duffy, (702) 222-1964.",
};

export default function NeighborhoodsPage() {
  return (
    <LuxuryShell>
      <PageHero
        title="Areas of Expertise"
        subtitle="Master-planned villages, guard-gated enclaves, and valley neighborhoods — square footage, amenities, and commute, not slogans."
        image="/images/hero/neighborhoods.jpg"
        compact
      />
      <section className="lp-section bg-white">
        <div className="lp-container grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
          {marketPresence.map((n) => {
            const stats = neighborhoodStats.find((s) => s.slug === n.slug);
            return (
              <Link
                key={n.slug}
                href={`/neighborhoods/${n.slug}`}
                className="group relative block aspect-[3/4] overflow-hidden"
              >
                <Image
                  src={n.image}
                  alt={`${n.name} real estate in Las Vegas`}
                  fill
                  sizes="(max-width: 768px) 50vw, 25vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                <span className="absolute inset-x-0 bottom-0 p-4 text-white">
                  <span className="block font-serif text-xl">{n.name}</span>
                  {stats?.medianPrice && (
                    <span className="mt-1 block text-[11px] uppercase tracking-luxury text-white/80">
                      Median {stats.medianPrice}
                    </span>
                  )}
                </span>
              </Link>
            );
          })}
        </div>
      </section>
    </LuxuryShell>
  );
}
