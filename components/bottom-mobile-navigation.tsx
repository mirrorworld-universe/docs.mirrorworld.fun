import { Badge, Box, Flex, HStack } from "@chakra-ui/layout"
import {
  Spacer,
  Button,
  IconButton,
  useColorMode,
  useToast,
} from "@chakra-ui/react"
import { GithubIcon } from "components/icons"
import { FaDiscord } from "react-icons/fa"
import siteConfig from "site.config"
import { IconLink } from "./icon-link"
import { LogoWithLink } from "./logo"
import { MobileNavigation } from "./mobile-navigation"
import { BiHomeAlt, BiBookOpen } from "react-icons/bi"
import { AiOutlineApi, AiOutlineExperiment } from "react-icons/ai"
import { FiSun } from "react-icons/fi"
import Link from "next/link"
import { useRouter } from "next/router"

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
      position="sticky"
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
        </Link>
        <Link href={"/authentication"}>
          <IconButton
            aria-label="Navigate to Tutorials"
            variant="nav"
            size="md"
            minWidth="unset"
            w={10}
            h={10}
            icon={<BiBookOpen />}
            color={"topNavText"}
            {...(["authentication", "marketplace", "wallet"].includes(
              router.pathname.split("/")[1],
            ) && activeStyles)}
          >
            Tutorials
          </IconButton>
        </Link>
        <Link href={"/guides"}>
          <IconButton
            aria-label="Navigate to Recipes"
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
        </Link>
        {/*<Link href={"/api-reference"}>*/}
        <IconButton
          aria-label="Navigate to API Reference"
          variant="nav"
          size="md"
          minWidth="unset"
          w={10}
          h={10}
          icon={<AiOutlineApi />}
          color={"topNavText"}
          onClick={() =>
            toast({
              description: "Coming soon 🤫",
            })
          }
        >
          API Reference
        </IconButton>
        {/*</Link>*/}
        <MobileNavigation />
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
        {/*<HStack spacing="4">*/}
        {/*  <IconLink*/}
        {/*    href={siteConfig.repo.url}*/}
        {/*    icon={GithubIcon}*/}
        {/*    label="View Zag.js on Github"*/}
        {/*  />*/}
        {/*  <IconLink*/}
        {/*    href={siteConfig.discord.url}*/}
        {/*    icon={FaDiscord}*/}
        {/*    label="Join the Discord server"*/}
        {/*  />*/}
        {/*  <IconButton*/}
        {/*    aria-label={*/}
        {/*      colorMode === "light"*/}
        {/*        ? "Switch to dark mode"*/}
        {/*        : "Switch to light Mode"*/}
        {/*    }*/}
        {/*    icon={<FiSun />}*/}
        {/*    variant={"nav"}*/}
        {/*    color={"topNavText"}*/}
        {/*    size={"sm"}*/}
        {/*    w={8}*/}
        {/*    h={8}*/}
        {/*    onClick={handleToggleColorMode}*/}
        {/*  />*/}
        {/*</HStack>*/}
      </HStack>
    </Box>
  )
}
