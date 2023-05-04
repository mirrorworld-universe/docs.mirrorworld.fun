import { useMDX } from "components/mdx-components"
import SEO from 'components/seo'
import { APIReference } from "contentlayer/generated"
import {
  getAPIReferenceDoc,
  getAPIReferencePaths,
} from "lib/contentlayer-utils"
import { GetStaticPaths, GetStaticProps } from "next"
import ApiReferenceLayout from "../../layouts/api-reference.layout"

export default function APIReferencePage({ doc }: { doc: APIReference }) {
  const Component = useMDX(doc.body.code)
  return (
    <>
      <SEO title={doc.title} description={doc.description} />
      <ApiReferenceLayout doc={doc}>{Component}</ApiReferenceLayout>
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
