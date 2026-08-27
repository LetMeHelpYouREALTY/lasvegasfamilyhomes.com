import NeighborhoodLuxuryPage, {
  neighborhoodLuxury,
  neighborhoodMetadata,
} from "@/components/luxury/NeighborhoodLuxuryPage";

const neighborhood = neighborhoodLuxury["mountains-edge"];

export const metadata = neighborhoodMetadata(neighborhood);

export default function MountainsEdgePage() {
  return <NeighborhoodLuxuryPage neighborhood={neighborhood} />;
}
