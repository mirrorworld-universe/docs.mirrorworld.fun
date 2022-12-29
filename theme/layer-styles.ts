import { SystemStyleObject } from "@chakra-ui/system"

const contain: SystemStyleObject = {
  maxW: "8xl",
  mx: "auto",
  px: { base: "4", sm: "6", md: "8" },
}

const blockquote: SystemStyleObject = {
  marginY: "5",
  paddingX: "4",
  paddingY: "3",
  bg: "calloutBg",
  color: "calloutText",
  borderLeftColor: "calloutBorderColor",
  borderLeftWidth: "3px",
  borderLeftStyle: "solid",
  rounded: "4px",
}

const inlineCode: SystemStyleObject = {
  whiteSpace: "nowrap",
  bg: "codeBg",
  rounded: "base",
  paddingY: "0.5",
  paddingX: "1",
  // fontSize: "14px",
  fontFamily: "mono",
  fontWeight: "semibold",
  color: "codeText",
}

export const integrationDropdownList = {
  bg: "integrationDropdownListBg",
  color: "topNavText",
  backdropFilter: "auto",
  backdropBlur: "base",
}

export const layerStyles = {
  contain,
  blockquote,
  inlineCode,
  integrationDropdownList,
}
