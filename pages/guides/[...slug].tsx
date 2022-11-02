import { useMDX } from "components/mdx-components"
import type { Component } from "contentlayer/generated"
import {
  extractParams,
  getGuideDoc,
  getGuidePaths,
} from "lib/contentlayer-utils"
import { GetStaticPaths, GetStaticProps } from "next"
import { NextSeo } from "next-seo"
import BlogLayout from "../../layouts/blog"
import { buildUrl } from "cloudinary-build-url"

type PageProps = {
  doc: Component
  shareImage: string
}

export default function GuidesPage({ doc, shareImage }: PageProps) {
  const mdx = useMDX(doc.body.code)
  return (
    <div>
      <NextSeo
        title={doc.title}
        description={doc.description}
        canonical={"https://docs.mirrorworld.fun"}
        openGraph={{
          url: `https://docs.mirrorworld.fun/guides/${doc.slug}`,
          title: doc.title,
          description: doc.description,
          images: [
            {
              url: shareImage,
              width: 1280,
              alt: doc.title,
            },
          ],
        }}
      />
      <BlogLayout doc={doc}>{mdx}</BlogLayout>
    </div>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getGuidePaths(), fallback: false }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { slug } = extractParams(ctx.params.slug as string[])
  const doc = getGuideDoc(slug)

  const shareImage = buildUrl("jbakebwa.dev/twitter-cards/blog-card", {
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
            )}_64_semibold_line_spacing_-20:${sanitize(doc.title)}`,
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
              doc.tags.map((t) => `#${t}`).join(" "),
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
  })
  return { props: { doc, shareImage } }
}

function sanitize(text: string) {
  return encodeURIComponent(text).replace(/%(23|2C|2F|3F|5C)/g, "%25$1")
}
