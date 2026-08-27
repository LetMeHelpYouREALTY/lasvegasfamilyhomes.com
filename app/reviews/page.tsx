import FamilyHomePage from "@/components/luxury/FamilyHomePage";
import { familyHomePages } from "@/lib/family-home-pages";

const page = familyHomePages.reviews;

export const metadata = page.metadata;

export default function ReviewsPage() {
  return <FamilyHomePage page={page} />;
}
