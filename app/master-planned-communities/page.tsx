import FamilyHomePage from "@/components/luxury/FamilyHomePage";
import { familyHomePages } from "@/lib/family-home-pages";

const page = familyHomePages["master-planned-communities"];

export const metadata = page.metadata;

export default function MasterPlannedCommunitiesPage() {
  return <FamilyHomePage page={page} />;
}
