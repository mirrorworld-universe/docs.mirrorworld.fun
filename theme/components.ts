import { ComponentStyleConfig } from "@chakra-ui/theme"

const Button: ComponentStyleConfig = {
  baseStyle: {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "start",
    cursor: "pointer",
    boxShadow: `inset 0 4px 0 hsla(0,0%,100%,.8),inset 0 -4px 0 rgba(0,0,0,.25)!important;`,
    borderColor: "mirror.400",
    rounded: "4px",
    color: "black",
    _focusVisible: {
      outline: "2px solid",
      outlineColor: "blue.600",
    },
  },
  variants: {
    mirror: {
      bg: "mirror.400",
      color: "black",
      _hover: {
        bg: "mirror.500",
      },
    },
    outline: {
      bg: "transparent.50",
      color: "mirror.400",
      boxShadow: `inset 0 4px 0 hsla(69,100%,55%,.3),inset 0 -4px 0 rgba(0,0,0,.25)!important;`,
      border: "1px solid",
      borderColor: "mirror.400",
      _hover: {
        bg: "mirror.900",
      },
    },
    black: {
      bg: "black",
      color: "mirror.400",
      boxShadow: `inset 0 4px 0 hsla(69,100%,55%,.3),inset 0 -4px 0 rgba(0,0,0,.25)!important;`,
      _hover: {
        bg: "gray.900",
      },
    },
    nav: {
      bg: "transparent",
      fontWeight: "bold",
      color: "topNavText",
      rounded: "full",
      minW: "auto",
      boxShadow: "none",
      _hover: {
        bg: "flatButtonHoverBg",
      },
    },
  },
  sizes: {
    sm: {
      fontWeight: "medium",
      px: "4",
      py: "1",
    },
    md: {
      minWidth: "180px",
      fontWeight: "semibold",
      fontSize: "lg",
      height: "14",
    },
  },
  defaultProps: {
    size: "md",
    variant: "outline",
  },
}

export const components = {
  Button,
}
