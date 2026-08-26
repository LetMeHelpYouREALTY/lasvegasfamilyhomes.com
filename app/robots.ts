import { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/admin/", "/_next/", "/monitoring/"],
      },
      // Block AI training crawlers
      {
        userAgent: ["GPTBot", "CCBot", "anthropic-ai", "Claude-Web"],
        disallow: "/",
      },
      // Allow Google's AI bot (Search Generative Experience)
      {
        userAgent: "Google-Extended",
        allow: "/",
      },
      // Throttle aggressive SEO crawlers
      {
        userAgent: ["AhrefsBot", "SemrushBot"],
        crawlDelay: 10,
      },
      {
        userAgent: "Bingbot",
        crawlDelay: 5,
      },
      // Image crawler
      {
        userAgent: "Googlebot-Image",
        allow: ["/images/", "/_next/image"],
      },
      // Social preview bots
      {
        userAgent: ["facebookexternalhit", "Twitterbot", "LinkedInBot", "PinterestBot"],
        allow: "/",
      },
    ],
    sitemap: `${siteConfig.url}/sitemap.xml`,
    host: siteConfig.url,
  };
}
