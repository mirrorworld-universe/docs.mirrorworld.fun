import { useMDX } from "components/mdx-components"
import SEO from 'components/seo'
import { Overview } from "contentlayer/generated"
import DocsLayout from "layouts/docs"
import { getOverviewDoc, getOverviewPaths } from "lib/contentlayer-utils"
import { GetStaticPaths, GetStaticProps } from "next"

export default function OverviewPage({ doc }: { doc: Overview }) {
  const Component = useMDX(doc.body.code)
  return (
    <>
      <SEO title={doc.title} description={doc.description} />
      <DocsLayout doc={doc}>{Component}</DocsLayout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getOverviewPaths(), fallback: false }
}

export const getStaticProps: GetStaticProps<{ doc: Overview }> = async (
  ctx,
) => {
  const params = ctx.params as any
  const pagePath = params.slug?.join("/") ?? ""
  return { props: { doc: getOverviewDoc(pagePath) } }
}
