import { useMDX } from "components/mdx-components"
import { WalletTutorials } from "contentlayer/generated"
import DocsLayout from "layouts/docs"
import {
  getWalletTutorialsDoc,
  getWalletTutorialsPaths,
} from "lib/contentlayer-utils"
import { GetStaticPaths, GetStaticProps } from "next"
import { NextSeo } from "next-seo"
import { useColorMode, useToast } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useEffect } from "react"

export default function WalletTutorialsPage({ doc }: { doc: WalletTutorials }) {
  const { colorMode, toggleColorMode } = useColorMode()
  function handleToggleColorMode() {
    console.log("colorMode", { colorMode, toggleColorMode })
    // toggleColorMode()
  }

  useEffect(() => {
    handleToggleColorMode()
  }, [])

  const Component = useMDX(doc.body.code)
  return (
    <>
      <NextSeo title={doc.title} description={doc.description} />
      <DocsLayout doc={doc}>{Component}</DocsLayout>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  return { paths: getWalletTutorialsPaths(), fallback: false }
}

export const getStaticProps: GetStaticProps<{
  doc: WalletTutorials
}> = async (ctx) => {
  const params = ctx.params as any
  const pagePath = params.slug?.join("/") ?? ""
  return { props: { doc: getWalletTutorialsDoc(pagePath) } }
}
