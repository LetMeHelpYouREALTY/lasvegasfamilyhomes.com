import type { Metadata } from "next";
import Link from "next/link";
import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import {
  HOME_SEARCH_BASE_PATH,
  HOME_SEARCH_PROPERTY_TYPE_ORDER,
  HOME_SEARCH_PROPERTY_TYPES,
  REALSCOUT_AGENT_ID,
  REALSCOUT_SEARCH_URL,
  buildHomeSearchPath,
  getNamedLocations,
  getZipLocations,
} from "@/lib/home-search";
import { agentInfo, officeInfo, siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Las Vegas Home Search | City, ZIP & Property Type Pages",
  description:
    "Browse every Las Vegas Valley home-search page — cities, communities, ZIPs, and nine property types — with live RealScout MLS listings. Dr. Jan Duffy, BHHS Nevada Properties. Call (702) 222-1964.",
  alternates: {
    canonical: `${siteConfig.url}/home-search`,
  },
};

export default function HomeSearchHubPage() {
  const named = getNamedLocations();
  const zips = getZipLocations();

  return (
    <>
      <Navbar />
      <main className="bg-white pt-24 pb-16">
        <div className="container mx-auto px-4">
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
            {agentInfo.brokerage}
          </p>
          <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
            Las Vegas Valley Home Search
          </h1>
          <p className="mb-8 max-w-3xl text-lg text-slate-600">
            Luxury Presence–style location pages, powered by RealScout widgets
            instead of a custom MLS engine. Pick a city, community, or ZIP, then
            a property type.
          </p>

          <div
            className="mb-12"
            dangerouslySetInnerHTML={{
              __html: `<realscout-simple-search agent-encoded-id="${REALSCOUT_AGENT_ID}"></realscout-simple-search>`,
            }}
          />

          <p className="mb-12">
            <Link
              href={HOME_SEARCH_BASE_PATH}
              className="inline-flex rounded-md bg-blue-600 px-5 py-2.5 font-medium text-white no-underline hover:bg-blue-700"
            >
              Open the list + map search
            </Link>
          </p>

          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
              Cities and communities
            </h2>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {named.map((loc) => (
                <article
                  key={loc.slug}
                  className="rounded-xl border border-slate-200 p-6"
                >
                  <h3 className="mb-2 text-lg font-semibold text-slate-900">
                    <Link
                      href={buildHomeSearchPath(loc.slug, null)}
                      className="text-slate-900 no-underline hover:text-blue-700"
                    >
                      {loc.name}, NV
                    </Link>
                  </h3>
                  <p className="mb-4 text-sm text-slate-600">{loc.blurb}</p>
                  <ul className="flex flex-wrap gap-2">
                    <li>
                      <Link
                        href={buildHomeSearchPath(loc.slug, null)}
                        className="text-sm text-blue-700 no-underline hover:underline"
                      >
                        All types
                      </Link>
                    </li>
                    {HOME_SEARCH_PROPERTY_TYPE_ORDER.map((slug) => (
                      <li key={slug}>
                        <Link
                          href={buildHomeSearchPath(loc.slug, slug)}
                          className="text-sm text-blue-700 no-underline hover:underline"
                        >
                          {HOME_SEARCH_PROPERTY_TYPES[slug].shortLabel}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          <section className="mb-16">
            <h2 className="mb-6 text-2xl font-bold text-slate-900">
              Search by ZIP
            </h2>
            <ul className="flex flex-wrap gap-2">
              {zips.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={buildHomeSearchPath(loc.slug, "single-family")}
                    className="inline-flex rounded-full border border-slate-300 px-3 py-1.5 text-sm text-slate-800 no-underline hover:bg-slate-50"
                  >
                    {loc.name}
                  </Link>
                </li>
              ))}
            </ul>
          </section>

          <section className="mb-16 rounded-xl bg-slate-50 p-8">
            <h2 className="mb-3 text-2xl font-bold text-slate-900">
              Nine property types
            </h2>
            <p className="mb-6 max-w-3xl text-slate-600">
              Same nine buckets Luxury Presence uses on auto-generated search
              pages, mapped to RealScout property-type codes.
            </p>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
              {HOME_SEARCH_PROPERTY_TYPE_ORDER.map((slug) => {
                const type = HOME_SEARCH_PROPERTY_TYPES[slug];
                return (
                  <div
                    key={slug}
                    className="rounded-lg border border-slate-200 bg-white p-4"
                  >
                    <h3 className="font-semibold text-slate-900">
                      {type.label}
                    </h3>
                    <p className="mt-2 text-sm text-slate-600">{type.blurb}</p>
                    <Link
                      href={buildHomeSearchPath("las-vegas", slug)}
                      className="mt-3 inline-block text-sm font-medium text-blue-700 no-underline hover:underline"
                    >
                      Las Vegas {type.shortLabel.toLowerCase()} listings
                    </Link>
                  </div>
                );
              })}
            </div>
          </section>

          <section className="rounded-xl border border-slate-200 p-8">
            <h2 className="mb-3 text-2xl font-bold text-slate-900">Office</h2>
            <p className="text-slate-700">
              {agentInfo.name}, {agentInfo.title} · {agentInfo.brokerage}
            </p>
            <p className="text-slate-700">{officeInfo.address.full}</p>
            <p className="text-slate-700">
              {officeInfo.hours.weekday}; {officeInfo.hours.weekend};{" "}
              {officeInfo.hours.sunday}
            </p>
            <p className="mt-4 flex flex-wrap gap-4">
              <a href={agentInfo.phoneTel} className="font-medium">
                Call {agentInfo.phone}
              </a>
              <a
                href={officeInfo.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
              >
                Directions
              </a>
              <a
                href={officeInfo.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
              >
                View Google Reviews
              </a>
              <a
                href={REALSCOUT_SEARCH_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                RealScout map search
              </a>
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
