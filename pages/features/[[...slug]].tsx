import { useMDX } from "components/mdx-components"
import { Features } from "contentlayer/generated"
import DocsLayout from "layouts/docs"
import { getFeaturesDoc, getFeaturesPaths } from "lib/contentlayer-utils"
import { GetStaticPaths, GetStaticProps } from "next"
import { NextSeo } from "next-seo"

export default function FeaturesPages({ doc }: { doc: Features }) {
  const Component = useMDX(doc.body.code)
  return (
    <>
      <NextSeo title={doc.title} description={doc.description} />
      <DocsLayout doc={doc}>{Component}</DocsLayout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getFeaturesPaths(), fallback: false }
}

export const getStaticProps: GetStaticProps<{ doc: Features }> = async (
  ctx,
) => {
  const params = ctx.params as any
  const pagePath = params.slug?.join("/") ?? ""
  return { props: { doc: getFeaturesDoc(pagePath) } }
}
