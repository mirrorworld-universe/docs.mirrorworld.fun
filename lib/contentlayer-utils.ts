import {
  allAndroids,
  allAPIReferences,
  allArchitectures,
  allAuthenticationTutorials,
  allBibles,
  allComponents,
  allFurtherReadings,
  allGuides,
  allIOs,
  allJavaScripts,
  allMarketplaceTutorials,
  allNFTsTutorials,
  allOverviews,
  allResources,
  allRusts,
  allShowcases,
  allSnippets,
  allUnity,
  allWalletTutorials,
  DocumentTypes,
} from "contentlayer/generated"
import {
  AiOutlineAndroid,
  AiOutlineBook,
  AiOutlineCompass,
  AiOutlineShop,
  AiOutlineStar,
} from "react-icons/ai"
import { MdOutlineVerifiedUser } from "react-icons/md"
import { BiImageAlt, BiWallet } from "react-icons/bi"
import { SiJavascript } from "react-icons/si"
import { Framework, FRAMEWORKS, isFramework } from "./framework-utils"

function toParams(str: string | string[]) {
  const slug = Array.isArray(str) ? str : [str]
  return { params: { slug } }
}

export function extractParams(slug: string[]) {
  const [first] = slug
  let result: Framework = "android"
  if (isFramework(first)) {
    result = first
    slug.shift()
  }
  return { framework: result, slug: slug.join("/") }
}

/* -----------------------------------------------------------------------------
 * Component
 * -----------------------------------------------------------------------------*/

export function getComponentPaths() {
  const paths: string[][] = []

  for (const doc of allComponents) {
    paths.push([doc.slug])
    for (const framework of FRAMEWORKS) {
      paths.push([framework, doc.slug])
    }
  }

  return paths.map(toParams)
}

export function getComponentDoc(slug: string) {
  return allComponents.find(
    (post) => post.frontmatter.slug === `/components/${slug}`,
  )
}

/* -----------------------------------------------------------------------------
 * Overview
 * -----------------------------------------------------------------------------*/

export function getOverviewPaths() {
  return allOverviews
    .map((_) => _.pathSegments.map((_: PathSegment) => _.pathName).join("/"))
    .map(_toParams)
}

export function getOverviewDoc(_slug: string | string[]) {
  const slug = Array.isArray(_slug) ? _slug[0] : _slug
  return allOverviews.find(
    (_) =>
      _.pathSegments.map((_: PathSegment) => _.pathName).join("/") === slug,
  )
}

/* -----------------------------------------------------------------------------
 * Android
 * -----------------------------------------------------------------------------*/

export function getAndroidPaths() {
  return allAndroids.map((doc) => `/android/${doc.slug}`)
}

export function getAndroidDoc(_slug: string | string[]) {
  const slug = Array.isArray(_slug) ? _slug[0] : _slug
  return allAndroids.find(
    (post) => post.frontmatter.slug === `/android/${slug}`,
  )
}

/* -----------------------------------------------------------------------------
 * Architecture
 * -----------------------------------------------------------------------------*/

export function getArchitecturePaths() {
  return allArchitectures.map((doc) => `/architecture/${doc.slug}`)
}

export function getArchitectureDocs(_slug: string | string[]) {
  const slug = Array.isArray(_slug) ? _slug[0] : _slug
  return allArchitectures.find(
    (post) => post.frontmatter.slug === `/architecture/${slug}`,
  )
}

/* -----------------------------------------------------------------------------
 * iOS
 * -----------------------------------------------------------------------------*/

export function getIOSPaths() {
  return allIOs.map((doc) => `/ios/${doc.slug}`)
}

export function getIOSDocs(_slug: string | string[]) {
  const slug = Array.isArray(_slug) ? _slug[0] : _slug
  return allIOs.find((post) => post.frontmatter.slug === `/ios/${slug}`)
}

/* -----------------------------------------------------------------------------
 * Web
 * -----------------------------------------------------------------------------*/

