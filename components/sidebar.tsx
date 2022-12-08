import Icon from "@chakra-ui/icon"
import { Box, Flex, HStack, Stack } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"
import React, { useMemo } from "react"
import { useFramework } from "./framework"
import {
  apiReferenceSidebar,
  homeSidebar,
  tutorialsSidebar,
} from "../lib/contentlayer-utils"

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
  const { href, children, isExternal, ...rest } = props
  const current = test(href.toString(), asPath)
  return (
    <Box key={asPath} as="li" fontSize="sm" {...rest}>
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
  const router = useRouter()
  const currentSideBar = useMemo(() => {
    if (
      ["overview", "showcase", "further-reading"].includes(
        router.pathname.split("/")[1],
      )
    ) {
      return homeSidebar
    } else if (
      ["authentication", "marketplace", "wallet", "nfts"].includes(
        router.pathname.split("/")[1],
      )
    ) {
      return tutorialsSidebar
    } else if (["api-reference"].includes(router.pathname.split("/")[1])) {
      return apiReferenceSidebar
    } else {
      homeSidebar
    }
  }, [router.pathname])

  return (
    <nav aria-label="Sidebar Navigation">
      <Stack as="ul" listStyleType="none" direction="column" spacing="6">
        {currentSideBar.map((item) => {
          return (
            <li className="sidebar__category" key={item.name.toLowerCase()}>
              <HStack mb="3" color="textLink">
                <Icon as={item.icon} />
                <chakra.h5
                  fontSize="sm"
                  fontWeight="semibold"
                  textTransform="uppercase"
                >
                  {item.name}
                </chakra.h5>
              </HStack>

              <Flex as="ul" listStyleType="none" direction="column">
                {item.routes.map((subItem, index) => {
                  return (
                    <div key={subItem.url_path + index}>
                      <DocLink
                        href={subItem.external_url || subItem.url_path}
                        isExternal={!!subItem.external_url}
                      >
                        <span
                          onClick={() => {
                            //@ts-ignore
                            window.mixgather.event("menu_name", {
                              name: subItem.nav_title,
                            })
                          }}
                        >
                          {subItem.nav_title}
                        </span>
                      </DocLink>
                      {subItem.children.length
                        ? subItem.children.map((_subItem, j) => {
                            return (
                              <DocLink
                                key={_subItem.url_path + j}
                                href={
                                  _subItem.external_url || _subItem.url_path
                                }
                                isExternal={!!_subItem.external_url}
                                //@ts-ignore
                                pl={4}
                              >
                                <span
                                  onClick={() => {
                                    //@ts-ignore
                                    window.mixgather.event("menu_name", {
                                      name: _subItem.nav_title,
                                    })
                                  }}
                                >
                                  {_subItem.nav_title}
                                </span>
                              </DocLink>
                            )
                          })
                        : null}
                    </div>
                  )
                })}
              </Flex>
            </li>
          )
        })}
      </Stack>
    </nav>
  )
}
