import NeighborhoodLuxuryPage, {
  neighborhoodLuxury,
  neighborhoodMetadata,
} from "@/components/luxury/NeighborhoodLuxuryPage";

const neighborhood = neighborhoodLuxury["southern-highlands"];

export const metadata = neighborhoodMetadata(neighborhood);

export default function SouthernHighlandsPage() {
  return <NeighborhoodLuxuryPage neighborhood={neighborhood} />;
}
