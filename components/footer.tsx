import { Box, Stack, Text } from "@chakra-ui/layout"
import React from "react"
import { DiGithubBadge } from "react-icons/di"
import { IoLogoTwitter } from "react-icons/io"
import siteConfig from "site.config"
import { FooterLink, FooterLinkProps } from "./footer-link"

const links: FooterLinkProps[] = [
  {
    icon: DiGithubBadge,
    label: "Go to Mirror World Github",
    href: siteConfig.author.github,
    fontSize: "2xl",
  },
  {
    icon: IoLogoTwitter,
    label: "Go to Mirror World Twitter",
    href: siteConfig.author.twitter,
  },
]

export const Footer = () => (
  <Box as="footer">
    <Stack
      layerStyle="contain"
      justify="space-between"
      direction={{ base: "column", md: "row" }}
      spacing="4"
      my="20"
    >
      <Text dangerouslySetInnerHTML={{ __html: siteConfig.copyright }} />
      <Text>
        <span>Made with ❤️</span> <span>by Mirror World, Inc.</span>
      </Text>
      <Stack mt={4} direction="row" spacing="12px" justify="center">
        {links.map((link) => (
          <FooterLink key={link.href} {...link} />
        ))}
      </Stack>
    </Stack>
  </Box>
)
