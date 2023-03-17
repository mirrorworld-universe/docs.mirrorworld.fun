import { useMDX } from "components/mdx-components"
import { IntegrationGuide } from "contentlayer/generated"
import {
  getIntegrationGuideDoc,
  getIntegrationGuidePaths,
} from "lib/contentlayer-utils"
import { generateShareImageUrl } from 'lib/seo'
import { GetStaticPaths, GetStaticProps } from "next"
import { NextSeo } from "next-seo"
import IntegrationLayout from "../../layouts/integration.layout"

export default function IntegrationGuidesPage({
  doc,
}: {
  doc: IntegrationGuide
}) {
  const Component = useMDX(doc.body.code)
  const imageUrl = generateShareImageUrl({ title: doc.title, description: doc.description })

  return (
    <>
      <NextSeo title={doc.title} description={doc.description} openGraph={{
        title: doc.title,
        description: doc.description,
        images: [{ url: imageUrl }]
      }} />
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
