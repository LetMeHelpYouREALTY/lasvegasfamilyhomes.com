import Link from "next/link";
import { COLLECTION_TILES } from "@/lib/lp-clone";

type CollectionTilesProps = {
  title?: string;
};

export default function CollectionTiles({
  title = "Collection of Las Vegas Homes",
}: CollectionTilesProps) {
  return (
    <section className="bg-slate-50">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-3 text-3xl font-bold text-slate-900">{title}</h2>
        <p className="mb-8 max-w-3xl text-slate-600">
          Browse by status and amenity. Inventory is RealScout MLS — not a
          copied Los Angeles estate grid.
        </p>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {COLLECTION_TILES.map((tile) => (
            <li key={tile.href}>
              <Link
                href={tile.href}
                className="block h-full rounded-xl border border-slate-200 bg-white p-6 text-slate-900 no-underline hover:border-blue-400 hover:shadow-sm"
              >
                <h3 className="mb-2 text-lg font-semibold">{tile.title}</h3>
                <p className="text-sm text-slate-600">{tile.subtitle}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
