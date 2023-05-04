import { generateShareImageUrl } from 'lib/seo'
import { NextSeo, NextSeoProps } from 'next-seo'
import React from 'react'
import siteConfig from '../site.config'

export type SEOProps = Pick<NextSeoProps, 'title' | 'description'> & { image?: string }

const SEO = ({ title, description, image }: SEOProps) => {
  const imageUrl = image || generateShareImageUrl({ title, description })
  return (
    <NextSeo
      title={title}
      description={description}
      openGraph={{
        title, description, images: [
          { url: imageUrl },
        ]
      }}
      twitter={siteConfig.seo.twitter}
      titleTemplate={siteConfig.seo.titleTemplate}
    />
  )
}

export default SEO
