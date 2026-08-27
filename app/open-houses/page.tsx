import FamilyHomePage from "@/components/luxury/FamilyHomePage";
import { familyHomePages } from "@/lib/family-home-pages";

const page = familyHomePages["open-houses"];

export const metadata = page.metadata;

export default function OpenHousesPage() {
  return <FamilyHomePage page={page} />;
}
