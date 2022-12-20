import { NextSeo } from "next-seo"
import theme from "../theme"
import { Box, Heading, HStack, Spacer } from "@chakra-ui/layout"
import { SkipNavLink } from "../components/skip-nav"
import { TopNavigation } from "../components/top-navigation"
import { chakra, ChakraProvider } from "@chakra-ui/react"
import { Search } from "../components/search-dialog"
import { FrameworkSelect } from "../components/framework-select"
import { Sidebar } from "../components/sidebar"
import { MdxFooter } from "../components/mdx-footer"
import { BottomMobileNavigation } from "../components/bottom-mobile-navigation"
import React from "react"
import Link from "next/link"

export default function Custom404Page() {
  return (
    <>
      <NextSeo title={"Page Not Found"} />
      <ChakraProvider theme={theme}>
        <Box>
          <SkipNavLink>Skip to main content</SkipNavLink>
          <TopNavigation />
          <chakra.div pt="10">
            <Box maxW="8xl" mx="auto" px={{ sm: "6", base: "4", md: "8" }}>
              <Box
                display={{ base: "none", lg: "block" }}
                position="fixed"
                zIndex={30}
                bottom="0"
                top="4rem"
                left="max(0px, calc(50% - 45rem))"
                right="auto"
                width="19.5rem"
                pb="10"
                px="8"
                overflowY="auto"
                overscrollBehavior="contain"
              >
                <Box position="relative">
                  <Box
                    position="sticky"
                    zIndex={20}
                    top="0"
                    bg="languageSelectBg"
                    pb="8"
                  >
                    <Spacer height="10" />
                    <Search />
                    <Spacer mt="px" height="5" />
                    <FrameworkSelect />
                  </Box>
                  <Sidebar />
                </Box>
              </Box>

              <Box
                as="main"
                className="mdx-content"
                pl={{ lg: "19.5rem" }}
                pt="4"
                pr={{ xl: "16" }}
              >
                <Box mr={{ xl: "15.5rem" }}>
                  <Heading>404 - Page Not Found</Heading>
                  <Link href="/">
                    <a>Go back home</a>
                  </Link>
                  <MdxFooter />
                </Box>
              </Box>
            </Box>
          </chakra.div>
          <BottomMobileNavigation />
        </Box>
      </ChakraProvider>
    </>
  )
}
