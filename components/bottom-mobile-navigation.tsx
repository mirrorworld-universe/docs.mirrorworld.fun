import { Box, Text, HStack, Stack } from "@chakra-ui/layout"
import { IconButton, useColorMode, useToast } from "@chakra-ui/react"
import { MobileNavigation } from "./mobile-navigation"
import { BiHomeAlt, BiBookOpen } from "react-icons/bi"
import {
  AiOutlineApi,
  AiOutlineExperiment,
  AiOutlineRocket,
} from "react-icons/ai"
import Link from "next/link"
import { useRouter } from "next/router"
import { ChangeLogIcon } from "./icons"

export function BottomMobileNavigation() {
  const { colorMode, toggleColorMode } = useColorMode()
  const toast = useToast()
  const router = useRouter()
  function handleToggleColorMode() {
    toggleColorMode()
  }

  const activeStyles = {
    bg: "topNavButtonLayoutActive",
    color: "topNavButtonTextActive",
    border: "1px solid currentColor",
    _hover: {
      bg: "whiteAlpha.100",
    },
  }

  return (
    <Box
      bg="topNavBody"
      backdropFilter="auto"
      backdropBlur="sm"
      position="fixed"
      bottom="0"
      width="full"
      zIndex={50}
      py="4"
      borderTopWidth="1px"
      borderTopColor="mirror.800"
      color="topNavText"
      display={["block", "block", "none"]}
    >
      <HStack justifyContent="space-evenly">
        <Link href={"/overview/introduction"}>
          <Stack alignItems="center">
            <IconButton
              aria-label="Navigate to Home"
              variant="nav"
              size="md"
              minWidth="unset"
              w={10}
              h={10}
              icon={<BiHomeAlt />}
              color={"topNavText"}
              {...(["overview", "showcase", "further-reading"].includes(
                router.pathname.split("/")[1],
              ) && activeStyles)}
            >
              Home
            </IconButton>
            <Text fontSize="xs">Home</Text>
          </Stack>
        </Link>
        <Link href={"/integration"}>
          <Stack alignItems="center">
            <IconButton
              aria-label="Navigate to Integration Guide"
              variant="nav"
              size="md"
              minWidth="unset"
              w={10}
              h={10}
              icon={<AiOutlineRocket />}
              color={"topNavText"}
              {...(["integration"].includes(router.pathname.split("/")[1]) &&
                activeStyles)}
            >
              Integration
            </IconButton>
            <Text fontSize="xs">Integration</Text>
          </Stack>
        </Link>
        <Link href={"/guides"}>
          <Stack alignItems="center">
            <IconButton
              aria-label="Navigate to Guides"
              variant="nav"
              size="md"
              minWidth="unset"
              w={10}
              h={10}
              icon={<AiOutlineExperiment />}
              color={"topNavText"}
              {...(["guides"].includes(router.pathname.split("/")[1]) &&
                activeStyles)}
            >
              Recipes
            </IconButton>
            <Text fontSize="xs">Guides</Text>
          </Stack>
        </Link>
        <Link href={"/api-reference"}>
          <Stack alignItems="center">
            <IconButton
              aria-label="Navigate to API Reference"
              variant="nav"
              size="md"
              minWidth="unset"
              w={10}
              h={10}
              icon={<AiOutlineApi />}
              color={"topNavText"}
              {...(["api-reference"].includes(router.pathname.split("/")[1]) &&
                activeStyles)}
            >
              API Reference
            </IconButton>
            <Text fontSize="xs">API Reference</Text>
          </Stack>
        </Link>
        <Stack
          onClick={() => {
            window.open("https://mirrorworld.fun/blog?page=1&tag=weekly-update")
          }}
          alignItems="center"
        >
          <IconButton
            aria-label="Navigate to API Reference"
            variant="nav"
            size="md"
            minWidth="unset"
            w={10}
            h={10}
            icon={<ChangeLogIcon />}
            color={"topNavText"}
            {...(["api-reference"].includes(router.pathname.split("/")[1]) &&
              activeStyles)}
          >
            Changelog
          </IconButton>
          <Text fontSize="xs">Changelog</Text>
        </Stack>
      </HStack>
      <HStack spacing="8">
        <nav hidden>
          <HStack
            as="ul"
            spacing="8"
            listStyleType="none"
            fontWeight="semibold"
            fontSize="sm"
          >
            <li>Tutorials</li>
            <li>API</li>
            <li>Components</li>
          </HStack>
        </nav>
      </HStack>
    </Box>
  )
}
