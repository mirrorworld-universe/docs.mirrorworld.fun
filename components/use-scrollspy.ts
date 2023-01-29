import { useState, useEffect, useRef, useMemo } from "react"
import { useRouter } from "next/router"

const options: IntersectionObserverInit = {
  rootMargin: "0% 0% -40% 0%",
}

export function useScrollSpy(selectors: string[]) {
  const [activeId, setActiveId] = useState<string>()
  const observer = useRef<IntersectionObserver | null>(null)
  const str = selectors.toString()
  const router = useRouter()

  const [_, hash] = useMemo(() => router.asPath.split("#"), [router])

  useEffect(() => {
    if (hash) {
      const targetSelector = `[id="${hash}"]`
      if (selectors.includes(targetSelector)) {
        setTimeout(() => {
          setActiveId(hash)
        })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hash])

  useEffect(() => {
    const els = selectors.map((selector) => document.querySelector(selector))
    observer.current?.disconnect()
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry?.isIntersecting) {
          setActiveId(entry.target.getAttribute("id"))
        }
      })
    }, options)
    els.forEach((el) => {
      if (el) observer.current?.observe(el)
    })
    return () => observer.current?.disconnect()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [str, router.asPath])

  return activeId
}
