import { Framework, FRAMEWORKS } from "lib/framework-utils"
import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { router } from "next/client"
import { useRouter } from "next/router"

export const FrameworkContext = createContext<{
  framework: Framework
  setFramework?: (value: Framework) => void
}>({
  framework: "android",
  setFramework: () => { },
})

export function useFramework() {
  return useContext(FrameworkContext)
}

type FrameworkProviderProps = {
  value: Framework
  children: React.ReactNode
}

const FRAMEWORK_STORAGE_KEY = `mw-docs-user-framework`

let isMounted = false

export function FrameworkProvider({ value, children }: FrameworkProviderProps) {
  const [framework, setFramework] = useState(value || "js")
  useEffect(() => {
    if (!isMounted) return
    localStorage.setItem(FRAMEWORK_STORAGE_KEY, framework)
  }, [framework, setFramework])

  useEffect(() => {
    if (isMounted) return
    else {
      const fw = localStorage.getItem(FRAMEWORK_STORAGE_KEY) as Framework || value
      setFramework(fw)
      isMounted = true
    }
    return () => {
      isMounted = true
    }
  }, [])

  const context = useMemo(() => ({ framework: framework || "js", setFramework }), [framework])
  return (
    <FrameworkContext.Provider value={context}>
      {children}
    </FrameworkContext.Provider>
  )
}
