import NeighborhoodLuxuryPage, {
  neighborhoodLuxury,
  neighborhoodMetadata,
} from "@/components/luxury/NeighborhoodLuxuryPage";

const neighborhood = neighborhoodLuxury.summerlin;

export const metadata = neighborhoodMetadata(neighborhood);

export default function SummerlinPage() {
  return <NeighborhoodLuxuryPage neighborhood={neighborhood} />;
}
