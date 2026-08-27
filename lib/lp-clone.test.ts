import { describe, expect, it } from "vitest";
import {
  COLLECTION_TILES,
  FOR_RENT_INVENTORY,
  LP_CLONE_PAGES,
  LP_REDIRECTS,
  MARKET_PRESENCE_AREAS,
  OFF_MARKET_INVENTORY,
  REALSCOUT_LISTING_STATUSES,
  SOLD_INVENTORY,
  WORK_WITH_US_STATS,
  getLpClonePage,
  getLpCloneSitemapEntries,
} from "./lp-clone";
import { agentInfo } from "./site-config";

describe("Luxury Presence site clone catalog", () => {
  it("covers the remaining LP pages with unique Las Vegas routes", () => {
    const paths = LP_CLONE_PAGES.map((page) => page.path);
    expect(paths).toEqual([
      "/sold",
      "/for-rent",
      "/off-market-listings",
      "/testimonials",
      "/listing-agency",
      "/buyer-tenant-representation",
      "/agent-partnerships",
    ]);
    expect(new Set(paths).size).toBe(paths.length);
  });

  it("keeps client CTA phone and skips LA copy in metadata", () => {
    for (const page of LP_CLONE_PAGES) {
      expect(page.description).toContain(agentInfo.phone);
      expect(page.description.toLowerCase()).not.toContain("beverly hills");
      expect(page.description.toLowerCase()).not.toContain("jordan pollack");
      expect(page.title.toLowerCase()).not.toContain("price upon request");
    }
  });

  it("maps LP market URLs to existing Las Vegas inventory pages", () => {
    expect(LP_REDIRECTS).toEqual(
      expect.arrayContaining([
        {
          source: "/market-for-sale/active",
          destination: "/home-search/listings",
        },
        { source: "/market-for-sale/sold", destination: "/sold" },
        { source: "/market-for-lease", destination: "/for-rent" },
        {
          source: "/vacation-rental-portfolio",
          destination: "/vacation-rentals",
        },
        { source: "/off-market", destination: "/off-market-listings" },
      ]),
    );
    for (const redirect of LP_REDIRECTS) {
      expect(redirect.destination).not.toContain("laluxuries");
      expect(redirect.destination.startsWith("/")).toBe(true);
    }
  });

  it("uses RealScout statuses instead of custom listing cards", () => {
    expect(REALSCOUT_LISTING_STATUSES).toEqual([
      "For Sale",
      "Sold",
      "For Rent",
    ]);
    expect(SOLD_INVENTORY.listingStatus).toBe("Sold");
    expect(FOR_RENT_INVENTORY.listingStatus).toBe("For Rent");
    expect(OFF_MARKET_INVENTORY.listingStatus).toBe("For Sale");
    expect(OFF_MARKET_INVENTORY.intro).toContain("not published");
  });

  it("builds Market Presence and collection tiles for the valley", () => {
    expect(MARKET_PRESENCE_AREAS.map((area) => area.name)).toContain(
      "Summerlin",
    );
    expect(
      MARKET_PRESENCE_AREAS.every((area) => area.href.includes("/nv/")),
    ).toBe(true);
    expect(COLLECTION_TILES.map((tile) => tile.title)).toEqual([
      "Homes for Sale",
      "Sold",
      "For Rent",
      "Vacation Rentals",
      "Off-Market Listings",
      "Gated",
      "Pools",
      "Views",
      "New Construction",
    ]);
    expect(
      COLLECTION_TILES.some((tile) => tile.title === "Private Beach"),
    ).toBe(false);
  });

  it("uses Duffy production stats, not LA Luxuries vacation-home counts", () => {
    const labels = WORK_WITH_US_STATS.map((stat) => stat.label).join(" ");
    expect(labels).not.toContain("Vacation Homes");
    expect(WORK_WITH_US_STATS[0]?.value).toContain("500");
  });

  it("exports sitemap entries for every clone page", () => {
    const entries = getLpCloneSitemapEntries("https://lasvegasfamilyhomes.com");
    expect(entries).toHaveLength(LP_CLONE_PAGES.length);
    expect(getLpClonePage("/sold")?.h1).toBe("Sold");
    expect(entries.map((entry) => entry.url)).toContain(
      "https://lasvegasfamilyhomes.com/off-market-listings",
    );
  });
});
