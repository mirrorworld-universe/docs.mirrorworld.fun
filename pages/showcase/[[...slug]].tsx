import { useMDX } from "components/mdx-components"
import { Showcase } from "contentlayer/generated"
import DocsLayout from "layouts/docs"
import { getShowcaseDoc, getShowcasePaths } from "lib/contentlayer-utils"
import { GetStaticPaths, GetStaticProps } from "next"
import { NextSeo } from "next-seo"

export default function ShowcasePage({ doc }: { doc: Showcase }) {
  const Component = useMDX(doc.body.code)
  return (
    <>
      <NextSeo title={doc.title} description={doc.description} />
      <DocsLayout doc={doc}>{Component}</DocsLayout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getShowcasePaths(), fallback: false }
}

export const getStaticProps: GetStaticProps<{ doc: Showcase }> = async (
  ctx,
) => {
  const params = ctx.params as any
  const pagePath = params.slug?.join("/") ?? ""
  return { props: { doc: getShowcaseDoc(pagePath) } }
}
