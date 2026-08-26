import { ImageResponse } from "next/og";
import { siteConfig, agentInfo } from "@/lib/site-config";

export const ogAlt = `${agentInfo.name}, ${agentInfo.title} — ${siteConfig.fullName}`;
export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

/**
 * Brand-level social share card. Used for both the Open Graph and Twitter
 * image so every page ships a valid `og:image` / `twitter:image` even though
 * the project has no static hero asset in `public/`.
 */
export function renderBrandOgImage(): ImageResponse {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 100%)",
          padding: "72px",
          color: "#ffffff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 30,
              letterSpacing: 6,
              textTransform: "uppercase",
              color: "#93c5fd",
            }}
          >
            {siteConfig.brandName}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 84,
              fontWeight: 700,
              lineHeight: 1.05,
              marginTop: 24,
            }}
          >
            {agentInfo.name}
          </div>
          <div style={{ display: "flex", fontSize: 40, marginTop: 12, color: "#e2e8f0" }}>
            {agentInfo.title} · {siteConfig.shortName} Nevada Properties
          </div>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 34,
            color: "#cbd5e1",
          }}
        >
          <div style={{ display: "flex" }}>Las Vegas · Henderson · Summerlin</div>
          <div style={{ display: "flex", fontWeight: 700, color: "#ffffff" }}>
            {agentInfo.phone}
          </div>
        </div>
      </div>
    ),
    { ...ogSize },
  );
}
