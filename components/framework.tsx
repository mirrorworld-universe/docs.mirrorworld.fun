import { Framework, FRAMEWORKS } from "lib/framework-utils"
import { createContext, useContext, useEffect, useMemo, useState } from "react"
import { router } from "next/client"
import { useRouter } from "next/router"

export const FrameworkContext = createContext<{
  framework: Framework
  setFramework?: (value: Framework) => void
}>({
  framework: "android",
  setFramework: () => {},
})

export function useFramework() {
  return useContext(FrameworkContext)
}

type FrameworkProviderProps = {
  value: Framework
  children: React.ReactNode
}

export function FrameworkProvider({ value, children }: FrameworkProviderProps) {
  const [framework, setFramework] = useState(value)
  const router = useRouter()
  useEffect(() => {
    const fw = router.pathname.split("/")[1] as Framework
    if (!!fw && FRAMEWORKS.includes(fw)) {
      setFramework(fw)
    }
  }, [framework, setFramework, router])
  const context = useMemo(() => ({ framework, setFramework }), [framework])
  return (
    <FrameworkContext.Provider value={context}>
      {children}
    </FrameworkContext.Provider>
  )
}
