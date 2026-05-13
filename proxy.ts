import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

import { middlewareAuthGuard } from "@/lib/auth";

export async function proxy(request: NextRequest) {
  if (request.nextUrl.pathname === "/admin/login") {
    return NextResponse.next();
  }

  return middlewareAuthGuard(request);
}

export const config = {
  matcher: ["/admin/:path*"]
};
