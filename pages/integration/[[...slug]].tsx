import { useMDX } from "components/mdx-components"
import { IntegrationGuide } from "contentlayer/generated"
import {
  getIntegrationGuideDoc,
  getIntegrationGuidePaths,
} from "lib/contentlayer-utils"
import { GetStaticPaths, GetStaticProps } from "next"
import { NextSeo } from "next-seo"
import IntegrationLayout from "../../layouts/integration.layout"

export default function IntegrationGuidesPage({
  doc,
}: {
  doc: IntegrationGuide
}) {
  const Component = useMDX(doc.body.code)
  return (
    <>
      <NextSeo title={doc.title} description={doc.description} />
      <IntegrationLayout doc={doc}>{Component}</IntegrationLayout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getIntegrationGuidePaths()
  return { paths: paths, fallback: false }
}

export const getStaticProps: GetStaticProps<{
  doc: IntegrationGuide
}> = async (ctx) => {
  const params = ctx.params as any
  const pagePath = params.slug?.join("/") ?? ""
  return { props: { doc: getIntegrationGuideDoc(pagePath) } }
}
