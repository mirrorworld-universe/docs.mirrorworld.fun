import { ChakraProvider } from "@chakra-ui/provider"
import { DefaultSeo } from "next-seo"
import theme from "theme"
import "../styles/prism.css"
import siteConfig from "site.config"
import { __ENV__ } from "../lib/env"
import Script from "next/script"

export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <DefaultSeo {...siteConfig.seo} />
      <Component {...pageProps} />
      {__ENV__ === "production" && (
        <>
          {/* GTag */}
          <Script
            strategy="afterInteractive"
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-QTVY981GJR"
          ></Script>
          <Script
            id="google-analytics"
            strategy="afterInteractive"
            async
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
          
            gtag('config', 'G-QTVY981GJR');
          `,
            }}
          />
        </>
      )}
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
