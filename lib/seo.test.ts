import { describe, expect, it } from "vitest";
import { buildMetadata, getCanonicalUrl, getOgImage } from "./seo";
import { DEFAULT_CONFIG } from "./domain-config";
import { siteConfig } from "./site-config";

describe("SEO metadata for lasvegasfamilyhomes.com", () => {
  it("uses the production canonical URL", () => {
    expect(getCanonicalUrl("lasvegasfamilyhomes.com")).toBe(
      "https://lasvegasfamilyhomes.com"
    );
    expect(getCanonicalUrl("www.lasvegasfamilyhomes.com")).toBe(
      "https://lasvegasfamilyhomes.com"
    );
    expect(getCanonicalUrl("")).toBe("https://lasvegasfamilyhomes.com");
  });

  it("builds homepage Open Graph and Twitter tags", () => {
    const metadata = buildMetadata(DEFAULT_CONFIG, { path: "/" });
    const ogImage = getOgImage("https://lasvegasfamilyhomes.com");

    expect(metadata.metadataBase?.toString()).toBe("https://lasvegasfamilyhomes.com/");
    expect(metadata.alternates?.canonical).toBe("https://lasvegasfamilyhomes.com");
    expect(metadata.openGraph?.url).toBe("https://lasvegasfamilyhomes.com");
    expect(metadata.openGraph?.siteName).toBe(siteConfig.name);
    expect(metadata.openGraph?.title).toBe("Las Vegas Family Homes for Sale");
    expect(metadata.openGraph?.images).toEqual([ogImage]);
    expect(metadata.twitter?.card).toBe("summary_large_image");
    expect(metadata.twitter?.images).toEqual([ogImage.url]);
    expect(String(metadata.twitter?.title)).toBe("Las Vegas Family Homes for Sale");
    expect(String(metadata.description)).toContain("3–5 bedroom");
  });
});
