import NeighborhoodLuxuryPage, {
  neighborhoodLuxury,
  neighborhoodMetadata,
} from "@/components/luxury/NeighborhoodLuxuryPage";

const neighborhood = neighborhoodLuxury.henderson;

export const metadata = neighborhoodMetadata(neighborhood);

export default function HendersonPage() {
  return <NeighborhoodLuxuryPage neighborhood={neighborhood} />;
}
