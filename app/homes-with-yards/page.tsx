import FamilyHomePage from "@/components/luxury/FamilyHomePage";
import { familyHomePages } from "@/lib/family-home-pages";

const page = familyHomePages["homes-with-yards"];

export const metadata = page.metadata;

export default function HomesWithYardsPage() {
  return <FamilyHomePage page={page} />;
}
