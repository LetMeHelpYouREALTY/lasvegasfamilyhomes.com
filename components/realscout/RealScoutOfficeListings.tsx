"use client";

type RealScoutOfficeListingsProps = {
  agentId: string;
  propertyTypes: string;
  listingStatus?: string;
  sortOrder?: string;
  priceMin?: string;
  priceMax?: string;
};

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;");
}

export default function RealScoutOfficeListings({
  agentId,
  propertyTypes,
  listingStatus = "For Sale",
  sortOrder = "NEWEST",
  priceMin,
  priceMax,
}: RealScoutOfficeListingsProps) {
  const priceMinAttr = priceMin ? ` price-min="${escapeAttr(priceMin)}"` : "";
  const priceMaxAttr = priceMax ? ` price-max="${escapeAttr(priceMax)}"` : "";

  return (
    <div
      dangerouslySetInnerHTML={{
        __html: `<realscout-office-listings agent-encoded-id="${escapeAttr(agentId)}" sort-order="${escapeAttr(sortOrder)}" listing-status="${escapeAttr(listingStatus)}" property-types="${escapeAttr(propertyTypes)}"${priceMinAttr}${priceMaxAttr}></realscout-office-listings>`,
      }}
    />
  );
}
