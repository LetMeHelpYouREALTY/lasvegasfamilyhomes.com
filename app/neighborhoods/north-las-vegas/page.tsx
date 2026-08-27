import NeighborhoodLuxuryPage, {
  neighborhoodLuxury,
  neighborhoodMetadata,
} from "@/components/luxury/NeighborhoodLuxuryPage";

const neighborhood = neighborhoodLuxury["north-las-vegas"];

export const metadata = neighborhoodMetadata(neighborhood);

export default function NorthLasVegasPage() {
  return <NeighborhoodLuxuryPage neighborhood={neighborhood} />;
}
