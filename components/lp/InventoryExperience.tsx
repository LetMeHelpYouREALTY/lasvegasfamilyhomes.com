import RealScoutAdvancedSearch from "@/components/realscout/RealScoutAdvancedSearch";
import RealScoutOfficeListings from "@/components/realscout/RealScoutOfficeListings";
import LetsConnect from "@/components/lp/LetsConnect";
import MlsDisclaimer from "@/components/lp/MlsDisclaimer";
import WorkWithUs from "@/components/lp/WorkWithUs";
import { REALSCOUT_AGENT_ID } from "@/lib/home-search";
import type { InventoryPageConfig } from "@/lib/lp-clone";
import { generateFAQSchema } from "@/lib/schema";

type InventoryExperienceProps = {
  config: InventoryPageConfig;
  includeHeading?: boolean;
};

export default function InventoryExperience({
  config,
  includeHeading = true,
}: InventoryExperienceProps) {
  const faqSchema = generateFAQSchema(config.faqs);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="mx-auto max-w-6xl px-4 pb-8">
        {includeHeading ? (
          <>
            <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-blue-700">
              {config.kicker}
            </p>
            <h1 className="mb-4 text-4xl font-bold text-slate-900 md:text-5xl">
              {config.h1}
            </h1>
            <p className="mb-8 max-w-3xl text-lg text-slate-600">
              {config.intro}
            </p>
          </>
        ) : null}
        <div className="mb-8">
          <RealScoutAdvancedSearch agentId={REALSCOUT_AGENT_ID} />
        </div>
        <RealScoutOfficeListings
          agentId={REALSCOUT_AGENT_ID}
          propertyTypes={config.propertyTypes}
          listingStatus={config.listingStatus}
          sortOrder="NEWEST"
        />
      </div>

      <section className="bg-white">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <h2 className="mb-8 text-center text-2xl font-bold text-slate-900">
            {config.h1} questions
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

      <LetsConnect source={config.formSource} tags={config.formTags} />
      <div className="bg-white pt-8">
        <MlsDisclaimer />
      </div>
      <WorkWithUs />
    </>
  );
}
