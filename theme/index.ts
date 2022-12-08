import { components } from "./components"
import { globalStyles } from "./global-styles"
import { layerStyles } from "./layer-styles"
import { textStyles } from "./text-styles"
import { extendTheme } from "@chakra-ui/react"
import "focus-visible/dist/focus-visible"
import { theme as proTheme } from "@chakra-ui/pro-theme"
import "@fontsource/dm-sans"
import "@fontsource/ibm-plex-mono"

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
  semanticTokens: {
    colors: {
      text: {
        default: "gray.900",
        _dark: "whiteAlpha.800",
      },
      body: {
        default: "whiteAlpha.100",
        _dark: "dark",
      },
      codeText: {
        default: "pink.700",
        _dark: "pink.50",
      },
      codeBg: {
        default: "pink.50",
        _dark: "pink.900",
      },
      topNavBody: {
        default: "whiteAlpha.600",
        _dark: "hsl(200deg 10% 12% / 80%)",
      },
      topNavText: {
        default: "gray.900",
        _dark: "mirror.base",
      },
      flatButtonHoverBg: {
        default: "whiteAlpha.300",
        _dark: "mirror.900",
      },
      calloutBg: {
        default: "rgba(220, 255, 28, 0.4)",
        _dark: "rgba(220, 255, 28, 0.2)",
      },
      calloutText: {
        default: "mirror.700",
        _dark: "mirror.400",
      },
      calloutBorderColor: {
        default: "mirror.600",
        _dark: "mirror.400",
      },
      textLink: {
        default: "mirror.700",
        _dark: "mirror.400",
      },
      languageSelectText: {
        default: "mirror.700",
        _dark: "mirror.400",
      },
      languageSelectBg: {
        default: "white",
        _dark: "dark",
      },
      searchTriggerText: {
        default: "gray.500",
        _dark: "mirror.400",
      },
      searchTriggerBg: {
        default: "gray.100",
        _dark: "mirror.900",
      },
      searchTriggerRingColor: {
        default: "gray.300",
        _dark: "mirror.600",
      },
      topNavButtonLayout: {
        default: "gray.300",
        _dark: "transparent",
      },
      topNavButtonText: {
        default: "gray.900",
        _dark: "mirror.base",
      },
      topNavButtonLayoutHover: {
        default: "mirror.50",
        _dark: "whiteAlpha.50",
      },
      topNavButtonLayoutActive: {
        default: "transparent",
        _dark: "mirror.900",
      },
      topNavButtonTextActive: {
        default: "mirror.800",
        _dark: "mirror.base",
      },
      topNavButtonTextHover: {
        default: "mirror.800",
        _dark: "mirror.600",
      },
    },
  },
}

type ColorMode = "light"
export default extendTheme(proTheme, theme)
