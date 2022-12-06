import {
  allComponents,
  allOverviews,
  allGuides,
  allSnippets,
  allAndroids,
  allIOs,
  allRusts,
  allResources,
  allJavaScripts,
  allUnity,
  allArchitectures,
  allShowcases,
  allBibles,
  DocumentTypes,
} from "contentlayer/generated"
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
  return allOverviews.map((doc) => `/overview/${doc.slug}`)
}

export function getOverviewDoc(_slug: string | string[]) {
  const slug = Array.isArray(_slug) ? _slug[0] : _slug
  return allOverviews.find(
    (post) => post.frontmatter.slug === `/overview/${slug}`,
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
  return allShowcases.map((doc) => `/showcase/${doc.slug}`)
}

export function getShowcaseDoc(slug: string | string[]) {
  return allShowcases.find(
    (post) => post.frontmatter.slug === `/showcase/${slug}`,
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

/* -----------------------------------------------------------------------------
 * Bible
 * -----------------------------------------------------------------------------*/

export function _toParams(path: string): { params: { slug: string[] } } {
  return { params: { slug: path.replace(/^\//, "").split("/") } }
}

export function getBiblePaths() {
  const paths = allBibles
    .map((_) => _.pathSegments.map((_: PathSegment) => _.pathName).join("/"))
    .map(_toParams)
  return paths
}

export function getBibleDoc(_slug: string | string[]) {
  const slug = Array.isArray(_slug) ? _slug[0] : _slug
  return allBibles.find((post) => post.frontmatter.slug === `/bible/${slug}`)
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
  children: TreeNode[]
}

export const buildSidebarTree = (
  docs: DocumentTypes[],
  parentPathNames: string[] = [],
): TreeNode[] => {
  const level = parentPathNames.length

  return docs
    .filter(
      (_) =>
        _.pathSegments.length === level + 1 &&
        _.pathSegments
          .map((_: PathSegment) => _.pathName)
          .join("/")
          .startsWith(parentPathNames.join("/")),
    )
    .sort((a, b) => a.pathSegments[level].order - b.pathSegments[level].order)
    .map<TreeNode>((doc) => ({
      nav_title: doc.frontmatter.nav_title ?? doc.frontmatter.title ?? null,
      title: doc.title,
      url_path:
        "" + doc.pathSegments.map((_: PathSegment) => _.pathName).join("/"),
      children: buildSidebarTree(
        docs,
        doc.pathSegments.map((_: PathSegment) => _.pathName),
      ),
    }))
}

console.log(
  "All Bibles",
  JSON.stringify(buildSidebarTree([...allBibles]), null, 2),
)
