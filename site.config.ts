const baseConfig = {
  repo: "https://github.com/mirrorworld-universe/docs.mirrorworld.fun",
  title: "Mirror World - All of Crypto’s Potential In A Few Lines of Code.",
  description: "Highest conversion development infrastructure for Mobile dApps",
  url: "https://mirrorworld.fun",
}

const siteConfig = {
  ...baseConfig,
  projectName: "docs.mirrorworld.fun",
  copyright: `Copyright &copy; ${new Date().getFullYear()}`,
  openCollective: {
    url: "",
  },
  author: {
    name: "Mirror World Team",
    github: "https://github.com/mirrorworld-universe",
    twitter: "https://twitter.com/joinmirrorworld",
  },
  repo: {
    url: "https://github.com/mirrorworld-universe/docs.mirrorworld.fun",
    editUrl: `${baseConfig.repo}/edit/main/data`,
    blobUrl: `${baseConfig.repo}/blob/main`,
  },
  discord: {
    url: "https://discord.com/invite/Vxrw4rqaDM",
  },
  seo: {
    title: baseConfig.title,
    titleTemplate: "%s - Mirror World",
    description: baseConfig.description,
    siteUrl: baseConfig.url,
    twitter: {
      handle: "@mirror_matrix",
      site: baseConfig.url,
      cardType: "summary_large_image",
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: baseConfig.url,
      title: baseConfig.title,
      description: baseConfig.description,
      site_name: baseConfig.title,
      images: [
        {
          url: `https://docs.mirrorworld.fun/images/sharelink.png`,
          width: 1240,
          height: 480,
        },
        {
          url: `https://docs.mirrorworld.fun/images/sharelink.png`,
          width: 1012,
          height: 506,
        },
      ],
    },
  },
}

export default siteConfig
