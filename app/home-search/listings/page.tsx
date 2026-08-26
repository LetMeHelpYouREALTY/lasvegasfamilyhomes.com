import type { Metadata } from "next";
import HomeSearchLayout from "@/components/home-search/HomeSearchLayout";
import {
  buildHomeSearchMetadata,
  getDefaultHomeSearchConfig,
} from "@/lib/home-search";

const config = {
  ...getDefaultHomeSearchConfig(),
  path: "/home-search/listings",
};

export const metadata: Metadata = buildHomeSearchMetadata(config);

export default function HomeSearchListingsPage() {
  return <HomeSearchLayout config={config} />;
}
