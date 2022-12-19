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
}

export function useRedirect() {
  const router = useRouter()
  const fullPath = useMemo(() => router.asPath, [router.asPath])
  useEffect(() => {
    console.log("router.pathname", fullPath)
    if (fullPath in redirects) {
      router
        .push({
          pathname: redirects[fullPath],
        })
        .then()
    }
  }, [fullPath])
}
