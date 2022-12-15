import { HStack } from "@chakra-ui/layout"
import { Framework } from "lib/framework-utils"
import { useRouter } from "next/router"
import { chakra } from "@chakra-ui/system"
import { useFramework } from "./framework"

export function FrameworkSelect() {
  const { framework, setFramework } = useFramework()
  const { replace, asPath, pathname } = useRouter()

  return (
    <HStack>
      <chakra.label
        fontWeight="medium"
        htmlFor="framework-select"
        fontSize="sm"
      >
        Language:{" "}
      </chakra.label>
      <chakra.select
        bg="transparent"
        id="framework-select"
        fontSize="sm"
        fontWeight="semibold"
        color="languageSelectText"
        outline="none"
        value={framework}
        onChange={(event) => {
          const newFramework = event.currentTarget.value as Framework
          setFramework(newFramework)
          console.log("asPath", asPath)
          console.log("pathname", pathname)
          if (asPath.includes(framework) && newFramework !== framework) {
            const url = asPath.replaceAll(framework, newFramework)
            replace(url).then()
          } else {
            const url = `/${newFramework}/${newFramework}-installation`
            replace(url).then()
          }
        }}
      >
        <option value="js">JavaScript</option>
        <option value="unity">Unity</option>
        <option value="android">Android</option>
        <option value="rust">Rust</option>
        <option value="ios">iOS (Swift)</option>
      </chakra.select>
    </HStack>
  )
}
