import { ChakraProvider } from "@chakra-ui/provider"
import { DefaultSeo } from "next-seo"
import theme from "theme"
import "../styles/prism.css"
import siteConfig from "site.config"
import { DarkMode } from "@chakra-ui/system"

export default function App({ Component, pageProps }) {
  console.log({ theme })
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo {...siteConfig.seo} />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export function getServerSideProps({ req }) {
  return {
    props: {
      // first time users will not have any cookies and you may not return
      // undefined here, hence ?? is necessary
      cookies: req.headers.cookie ?? "",
    },
  }
}
