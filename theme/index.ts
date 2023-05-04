import { components } from "./components"
import { globalStyles } from "./global-styles"
import { layerStyles } from "./layer-styles"
import { textStyles } from "./text-styles"
import { extendTheme } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { theme as proTheme } from "@chakra-ui/pro-theme"
import { semanticTokens } from "./semantic-tokens"
import "@fontsource/dm-sans"
import "@fontsource/dm-sans/700.css"
import "@fontsource/dm-sans/500.css"
import "@fontsource/dm-sans/400.css"
import "@fontsource/ibm-plex-mono"
import "@fontsource/ibm-plex-mono/400.css"
import "@fontsource/ibm-plex-mono/600.css"
import "@fontsource/ibm-plex-mono/700.css"

const theme = {
  fonts: {
    heading: "'DM Sans', sans-serif",
    body: "'DM Sans', sans-serif",
    mono: "IBM Plex Mono",
  },
  shadows: {
    "mirror-dark": `inset 0 4px 0 hsla(69,100%,55%,.3),inset 0 -4px 0 rgba(0,0,0,.25)!important;`,
  },
  colors: {
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
    initialColorMode: "dark" as ColorMode,
    disableTransitionOnChange: false,
  },
  styles: {
    global: globalStyles,
  },
  layerStyles,
  textStyles,
  components,
  semanticTokens,
}

type ColorMode = "light"
export default extendTheme(proTheme, theme)
