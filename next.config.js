const { withContentlayer } = require("next-contentlayer");

/**
 * @type {import('next').NextConfig}
 */
module.exports = withContentlayer({
  swcMinify: true,
  // Docs base path is /docs
  basePath: "/docs",
  redirects: () => [
    {
      source: "/discord",
      destination: "https://mirrorworld.fun/discord",
      permanent: true,
    },
    {
      source: "/",
      destination: "/overview/introduction",
      permanent: true,
    },
    {
      source: "/tutorials",
      destination: "/integration",
      permanent: true,
    },
  ],
  // noop
});
