import Icon from "@chakra-ui/icon"
import { Box, HStack, Spacer } from "@chakra-ui/layout"
import { ChakraProvider, chakra, useBreakpointValue } from "@chakra-ui/react"
import { MdxFooter } from "components/mdx-footer"
import { Search } from "components/search-dialog"
import { Sidebar } from "components/sidebar"
import { SkipNavLink } from "components/skip-nav"
import { TopNavigation } from "components/top-navigation"
import React from "react"
import { HiPencilAlt } from "react-icons/hi"
import theme from "../theme"
import { BottomMobileNavigation } from "../components/bottom-mobile-navigation"
import { MDXProvider } from "@mdx-js/react"
import { MirrorWorldMDXComponents } from "components/mdx-components"
import { IntegrationBuilderNav } from "../components/navigation/integration-builder-navigation"

type IntegrationLayoutProps = {
  children: React.ReactNode
  doc: any
  toc?: {
    title?: string
    data?: any[]
    getSlug?: (slug: string) => string
  }
}

export default function IntegrationLayout({
  children,
  doc,
  toc,
}: IntegrationLayoutProps) {
  const tableOfContent = toc?.data ?? doc.frontmatter.toc
  const hideToc = tableOfContent.length < 2

  return (
    <ChakraProvider theme={theme}>
      <MDXProvider components={MirrorWorldMDXComponents}>
        <Box>
          <SkipNavLink>Skip to main content</SkipNavLink>
          <chakra.div position="sticky" top="0" width="full" zIndex={50}>
            <TopNavigation position="relative" />
            <IntegrationBuilderNav
              position="relative"
              display={["none", "none", "block"]}
            />
          </chakra.div>
          <chakra.div pt="10">
            <Box
              data-with-integration-guide=""
              maxW="8xl"
              ml="auto"
              px={{ sm: "6", base: "4", md: "8" }}
            >
              <Box
                display={{ base: "none", lg: "block" }}
                position="fixed"
                zIndex={30}
                bottom="0"
                top="8rem"
                left="max(0px, calc(50% - 45rem))"
                right="auto"
                width="21rem"
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
                  </Box>
                  <Sidebar />
                </Box>
              </Box>

              <Box
                as="main"
                className="mdx-content integration"
                pl={useBreakpointValue({
                  "2xl": "11rem",
                  xl: "20rem",
                  lg: "18rem",
                  md: "0",
                  sm: "0",
                })}
                pt="4"
                pr={{ lg: "4rem" }}
                mt={"-50px"}
              >
                <Box>
                  {children}
                  <HStack
                    as="a"
                    display="inline-flex"
                    href={doc.editUrl}
                    textStyle="a"
                    fontSize="sm"
                    mt="14"
                  >
                    <Icon as={HiPencilAlt} />
                    <p>Edit this page on GitHub</p>
                  </HStack>
                  <MdxFooter />
                </Box>
              </Box>
            </Box>
          </chakra.div>
          <BottomMobileNavigation />
        </Box>
      </MDXProvider>
    </ChakraProvider>
  )
}
