import { renderBrandOgImage, ogAlt, ogSize, ogContentType } from "@/lib/og-image";

export const runtime = "edge";
export const alt = ogAlt;
export const size = ogSize;
export const contentType = ogContentType;

export default function OpengraphImage() {
  return renderBrandOgImage();
}
