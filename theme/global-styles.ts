import { SystemStyleObject } from "@chakra-ui/system"

export const globalStyles: SystemStyleObject = {
  "body, html": {
    fontFamily: "body",
    textRendering: "geometricprecision",
    textSizeAdjust: "100%",
    WebkitFontSmoothing: "antialiased",
    bg: "body",
    color: "text",
    // transition: "color 0.2s ease-in-out, background 0.2s ease-in-out",
    transitionProperty: "background",
    transitionDuration: "normal",
  },

  "pre, code, kbd, samp": {
    fontFamily: "mono",
  },

  "*": {
    borderColor: "mirror.700",
    borderStyle: "solid",
  },

  ".focus-outline": {
    "&:focus, &[data-focus]": {
      outline: "2px solid hsl(204, 100%, 40%)",
    },
  },

  ".has-highlight": {
    mark: {
      color: "mirror.600",
      fontWeight: "semibold",
    },
  },

  ".ch-scrollycoding-step-content": {
    minH: "auto",
    px: "12px !important",
    transition: "all 0.2s ease-in-out",
    "&:hover": {
      cursor: "pointer",
      transition: "all 0.2s ease-in-out",
      bg: "hoverBackground",
    },
  },

  ".ch-scrollycoding-step-content[data-selected]": {
    bg: "selectedBackground",
    border: "transparent",
  },

  table: {
    width: "100%",
    marginY: "8",
    th: {
      bg: "topNavBody",
    },
    "th, td": {
      borderWidth: "1px",
      py: "3",
      px: "5",
      textAlign: "start",
    },
  },

  mark: {
    bg: "transparent",
  },

  '[data-with-integration-guide=""]': {
    ".mdx-content": {
      "h2,h3,h4": {
        scrollMarginTop: "36",
        "&:hover": {
          "a.anchor": { opacity: 1 },
        },
        "a:focus": { opacity: 1 },
      },
    },
  },

  ".mdx-content": {
    output: {
      fontFeatureSettings: "tnum",
      fontVariantNumeric: "tabular-nums",
    },

    "&.integration": {
      // pl: ["0", "20rem", "11rem"],
    },
    // android-install
    img: {
      "&[alt='screen-shot']": {
        width: [null, null, "310px"],
        minWidth: [null, null, "310px"],
      },
      "&[alt='android-install']": {
        width: [null, null, "310px"],
        minWidth: [null, null, "310px"],
        mx: "auto",
      },
    },
    "li:not([role])": {
      marginY: "1",
    },
    "ol:not([role]), ul:not([role])": {
      marginY: "5",
      paddingLeft: "4",
    },
    "h2,h3,h4": {
      scrollMarginTop: "24",
      "&:hover": {
        "a.anchor": { opacity: 1 },
      },
      "a:focus": { opacity: 1 },
    },
    "p, li:not([role])": {
      lineHeight: "tall",
    },
    "p + p": {
      marginTop: "6",
    },
    "a.anchor": {
      opacity: 0,
      transition: "opacity 0.2s ease-in-out",
      marginX: "3",
      "&:before": {
        content: `"#"`,
      },
    },
  },
}
