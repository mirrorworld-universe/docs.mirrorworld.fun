import { useRouter } from "next/router"
import { useEffect, useMemo } from "react"

export interface ClientRedirectEntity {
  source: string
  destination: string
}

export type ClientRedirectConfig = Record<string, string>

const redirects: ClientRedirectConfig = {
  "/": "/overview/introduction",
  "/tutorials": "/authentication",
  "/api-reference/unity/marketplace": "/api-reference/unity",
  "/api-reference/android/marketplace": "/api-reference/android",
  "/api-reference/js/marketplace": "/api-reference/js",
}

export function useRedirect() {
  const router = useRouter()
  const fullPath = useMemo(() => router.asPath, [router.asPath])
  useEffect(() => {
    if (fullPath in redirects) {
      router
        .push({
          pathname: redirects[fullPath],
        })
        .then()
    }
  }, [fullPath])
}
