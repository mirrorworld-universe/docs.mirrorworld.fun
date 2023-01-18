import { useMDX } from "components/mdx-components"
import SEO from 'components/seo'
import { Resources } from "contentlayer/generated"
import DocsLayout from "layouts/docs"
import { getResourcesDoc, getResourcesPaths } from "lib/contentlayer-utils"
import { generateShareImageUrl } from 'lib/seo'
import { GetStaticPaths, GetStaticProps } from "next"

export default function OverviewPage({ doc }: { doc: Resources }) {
  const Component = useMDX(doc.body.code)
  const imageUrl = generateShareImageUrl({ title: doc.title, description: doc.description })
  return (
    <>
      <SEO title={doc.title} description={doc.description} />
      <DocsLayout doc={doc}>{Component}</DocsLayout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getResourcesPaths(), fallback: false }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  return { props: { doc: getResourcesDoc(ctx.params.slug) } }
}
