import FamilyHomePage from "@/components/luxury/FamilyHomePage";
import { familyHomePages } from "@/lib/family-home-pages";

const page = familyHomePages["family-homes"];

export const metadata = page.metadata;

export default function FamilyHomesHubPage() {
  return <FamilyHomePage page={page} />;
}
