import NeighborhoodLuxuryPage, {
  neighborhoodLuxury,
  neighborhoodMetadata,
} from "@/components/luxury/NeighborhoodLuxuryPage";

const neighborhood = neighborhoodLuxury["the-ridges"];

export const metadata = neighborhoodMetadata(neighborhood);

export default function TheRidgesPage() {
  return <NeighborhoodLuxuryPage neighborhood={neighborhood} />;
}
