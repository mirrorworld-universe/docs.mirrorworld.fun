import Icon from "@chakra-ui/icon"
import { Box, Container } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { SkipNavLink } from "components/skip-nav"
import { TopNavigation } from "components/top-navigation"
import React from "react"

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
            {children}
          </Container>
        </Box>
      </chakra.div>
    </Box>
  )
}
