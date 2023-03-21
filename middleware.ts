import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

const routeMapping = {
  "/js/js-installation": "/integration/js",
  "/js/js-api": "/api-reference/js",
  "/js/js-authentication": "/api-reference/js/authentication",
  "/ios/ios-installation": "/integration/ios",
  "/ios/ios-api": "/api-reference/ios",
  "/ios/ios-authentication": "/api-reference/ios/authentication",
  "/android/android-installation": "/integration/android",
  "/android/android-api": "/api-reference/android",
  "/android/android-authentication": "/api-reference/android/authentication",
  "/unity/unity-installation": "/integration/unity",
  "/unity/unity-api": "/api-reference/unity",
  "/unity/unity-authentication": "/api-reference/unity/authentication",
  "/rust/rust-installation": "/integration/rust",
  "/rust/rust-api": "/api-reference/rust",
  "/rust/rust-authentication": "/api-reference/rust/authentication",
  "/api-reference/js/marketplace": "/api-reference/js/configuration",
  "/api-reference/js/wallet": "/api-reference/js/configuration",
}

const baseOrigins = Object.keys(routeMapping).reduce((acc, curr) => {
  acc[curr] = true
  return acc
}, {})

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone()
  if (["/", "/overview"].includes(url.pathname)) {
    url.pathname = "/overview/introduction"
    return NextResponse.redirect(url)
  }

  const targetPath = routeMapping[url.pathname]

  if (targetPath) {
    url.pathname = targetPath
    return NextResponse.redirect(url)
  }

  for (const baseOrigin in baseOrigins) {
    if (url.pathname.startsWith(baseOrigin)) {
      url.pathname = routeMapping[baseOrigin]
      return NextResponse.redirect(url)
    }
  }
}

export const config = {
  matcher: "/:path*",
}
