import Navbar from "@/components/layouts/Navbar";
import Footer from "@/components/layouts/Footer";
import HomeSearchExperience from "@/components/home-search/HomeSearchExperience";
import HomeSearchSections from "@/components/home-search/HomeSearchSections";
import RealScoutAdvancedSearch from "@/components/realscout/RealScoutAdvancedSearch";
import RealScoutOfficeListings from "@/components/realscout/RealScoutOfficeListings";
import {
  REALSCOUT_AGENT_ID,
  buildHomeSearchJsonLd,
  type HomeSearchConfig,
} from "@/lib/home-search";

type HomeSearchLayoutProps = {
  config: HomeSearchConfig;
};

export default function HomeSearchLayout({ config }: HomeSearchLayoutProps) {
  const graphs = buildHomeSearchJsonLd(config);

  return (
    <>
      {graphs.map((graph, index) => (
        <script
          key={index}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
      ))}
      <Navbar />
      <main className="pt-[88px]">
        <HomeSearchExperience
          config={config}
          filters={<RealScoutAdvancedSearch agentId={REALSCOUT_AGENT_ID} />}
          listings={
            <RealScoutOfficeListings
              agentId={REALSCOUT_AGENT_ID}
              propertyTypes={config.realscoutTypes}
              listingStatus={config.listingStatus}
            />
          }
        />
        <HomeSearchSections config={config} />
      </main>
      <Footer />
    </>
  );
}
