import { notFound } from "next/navigation";
import type { Metadata } from "next";
import HomeSearchLayout from "@/components/home-search/HomeSearchLayout";
import {
  buildHomeSearchMetadata,
  generateAllSeoPaths,
  parseSeoPath,
} from "@/lib/home-search";

type PageProps = {
  params: { seoPath: string[] };
};

export const dynamicParams = false;

export function generateStaticParams() {
  return generateAllSeoPaths().map((seoPath) => ({ seoPath }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const config = parseSeoPath(params.seoPath);
  if (!config) {
    return { title: "Home search not found" };
  }
  return buildHomeSearchMetadata(config);
}

export default function HomeSearchSeoPage({ params }: PageProps) {
  const config = parseSeoPath(params.seoPath);
  if (!config) {
    notFound();
  }
  return <HomeSearchLayout config={config} />;
}
