import NeighborhoodLuxuryPage, {
  neighborhoodLuxury,
  neighborhoodMetadata,
} from "@/components/luxury/NeighborhoodLuxuryPage";

const neighborhood = neighborhoodLuxury["centennial-hills"];

export const metadata = neighborhoodMetadata(neighborhood);

export default function CentennialHillsPage() {
  return <NeighborhoodLuxuryPage neighborhood={neighborhood} />;
}
