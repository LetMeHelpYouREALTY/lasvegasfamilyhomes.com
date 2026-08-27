import { beforeEach, describe, expect, it, vi } from "vitest";
import { checkBotId } from "botid/server";
import { denyIfBot } from "./botid";
import { BOTID_PROTECTED_ROUTES } from "./botid-protect";

vi.mock("botid/server", () => ({
  checkBotId: vi.fn(),
}));

describe("BotID protection", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });

  it("lists the form and AI POST routes, not FUB webhooks", () => {
    const paths = BOTID_PROTECTED_ROUTES.map((route) => route.path);
    expect(paths).toContain("/api/leads/capture");
    expect(paths).toContain("/api/chat");
    expect(paths).toContain("/api/claude/chat");
    expect(paths).toContain("/api/generate-property-description");
    expect(paths).not.toContain("/api/webhooks/fub");
    expect(
      BOTID_PROTECTED_ROUTES.every((route) => route.method === "POST"),
    ).toBe(true);
  });

  it("returns 403 when BotID classifies a bot", async () => {
    vi.mocked(checkBotId).mockResolvedValueOnce({
      isBot: true,
      isHuman: false,
      isVerifiedBot: false,
      bypassed: false,
    });
    const response = await denyIfBot();
    expect(response).not.toBeNull();
    expect(response?.status).toBe(403);
    const body = await response?.json();
    expect(body.error).toBe("Access denied");
  });

  it("allows humans through", async () => {
    vi.mocked(checkBotId).mockResolvedValueOnce({
      isBot: false,
      isHuman: true,
      isVerifiedBot: false,
      bypassed: false,
    });
    expect(await denyIfBot()).toBeNull();
  });
});
