"use client";

import Link from "next/link";
import { useId, useState, type ReactNode } from "react";
import {
  Bookmark,
  ChevronDown,
  Map as MapIcon,
  MapPin,
  SlidersHorizontal,
  X,
} from "lucide-react";
import { cn } from "@/lib/utils";
import {
  HOME_SEARCH_PROPERTY_TYPE_ORDER,
  HOME_SEARCH_PROPERTY_TYPES,
  REALSCOUT_SEARCH_URL,
  buildHomeSearchPath,
  getNamedLocations,
  type HomeSearchConfig,
} from "@/lib/home-search";

type LayoutMode = "default" | "list" | "map";

type HomeSearchExperienceProps = {
  config: HomeSearchConfig;
  filters: ReactNode;
  listings: ReactNode;
};

export default function HomeSearchExperience({
  config,
  filters,
  listings,
}: HomeSearchExperienceProps) {
  const [layout, setLayout] = useState<LayoutMode>("default");
  const [filtersOpen, setFiltersOpen] = useState(false);
  const [locationOpen, setLocationOpen] = useState(false);
  const [typeOpen, setTypeOpen] = useState(false);
  const [drawOpen, setDrawOpen] = useState(true);
  const typeMenuId = useId();
  const locationMenuId = useId();

  return (
    <div className="bg-white">
      <div className="sticky top-16 z-40 border-b border-slate-200 bg-white">
        <div className="flex flex-wrap items-center gap-2 px-3 py-3 lg:px-6">
          <div className="relative">
            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-slate-900 px-3 py-1.5 text-sm font-medium text-white no-underline hover:bg-slate-800"
              aria-expanded={locationOpen}
              aria-controls={locationMenuId}
              onClick={() => {
                setLocationOpen((open) => !open);
                setTypeOpen(false);
              }}
            >
              <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
              {config.locationChip}
              <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
            {locationOpen ? (
              <div
                id={locationMenuId}
                className="absolute left-0 top-full z-50 mt-2 max-h-80 w-64 overflow-auto rounded-lg border border-slate-200 bg-white py-2 shadow-lg"
                role="menu"
              >
                {getNamedLocations().map((loc) => (
                  <Link
                    key={loc.slug}
                    href={buildHomeSearchPath(
                      loc.slug,
                      config.propertyType?.slug ?? null,
                    )}
                    className="block px-4 py-2 text-sm text-slate-800 no-underline hover:bg-slate-50"
                    role="menuitem"
                    onClick={() => setLocationOpen(false)}
                  >
                    {loc.name}, NV
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <Chip>{config.listingStatus}</Chip>

          <button
            type="button"
            className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-800 no-underline hover:bg-slate-50"
            onClick={() => setFiltersOpen(true)}
          >
            Any price
          </button>

          <div className="relative">
            <button
              type="button"
              className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-800 hover:bg-slate-50"
              aria-expanded={typeOpen}
              aria-controls={typeMenuId}
              onClick={() => {
                setTypeOpen((open) => !open);
                setLocationOpen(false);
              }}
            >
              {config.propertyTypeChip}
              <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
            </button>
            {typeOpen ? (
              <div
                id={typeMenuId}
                className="absolute left-0 top-full z-50 mt-2 w-56 rounded-lg border border-slate-200 bg-white py-2 shadow-lg"
                role="menu"
              >
                <Link
                  href={buildHomeSearchPath(config.location.slug, null)}
                  className="block px-4 py-2 text-sm text-slate-800 no-underline hover:bg-slate-50"
                  role="menuitem"
                  onClick={() => setTypeOpen(false)}
                >
                  All property types
                </Link>
                {HOME_SEARCH_PROPERTY_TYPE_ORDER.map((slug) => {
                  const type = HOME_SEARCH_PROPERTY_TYPES[slug];
                  return (
                    <Link
                      key={slug}
                      href={buildHomeSearchPath(config.location.slug, slug)}
                      className="block px-4 py-2 text-sm text-slate-800 no-underline hover:bg-slate-50"
                      role="menuitem"
                      onClick={() => setTypeOpen(false)}
                    >
                      {type.label}
                    </Link>
                  );
                })}
              </div>
            ) : null}
          </div>

          <button
            type="button"
            className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-800 hover:bg-slate-50"
            onClick={() => setFiltersOpen(true)}
          >
            All beds
          </button>
          <button
            type="button"
            className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-800 hover:bg-slate-50"
            onClick={() => setFiltersOpen(true)}
          >
            All baths
          </button>

          <div
            className="ml-auto inline-flex overflow-hidden rounded-full border border-slate-300"
            role="tablist"
            aria-label="List or map view"
          >
            <button
              type="button"
              role="tab"
              aria-selected={layout === "list"}
              className={cn(
                "px-3 py-1.5 text-sm",
                layout === "list"
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-800",
              )}
              onClick={() => setLayout("list")}
            >
              List
            </button>
            <button
              type="button"
              role="tab"
              aria-selected={layout === "map" || layout === "default"}
              className={cn(
                "inline-flex items-center gap-1 px-3 py-1.5 text-sm",
                layout !== "list"
                  ? "bg-slate-900 text-white"
                  : "bg-white text-slate-800",
              )}
              onClick={() => setLayout(layout === "list" ? "default" : "map")}
            >
              <MapIcon className="h-3.5 w-3.5" aria-hidden="true" />
              Map
            </button>
          </div>

          <button
            type="button"
            className="inline-flex items-center gap-1 rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-800 hover:bg-slate-50"
            onClick={() => setFiltersOpen((open) => !open)}
            aria-expanded={filtersOpen}
          >
            <SlidersHorizontal className="h-3.5 w-3.5" aria-hidden="true" />
            All filters
          </button>

          <a
            href={REALSCOUT_SEARCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-blue-600 px-3 py-1.5 text-sm font-medium text-white no-underline hover:bg-blue-700"
          >
            <Bookmark className="h-3.5 w-3.5" aria-hidden="true" />
            Save search
          </a>
        </div>

        {drawOpen ? (
          <div className="flex flex-wrap items-center gap-3 border-t border-slate-100 bg-slate-50 px-3 py-2 text-sm text-slate-600 lg:px-6">
            <span>
              Draw to select your area(s). Polygon search runs on RealScout —
              tap Apply to open the map tool.
            </span>
            <span className="ml-auto flex gap-2">
              <button
                type="button"
                className="rounded-md px-3 py-1 text-slate-700 hover:bg-slate-200"
                onClick={() => setDrawOpen(false)}
              >
                Cancel
              </button>
              <a
                href={REALSCOUT_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-md bg-slate-900 px-3 py-1 font-medium text-white no-underline hover:bg-slate-800"
              >
                Apply
              </a>
            </span>
          </div>
        ) : null}

        {filtersOpen ? (
          <div className="border-t border-slate-200 bg-white px-3 py-4 lg:px-6">
            <div className="mb-3 flex items-center justify-between">
              <h2 className="text-sm font-semibold text-slate-900">
                Price, beds, and baths
              </h2>
              <button
                type="button"
                className="inline-flex items-center gap-1 text-sm text-slate-600 hover:text-slate-900"
                onClick={() => setFiltersOpen(false)}
              >
                <X className="h-4 w-4" aria-hidden="true" />
                Close
              </button>
            </div>
            {filters}
          </div>
        ) : null}
      </div>

      <div className="flex min-h-[70vh] flex-col lg:flex-row">
        <section
          className={cn(
            "min-w-0 flex-1 overflow-y-auto px-4 py-6 lg:max-w-[52%] lg:px-8",
            layout === "map" ? "hidden lg:block" : "block",
          )}
          aria-label="Listing results"
        >
          <h1 className="mb-2 text-2xl font-semibold tracking-tight text-slate-900 md:text-3xl">
            {config.h1}
          </h1>
          <p className="mb-6 max-w-2xl text-sm text-slate-600">
            {config.intro}
          </p>
          <div className="home-search-listings">{listings}</div>
        </section>

        <aside
          className={cn(
            "relative min-h-[50vh] flex-1 bg-slate-100",
            layout === "list" && "hidden",
            layout === "default" && "hidden lg:block",
            layout === "map" && "block",
          )}
          aria-label={`${config.location.name} map`}
        >
          <iframe
            title={`Map of ${config.location.name}, Nevada`}
            src={config.mapEmbedUrl}
            className="absolute inset-0 h-full w-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <a
            href={REALSCOUT_SEARCH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute bottom-4 left-4 right-4 rounded-lg bg-white/95 px-4 py-3 text-sm font-medium text-slate-900 no-underline shadow-lg hover:bg-white"
          >
            Open interactive MLS map search on RealScout
          </a>
        </aside>
      </div>
    </div>
  );
}

function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-800">
      {children}
    </span>
  );
}
