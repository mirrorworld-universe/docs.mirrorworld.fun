import { useMDX } from "components/mdx-components"
import { Bible } from "contentlayer/generated"
import DocsLayout from "layouts/docs"
import { getBiblePaths, getBibleDoc } from "lib/contentlayer-utils"
import { GetStaticPaths, GetStaticProps } from "next"
import { NextSeo } from "next-seo"

export default function BiblePage({ doc }: { doc: Bible }) {
  const Component = useMDX(doc.body.code)
  return (
    <>
      <NextSeo title={doc.title} description={doc.description} />
      <DocsLayout doc={doc}>{Component}</DocsLayout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getBiblePaths(), fallback: false }
}

export const getStaticProps: GetStaticProps<{ doc: Bible }> = async (ctx) => {
  const params = ctx.params as any
  const pagePath = params.slug?.join("/") ?? ""
  return { props: { doc: getBibleDoc(pagePath) } }
}
