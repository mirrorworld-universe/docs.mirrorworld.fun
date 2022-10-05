import Icon from "@chakra-ui/icon"
import {
  Box,
  Center,
  Flex,
  HStack,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
  Link as CLink,
} from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { Button } from "components/button"
import { CodeArea } from "components/code-area"
import { Footer } from "components/footer"
import {
  AptosIcon,
  ArrowRightIcon,
  BNBChainIcon,
  EthereumIcon,
  SolanaIcon,
  SuiIcon,
  USDCIcon,
} from "components/icons"
import { TopNavigation } from "components/top-navigation"
import { NextSeo } from "next-seo"
import Link from "next/link"
import siteConfig from "site.config"
import { FiBookOpen, FiUsers } from "react-icons/fi"
import { AiOutlineShop } from "react-icons/ai"
import { BiBadgeCheck } from "react-icons/bi"
import { ChainSupportTable } from "../components/support-table"

type FeatureItemProps = {
  title: string
  icon: any
  children: string
}

function FeatureItem(props: FeatureItemProps) {
  const { title, children, icon } = props
  return (
    <Box fontSize="lg">
      <Icon as={icon} fontSize="6xl" />
      <Box mt="4">
        <Text fontWeight="bold">{title}</Text>
        <Text mt={2}>{children}</Text>
      </Box>
    </Box>
  )
}

