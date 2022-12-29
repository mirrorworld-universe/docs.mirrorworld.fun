/* eslint-disable react-hooks/rules-of-hooks */
import { Icon } from "@chakra-ui/icon"
import { Box, HStack } from "@chakra-ui/layout"
import { chakra } from "@chakra-ui/system"
import { normalizeProps, useMachine } from "@zag-js/react"
import * as tabs from "@zag-js/tabs"
import { MDX } from "contentlayer/core"
import { allComponents, allSnippets } from "contentlayer/generated"
import { frameworks, FRAMEWORKS } from "lib/framework-utils"
import { useMDXComponent } from "next-contentlayer/hooks"
import Link from "next/link"
import { FC } from "react"
import { HiOutlineCode } from "react-icons/hi"
import { ImMagicWand } from "react-icons/im"
import { RiNpmjsFill } from "react-icons/ri"
import { CopyButton } from "./copy-button"
import { useFramework } from "./framework"
import NextImage from "next/image"
import { ChainSupportTable } from "./support-table"
import { ResourceSupportTable } from "./resource-support-table"
import { SupportButton } from "./support-button"
import { LanguageSupportTable } from "./language-support-table"
import { Button } from "./button"
import { GithubIcon } from "./icons"
import { Link as CLink } from "@chakra-ui/layout"
import { useState, useEffect, useRef } from "react"
import { ApiReferenceCards } from "./cards/api-reference-cards"
import { IntegrationCards } from "./cards/integration-cards"
import { MobileFrameworksCards } from "./cards/mobile-frameworks-cards"
import { WebFrameworksCards } from "./cards/web-frameworks-cards"

function SnippetItem({ body, id }: { body: MDX; id: string }) {
  const content = useMDX(body.code)
  const textContent = body.raw.split("\n").slice(1, -2).join("\n")
  return (
    <div className="prose" id="snippet" data-framework={id}>
      {content}
      <CopyButton content={textContent} />
    </div>
  )
}

type ResourceLinkProps = {
  href: string
  icon: FC
  children: any
}

export function ResourceLink({ href, icon, children }: ResourceLinkProps) {
  return (
    <HStack
      as="a"
      href={href}
      target="_blank"
      borderWidth="1px"
      px="2"
      py="1"
      fontSize="sm"
      spacing="1"
    >
      <Icon as={icon} color="green.500" fontSize="lg" />
      <span>{children}</span>
    </HStack>
  )
}

