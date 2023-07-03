import Icon from "@chakra-ui/icon"
import { Circle, Flex, HStack, Stack } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { Collapse, useDisclosure } from "@chakra-ui/react"
import Link, { LinkProps } from "next/link"
import { useRouter } from "next/router"
import React, { useEffect, useMemo, useRef } from "react"
import { RxCaretDown, RxCaretRight } from "react-icons/rx"
import debounce from "lodash.debounce"

import {
  apiReferenceSidebar,
  homeSidebar,
  integrationSidebar,
  TreeNode,
  tutorialsSidebar,
} from "../lib/contentlayer-utils"
import { FiExternalLink } from "react-icons/fi"

type DocLinkProps = {
  href: LinkProps["href"]
  item: TreeNode
  children: React.ReactNode
  isExternal?: boolean
}

const sanitize = (href: string) =>
  href.replace(/#.*/, "").split("/").filter(Boolean)

const pathe = (item: TreeNode) =>
  item.external_url || item.internal_path || item.url_path

/**
 * Recursively determines if the current item should be collapsed or not.
 * @param item
 * @param currentLocation
 * @returns
 */
function shouldCollapse(item: TreeNode, currentLocation: string): boolean {
  function hasMatchingDecendant(routes: TreeNode[]): boolean {
    for (const route of routes) {
      const path = pathe(route)
      if (path === currentLocation) {
        return true
      }
      if (route.children.length > 0 && hasMatchingDecendant(route.children)) {
        return true
      }
    }

    return false
  }

  return hasMatchingDecendant(item.children)
}

function DocLink(props: DocLinkProps) {
  const { asPath } = useRouter()
  const { href, children, isExternal, item, ...rest } = props
  const current = useMemo(
    () => href.toString() === asPath,
    [props.href, asPath],
  )

  const rawHrefPathSegments = useMemo(() => sanitize(href.toString()), [href])
  const routePathSegments = useMemo(() => sanitize(asPath.toString()), [asPath])
  const rawHrefPath = useMemo(() => href.toString(), [href])

  const { isOpen, onToggle, onOpen, onClose } = useDisclosure({
    defaultIsOpen: shouldCollapse(item, asPath),
  })

  const linkRef = useRef<HTMLElement>(null)

  const router = useRouter()
  const isApiReference = useMemo(() => {
    return ["api-reference"].includes(router.pathname.split("/")[1])
  }, [router.pathname])

  useEffect(() => {
    const isActive = shouldCollapse(item, asPath)
    if (!isActive) onClose()
    else {
      onOpen()
    }
  }, [rawHrefPathSegments, routePathSegments, asPath, href, item, rawHrefPath])

  function handleCollapseAnimationEnded() {
    if (isOpen) {
      if (linkRef.current) {
        if (
          Math.abs(sanitize(asPath).length - sanitize(rawHrefPath).length) <= 1
        ) {
          linkRef.current.scrollIntoView({
            behavior: "smooth",
            block: "center",
          })
        }
      }
    }
  }

  const debouncedHandleCollapseAnimationEnded = debounce(
    handleCollapseAnimationEnded,
    20,
  )

  return (
    // @ts-ignore
    <chakra.div ref={linkRef} scrollBehavior="smooth">
      <HStack key={asPath} as="li" fontSize="sm" {...rest}>
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
        {item.children.length ? (
          <Circle p={1} cursor="pointer" onClick={onToggle}>
            <Icon as={isOpen ? RxCaretDown : RxCaretRight} />
          </Circle>
        ) : null}
      </HStack>
      {item.children.length ? (
        <Collapse
          in={isOpen}
          onAnimationComplete={debouncedHandleCollapseAnimationEnded}
        >
          <chakra.div
            ml={2}
            pl={2}
            borderLeftColor={"sideBarLinkBorder"}
            borderLeftWidth="1px"
            borderLeftStyle="solid"
            data-sub-navitem
          >
            {item.children?.map((_subItem, j) => {
              return (
                <DocLink
                  item={_subItem}
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
                    {_subItem.children.length ? (
                      <>{_subItem.nav_title}</>
                    ) : (
                      <>
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
                      </>
                    )}
                  </span>
                </DocLink>
              )
            })}
          </chakra.div>
        </Collapse>
      ) : null}
    </chakra.div>
  )
}

export function Sidebar() {
  const router = useRouter()
  const isApiReference = useMemo(() => {
    return ["api-reference"].includes(router.pathname.split("/")[1])
  }, [router.pathname])

  const isIntegrationGuide = useMemo(() => {
    return ["integration"].includes(router.pathname.split("/")[1])
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
    } else if (isIntegrationGuide) {
      return integrationSidebar
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
        {currentSideBar?.map((item) => {
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
                {item.routes?.map((subItem, index) => {
                  return (
                    <div
                      key={subItem.url_path + index}
                      data-navitem={subItem.url_path.split("/")[0]}
                    >
                      <HStack>
                        <DocLink
                          item={subItem}
                          href={pathe(subItem)}
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
                      </HStack>
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
