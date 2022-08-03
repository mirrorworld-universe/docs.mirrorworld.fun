import { chakra } from "@chakra-ui/system"

const FrameworkButton = chakra("button", {
  baseStyle: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "auto",
    px: 3,
    rounded: "md",
    borderWidth: "1px",
    bg: "white",
    _selected: {
      bg: "green.50",
      borderBottomWidth: "4px",
      borderBottomColor: "green.500",
    },
  },
})
