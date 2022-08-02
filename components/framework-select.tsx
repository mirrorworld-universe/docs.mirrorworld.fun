import { HStack } from "@chakra-ui/layout"
import { Framework } from "lib/framework-utils"
import { useRouter } from "next/router"
import { chakra } from "@chakra-ui/system"
import { useFramework } from "./framework"

export function FrameworkSelect() {
  const { framework, setFramework } = useFramework()
  const { replace, asPath } = useRouter()

  return (
    <HStack>
      <chakra.label
        fontWeight="medium"
        htmlFor="framework-select"
        fontSize="sm"
      >
        Framework:{" "}
      </chakra.label>
      <chakra.select
        bg="transparent"
        id="framework-select"
        fontSize="sm"
        fontWeight="semibold"
        color="mirror.500"
        outline="none"
        defaultValue={framework}
        onChange={(event) => {
          const newFramework = event.currentTarget.value as Framework
          setFramework(newFramework)
          if (asPath.includes(framework) && newFramework !== framework) {
            const url = asPath.replace(framework, newFramework)
            replace(url)
          }
        }}
      >
        <option value="android">Android</option>
        <option value="ios">iOS (Swift)</option>
        <option value="unity">Unity</option>
        <option value="web">JavaScript</option>
        <option value="node">Node.js</option>
        <option value="rust">Rust</option>
      </chakra.select>
    </HStack>
  )
}
