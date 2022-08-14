import { FrameworkProvider } from "components/framework"
import { useMDX } from "components/mdx-components"
import type { Component } from "contentlayer/generated"
import DocsLayout from "layouts/docs"
import {
  extractParams,
  getUnityDoc,
  getUnityPaths,
} from "lib/contentlayer-utils"
import { Framework } from "lib/framework-utils"
import { GetStaticPaths, GetStaticProps } from "next"
import { NextSeo } from "next-seo"

type PageProps = {
  doc: Component
  framework: Framework
}

export default function ComponentPage({ doc, framework }: PageProps) {
  const mdx = useMDX(doc.body.code)
  return (
    <FrameworkProvider value={framework}>
      <NextSeo title={doc.title} description={doc.description} />
      <DocsLayout doc={doc}>{mdx}</DocsLayout>
    </FrameworkProvider>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getUnityPaths(), fallback: false }
}

export const getStaticProps: GetStaticProps = async (ctx) => {
  const { framework, slug } = extractParams(ctx.params.slug as string[])
  const doc = getUnityDoc(slug)
  return { props: { doc, framework } }
}
