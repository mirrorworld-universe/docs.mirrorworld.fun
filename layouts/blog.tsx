import Icon from "@chakra-ui/icon"
import {
  Box,
  Container,
  Heading,
  HStack,
  Text,
  Stack,
  Link,
} from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { MdxFooter } from "components/mdx-footer"
import { SkipNavLink } from "components/skip-nav"
import { TableOfContents } from "components/toc"
import { TopNavigation } from "components/top-navigation"
import React from "react"
import { HiPencilAlt } from "react-icons/hi"
import { BottomMobileNavigation } from "../components/bottom-mobile-navigation"

type BlogLayoutProps = {
  children: React.ReactNode
  doc: any
  toc?: {
    title?: string
    data?: any[]
    getSlug?: (slug: string) => string
  }
}

export default function BlogLayout({ children, doc, toc }: BlogLayoutProps) {
  const tableOfContent = toc?.data ?? doc.frontmatter.toc
  const hideToc = tableOfContent.length < 2

  return (
    <Box>
      <SkipNavLink>Skip to main content</SkipNavLink>
      <TopNavigation />
      <chakra.div pt="10">
        <Box maxW="8xl" mx="auto" px={{ sm: "6", base: "4", md: "8" }}>
          <Container as="main" maxW="4xl" className="mdx-content" pt="4">
            <Box mr={{ xl: "15.5rem" }}>
              <Stack spacing={6}>
                <Heading>{doc.title}</Heading>
                {doc.author?.name && (
                  <Text>
                    By{" "}
                    {doc.author.twitter ? (
                      <Link
                        isExternal
                        href={doc.author.twitter}
                        color={"textLink"}
                        textDecoration="underline"
                      >
                        {doc.author.name}
                      </Link>
                    ) : (
                      doc.author.name
                    )}
                  </Text>
                )}
                <Box>{children}</Box>
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
          </Container>

          <Box
            py="10"
            px="8"
            overflowY="auto"
            position="fixed"
            top="3.8rem"
            bottom="0"
            right="max(0px, calc(50% - 32rem))"
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
  )
}
