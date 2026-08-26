import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import { headers } from "next/headers";
import { getDomainConfig } from "@/lib/domain-config";
import { siteConfig } from "@/lib/site-config";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

export async function generateMetadata(): Promise<Metadata> {
  const requestHeaders = headers();
  const domain = requestHeaders.get("x-domain") || requestHeaders.get("host") || "";
  const config = getDomainConfig(domain);

  const isLocal = domain.startsWith("localhost") || domain.startsWith("127.0.0.1");
  const baseUrl = domain
    ? `${isLocal ? "http" : "https"}://${domain.replace(/^www\./, "")}`
    : siteConfig.url;
  const siteName = `${config.neighborhood} Real Estate | Dr. Jan Duffy, ${siteConfig.fullName}`;

  return {
    metadataBase: new URL(baseUrl),
    title: `${config.neighborhood} | Dr. Jan Duffy, REALTOR® | BHHS Nevada`,
    description: config.description,
    keywords: config.keywords,
    alternates: {
      canonical: "/",
    },
    openGraph: {
      title: config.heroHeadline,
      description: config.description,
      type: "website",
      url: baseUrl,
      siteName,
      locale: "en_US",
    },
    twitter: {
      card: "summary_large_image",
      title: config.heroHeadline,
      description: config.description,
    },
  };
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={GeistSans.className}>
      <head>
        {/* WidgetTracker */}
        <Script id="widget-tracker" strategy="afterInteractive">{`
          (function(w,i,d,g,e,t){w["WidgetTrackerObject"]=g;(w[g]=w[g]||function()
          {(w[g].q=w[g].q||[]).push(arguments);}),(w[g].ds=1*new Date());(e="script"),
          (t=d.createElement(e)),(e=d.getElementsByTagName(e)[0]);t.async=1;t.src=i;
          e.parentNode.insertBefore(t,e);})
          (window,"https://widgetbe.com/agent",document,"widgetTracker");
          window.widgetTracker("create","WT-XQHVYQWW");
          window.widgetTracker("send","pageview");
        `}</Script>
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
