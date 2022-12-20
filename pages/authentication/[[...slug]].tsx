import { useMDX } from "components/mdx-components"
import { AuthenticationTutorials } from "contentlayer/generated"
import DocsLayout from "layouts/docs"
import {
  getAuthenticationTutorialsDoc,
  getAuthenticationTutorialsPaths,
} from "lib/contentlayer-utils"
import { GetStaticPaths, GetStaticProps } from "next"
import { NextSeo } from "next-seo"

export default function AuthenticationTutorialsPage({
  doc,
}: {
  doc: AuthenticationTutorials
}) {
  const Component = useMDX(doc.body.code)
  return (
    <>
      <NextSeo title={doc.title} description={doc.description} />
      <DocsLayout doc={doc}>{Component}</DocsLayout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getAuthenticationTutorialsPaths(), fallback: false }
}

export const getStaticProps: GetStaticProps<{
  doc: AuthenticationTutorials
}> = async (ctx) => {
  const params = ctx.params as any
  const pagePath = params.slug?.join("/") ?? ""
  return { props: { doc: getAuthenticationTutorialsDoc(pagePath) } }
}
