import { Badge, Box, Flex, HStack } from "@chakra-ui/layout"
import {
  Spacer,
  Button,
  IconButton,
  useColorMode,
  useToast,
} from "@chakra-ui/react"
import { ChangeLogIcon, GithubIcon } from "components/icons"
import { FaDiscord } from "react-icons/fa"
import siteConfig from "site.config"
import { IconLink } from "./icon-link"
import { LogoWithLink } from "./logo"
import { MobileNavigation } from "./mobile-navigation"
import { BiHomeAlt, BiBookOpen } from "react-icons/bi"
import {
  AiOutlineApi,
  AiOutlineExperiment,
  AiOutlineRocket,
} from "react-icons/ai"
import { FiSun } from "react-icons/fi"
import Link from "next/link"
import { useRouter } from "next/router"

export function TopNavigation(props: any) {
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
  }

  return (
    <Box
      bg="topNavBody"
      backdropFilter="auto"
      backdropBlur="sm"
      position="sticky"
      top="0"
      width="full"
      zIndex={50}
      py="4"
      borderBottomWidth="1px"
      borderBottomColor="mirror.800"
      color="topNavText"
      {...props}
    >
      <Flex
        align="center"
        justify="space-between"
        maxW="8xl"
        mx="auto"
        px={{ base: "4", sm: "6", md: "7" }}
      >
        <HStack spacing="3">
          <LogoWithLink />
          <Badge
            bg="mirror.600"
            color="mirror.900"
            px="2"
            py="0.5"
            fontSize="xs"
            letterSpacing="wider"
            fontWeight="semibold"
            rounded="full"
          >
            BETA
          </Badge>
          <Spacer />
          <HStack display={["none", "none", "flex"]}>
            <Link href={"/overview/introduction"}>
              <Button
                as="a"
                variant="nav"
                size="sm"
                _hover={{
                  bg: "topNavButtonLayoutHover",
                  color: "topNavButtonTextHover",
                }}
                leftIcon={<BiHomeAlt />}
                color={"topNavText"}
                {...(["overview", "showcase", "further-reading"].includes(
                  router.pathname.split("/")[1],
                ) && activeStyles)}
              >
                Home
              </Button>
            </Link>
            <Link href={"/integration"}>
              <Button
                as="a"
                variant="nav"
                size="sm"
                _hover={{
                  bg: "topNavButtonLayoutHover",
                  color: "topNavButtonTextHover",
                }}
                leftIcon={<AiOutlineRocket />}
                color={"topNavText"}
                {...(["integration"].includes(router.pathname.split("/")[1]) &&
                  activeStyles)}
              >
                Integration Builder
              </Button>
            </Link>
            <Link href={"/api-reference"}>
              <Button
                as="a"
                variant="nav"
                size="sm"
                _hover={{
                  bg: "topNavButtonLayoutHover",
                  color: "topNavButtonTextHover",
                }}
                leftIcon={<AiOutlineApi />}
                color={"topNavText"}
                {...(["api-reference"].includes(
                  router.pathname.split("/")[1],
                ) && activeStyles)}
              >
                API Reference
              </Button>
            </Link>
            <Link href={"/guides"}>
              <Button
                as="a"
                variant="nav"
                size="sm"
                _hover={{
                  bg: "topNavButtonLayoutHover",
                  color: "topNavButtonTextHover",
                }}
                leftIcon={<AiOutlineExperiment />}
                color={"topNavText"}
                {...(["guides"].includes(router.pathname.split("/")[1]) &&
                  activeStyles)}
              >
                Guides
              </Button>
            </Link>
            <Button
              onClick={() => {
                window.open(
                  "https://mirrorworld.fun/blog?page=1&tag=weekly-update",
                )
              }}
              as="a"
              variant="nav"
              size="sm"
              _hover={{
                bg: "topNavButtonLayoutHover",
                color: "topNavButtonTextHover",
              }}
              leftIcon={<ChangeLogIcon />}
              color={"topNavText"}
              {...(["Changelog"].includes(router.pathname.split("/")[1]) &&
                activeStyles)}
            >
              Changelog
            </Button>
            {/*<Link href={"/authentication"}>*/}
            {/*<Button*/}
            {/*  // as="a"*/}
            {/*  // href={"/authentication"}*/}
            {/*  variant="nav"*/}
            {/*  size="sm"*/}
            {/*  _hover={{*/}
            {/*    bg: "topNavButtonLayoutHover",*/}
            {/*    color: "topNavButtonTextHover",*/}
            {/*  }}*/}
            {/*  leftIcon={<BiBookOpen />}*/}
            {/*  onClick={() =>*/}
            {/*    toast({*/}
            {/*      description: "Tutorials section coming soon!",*/}
            {/*      position: "top-right",*/}
            {/*    })*/}
            {/*  }*/}
            {/*  color={"topNavText"}*/}
            {/*  {...(["authentication", "marketplace", "wallet"].includes(*/}
            {/*    router.pathname.split("/")[1],*/}
            {/*  ) && activeStyles)}*/}
            {/*>*/}
            {/*  Tutorials*/}
            {/*</Button>*/}
            {/*</Link>*/}
          </HStack>
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
          <HStack spacing="4">
            <IconLink
              href={siteConfig.repo.url}
              icon={GithubIcon}
              label="View Mirror World on Github"
            />
            <IconLink
              href={siteConfig.discord.url}
              icon={FaDiscord}
              label="Join the Discord server"
            />
            {/*<IconButton*/}
            {/*  aria-label={*/}
            {/*    colorMode === "light"*/}
            {/*      ? "Switch to dark mode"*/}
            {/*      : "Switch to light Mode"*/}
            {/*  }*/}
            {/*  icon={<FiSun />}*/}
            {/*  variant={"nav"}*/}
            {/*  color={"topNavText"}*/}
            {/*  size={"sm"}*/}
            {/*  w={8}*/}
            {/*  h={8}*/}
            {/*  onClick={handleToggleColorMode}*/}
            {/*/>*/}
            <MobileNavigation />
          </HStack>
        </HStack>
      </Flex>
    </Box>
  )
}
