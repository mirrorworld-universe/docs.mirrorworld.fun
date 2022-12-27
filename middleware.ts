import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  console.log(url)
  if (["/", "/overview"].includes(url.pathname)) {
    url.pathname = "/overview/introduction"
    return NextResponse.redirect(url)
  }
}

export const config = {
  matcher: "/:path*",
}
