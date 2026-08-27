/**
 * Client-declared BotID routes.
 * Must match the paths passed to <BotIdClient /> — checkBotId() fails
 * if a route is checked on the server but missing from this list.
 * Do not include inbound webhooks (e.g. /api/webhooks/fub).
 */
export const BOTID_PROTECTED_ROUTES: {
  path: string;
  method: string;
}[] = [
  { path: "/api/leads/capture", method: "POST" },
  { path: "/api/chat", method: "POST" },
  { path: "/api/claude/chat", method: "POST" },
  { path: "/api/generate-property-description", method: "POST" },
];
