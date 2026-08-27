import FamilyHomePage from "@/components/luxury/FamilyHomePage";
import { familyHomePages } from "@/lib/family-home-pages";

const page = familyHomePages["selling-your-las-vegas-home"];

export const metadata = page.metadata;

export default function SellingYourLasVegasHomePage() {
  return <FamilyHomePage page={page} />;
}
