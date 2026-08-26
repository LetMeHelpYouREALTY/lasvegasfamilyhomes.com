import type { Metadata } from "next";
import { agentInfo, siteConfig } from "@/lib/site-config";
import { getDomainConfig, type DomainConfig } from "@/lib/domain-config";

export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

export function getCanonicalUrl(hostname?: string): string {
  const config = getDomainConfig(hostname ?? "");
  const host =
    config.domain && config.domain !== "default"
      ? config.domain
      : "lasvegasfamilyhomes.com";
  return `https://${host.replace(/^www\./, "")}`;
}

export function getOgImage(canonicalUrl: string) {
  return {
    url: `${canonicalUrl}/opengraph-image`,
    secureUrl: `${canonicalUrl}/opengraph-image`,
    width: OG_IMAGE_WIDTH,
    height: OG_IMAGE_HEIGHT,
    alt: `${siteConfig.name} — Dr. Jan Duffy, ${agentInfo.brokerage}`,
    type: "image/png" as const,
  };
}

export function buildMetadata(
  config: DomainConfig,
  options?: { path?: string }
): Metadata {
  const canonicalUrl = getCanonicalUrl(config.domain);
  const path = options?.path ?? "/";
  const pageUrl = path === "/" ? canonicalUrl : `${canonicalUrl}${path}`;
  const ogImage = getOgImage(canonicalUrl);
  const title = `${config.heroHeadline} | Dr. Jan Duffy, REALTOR® | BHHS Nevada`;

  return {
    metadataBase: new URL(canonicalUrl),
    title: {
      default: title,
      template: `%s | ${siteConfig.name}`,
    },
    description: config.description,
    keywords: config.keywords,
    authors: [{ name: agentInfo.name, url: canonicalUrl }],
    creator: agentInfo.name,
    publisher: agentInfo.brokerage,
    applicationName: siteConfig.name,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: pageUrl,
      siteName: siteConfig.name,
      title: config.heroHeadline,
      description: config.description,
      images: [ogImage],
    },
    twitter: {
      card: "summary_large_image",
      title: config.heroHeadline,
      description: config.description,
      images: [ogImage.url],
    },
    robots: {
      index: true,
      follow: true,
    },
  };
}
