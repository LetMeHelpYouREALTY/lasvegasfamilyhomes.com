/**
 * Parallel Search — official SDK (parallel-web 1.3, docs.parallel.ai as of 2026).
 * Used to research current Las Vegas family-home heading language.
 * Requires PARALLEL_API_KEY from platform.parallel.ai or the Vercel Marketplace.
 */

import { Parallel } from "parallel-web";

export const FAMILY_HOME_SEARCH_OBJECTIVE =
  "Las Vegas Valley family homes for sale 2026: 3-5 bedroom single-family houses with yards, single-story ranch homes, pool homes, and master-planned communities in Summerlin, Henderson, Green Valley, Inspirada, Skye Canyon, Centennial Hills, Mountain's Edge, Southern Highlands, and North Las Vegas. Return Fair Housing-compliant H1, H2, H3 title ideas that use square footage, amenities, school names, and commute times. Never use family-friendly, safe neighborhood, or good schools.";

export function getParallelClient() {
  const apiKey = process.env.PARALLEL_API_KEY;
  if (!apiKey) return null;
  return new Parallel({ apiKey });
}

export async function searchFamilyHomeHeadings(
  objective = FAMILY_HOME_SEARCH_OBJECTIVE,
) {
  const client = getParallelClient();
  if (!client) {
    return {
      ok: false as const,
      reason: "PARALLEL_API_KEY is not set",
    };
  }

  const result = await client.search({
    objective,
    search_queries: [
      "Las Vegas family homes 2026",
      "Summerlin Henderson 3 bedroom",
      "LVR Las Vegas median August",
      "Las Vegas homes with pools",
    ],
    mode: "advanced",
    max_chars_total: 12000,
  });

  return { ok: true as const, result };
}
