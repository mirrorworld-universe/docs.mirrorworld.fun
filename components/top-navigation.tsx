import { Badge, Box, Flex, HStack } from "@chakra-ui/layout"
import { Spacer, Button } from "@chakra-ui/react"
import { GithubIcon } from "components/icons"
import { FaDiscord } from "react-icons/fa"
import siteConfig from "site.config"
import { IconLink } from "./icon-link"
import { LogoWithLink } from "./logo"
import { MobileNavigation } from "./mobile-navigation"
import { BiHomeAlt, BiBookOpen } from "react-icons/bi"
import { AiOutlineApi, AiOutlineExperiment } from "react-icons/ai"
import Link from "next/link"

export function TopNavigation() {
  return (
    <Box
      bg="dark"
      backdropFilter="auto"
      backdropBlur="sm"
      position="sticky"
      top="0"
      width="full"
      zIndex={50}
      py="4"
      borderBottomWidth="1px"
      borderBottomColor="mirror.800"
      color="mirror.500"
    >
      <Flex
        align="center"
        justify="space-between"
        maxW="8xl"
        mx="auto"
        px={{ base: "4", sm: "6", md: "8" }}
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
          <HStack>
            <Link href={"/"}>
              <Button variant="nav" size="sm" leftIcon={<BiHomeAlt />}>
                Home
              </Button>
            </Link>
            <Link href={"/tutorials"}>
              <Button variant="nav" size="sm" leftIcon={<BiBookOpen />}>
                Tutorials
              </Button>
            </Link>
            <Link href={"/guides"}>
              <Button
                variant="nav"
                size="sm"
                leftIcon={<AiOutlineExperiment />}
              >
                Recipes
              </Button>
            </Link>
            <Link href={"/api-reference"}>
              <Button variant="nav" size="sm" leftIcon={<AiOutlineApi />}>
                API Reference
              </Button>
            </Link>
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
              label="View Zag.js on Github"
            />
            <IconLink
              href={siteConfig.discord.url}
              icon={FaDiscord}
              label="Join the Discord server"
            />
            <MobileNavigation />
          </HStack>
        </HStack>
      </Flex>
    </Box>
  )
}
