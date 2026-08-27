import { redirect } from "next/navigation";
import type { Metadata } from "next";
import { HOME_SEARCH_BASE_PATH } from "@/lib/home-search";

export const metadata: Metadata = {
  title: "Las Vegas Listings | Home Search",
  description:
    "Search Las Vegas homes for sale with RealScout. Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties. Call (702) 222-1964.",
};

export default function HomeSearchV2IndexPage() {
  redirect(HOME_SEARCH_BASE_PATH);
}
