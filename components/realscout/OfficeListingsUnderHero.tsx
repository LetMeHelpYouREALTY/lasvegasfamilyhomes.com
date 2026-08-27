import { MlsDisclaimer } from "@/components/luxury/NapBlock";
import { REALSCOUT_AGENT_ID } from "@/lib/home-search";

type OfficeListingsUnderHeroProps = {
  heading?: string;
  propertyTypes?: string;
  variant?: "luxury" | "legacy";
  priceMin?: string;
  priceMax?: string;
};

function officeListingsHtml({
  propertyTypes,
  priceMin,
  priceMax,
}: {
  propertyTypes: string;
  priceMin?: string;
  priceMax?: string;
}) {
  const priceMinAttr = priceMin ? ` price-min="${priceMin}"` : "";
  const priceMaxAttr = priceMax ? ` price-max="${priceMax}"` : "";
  return `<realscout-office-listings agent-encoded-id="${REALSCOUT_AGENT_ID}" sort-order="NEWEST" listing-status="For Sale" property-types="${propertyTypes}"${priceMinAttr}${priceMaxAttr}></realscout-office-listings>`;
}

/**
 * RealScout office listings band placed immediately under the page hero.
 * Script loads once in root layout; this only mounts the web component.
 */
export default function OfficeListingsUnderHero({
  heading = "Homes for Sale in Las Vegas",
  propertyTypes = ",SFR,MF,TC",
  variant = "luxury",
  priceMin,
  priceMax,
}: OfficeListingsUnderHeroProps) {
  const widget = officeListingsHtml({ propertyTypes, priceMin, priceMax });

  if (variant === "legacy") {
    return (
      <section className="mb-16" aria-label="Live MLS office listings">
        <h2 className="mb-3 text-center text-3xl font-bold text-slate-900 md:text-4xl">
          {heading}
        </h2>
        <p className="mb-8 text-center text-slate-600">
          Newest listings through RealScout and the Greater Las Vegas
          Association of REALTORS® MLS. Call (702) 222-1964 to tour.
        </p>
        <div dangerouslySetInnerHTML={{ __html: widget }} />
        <MlsDisclaimer className="mt-8" />
      </section>
    );
  }

  return (
    <section className="lp-section bg-white" aria-label="Live MLS office listings">
      <div className="lp-container">
        <h2 className="text-center">{heading}</h2>
        <p className="mt-3 text-center font-sans text-[11px] uppercase tracking-luxury text-luxury-muted">
          Live MLS · RealScout · GLVAR
        </p>
        <div
          className="mt-10"
          dangerouslySetInnerHTML={{ __html: widget }}
        />
        <MlsDisclaimer className="mt-10" />
      </div>
    </section>
  );
}
