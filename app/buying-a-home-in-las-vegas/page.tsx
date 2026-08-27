import FamilyHomePage from "@/components/luxury/FamilyHomePage";
import { familyHomePages } from "@/lib/family-home-pages";

const page = familyHomePages["buying-a-home-in-las-vegas"];

export const metadata = page.metadata;

export default function BuyingAHomeInLasVegasPage() {
  return <FamilyHomePage page={page} />;
}
