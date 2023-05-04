import { useMDX } from "components/mdx-components"
import SEO from 'components/seo'
import { MarketplaceTutorials } from "contentlayer/generated"
import DocsLayout from "layouts/docs"
import {
  getMarketplaceTutorialsDoc,
  getMarketplaceTutorialsPaths,
} from "lib/contentlayer-utils"
import { generateShareImageUrl } from 'lib/seo'
import { GetStaticPaths, GetStaticProps } from "next"

export default function MarketplaceTutorialsPage({
  doc,
}: {
  doc: MarketplaceTutorials
}) {
  const Component = useMDX(doc.body.code)
  return (
    <>
      <SEO title={doc.title} description={doc.description} />
      <DocsLayout doc={doc}>{Component}</DocsLayout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getMarketplaceTutorialsPaths(), fallback: false }
}

export const getStaticProps: GetStaticProps<{
  doc: MarketplaceTutorials
}> = async (ctx) => {
  const params = ctx.params as any
  const pagePath = params.slug?.join("/") ?? ""
  return { props: { doc: getMarketplaceTutorialsDoc(pagePath) } }
}
