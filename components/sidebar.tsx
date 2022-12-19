import Icon from "@chakra-ui/icon"
import { Box, Code, Flex, HStack, Stack } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"
import React, { useCallback, useEffect, useMemo } from "react"
import { RxCaretDown, RxCaretRight } from "react-icons/rx"

import {
  apiReferenceSidebar,
  homeSidebar,
  TreeNode,
  tutorialsSidebar,
} from "../lib/contentlayer-utils"
import { FiExternalLink } from "react-icons/fi"

type DocLinkProps = {
  href: LinkProps["href"]
  children: React.ReactNode
  isExternal?: boolean
}

const sanitize = (href: string) =>
  href.replace(/#.*/, "").split("/").filter(Boolean)

function DocLink(props: DocLinkProps) {
  const { asPath } = useRouter()
  const { href, children, isExternal, ...rest } = props
  const current = useMemo(
    () => href.toString() === asPath,
    [props.href, asPath],
  )
  return (
    <Box key={asPath} as="li" fontSize="sm" {...rest}>
      <Link href={href} passHref>
        <chakra.a
          aria-current={current ? "page" : undefined}
          textStyle="sidebarLink"
          sx={{
            color: "currentColor",
            position: "relative",
            "&:after": {
              content: `""`,
              position: "absolute",
              width: "100%",
              transform: "scaleX(0)",
              height: "1px",
              top: "85%",
              left: 0,
              backgroundColor: "currentColor",
              transformOrigin: "bottom right",
              transition: "transform .4s cubic-bezier(.86, 0, .07, 1)",
            },
            "&:hover::after": {
              transform: "scaleX(1)",
              transformOrigin: "bottom left",
            },
          }}
          {...(current && {
            borderLeftColor: "sideBarLinkBorderSelected",
          })}
          {...(isExternal && { target: "_blank" })}
        >
          {isExternal ? (
            <HStack>
              <chakra.div>{children}</chakra.div>
              <Icon as={FiExternalLink} />
            </HStack>
          ) : (
            children
          )}
        </chakra.a>
      </Link>
    </Box>
  )
}

export function Sidebar() {
  const router = useRouter()
  const isApiReference = useMemo(() => {
    return ["api-reference"].includes(router.pathname.split("/")[1])
  }, [router.pathname])
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
    } else if (isApiReference) {
      return apiReferenceSidebar
    } else {
      return homeSidebar
    }
  }, [router.pathname])

  const isActivePath = (navItem: TreeNode) => {
    const path =
      navItem.external_url || navItem.internal_path || navItem.url_path

    return (
      router.asPath.split("/")[isApiReference ? 2 : 1] ===
      path.split("/")[isApiReference ? 2 : 1]
    )
  }

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
                      <HStack>
                        <DocLink
                          href={
                            subItem.external_url ||
                            subItem.internal_path ||
                            subItem.url_path
                          }
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
                        {subItem.children.length ? (
                          <Icon
                            as={
                              isActivePath(subItem) ? RxCaretDown : RxCaretRight
                            }
                          />
                        ) : null}
                      </HStack>
                      {subItem.children.length ? (
                        <chakra.div
                          ml={2}
                          pl={2}
                          borderLeftColor={"sideBarLinkBorder"}
                          borderLeftWidth="1px"
                          borderLeftStyle="solid"
                          hidden={!isActivePath(subItem)}
                        >
                          {subItem.children.map((_subItem, j) => {
                            return (
                              <DocLink
                                key={_subItem.url_path + j}
                                href={
                                  _subItem.external_url ||
                                  _subItem.internal_path ||
                                  _subItem.url_path
                                }
                                isExternal={!!_subItem.external_url}
                              >
                                <span
                                  onClick={() => {
                                    // @ts-ignore
                                    window.mixgather.event("menu_name", {
                                      name: _subItem.nav_title,
                                    })
                                  }}
                                >
                                  {isApiReference ? (
                                    <chakra.code
                                      className="prose"
                                      layerStyle="inlineCode"
                                      fontSize="0.8rem"
                                      fontWeight="inherit"
                                    >
                                      {_subItem.nav_title}
                                    </chakra.code>
                                  ) : (
                                    _subItem.nav_title
                                  )}
                                </span>
                              </DocLink>
                            )
                          })}
                        </chakra.div>
                      ) : null}
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
