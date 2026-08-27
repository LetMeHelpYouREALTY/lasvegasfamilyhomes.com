import FamilyHomePage from "@/components/luxury/FamilyHomePage";
import { familyHomePages } from "@/lib/family-home-pages";

const page = familyHomePages["pool-homes"];

export const metadata = page.metadata;

export default function PoolHomesPage() {
  return <FamilyHomePage page={page} />;
}
