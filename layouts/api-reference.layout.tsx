import Icon from "@chakra-ui/icon"
import { Box, HStack, Spacer } from "@chakra-ui/layout"
import { ChakraProvider, chakra, Stack, Breadcrumb, BreadcrumbItem, BreadcrumbLink, Badge } from "@chakra-ui/react"
import { FrameworkSelect } from "components/framework-select"
import { MdxFooter } from "components/mdx-footer"
import { Search } from "components/search-dialog"
import { Sidebar } from "components/sidebar"
import { SkipNavLink } from "components/skip-nav"
import { TableOfContents } from "components/toc"
import { TopNavigation } from "components/top-navigation"
import React, { useMemo } from "react"
import { HiPencilAlt } from "react-icons/hi"
import theme from "../theme"
import { BottomMobileNavigation } from "../components/bottom-mobile-navigation"
import { ApiReferenceNavigation } from "../components/navigation/api-reference-navigation"
import { useScrollToTop } from 'hooks/use-scroll-to-top'
import { useRouter } from 'next/router'
import NextLink from "next/link"

type DocsLayoutProps = {
  children: React.ReactNode
  doc: any
  toc?: {
    title?: string
    data?: any[]
    getSlug?: (slug: string) => string
  }
}

export default function ApiReferenceLayout({
  children,
  doc,
  toc,
}: DocsLayoutProps) {
  const tableOfContent = toc?.data ?? doc.frontmatter.toc
  const hideToc = tableOfContent.length < 2

  useScrollToTop()

  const router = useRouter()
  const route = useMemo(() => router.asPath, [router.asPath])
  const routeSegments = useMemo(() => {
    const [base, framework, ...segments] = route.split("/").filter(s => s)
    const _segments = segments.map((s) => ({
      segment: s,
      route: `/${base}/${framework}/${segments.slice(0, segments.indexOf(s) + 1).join("/")}`
    }))
    return _segments
  }, [route])

  return (
    <ChakraProvider theme={theme}>
      <Box id="top">
        <SkipNavLink>Skip to main content</SkipNavLink>
        <chakra.div position="sticky" top="0" width="full" zIndex={50}>
          <TopNavigation position="relative" />
          <ApiReferenceNavigation
            position="relative"
            display={["none", "none", "block"]}
          />
        </chakra.div>
        <chakra.div pt="10">
          <Box
            data-with-integration-guide=""
            maxW="8xl"
            mx="auto"
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
              width="22rem"
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
              className="mdx-content"
              pl={{ lg: "21rem" }}
              pt="4"
              pr={{ xl: "16" }}
            >
              <Stack mr={{ xl: "15.5rem" }}>
                <Breadcrumb role="navigation" sx={{
                  ".chakra-breadcrumb__list": {
                    pl: "0 !important"
                  }
                }}>
                  {routeSegments.map((segment, i) => 
                  (
                    <BreadcrumbItem key={i}>
                      <NextLink href={segment.route} passHref>
                        <BreadcrumbLink>
                          <Badge>
                            {segment.segment}
                          </Badge>
                        </BreadcrumbLink>
                      </NextLink>
                    </BreadcrumbItem>
                  )
                )}
                </Breadcrumb>
                <Box>
                  {children}
                </Box>
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
              </Stack>
            </Box>

            <Box
              py="10"
              px="8"
              overflowY="auto"
              position="fixed"
              top="7.6rem"
              bottom="0"
              right="max(0px,calc(50% - 45rem))"
              display={{ base: "none", xl: "block" }}
              width="21rem"
              visibility={hideToc ? "hidden" : undefined}
            >
              <TableOfContents
                title={toc?.title}
                data={tableOfContent}
                getSlug={toc?.getSlug}
              />
            </Box>
          </Box>
        </chakra.div>
        <BottomMobileNavigation />
      </Box>
    </ChakraProvider>
  )
}
