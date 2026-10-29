import { notFound } from "next/navigation";
import type { Metadata } from "next";
import HomeSearchLayout from "@/components/home-search/HomeSearchLayout";
import {
  buildHomeSearchMetadata,
  generateAllSeoPaths,
  parseSeoPath,
} from "@/lib/home-search";

type PageProps = {
  params: Promise<{ seoPath: string[] }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return generateAllSeoPaths().map((seoPath) => ({ seoPath }));
}

export async function generateMetadata(props: PageProps): Promise<Metadata> {
  const params = await props.params;
  const config = parseSeoPath(params.seoPath);
  if (!config) {
    return { title: "Home search not found" };
  }
  return buildHomeSearchMetadata(config);
}

export default async function HomeSearchSeoPage(props: PageProps) {
  const params = await props.params;
  const config = parseSeoPath(params.seoPath);
  if (!config) {
    notFound();
  }
  return <HomeSearchLayout config={config} />;
}
