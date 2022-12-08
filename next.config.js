const { withContentlayer } = require("next-contentlayer")

/**
 * @type {import('next').NextConfig}
 */
module.exports = withContentlayer({
  swcMinify: true,
  redirects: () => [
    {
      source: "/discord",
      destination: "https://discord.gg/ww6HE5xaZ2",
      permanent: true,
    },
    {
      source: "/",
      destination: "/overview/introduction",
      permanent: true,
    },
    {
      source: "/tutorials",
      destination: "/authentication",
      permanent: true,
    },
  ],
})
