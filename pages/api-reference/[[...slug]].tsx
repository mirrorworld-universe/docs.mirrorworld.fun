import { useMDX } from "components/mdx-components"
import { APIReference } from "contentlayer/generated"
import DocsLayout from "layouts/docs"
import {
  getAPIReferenceDoc,
  getAPIReferencePaths,
} from "lib/contentlayer-utils"
import { GetStaticPaths, GetStaticProps } from "next"
import { NextSeo } from "next-seo"
export default function APIReferencePage({ doc }: { doc: APIReference }) {
  const Component = useMDX(doc.body.code)
  return (
    <>
      <NextSeo title={doc.title} description={doc.description} />
      <DocsLayout doc={doc}>{Component}</DocsLayout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getAPIReferencePaths(), fallback: false }
}

export const getStaticProps: GetStaticProps<{
  doc: APIReference
}> = async (ctx) => {
  const params = ctx.params as any
  const pagePath = params.slug?.join("/") ?? ""
  return { props: { doc: getAPIReferenceDoc(pagePath) } }
}
