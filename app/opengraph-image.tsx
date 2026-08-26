import { ImageResponse } from "next/og";
import { OG_IMAGE_HEIGHT, OG_IMAGE_WIDTH } from "@/lib/seo";
import { agentInfo, siteConfig } from "@/lib/site-config";

export const alt =
  "Las Vegas Family Homes for Sale — Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties";
export const size = { width: OG_IMAGE_WIDTH, height: OG_IMAGE_HEIGHT };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "linear-gradient(135deg, #0f172a 0%, #1e3a8a 55%, #1d4ed8 100%)",
          color: "#ffffff",
          padding: "64px 72px",
          fontFamily: "sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 22,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            color: "#bfdbfe",
          }}
        >
          <span>Berkshire Hathaway HomeServices</span>
          <span>Nevada Properties</span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              fontWeight: 600,
              color: "#93c5fd",
            }}
          >
            {siteConfig.name}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 64,
              fontWeight: 800,
              lineHeight: 1.1,
              maxWidth: 980,
            }}
          >
            Las Vegas Family Homes for Sale
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 28,
              color: "#e2e8f0",
              maxWidth: 900,
              lineHeight: 1.35,
            }}
          >
            3–5 bedroom houses with yards in Summerlin, Henderson, Centennial Hills, and Skye Canyon
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 24,
          }}
        >
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            <span style={{ fontWeight: 700 }}>{agentInfo.name}, REALTOR®</span>
            <span style={{ color: "#bfdbfe" }}>License {agentInfo.license}</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 6 }}>
            <span style={{ fontWeight: 700 }}>{agentInfo.phoneFormatted}</span>
            <span style={{ color: "#bfdbfe" }}>lasvegasfamilyhomes.com</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
