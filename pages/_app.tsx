import { ChakraProvider } from "@chakra-ui/react"
import { DefaultSeo } from "next-seo"
import theme from "theme"
import "../styles/prism.scss"
import siteConfig from "site.config"
import mixgather from "mixgather"
import { useEffect } from "react"
import { __ENV__ } from "../lib/env"
import Script from "next/script"
import { useRedirect } from "../hooks/use-redirect"
import "@code-hike/mdx/dist/index.css"
import { FrameworkProvider } from 'components/framework'

export default function App({ Component, pageProps }) {
  useRedirect()
  useEffect(() => {
    mixgather.init({
      debug: process.env.NODE_ENV !== "production",
      appName: "app.mirrorworld.fun",
      google: {
        id: "G-QTVY981GJR",
      },
      mixpanel: {
        token: "6a688b6265a76149d39d340730749870",
      },
    })
  })

  if (typeof window !== "undefined") {
    // @ts-ignore
    window.mixgather = mixgather
  }

  return (
    <ChakraProvider theme={theme}>
      <FrameworkProvider value='android'>
        <Component {...pageProps} />
        {/* <DefaultSeo {...siteConfig.seo} /> */}
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
        {/*</ColorModeProvider>*/}
      </FrameworkProvider>
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