export default function Home() {
  return (
    <Box>
      <NextSeo title={siteConfig.title} />

      <TopNavigation />

      <Box as="header" position="relative">
        <Stack layerStyle="contain" align="center" spacing="10">
          <Box
            textAlign={"center"}
            pos="relative"
            maxW="4xl"
            pt={{ base: "16", md: "24" }}
          >
            <chakra.h1 textStyle="display.2xl">
              Buidl Rapidly & Effectively on Web3
            </chakra.h1>
            <chakra.p className="has-highlight" textStyle="text.2xl" mt="6">
              <mark>Cross-chain SDKs and APIs.</mark> Zero-hassle blockchain
              integration. For Mobile and the Web
            </chakra.p>
          </Box>

          <Stack
            direction={{ base: "column", sm: "row" }}
            mt="8"
            mb="12"
            spacing="5"
          >
            <Link href="/overview/introduction" passHref>
              <Button as="a" variant="mirror" px={6}>
                <HStack spacing="2">
                  <Icon color="black" as={FiBookOpen} />
                  <span>Explore documentation</span>
                </HStack>
              </Button>
            </Link>
            <CLink
              isExternal
              href="https://app.mirrorworld.fun"
              outline="none"
              rounded="4px"
              _hover={{ textDecoration: "none" }}
              w={{ base: "full", sm: "unset" }}
            >
              <Button
                variant="outline"
                px={6}
                w={{ base: "full", sm: "unset" }}
              >
                <HStack spacing="2">
                  <span>Start buidling</span>
                  <Icon as={ArrowRightIcon} />
                </HStack>
              </Button>
            </CLink>
          </Stack>
        </Stack>
      </Box>

      <Box
        as="section"
        bg={{ base: "mirror.400", md: "unset" }}
        layerStyle="contain"
        my={{ base: "20", md: "32" }}
      >
        <Box
          bg="mirror.400"
          color="black"
          px={{ md: "20" }}
          py={{ base: "10", md: "20" }}
        >
          <chakra.h2 textStyle="display.xl" mb="8" maxW="24ch">
            Powerful SDKs & APIs for Web3 Mobile and Web Apps
          </chakra.h2>

          <Link href="/overview/introduction" passHref>
            <Button as="a" variant="black" width={{ base: "full", md: "auto" }}>
              Get Started
            </Button>
          </Link>

          <Stack
            direction={{ base: "column", lg: "row" }}
            spacing={{ base: "8", lg: "20" }}
            mt="12"
          >
            <FeatureItem icon={FiUsers} title="Fast Web3 Authentication">
              Easily onboard Mobile and Web users onto Web3 using methods they
              are familiar with. Social Authentication from Google, Discord,
              Twitter, and Apple Sign In.
            </FeatureItem>
            <FeatureItem
              icon={AiOutlineShop}
              title="Powerful NFT Marketplace API"
            >
              Deploy Web 3 Marketplaces. Query NFTs, NFT Transaction history
              easily. List, Buy and Transfer NFTs with a single line of code
              across, Mobile and Web.
            </FeatureItem>
            <FeatureItem icon={USDCIcon} title="Token Swaps & On/Off-ramps">
              Leverage Mirror World's Powerful Tokenization APIs to implement
              token swaps and Crypto on-ramps and off-ramps with leading
              industry partners.
            </FeatureItem>
          </Stack>
        </Box>
      </Box>

      <Box as="section" my={{ base: "20", md: "32" }} layerStyle="contain">
        <Flex
          gap="64px"
          direction={{ base: "column", xl: "row" }}
          align={{ base: "flex-start", xl: "center" }}
        >
          <Box flex="1">
            <chakra.h2 mb="8" maxW="24ch" textStyle="display.xl">
              Code less.{" "}
              <chakra.span color="mirror.400">Buidl More.</chakra.span>
            </chakra.h2>
            <chakra.p maxW="64ch" fontSize="lg">
              Mirror World's cross-platform SDKs and powerful HTTP API can let
              you build anywhere.
            </chakra.p>

            <List spacing="5" mt="8" fontSize="lg">
              {[
                "Create a developer account",
                "Create your project and API Key",
                "Start buidling with SDK for your platform",
              ].map((item, index) => (
                <ListItem key={index} display="flex" alignItems="flex-start">
                  <ListIcon
                    fontSize="3xl"
                    color="mirror.400"
                    mr="2"
                    as={BiBadgeCheck}
                  />
                  <span>{item}</span>
                </ListItem>
              ))}
            </List>
          </Box>

          <Center
            position="relative"
            width="full"
            maxW={{ xl: "800px" }}
            minHeight="500px"
          >
            {/*<Box*/}
            {/*  width="full"*/}
            {/*  mx="auto"*/}
            {/*  height="84%"*/}
            {/*  position="absolute"*/}
            {/*  bg="mirror.600"*/}
            {/*  rounded="2xl"*/}
            {/*/>*/}
            <Box
              width={{ base: "full", xl: "max(640px,80%)" }}
              mx="auto"
              bg="gray.800"
              rounded="2xl"
              shadow="base"
              height="full"
              position="relative"
            >
              <CodeArea slug="website/snippet" />
            </Box>
          </Center>
        </Flex>
      </Box>

      <Box as="section" my={{ base: "20", md: "32" }} layerStyle="contain">
        <Flex
          gap="64px"
          direction={{ base: "column", xl: "row" }}
          align={{ base: "flex-start", xl: "center" }}
        >
          <Box flex="1">
            <chakra.h2 mb="8" maxW="24ch" textStyle="display.2xl">
              <chakra.span color="mirror.400">Our Vision</chakra.span>
            </chakra.h2>
            <chakra.p maxW="64ch" fontSize="3xl">
              The vision of the Mirror World Smart SDK is to{" "}
              <chakra.span color="mirror.400" fontWeight="bold">
                create and incentivize alternatives to traditional walled-garden
                solutions to building mobile games and applications
              </chakra.span>
              . The Web 3 era ushered in the possibility of a world where this
              is possible - a world where builders, gamers, authors, creators
              and users have ownership of the things they create; and have the
              tools to make interoperable ecosystems.
            </chakra.p>
          </Box>
        </Flex>
      </Box>

      <Box as="section" my={{ base: "20", md: "32" }} layerStyle="contain">
        <Flex
          gap="64px"
          direction={{ base: "column", xl: "row" }}
          align={{ base: "flex-start", xl: "center" }}
        >
          <Box flex="1">
            <chakra.h2 mb="8" maxW="24ch" textStyle="display.xl">
              Multi-chain support.{" "}
              <chakra.span color="mirror.400">Buidl Anywhere.</chakra.span>
            </chakra.h2>
            <chakra.p maxW="64ch" fontSize="lg">
              Multiple-chain support for your application needs
            </chakra.p>
          </Box>
        </Flex>
        <ChainSupportTable />
      </Box>
      <Footer />
    </Box>
  )
}
