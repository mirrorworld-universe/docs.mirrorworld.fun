import {
  ComputedFields,
  defineDocumentType,
  FieldDefs,
  makeSource,
  LocalDocument,
} from "contentlayer/source-files"
import rehypeAutolinkHeadings from "rehype-autolink-headings"
import rehypeCodeTitles from "rehype-code-titles"
import rehypePrism from "rehype-prism-plus"
import rehypeSlug from "rehype-slug"
import remarkGfm from "remark-gfm"
import remarkDirective from "remark-directive"
import toc from "markdown-toc"
import siteConfig from "./site.config"
import { remarkAdmonition } from "./lib/remark-utils"
import { toKebabCase } from "./lib/to-kebab-case"

import fs from "fs"

const fields: FieldDefs = {
  title: {
    type: "string",
    description: "The title of the page",
    required: true,
  },
  description: { type: "string" },
  package: { type: "string" },
  external_url: {
    type: "string",
  },
  nav_title: {
    type: "string",
  },
  // navTitle: {
  //   type: "string",
  //   description: "Override the title for display in nav",
  // },
  // label: {
  //   type: "string",
  // },
  // excerpt: {
  //   type: "string",
  //   required: true,
  // },
  // collapsible: {
  //   type: "boolean",
  //   required: false,
  //   default: false,
  // },
  // collapsed: {
  //   type: "boolean",
  //   required: false,
  //   default: false,
  // },
}

const getSlug = (doc: LocalDocument) =>
  doc._raw.sourceFileName.replace(/\.mdx$/, "")

const computedFields: ComputedFields = {
  slug: {
    type: "string",
    resolve: getSlug,
  },
  editUrl: {
    type: "string",
    resolve: (doc) => `${siteConfig.repo.editUrl}/${doc._id}`,
  },
  params: {
    type: "list",
    resolve: (doc) => doc._raw.flattenedPath.split("/"),
  },
  frontmatter: {
    type: "json",
    resolve: (doc) => ({
      title: doc.title,
      description: doc.description,
      tags: doc.tags,
      author: doc.author,
      slug: `/${doc._raw.flattenedPath}`,
      toc: toc(doc.body.raw, { maxdepth: 3 }).json.filter((t) => t.lvl !== 1),
    }),
  },
  pathSegments: {
    type: "json",
    resolve: (doc) =>
      doc._raw.flattenedPath
        .split("/")
        // skip the category prefix prefix
        .slice(1)
        .map((dirName) => {
          const re = /^((\d+)-)?(.*)$/
          const [, , orderStr, pathName] = dirName.match(re) ?? []
          const order = orderStr ? parseInt(orderStr) : 0
          return { order, pathName }
        }),
  },
}

const Overview = defineDocumentType(() => ({
  name: "Overview",
  filePathPattern: "overview/**/*.mdx",
  contentType: "mdx",
  fields,
  computedFields: {
    ...computedFields,
    pathname: {
      type: "string",
      resolve: () => "/overview/[slug]",
    },
  },
}))

const Showcase = defineDocumentType(() => ({
  name: "Showcase",
  filePathPattern: "showcase/**/*.mdx",
  contentType: "mdx",
  fields,
  computedFields: {
    ...computedFields,
    pathname: {
      type: "string",
      resolve: () => "/showcase/[slug]",
    },
  },
}))

const Component = defineDocumentType(() => ({
  name: "Component",
  filePathPattern: "components/**/*.mdx",
  contentType: "mdx",
  fields,
  computedFields: {
    ...computedFields,
    npmUrl: {
      type: "string",
      resolve: (doc) => `https://www.npmjs.com/package/${doc.package}`,
    },
    pathname: {
      type: "string",
      resolve: () => "/components/[...slug]",
    },
    sourceUrl: {
      type: "string",
      resolve: (doc) =>
        `${siteConfig.repo.url}/tree/main/packages/machines/${getSlug(doc)}`,
    },
    visualizeUrl: {
      type: "string",
      resolve: (doc) => `https://state-machine-viz.vercel.app/${getSlug(doc)}`,
    },
    version: {
      type: "string",
      resolve: (doc) => {
        try {
          const file = fs.readFileSync(
            `node_modules/${doc.package}/package.json`,
            "utf8",
          )
          return JSON.parse(file).version
        } catch {
          return ""
        }
      },
    },
  },
}))

const Android = defineDocumentType(() => ({
  name: "Android",
  filePathPattern: `android/**/*.mdx`,
  contentType: "mdx",
  fields,
  computedFields: {
    ...computedFields,
    pathname: {
      type: "string",
      resolve: () => `/android/[slug]`,
    },
  },
}))

const iOS = defineDocumentType(() => ({
  name: "iOS",
  filePathPattern: `ios/**/*.mdx`,
  contentType: "mdx",
  fields,
  computedFields: {
    ...computedFields,
    pathname: {
      type: "string",
      resolve: () => `/ios/[slug]`,
    },
  },
}))

const JavaScript = defineDocumentType(() => ({
  name: "JavaScript",
  filePathPattern: `js/**/*.mdx`,
  contentType: "mdx",
  fields,
  computedFields: {
    ...computedFields,
    pathname: {
      type: "string",
      resolve: () => `/js/[slug]`,
    },
  },
}))

const Rust = defineDocumentType(() => ({
  name: "Rust",
  filePathPattern: `rust/**/*.mdx`,
  contentType: "mdx",
  fields,
  computedFields: {
    ...computedFields,
    pathname: {
      type: "string",
      resolve: () => `/rust/[slug]`,
    },
  },
}))

