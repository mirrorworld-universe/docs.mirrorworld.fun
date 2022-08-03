import { components } from "./components"
import { globalStyles } from "./global-styles"
import { layerStyles } from "./layer-styles"
import { textStyles } from "./text-styles"
import { extendTheme } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { theme as proTheme } from "@chakra-ui/pro-theme"
import "@fontsource/dm-sans"

const theme = {
  fonts: {
    heading: "'DM Sans', sans-serif",
    body: "'DM Sans', sans-serif",
  },
  shadows: {
    "mirror-dark": `inset 0 4px 0 hsla(69,100%,55%,.3),inset 0 -4px 0 rgba(0,0,0,.25)!important;`,
  },
  colors: {
    // dark: "#101520",
    // dark: "#111314",
    dark: "#1b1f21",
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
export default extendTheme(proTheme, theme)
