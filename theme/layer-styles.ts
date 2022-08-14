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
  bg: "rgba(220, 255, 28, 0.2)",
  color: "mirror.400",
  rounded: "4px",
}

const inlineCode: SystemStyleObject = {
  whiteSpace: "nowrap",
  bg: "pink.900",
  rounded: "base",
  paddingY: "0.5",
  paddingX: "1",
  fontSize: "14px",
  fontFamily: "mono",
  fontWeight: "semibold",
  color: "pink.200",
}

export const layerStyles = {
  contain,
  blockquote,
  inlineCode,
}
