import foundations from "@chakra-ui/theme/foundations"
import { components } from "./components"
import { globalStyles } from "./global-styles"
import { layerStyles } from "./layer-styles"
import { textStyles } from "./text-styles"
import "@fontsource/dm-sans"

const theme = {
  ...foundations,
  fonts: {
    ...foundations.fonts,
    heading: "'DM Sans', sans-serif",
    body: "'DM Sans', sans-serif",
  },
  colors: {
    ...foundations.colors,
    dark: "#101520",
    mirror: {
      base: "#dcff1c",
      50: "#faffdb",
      100: "#f2ffae",
      200: "#ebff7d",
      300: "#e3ff4b",
      400: "#dcff1a",
      500: "#c2e600",
      600: "#97b300",
      700: "#6b8000",
      800: "#404d00",
      900: "#151b00",
    },
  },
  config: {
    useSystemColorMode: false,
    initialColorMode: "light" as ColorMode,
  },
  styles: {
    global: globalStyles,
  },
  layerStyles,
  textStyles,
  components,
}

type ColorMode = "light"

export default theme
