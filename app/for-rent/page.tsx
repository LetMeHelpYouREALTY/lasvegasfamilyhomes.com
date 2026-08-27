import type { Metadata } from "next";
import InventoryExperience from "@/components/lp/InventoryExperience";
import LpPageChrome from "@/components/lp/LpPageChrome";
import { FOR_RENT_INVENTORY, getLpClonePage } from "@/lib/lp-clone";
import { agentInfo, siteConfig } from "@/lib/site-config";

const page = getLpClonePage("/for-rent")!;

export const metadata: Metadata = {
  title: page.title,
  description: page.description,
  keywords: [
    "Berkshire Hathaway HomeServices",
    "Las Vegas homes for rent",
    "BHHS Nevada Properties",
  ],
  alternates: { canonical: `${siteConfig.url}${page.path}` },
};

export default function ForRentPage() {
  const collectionSchema = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: page.h1,
    description: page.description,
    url: `${siteConfig.url}${page.path}`,
    provider: {
      "@type": "RealEstateAgent",
      name: "Dr. Jan Duffy - Berkshire Hathaway HomeServices Nevada Properties",
      telephone: agentInfo.phoneE164,
    },
  };

  return (
    <LpPageChrome>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />
      <div className="mx-auto max-w-6xl px-4">
        <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
          {FOR_RENT_INVENTORY.kicker}
        </p>
        <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
          {page.h1}
        </h1>
        <p className="mb-8 max-w-3xl text-lg text-slate-600">
          {FOR_RENT_INVENTORY.intro}
        </p>
      </div>
      <InventoryExperience config={FOR_RENT_INVENTORY} includeHeading={false} />
    </LpPageChrome>
  );
}
