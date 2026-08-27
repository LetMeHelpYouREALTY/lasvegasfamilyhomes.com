import FamilyHomePage from "@/components/luxury/FamilyHomePage";
import { familyHomePages } from "@/lib/family-home-pages";

const page = familyHomePages["3-5-bedroom-homes"];

export const metadata = page.metadata;

export default function ThreeToFiveBedroomHomesPage() {
  return <FamilyHomePage page={page} />;
}
