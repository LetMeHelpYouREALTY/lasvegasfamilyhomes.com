import { describe, expect, it } from "vitest";
import {
  HOME_SEARCH_PROPERTY_TYPE_ORDER,
  buildHomeSearchMetadata,
  buildHomeSearchPath,
  generateAllSeoPaths,
  getDefaultHomeSearchConfig,
  parseSeoPath,
} from "./home-search";

describe("home-search SEO catalog", () => {
  it("parses the Luxury Presence-style multi-family path for Las Vegas", () => {
    const config = parseSeoPath(["nv", "las-vegas", "multi-family"]);
    expect(config).not.toBeNull();
    expect(config?.path).toBe(
      "/home-search/listings/v2/nv/las-vegas/multi-family",
    );
    expect(config?.h1).toBe("Las Vegas, NV Multi-Family Properties for Sale");
    expect(config?.realscoutTypes).toBe(",MF");
    expect(config?.listingStatus).toBe("For Sale");
  });

  it("parses city-only paths as all property types", () => {
    const config = parseSeoPath(["nv", "henderson"]);
    expect(config?.propertyType).toBeNull();
    expect(config?.h1).toBe("Henderson, NV Real Estate & Homes for Sale");
    expect(config?.realscoutTypes).toBe(",SFR,MF,TC");
  });

  it("rejects California and unknown locations", () => {
    expect(parseSeoPath(["ca", "newport-beach", "multi-family"])).toBeNull();
    expect(parseSeoPath(["nv", "newport-beach", "multi-family"])).toBeNull();
    expect(parseSeoPath(["nv", "las-vegas", "tiny-homes"])).toBeNull();
    expect(parseSeoPath(["nv"])).toBeNull();
  });

  it("builds unique metadata for each property type in Summerlin", () => {
    const titles = new Set<string>();
    for (const slug of HOME_SEARCH_PROPERTY_TYPE_ORDER) {
      const config = parseSeoPath(["nv", "summerlin", slug]);
      expect(config).not.toBeNull();
      const metadata = buildHomeSearchMetadata(config!);
      expect(String(metadata.title)).toContain("Summerlin, NV");
      expect(String(metadata.description)).toContain("(702) 222-1964");
      titles.add(String(metadata.title));
    }
    expect(titles.size).toBe(HOME_SEARCH_PROPERTY_TYPE_ORDER.length);
  });

  it("generates every location × type SEO path plus all-types pages", () => {
    const paths = generateAllSeoPaths();
    const encoded = new Set(paths.map((p) => p.join("/")));
    expect(encoded.has("nv/las-vegas/multi-family")).toBe(true);
    expect(encoded.has("nv/89135/single-family")).toBe(true);
    expect(encoded.has("nv/inspirada/townhouse")).toBe(true);
    expect(paths.every((p) => p[0] === "nv")).toBe(true);
    const locationCount = new Set(paths.map((p) => p[1])).size;
    expect(paths.length).toBe(
      locationCount * (1 + HOME_SEARCH_PROPERTY_TYPE_ORDER.length),
    );
  });

  it("defaults the listings hub to Las Vegas single-family", () => {
    const config = getDefaultHomeSearchConfig();
    expect(config.propertyType?.slug).toBe("single-family");
    expect(config.location.slug).toBe("las-vegas");
    expect(buildHomeSearchPath("skye-canyon", "condo")).toBe(
      "/home-search/listings/v2/nv/skye-canyon/condo",
    );
  });
});
