import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hostname = request.headers.get("host") || "";
  // Pass hostname and path to server components (headers()) so metadata can
  // build a self-referencing canonical for every page.
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-domain", hostname);
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  const response = NextResponse.next({ request: { headers: requestHeaders } });
  response.headers.set("x-domain", hostname);
  return response;
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon|images|videos|robots|sitemap).*)"],
};
