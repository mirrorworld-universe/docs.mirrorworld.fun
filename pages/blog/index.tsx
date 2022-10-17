import {
  Box,
  Container,
  Text,
  Heading,
  Stack,
  SimpleGrid,
  HStack,
} from "@chakra-ui/layout"
import { SkipNavLink } from "../../components/skip-nav"
import { TopNavigation } from "../../components/top-navigation"
import { chakra } from "@chakra-ui/system"
import React from "react"
import { allBlogs } from "contentlayer/generated"
import { buildUrl } from "cloudinary-build-url"
import { Image } from "@chakra-ui/image"
import Link from "next/link"
import { Tag } from "@chakra-ui/react"

export default function Blog() {
  const blogs = allBlogs.map((blog) => ({
    ...blog,
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
              )}_64_semibold_line_spacing_-20:${sanitize(blog.title)}`,
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
                blog.tags.map((t) => `#${t}`).join(" "),
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
  return (
    <Box>
      <SkipNavLink>Skip to main content</SkipNavLink>
      <TopNavigation />
      <chakra.div pt="10">
        <Box maxW="8xl" mx="auto" px={{ sm: "6", base: "4", md: "8" }}>
          <Container as="main" maxW="4xl" className="mdx-content" pt="4">
            <Stack spacing={8}>
              <Heading>Mirror World SDK Blog</Heading>
              <Text color="gray.300">
                Tutorials & Guides on building on and interacting with the
                Mirror World SDK. These guides cover topics in Solana
                fundamentals, NFTs, DeFi, Gaming Development and more!
              </Text>
              <SimpleGrid columns={[1, 1, 3]} spacing={10}>
                {blogs.map((blog, i) => (
                  <Link key={i} href={`/blog/${blog.slug}`}>
                    <Box
                      rounded="md"
                      overflow="hidden"
                      border={"1px solid"}
                      borderColor="mirror.800"
                      backdropBlur={"sm"}
                      cursor="pointer"
                      transition="all 0.2s ease-in-out"
                      _hover={{
                        bg: "gray.800",
                        shadow: "lg",
                      }}
                    >
                      <Image src={blog.shareImage} alt={blog.title} />
                      <Stack px={4} py={3}>
                        <Heading
                          as={"h3"}
                          size="2xs"
                          fontWeight="bold"
                          noOfLines={2}
                        >
                          {blog.title}
                        </Heading>
                        <HStack>
                          {blog.tags.map((t, j) => (
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
                        <Text color="gray.300" fontSize={"sm"} noOfLines={3}>
                          {blog.description}
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
    </Box>
  )
}

function sanitize(text: string) {
  return encodeURIComponent(text).replace(/%(23|2C|2F|3F|5C)/g, "%25$1")
}
