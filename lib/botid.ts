import { checkBotId } from "botid/server";
import { NextResponse } from "next/server";

/**
 * Returns a 403 response when Vercel BotID classifies the session as a bot.
 * Local development returns isBot: false unless developmentOptions is set.
 * Per Vercel BotID docs (Next.js App Router, 2026).
 */
export async function denyIfBot(): Promise<NextResponse | null> {
  const verification = await checkBotId();
  if (verification.isBot) {
    return NextResponse.json({ error: "Access denied" }, { status: 403 });
  }
  return null;
}