export function getJsPaths() {
  return allJavaScripts.map((doc) => `/js/${doc.slug}`)
}

export function getJsDoc(_slug: string | string[]) {
  const slug = Array.isArray(_slug) ? _slug[0] : _slug
  return allJavaScripts.find((post) => post.frontmatter.slug === `/js/${slug}`)
}

/* -----------------------------------------------------------------------------
 * Rust
 * -----------------------------------------------------------------------------*/

export function getRustPaths() {
  return allRusts.map((doc) => `/rust/${doc.slug}`)
}

export function getRustDoc(_slug: string | string[]) {
  const slug = Array.isArray(_slug) ? _slug[0] : _slug
  return allRusts.find((post) => post.frontmatter.slug === `/rust/${slug}`)
}

/* -----------------------------------------------------------------------------
 * Unity
 * -----------------------------------------------------------------------------*/
export function getMarketPaths() {
  return allRusts.map((doc) => `/marketplace/${doc.slug}`)
}

export function getMarketDoc(_slug: string | string[]) {
  const slug = Array.isArray(_slug) ? _slug[0] : _slug
  return allRusts.find(
    (post) => post.frontmatter.slug === `/marketplace/${slug}`,
  )
}
/* -----------------------------------------------------------------------------
 * Unity
 * -----------------------------------------------------------------------------*/

export function getUnityPaths() {
  return allUnity.map((doc) => `/unity/${doc.slug}`)
}

export function getUnityDoc(_slug: string | string[]) {
  const slug = Array.isArray(_slug) ? _slug[0] : _slug
  return allUnity.find((post) => post.frontmatter.slug === `/unity/${slug}`)
}

/* -----------------------------------------------------------------------------
 * Resources
 * -----------------------------------------------------------------------------*/

export function getResourcesPaths() {
  return allResources.map((doc) => `/resources/${doc.slug}`)
}

export function getResourcesDoc(_slug: string | string[]) {
  const slug = Array.isArray(_slug) ? _slug[0] : _slug
  return allResources.find(
    (post) => post.frontmatter.slug === `/resources/${slug}`,
  )
}

/* -----------------------------------------------------------------------------
 * Guide
 * -----------------------------------------------------------------------------*/

export function getGuidePaths() {
  return allGuides.map((doc) => `/guides/${doc.slug}`)
}

export function getGuideDoc(slug: string | string[]) {
  return allGuides.find((post) => post.frontmatter.slug === `/guides/${slug}`)
}

/* -----------------------------------------------------------------------------
 * Showcase
 * -----------------------------------------------------------------------------*/
export function getShowcasePaths() {
  return allShowcases
    .map((_) => _.pathSegments.map((_: PathSegment) => _.pathName).join("/"))
    .map(_toParams)
}

export function getShowcaseDoc(slug: string | string[]) {
  return allShowcases.find(
    (_) =>
      _.pathSegments.map((_: PathSegment) => _.pathName).join("/") === slug,
  )
}

/* -----------------------------------------------------------------------------
 * Blogs
 * -----------------------------------------------------------------------------*/

// export function getBlogPaths() {
//   return allBlogs.map((doc) => `/blog/${doc.slug}`)
// }
//
// export function getBlogDoc(_slug: string | string[]) {
//   const slug = Array.isArray(_slug) ? _slug[0] : _slug
//   return allBlogs.find((post) => post.frontmatter.slug === `/blog/${slug}`)
// }

/* -----------------------------------------------------------------------------
 * Snippet
 * -----------------------------------------------------------------------------*/

export function getSnippetPaths() {
  return allSnippets.map((doc) => `/snippets/${doc.slug}`)
}

export function getSnippetDoc(slug: string | string[]) {
  return allSnippets.find(
    (snippet) => snippet.frontmatter.slug === `/snippets/${slug}`,
  )
}

