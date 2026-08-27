import FamilyHomePage from "@/components/luxury/FamilyHomePage";
import { familyHomePages } from "@/lib/family-home-pages";

const page = familyHomePages["single-story-homes"];

export const metadata = page.metadata;

export default function SingleStoryHomesPage() {
  return <FamilyHomePage page={page} />;
}
