import { useMDX } from "components/mdx-components"
import SEO from 'components/seo'
import { FurtherReading } from "contentlayer/generated"
import DocsLayout from "layouts/docs"
import {
  getFurtherReadingDoc,
  getFurtherReadingPaths,
} from "lib/contentlayer-utils"
import { GetStaticPaths, GetStaticProps } from "next"

export default function FurtherReadingPage({ doc }: { doc: FurtherReading }) {
  const Component = useMDX(doc.body.code)
  return (
    <>
      <SEO title={doc.title} description={doc.description} />
      <DocsLayout doc={doc}>{Component}</DocsLayout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getFurtherReadingPaths(), fallback: false }
}

export const getStaticProps: GetStaticProps<{ doc: FurtherReading }> = async (
  ctx,
) => {
  const params = ctx.params as any
  const pagePath = params.slug?.join("/") ?? ""
  return { props: { doc: getFurtherReadingDoc(pagePath) } }
}
