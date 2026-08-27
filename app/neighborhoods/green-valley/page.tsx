import NeighborhoodLuxuryPage, {
  neighborhoodLuxury,
  neighborhoodMetadata,
} from "@/components/luxury/NeighborhoodLuxuryPage";

const neighborhood = neighborhoodLuxury["green-valley"];

export const metadata = neighborhoodMetadata(neighborhood);

export default function GreenValleyPage() {
  return <NeighborhoodLuxuryPage neighborhood={neighborhood} />;
}
