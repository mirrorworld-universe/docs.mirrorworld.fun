import { useRouter } from "next/router"
import { useEffect } from "react"

export function useScrollToTop() {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      document.scrollingElement?.scrollTo(0, 0)
    }, 50)
    setTimeout(() => {
      document.scrollingElement?.scrollTo(0, 0)
    }, 100)
    setTimeout(() => {
      document.scrollingElement?.scrollTo(0, 0)
    }, 200)
  }, [router.asPath])
}