const components: Record<string, FC<Record<string, any>>> = {
  Admonition(props) {
    return <div {...props} />
  },
  Resources(props) {
    const comp = allComponents.find((c) => c.package === props.pkg)
    return (
      <HStack mt="6" spacing="4">
        <ResourceLink icon={RiNpmjsFill} href={comp.npmUrl}>
          {comp.version} (latest)
        </ResourceLink>
        <ResourceLink icon={ImMagicWand} href={comp.visualizeUrl}>
          Visualize Logic
        </ResourceLink>
        <ResourceLink icon={HiOutlineCode} href={comp.sourceUrl}>
          View Source
        </ResourceLink>
      </HStack>
    )
  },
  blockquote(props) {
    return <chakra.blockquote layerStyle="blockquote" {...props} />
  },
  h1(props) {
    return (
      <chakra.h1
        id="skip-nav"
        textStyle="display.lg"
        mb="5"
        maxW="85ch"
        tabIndex={-1}
        {...props}
      />
    )
  },
  h2(props) {
    return <chakra.h2 textStyle="display.md" mt="12" mb="3" {...props} />
  },
  h3(props) {
    return <chakra.h3 textStyle="display.sm" mt="6" mb="4" {...props} />
  },
  h4(props) {
    return <chakra.h4 textStyle="display.xs" mt="6" mb="2" {...props} />
  },
  pre(props) {
    const [isMounted, setIsMounted] = useState(false)
    const [codeContent, setCodeContent] = useState("")

    const codeRef = useRef<any>()
    useEffect(() => {
      if (isMounted) return
      if (codeRef) {
        setCodeContent(codeRef.current?.textContent)
      }
      return () => {
        setIsMounted(true)
      }
    }, [isMounted, codeRef])

    return (
      <pre
        {...props}
        ref={codeRef}
        style={{ position: "relative" }}
        className={`prose ${props.className}`}
      >
        {props.children}
      </pre>
    )
  },
  li(props) {
    return (
      <chakra.li
        sx={{
          "&::marker": {
            color: "cyan.default",
          },
        }}
        {...props}
      />
    )
  },
  inlineCode(props) {
    return <chakra.code className="prose" layerStyle="inlineCode" {...props} />
  },
  code(props) {
    if (typeof props.children === "string") {
      return <components.inlineCode {...props} />
    }
    return <div className="prose">{props.children}</div>
  },
  CodeSnippet(props) {
    const { framework: userFramework } = useFramework()

    const snippets = allSnippets.filter((p) => {
      const [_, __, ...rest] = p.params
      const str = rest.join("/") + ".mdx"
      return str === props.id
    })

    const [state, send] = useMachine(
      tabs.machine({
        id: props.id,
        value: userFramework ?? "react",
      }),
    )

    const api = tabs.connect(state, send, normalizeProps)

    return (
      <Box
        width="full"
        maxW="768px"
        my="8"
        bg="hsl(230, 1%, 98%)"
        rounded="6px"
        {...api.rootProps}
      >
        <Box {...api.triggerGroupProps}>
          {FRAMEWORKS.map((framework) => (
            <chakra.button
              py="2"
              px="4"
              fontSize="sm"
              fontWeight="medium"
              borderBottom="2px solid"
              borderBottomColor="gray.200"
              _selected={{
                borderBottomColor: "currentColor",
                color: "green.500",
              }}
              _focusVisible={{ outline: "2px solid blue" }}
              {...api.getTriggerProps({ value: framework })}
              key={framework}
            >
              <HStack>
                <Icon as={frameworks[framework].icon} />
                <p>{frameworks[framework].label}</p>
              </HStack>
            </chakra.button>
          ))}
        </Box>
        <Box {...api.contentGroupProps}>
          {FRAMEWORKS.map((framework) => {
            const snippet = snippets.find((p) => p.framework === framework)
            return (
              <Box
                {...api.getContentProps({ value: framework })}
                position="relative"
                key={framework}
                mt="-6"
                _focusVisible={{ outline: "2px solid blue" }}
              >
                {snippet ? (
                  <SnippetItem id={framework} body={snippet.body} />
                ) : (
                  <Box mt="6" padding="4" fontSize="sm" opacity="0.5">
                    Snippet not found :(
                  </Box>
                )}
              </Box>
            )
          })}
        </Box>
      </Box>
    )
  },
  a(props) {
    const href = props.href
    const isInternalLink =
      href && (href.startsWith("/") || href.startsWith("#"))

    if (isInternalLink) {
      return (
        <Link href={href} passHref>
          <chakra.a textStyle="link" {...props}>
            {props.children}
          </chakra.a>
        </Link>
      )
    }

    return (
      <chakra.a textStyle="link" target="_blank" rel="noopener" {...props} />
    )
  },
  Anatomy: ({ id }: { id: string }) => {
    const src = `/illustrations/${id}.svg`
    return (
      <Box my="8" bg="linear-gradient(90deg, #41B883 -2.23%, #299464 92.64%)">
        <NextImage src={src} alt="" width="1456px" height="812px" />
      </Box>
    )
  },
  ChainSupportTable: (props) => {
    return <ChainSupportTable {...props} />
  },
  ResourceSupportTable: (props) => {
    return <ResourceSupportTable {...props}></ResourceSupportTable>
  },
  SupportButton: (props) => {
    return <SupportButton {...props} />
  },
  LanguageSupportTable: (props) => {
    return <LanguageSupportTable {...props} />
  },
  GithubButton: (props) => {
    return (
      <CLink
        isExternal
        href={`https://github.com/${props.repository}`}
        outline="none"
        rounded="4px"
        _hover={{ textDecoration: "none" }}
        w={{ base: "full", sm: "unset" }}
      >
        <Button px={6} w={{ base: "full", sm: "unset" }}>
          <HStack spacing="2">
            <Icon as={GithubIcon} />
            <span>{props.label || "View on Github"}</span>
          </HStack>
        </Button>
      </CLink>
    )
  },
  ApiReferenceCards: (props) => <ApiReferenceCards {...props} />,
  IntegrationCards: (props) => <IntegrationCards {...props} />,
  MobileFrameworksCards: (props) => <MobileFrameworksCards {...props} />,
  WebFrameworksCards: (props) => <WebFrameworksCards {...props} />,
}

export function useMDX(code: string) {
  const MDXComponent = useMDXComponent(code)
  // @ts-ignore
  return <MDXComponent components={components} />
}

export { components as MirrorWorldMDXComponents }
