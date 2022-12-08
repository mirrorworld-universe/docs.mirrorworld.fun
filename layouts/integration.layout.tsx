import Icon from "@chakra-ui/icon"
import { Box, HStack, Spacer } from "@chakra-ui/layout"
import { ChakraProvider, chakra } from "@chakra-ui/react"
import { FrameworkSelect } from "components/framework-select"
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
