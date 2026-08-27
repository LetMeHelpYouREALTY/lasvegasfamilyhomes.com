import type { Metadata, Viewport } from "next";
import { Montserrat, Tenor_Sans } from "next/font/google";
import "./globals.css";
import { headers } from "next/headers";
import { BotIdClient } from "botid/client";
import { getDomainConfig } from "@/lib/domain-config";
import { BOTID_PROTECTED_ROUTES } from "@/lib/botid-protect";
import { buildMetadata } from "@/lib/seo";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const tenorSans = Tenor_Sans({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-tenor",
  display: "swap",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#1A1A1A",
};

export async function generateMetadata(): Promise<Metadata> {
  const domain = headers().get("x-domain") || "";
  const config = getDomainConfig(domain);
  return buildMetadata(config, { path: "/" });
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${tenorSans.variable} ${montserrat.variable}`}
    >
      <head>
        <BotIdClient protect={BOTID_PROTECTED_ROUTES} />
        <Script
          src="https://em.realscout.com/widgets/realscout-web-components.js"
          strategy="afterInteractive"
        />
        <Script
          src="https://assets.calendly.com/assets/external/widget.js"
          strategy="afterInteractive"
        />
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
      <body className="font-sans">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
