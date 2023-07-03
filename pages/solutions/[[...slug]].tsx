import { useMDX } from "components/mdx-components"
import SEO from "components/seo"
import { Solutions } from "contentlayer/generated"
import DocsLayout from "layouts/docs"
import { getSolutionsDoc, getSolutionsPaths } from "lib/contentlayer-utils"
import { GetStaticPaths, GetStaticProps } from "next"

export default function SolutionsPages({ doc }: { doc: Solutions }) {
  const Component = useMDX(doc.body.code)
  return (
    <>
      <SEO title={doc.title} description={doc.description} />
      <DocsLayout doc={doc}>{Component}</DocsLayout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getSolutionsPaths()
  return { paths: paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{ doc: Solutions }> = async (
  ctx,
) => {
  const params = ctx.params as any
  const pagePath = params.slug?.join("/") ?? ""
  return { props: { doc: getSolutionsDoc(pagePath) } }
}
