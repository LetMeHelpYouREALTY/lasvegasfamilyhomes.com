import NeighborhoodLuxuryPage, {
  neighborhoodLuxury,
  neighborhoodMetadata,
} from "@/components/luxury/NeighborhoodLuxuryPage";

const neighborhood = neighborhoodLuxury["skye-canyon"];

export const metadata = neighborhoodMetadata(neighborhood);

export default function SkyeCanyonPage() {
  return <NeighborhoodLuxuryPage neighborhood={neighborhood} />;
}