export function _toParams(path: string): { params: { slug: string[] } } {
  return { params: { slug: path.replace(/^\//, "").split("/") } }
}

/* -----------------------------------------------------------------------------
 * Bible
 * -----------------------------------------------------------------------------*/

export function getBiblePaths() {
  const paths = allBibles
    .map((_) => _.pathSegments.map((_: PathSegment) => _.pathName).join("/"))
    .map(_toParams)
  return paths
}

export function getBibleDoc(_slug: string | string[]) {
  const slug = Array.isArray(_slug) ? _slug[0] : _slug
  return allBibles.find(
    (_) =>
      _.pathSegments.map((_: PathSegment) => _.pathName).join("/") === slug,
  )
}

/* -----------------------------------------------------------------------------
 * Futher Reading
 * -----------------------------------------------------------------------------*/

export function getFurtherReadingPaths() {
  const paths = allFurtherReadings
    .map((_) => _.pathSegments.map((_: PathSegment) => _.pathName).join("/"))
    .map(_toParams)
  return paths
}

export function getFurtherReadingDoc(_slug: string | string[]) {
  const slug = Array.isArray(_slug) ? _slug[0] : _slug
  return allFurtherReadings.find(
    (_) =>
      _.pathSegments.map((_: PathSegment) => _.pathName).join("/") === slug,
  )
}

/* -----------------------------------------------------------------------------
 * Authentication Tutorials
 * -----------------------------------------------------------------------------*/

export function getAuthenticationTutorialsPaths() {
  const paths = allAuthenticationTutorials
    .map((_) => _.pathSegments.map((_: PathSegment) => _.pathName).join("/"))
    .map(_toParams)
  return paths
}

export function getAuthenticationTutorialsDoc(_slug: string | string[]) {
  const slug = Array.isArray(_slug) ? _slug[0] : _slug
  return allAuthenticationTutorials.find(
    (_) =>
      _.pathSegments.map((_: PathSegment) => _.pathName).join("/") === slug,
  )
}

/* -----------------------------------------------------------------------------
 * Wallet Tutorials
 * -----------------------------------------------------------------------------*/

export function getWalletTutorialsPaths() {
  const paths = allWalletTutorials
    .map((_) => _.pathSegments.map((_: PathSegment) => _.pathName).join("/"))
    .map(_toParams)
  return paths
}

export function getWalletTutorialsDoc(_slug: string | string[]) {
  const slug = Array.isArray(_slug) ? _slug[0] : _slug
  return allWalletTutorials.find(
    (_) =>
      _.pathSegments.map((_: PathSegment) => _.pathName).join("/") === slug,
  )
}

/* -----------------------------------------------------------------------------
 * Marketplace Tutorials
 * -----------------------------------------------------------------------------*/

export function getMarketplaceTutorialsPaths() {
  const paths = allMarketplaceTutorials
    .map((_) => _.pathSegments.map((_: PathSegment) => _.pathName).join("/"))
    .map(_toParams)
  return paths
}

export function getMarketplaceTutorialsDoc(_slug: string | string[]) {
  const slug = Array.isArray(_slug) ? _slug[0] : _slug
  return allMarketplaceTutorials.find(
    (_) =>
      _.pathSegments.map((_: PathSegment) => _.pathName).join("/") === slug,
  )
}

/* -----------------------------------------------------------------------------
 * NFTs Tutorials
 * -----------------------------------------------------------------------------*/

export function getNftsTutorialsPaths() {
  const paths = allNFTsTutorials
    .map((_) => _.pathSegments.map((_: PathSegment) => _.pathName).join("/"))
    .map(_toParams)
  return paths
}

export function getNftsTutorialsDoc(_slug: string | string[]) {
  const slug = Array.isArray(_slug) ? _slug[0] : _slug
  return allNFTsTutorials.find(
    (_) =>
      _.pathSegments.map((_: PathSegment) => _.pathName).join("/") === slug,
  )
}

/* -----------------------------------------------------------------------------
 * API Reference Docs
 * -----------------------------------------------------------------------------*/

export function getAPIReferencePaths() {
  return allAPIReferences
    .map((_) => _.pathSegments.map((_: PathSegment) => _.pathName).join("/"))
    .map(_toParams)
}

export function getAPIReferenceDoc(_slug: string | string[]) {
  const slug = Array.isArray(_slug) ? _slug[0] : _slug
  return allAPIReferences.find(
    (_) =>
      _.pathSegments.map((_: PathSegment) => _.pathName).join("/") === slug,
  )
}

const sortByDate = (a: any, b: any) => {
  const aDate = new Date(a.releaseDate)
  const bDate = new Date(b.releaseDate)
  return bDate.getTime() - aDate.getTime()
}

export type PathSegment = { order: number; pathName: string }

export type TreeNode = {
  title: string
  nav_title: string | null
  url_path: string
  external_url?: string
  children: TreeNode[]
}

export const buildSidebarTree = (
  docs: DocumentTypes[],
  parentPathNames: string[] = [],
  prefix = "",
): TreeNode[] => {
  const level = parentPathNames.length

  return docs
    .filter(
      (_) =>
        _.pathSegments.length >= level + 1 &&
        _.pathSegments
          .map((_: PathSegment) => _.pathName)
          .join("/")
          .startsWith(parentPathNames.join("/")),
    )
    .sort((a, b) => a.pathSegments[level].order - b.pathSegments[level].order)
    .map<TreeNode>((doc) => ({
      nav_title: doc.frontmatter.nav_title ?? doc.frontmatter.title ?? null,
      title: doc.title,
      external_url: doc.external_url,
      url_path:
        `${prefix}` +
        doc.pathSegments.map((_: PathSegment) => _.pathName).join("/"),
      children: buildSidebarTree(
        docs,
        doc.pathSegments.map((_: PathSegment) => _.pathName),
        prefix,
      ),
    }))
}

export const homeSidebar = [
  {
    name: "Overview",
    icon: AiOutlineCompass,
    routes: buildSidebarTree([...allOverviews], [], "/overview/"),
  },
  {
    name: "Showcase",
    icon: AiOutlineStar,
    routes: buildSidebarTree([...allShowcases], [], "/showcase/"),
  },
  {
    name: "Further Reading",
    icon: AiOutlineBook,
    routes: buildSidebarTree([...allFurtherReadings], [], "/further-reading/"),
  },
]

export const tutorialsSidebar = [
  {
    name: "Authentication",
    icon: MdOutlineVerifiedUser,
    routes: buildSidebarTree(
      [...allAuthenticationTutorials],
      [],
      "/authentication/",
    ),
  },
  {
    name: "Wallets",
    icon: BiWallet,
    routes: buildSidebarTree([...allWalletTutorials], [], "/wallet/"),
  },
  {
    name: "NFTs & Collections",
    icon: BiImageAlt,
    routes: buildSidebarTree([...allMarketplaceTutorials], [], "/nfts/"),
  },
  {
    name: "Marketplaces",
    icon: AiOutlineShop,
    routes: buildSidebarTree([...allMarketplaceTutorials], [], "/marketplace/"),
  },
]

export function stripNumbers(string) {
  return string.replace(/[0-9].{0,3}/g, "")
}

export const apiReferenceSidebar = [
  {
    name: "JavaScript",
    icon: SiJavascript,
    routes: buildSidebarTree(
      [
        ...allAPIReferences
          .filter((_) => {
            return stripNumbers(_.normalizedPath).startsWith("api-reference/js")
          })
          .map((__) => {
            console.log(__)
            return __
          }),
      ],
      ["api-reference"],
      "/api-reference/",
    ),
  },
  {
    name: "Android",
    icon: AiOutlineAndroid,
    routes: buildSidebarTree(
      [
        ...allAPIReferences.filter((_) => {
          return stripNumbers(_.normalizedPath).startsWith(
            "api-reference/android",
          )
        }),
      ],
      ["api-reference"],
      "/api-reference/",
    ),
  },
]

console.log("apiReferenceSidebar", apiReferenceSidebar)
