import {
  Box,
  Container,
  Text,
  Heading,
  Stack,
  SimpleGrid,
  HStack,
  Image,
  Tag,
  TagLabel,
  AspectRatio,
} from "@chakra-ui/react"
import { SkipNavLink } from "../../components/skip-nav"
import { TopNavigation } from "../../components/top-navigation"
import { chakra } from "@chakra-ui/system"
import React, { useMemo } from "react"
import { allGuides, Guides } from "contentlayer/generated"
import { buildUrl } from "cloudinary-build-url"
import Link from "next/link"
import { BottomMobileNavigation } from "../../components/bottom-mobile-navigation"
import { useRouter } from "next/router"

type GroupedArticle = Record<string, Guides[]>

const guides = allGuides?.map((guide) => ({
  ...guide,
  shareImage: buildUrl("jbakebwa.dev/twitter-cards/blog-card", {
    cloud: {
      cloudName: "xtellar",
    },
    transformations: {
      resize: {
        width: 1280,
      },
      chaining: [
        {
          overlay: [
            `text:${sanitize(
              "Poppins",
            )}_64_semibold_line_spacing_-20:${sanitize(guide.title)}`,
            "c_fit",
            "co_rgb:DCFF1C",
            "g_north_west",
            "x_76",
            "y_200",
            "w_960",
          ].join(","),
        },
        {
          overlay: [
            `text:${sanitize("Poppins")}_48:${sanitize(
              guide?.tags?.map((t) => `#${t}`).join(" ") || "",
            )}`,
            "c_fit",
            "co_rgb:FFFFFF",
            "g_south_west",
            "y_200",
            "x_76",
            "w_960",
          ].join(","),
        },
      ],
    },
  }),
}))

export default function Blog() {
  const router = useRouter()

  const tag = useMemo(() => {
    return router.query.tag as string
  }, [router.asPath])

  const articlesByTag = useMemo(() => {
    return guides.reduce((accumulator, currentValue) => {
      const tags = currentValue.tags as string[]
      tags.forEach((tag) => {
        if (accumulator[tag]) {
          accumulator[tag].push(currentValue)
        } else {
          accumulator[tag] = [currentValue]
        }
      })
      return accumulator
    }, {} as GroupedArticle)
  }, [guides])

  const articleGroups = useMemo(
    () => Object.keys(articlesByTag),
    [articlesByTag],
  )

  const selectedArticles = useMemo(() => {
    if (articleGroups.includes(tag)) {
      return articlesByTag[tag]
    }

    return guides
  }, [router.query, articlesByTag, articleGroups])

  return (
    <Box>
      <SkipNavLink>Skip to main content</SkipNavLink>
      <TopNavigation />
      <chakra.div py="10">
        <Box maxW="8xl" mx="auto" px={{ sm: "6", base: "4", md: "8" }}>
          <Container as="main" maxW="4xl" className="mdx-content" pt="4">
            <Stack spacing={8}>
              <Heading>Guides</Heading>
              <Text>
                Technical Guides & Tutorials on building on and interacting with
                the Mirror World SDK. These guides cover topics in Solana
                fundamentals, NFTs, DeFi, Gaming Development and more!
              </Text>

              <HStack spacing={4} overflowX="scroll">
                <Link href={`/guides`}>
                  <Tag
                    flexShrink={0}
                    bg="#dcff1a99"
                    size="lg"
                    color="mirror.900"
                    rounded="full"
                    cursor="pointer"
                  >
                    <TagLabel>All</TagLabel>
                  </Tag>
                </Link>
                {articleGroups.map((article) => (
                  <Link href={`/guides?tag=${article}`} key={article}>
                    <Tag
                      flexShrink={0}
                      bg="#dcff1a99"
                      size="lg"
                      color="mirror.900"
                      rounded="full"
                      cursor="pointer"
                    >
                      <TagLabel>{article}</TagLabel>
                    </Tag>
                  </Link>
                ))}
              </HStack>

              <SimpleGrid columns={[1, 1, 3]} spacing={10}>
                {selectedArticles?.map((guide, i) => (
                  <Link key={guide.slug} href={`/guides/${guide.slug}`}>
                    <Box
                      rounded="md"
                      overflow="hidden"
                      border={"1px solid"}
                      borderColor="mirror.800"
                      backdropBlur={"sm"}
                      cursor="pointer"
                      transition="all 0.2s ease-in-out"
                      _hover={{
                        shadow: "lg",
                      }}
                      onClick={() => {
                        // @ts-ignore
                        window.mixgather.event("view_guides", {
                          guide_name: guide.title,
                        })
                      }}
                    >
                      <AspectRatio ratio={1.7}>
                        {/*@ts-ignore*/}
                        <Image src={guide.shareImage} alt={guide.title} />
                      </AspectRatio>
                      <Stack px={4} py={3}>
                        <Heading
                          as={"h3"}
                          size="2xs"
                          fontWeight="bold"
                          noOfLines={2}
                        >
                          {guide.title}
                        </Heading>
                        <HStack>
                          {guide?.tags?.map((t, j) => (
                            <Tag
                              rounded="full"
                              key={j}
                              fontSize={"0.7em"}
                              bg="#dcff1a99"
                              color="mirror.900"
                              px="2"
                              py="0.5"
                              letterSpacing="smaller"
                            >
                              {t}
                            </Tag>
                          ))}
                        </HStack>
                        <Text fontSize={"sm"} noOfLines={3}>
                          {guide.description}
                        </Text>
                      </Stack>
                    </Box>
                  </Link>
                ))}
              </SimpleGrid>
            </Stack>
          </Container>
        </Box>
      </chakra.div>
      <BottomMobileNavigation />
    </Box>
  )
}

function sanitize(text: string) {
  return encodeURIComponent(text).replace(/%(23|2C|2F|3F|5C)/g, "%25$1")
}
