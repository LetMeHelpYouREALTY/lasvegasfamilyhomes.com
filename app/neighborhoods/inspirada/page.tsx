import NeighborhoodLuxuryPage, {
  neighborhoodLuxury,
  neighborhoodMetadata,
} from "@/components/luxury/NeighborhoodLuxuryPage";

const neighborhood = neighborhoodLuxury.inspirada;

export const metadata = neighborhoodMetadata(neighborhood);

export default function InspiradaPage() {
  return <NeighborhoodLuxuryPage neighborhood={neighborhood} />;
}
