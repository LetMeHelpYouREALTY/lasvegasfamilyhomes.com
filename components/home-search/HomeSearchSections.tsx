import Link from "next/link";
import { Clock, MapPin, Navigation, Phone, Star } from "lucide-react";
import {
  nearbyLocationLinks,
  propertyTypeLinks,
  type HomeSearchConfig,
} from "@/lib/home-search";
import { agentInfo, officeInfo } from "@/lib/site-config";

type HomeSearchSectionsProps = {
  config: HomeSearchConfig;
};

export default function HomeSearchSections({
  config,
}: HomeSearchSectionsProps) {
  const typeLinks = propertyTypeLinks(config.location, config.propertyType);
  const nearby = nearbyLocationLinks(config.location, config.propertyType);

  return (
    <div className="border-t border-slate-200 bg-white">
      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          Related {config.location.name} searches
        </h2>
        <p className="mb-6 max-w-3xl text-slate-600">
          Same map, different property type. Each link is a dedicated search
          page with RealScout listings — not a custom MLS engine.
        </p>
        <ul className="flex flex-wrap gap-2">
          {typeLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="inline-flex rounded-full border border-slate-300 bg-white px-3 py-1.5 text-sm text-slate-800 no-underline hover:bg-slate-50"
              >
                {link.label} in {config.location.name}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <h2 className="mb-4 text-2xl font-bold text-slate-900">
            Browse nearby Las Vegas Valley areas
          </h2>
          <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {nearby.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="block rounded-lg border border-slate-200 bg-white p-4 text-slate-800 no-underline hover:border-blue-300 hover:shadow-sm"
                >
                  {link.label} homes for sale
                </Link>
              </li>
            ))}
            {config.location.neighborhoodHref ? (
              <li>
                <Link
                  href={config.location.neighborhoodHref}
                  className="block rounded-lg border border-slate-200 bg-white p-4 text-slate-800 no-underline hover:border-blue-300 hover:shadow-sm"
                >
                  {config.location.name} neighborhood guide
                </Link>
              </li>
            ) : null}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <h2 className="mb-4 text-2xl font-bold text-slate-900">
          How this home search works
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-slate-200 p-6">
            <h3 className="mb-2 font-semibold text-slate-900">1. Filter</h3>
            <p className="text-sm text-slate-600">
              Location and property type are SEO pages. Price, beds, and baths
              run on the RealScout advanced search widget.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-6">
            <h3 className="mb-2 font-semibold text-slate-900">2. Browse</h3>
            <p className="text-sm text-slate-600">
              Listing cards are RealScout office listings for {agentInfo.name}.
              Toggle List or Map. The map is Google; pin-level MLS map search
              stays on RealScout.
            </p>
          </div>
          <div className="rounded-lg border border-slate-200 p-6">
            <h3 className="mb-2 font-semibold text-slate-900">3. Save</h3>
            <p className="text-sm text-slate-600">
              Save Search and draw-area tools open RealScout so alerts and
              polygon search stay native — no duplicate CRM sync.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-slate-50">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">
            {config.location.name} home search questions
          </h2>
          <div className="space-y-4">
            {config.faqs.map((faq) => (
              <div
                key={faq.question}
                className="rounded-lg border border-slate-200 bg-white p-6"
              >
                <h3 className="mb-2 font-semibold text-slate-900">
                  {faq.question}
                </h3>
                <p className="text-slate-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-12">
        <div className="grid gap-8 lg:grid-cols-2">
          <div>
            <h2 className="mb-4 text-2xl font-bold text-slate-900">
              Work with {agentInfo.name}
            </h2>
            <p className="mb-4 text-slate-600">
              {agentInfo.brokerage} · License {agentInfo.license}.{" "}
              {officeInfo.address.full}.
            </p>
            <p className="mb-6 text-slate-600">
              Hours: {officeInfo.hours.weekday}. {officeInfo.hours.weekend}.{" "}
              {officeInfo.hours.sunday}.
            </p>
            <div className="flex flex-wrap gap-3">
              <a
                href={agentInfo.phoneTel}
                className="inline-flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-medium text-white no-underline hover:bg-blue-700"
              >
                <Phone className="h-4 w-4" aria-hidden="true" />
                Call {agentInfo.phone}
              </a>
              <a
                href={officeInfo.mapsDirections}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2 font-medium text-slate-800 no-underline hover:bg-slate-50"
              >
                <Navigation className="h-4 w-4" aria-hidden="true" />
                Directions
              </a>
              <a
                href={officeInfo.googleReviews}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md border border-slate-300 px-4 py-2 font-medium text-slate-800 no-underline hover:bg-slate-50"
              >
                <Star className="h-4 w-4" aria-hidden="true" />
                View Google Reviews
              </a>
            </div>
            <p className="mt-4 flex items-start gap-2 text-sm text-slate-600">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {officeInfo.address.full}
            </p>
            <p className="mt-2 flex items-start gap-2 text-sm text-slate-600">
              <Clock className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              {officeInfo.hours.weekday}; {officeInfo.hours.weekend};{" "}
              {officeInfo.hours.sunday}
            </p>
          </div>
          <iframe
            title="Berkshire Hathaway HomeServices Nevada Properties office map"
            src={officeInfo.mapsEmbed}
            className="h-72 w-full rounded-lg border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </section>

      <p className="mx-auto max-w-6xl px-4 pb-12 text-xs text-slate-500">
        Listing information is provided by RealScout and participating MLS
        systems, including the Greater Las Vegas Association of REALTORS®
        (GLVAR), and is deemed reliable but not guaranteed. Equal Housing
        Opportunity. {agentInfo.name}, License {agentInfo.license},{" "}
        {agentInfo.brokerage}. {officeInfo.address.full}. Call {agentInfo.phone}
        .
      </p>
    </div>
  );
}
