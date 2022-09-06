import Icon from "@chakra-ui/icon"
import { Box, Flex, HStack, Stack } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { formatUrl } from "lib/pagination-utils"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"
import React from "react"
import sidebar from "sidebar.config"
import { useFramework } from "./framework"

type DocLinkProps = {
  href: LinkProps["href"]
  children: React.ReactNode
  isExternal?: boolean
}

const sanitize = (href: string) =>
  href.replace(/#.*/, "").split("/").filter(Boolean)

function test(href: string, asPath: string) {
  const a = sanitize(href)
  const b = sanitize(asPath)

  if (asPath.startsWith("/changelogs")) {
    return a[0] === b[0]
  }

  return a[a.length - 1] === b[b.length - 1]
}

function DocLink(props: DocLinkProps) {
  const { asPath } = useRouter()
  const { href, children, isExternal } = props
  const current = test(href.toString(), asPath)
  return (
    <Box key={asPath} as="li" fontSize="sm">
      <Link href={href} passHref>
        <chakra.a
          aria-current={current ? "page" : undefined}
          textStyle="sidebarLink"
          {...(isExternal && { target: "_blank" })}
        >
          {children}
        </chakra.a>
      </Link>
    </Box>
  )
}

export function Sidebar() {
  const { framework } = useFramework()

  return (
    <nav aria-label="Sidebar Navigation">
      <Stack as="ul" listStyleType="none" direction="column" spacing="10">
        {sidebar.docs.map((item) => {
          if (item.type === "category") {
            return (
              <li className="sidebar__category" key={item.id}>
                <HStack mb="3" color="mirror.500">
                  <Icon as={item.icon} />
                  <chakra.h5
                    fontSize="xs"
                    fontWeight="semibold"
                    textTransform="uppercase"
                  >
                    {item.label}
                  </chakra.h5>
                </HStack>

                <Flex as="ul" listStyleType="none" direction="column">
                  {item.items.map((subItem, index) => {
                    const href = formatUrl(item.id, subItem.id, framework)
                    if (subItem.type === "doc") {
                      return (
                        <DocLink
                          key={subItem.id + index}
                          href={subItem.href ?? href}
                        >
                          {subItem.label}
                        </DocLink>
                      )
                    }
                    return null
                  })}
                </Flex>
              </li>
            )
          }

          return null
        })}
      </Stack>
    </nav>
  )
}