const Unity = defineDocumentType(() => ({
  name: "Unity",
  filePathPattern: `unity/**/*.mdx`,
  contentType: "mdx",
  fields,
  computedFields: {
    ...computedFields,
    pathname: {
      type: "string",
      resolve: () => `/unity/[slug]`,
    },
  },
}))

const Architecture = defineDocumentType(() => ({
  name: "Architecture",
  filePathPattern: "architecture/**/*.mdx",
  contentType: "mdx",
  fields,
  computedFields: {
    ...computedFields,
    pathname: {
      type: "string",
      resolve: () => `/architecture/[slug]`,
    },
  },
}))

const Resources = defineDocumentType(() => ({
  name: "Resources",
  filePathPattern: `resources/**/*.mdx`,
  contentType: "mdx",
  fields,
  computedFields: {
    ...computedFields,
    pathname: {
      type: "string",
      resolve: () => `/resources/[slug]`,
    },
  },
}))

const Guides = defineDocumentType(() => ({
  name: "Guides",
  filePathPattern: `guides/**/*.mdx`,
  contentType: "mdx",
  fields: {
    ...fields,
    tags: { type: "json" },
    date_published: { type: "string" },
    author: { type: "json" },
  },
  computedFields: {
    ...computedFields,
    pathname: {
      type: "string",
      resolve: () => `/guides/[slug]`,
    },
  },
}))

const Snippet = defineDocumentType(() => ({
  name: "Snippet",
  filePathPattern: "snippets/**/*.mdx",
  contentType: "mdx",
  // fields,
  computedFields: {
    ...computedFields,
    framework: {
      type: "string",
      resolve: (doc) => doc._raw.sourceFilePath.split("/")[1],
    },
  },
}))

// const Changelog = defineDocumentType(() => {
//   const getSlug = (doc: LocalDocument) => toKebabCase(doc.releaseDate)
//   return {
//     name: "Changelog",
//     filePathPattern: "changelogs/**/*.mdx",
//     contentType: "mdx",
//     fields: {
//       releaseUrl: { type: "string" },
//       releaseDate: { type: "string" },
//     },
//     computedFields: {
//       editUrl: {
//         type: "string",
//         resolve: (doc) => `${siteConfig.repo.editUrl}/${doc._id}`,
//       },
//       params: {
//         type: "list",
//         resolve: (doc) => ["changelogs", getSlug(doc)],
//       },
//       frontmatter: {
//         type: "json",
//         resolve: (doc) => ({
//           title: "Changelog",
//           description: `The changes made as at ${doc.releaseDate}`,
//           slug: `/changelogs/${getSlug(doc)}`,
//           toc: [],
//         }),
//       },
//       slug: {
//         type: "string",
//         resolve: (doc) => `/changelogs/${getSlug(doc)}`,
//       },
//     },
//   }
// })

const Bible = defineDocumentType(() => ({
  name: "Bible",
  filePathPattern: "bible/**/*.mdx",
  contentType: "mdx",
  fields,
  computedFields: {
    ...computedFields,
    pathname: {
      type: "string",
      resolve: () => "/bible/[slug]",
    },
  },
}))

const FurtherReading = defineDocumentType(() => ({
  name: "FurtherReading",
  filePathPattern: "further-reading/**/*.mdx",
  contentType: "mdx",
  fields,
  computedFields: {
    ...computedFields,
    pathname: {
      type: "string",
      resolve: () => "/further-reading/[slug]",
    },
  },
}))

const AuthenticationTutorials = defineDocumentType(() => ({
  name: "AuthenticationTutorials",
  filePathPattern: "authentication/**/*.mdx",
  contentType: "mdx",
  fields,
  computedFields: {
    ...computedFields,
    pathname: {
      type: "string",
      resolve: () => "/authentication/[slug]",
    },
  },
}))

const WalletTutorials = defineDocumentType(() => ({
  name: "WalletTutorials",
  filePathPattern: "wallet/**/*.mdx",
  contentType: "mdx",
  fields,
  computedFields: {
    ...computedFields,
    pathname: {
      type: "string",
      resolve: () => "/wallet/[slug]",
    },
  },
}))

const MarketplaceTutorials = defineDocumentType(() => ({
  name: "MarketplaceTutorials",
  filePathPattern: "marketplace/**/*.mdx",
  contentType: "mdx",
  fields,
  computedFields: {
    ...computedFields,
    pathname: {
      type: "string",
      resolve: () => "/marketplace/[slug]",
    },
  },
}))

const NFTsTutorials = defineDocumentType(() => ({
  name: "NFTsTutorials",
  filePathPattern: "nfts/**/*.mdx",
  contentType: "mdx",
  fields,
  computedFields: {
    ...computedFields,
    pathname: {
      type: "string",
      resolve: () => "/nfts/[slug]",
    },
  },
}))

const contentLayerConfig = makeSource({
  contentDirPath: "data",
  documentTypes: [
    Overview,
    Snippet,
    Component,
    Android,
    iOS,
    Rust,
    JavaScript,
    Unity,
    Resources,
    Architecture,
    Guides,
    Showcase,
    Bible,
    FurtherReading,

    // Tutorials
    AuthenticationTutorials,
    WalletTutorials,
    MarketplaceTutorials,
    NFTsTutorials,
  ],
  mdx: {
    remarkPlugins: [remarkGfm, remarkDirective, remarkAdmonition],
    rehypePlugins: [
      rehypeSlug,
      rehypeCodeTitles,
      rehypePrism,
      [
        rehypeAutolinkHeadings,
        {
          behavior: "append",
          test: ["h2", "h3", "h4"],
          properties: { className: ["anchor"] },
        },
      ],
    ],
  },
})

export default contentLayerConfig
