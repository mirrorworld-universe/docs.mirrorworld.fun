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
              maxW="5xl"
              mx="auto"
              px={{ sm: "6", base: "4", md: "8" }}
            >
              <Box as="main" className="mdx-content" pt="4">
                <Box data-with-integration-guide="">
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
