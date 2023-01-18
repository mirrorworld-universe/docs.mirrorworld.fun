import { useMDX } from "components/mdx-components"
import SEO from 'components/seo'
import { MarketplaceTutorials } from "contentlayer/generated"
import DocsLayout from "layouts/docs"
import {
  getTutorialsDoc,
  getTutorialsPaths,
} from "lib/contentlayer-utils"
import { GetStaticPaths, GetStaticProps } from "next"

export default function Tutorials({
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
  return { paths: getTutorialsPaths(), fallback: false }
}

export const getStaticProps: GetStaticProps<{
  doc: any
}> = async (ctx) => {
  const params = ctx.params as any
  const pagePath = params.slug?.join("/") ?? ""
  return { props: { doc: getTutorialsDoc(pagePath) } }
}
