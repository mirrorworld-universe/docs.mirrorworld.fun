import { generateShareImageUrl } from 'lib/seo'
import { NextSeo, NextSeoProps } from 'next-seo'
import React from 'react'
import siteConfig from '../site.config'

export type SEOProps = Pick<NextSeoProps, 'title' | 'description'>

const SEO = ({ title, description }: SEOProps) => {
  const imageUrl = generateShareImageUrl({ title, description })
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        title, description, images: [
          { url: imageUrl }
        ]
      }}
      titleTemplate={siteConfig.seo.titleTemplate}
    />
  )
}

export default SEO
