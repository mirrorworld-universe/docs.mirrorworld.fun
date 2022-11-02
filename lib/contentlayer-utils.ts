import {
  allComponents,
  allOverviews,
  allGuides,
  allSnippets,
  allChangelogs,
  allAndroids,
  allIOs,
  allRusts,
  allResources,
  allJavaScripts,
  allUnity,
  allArchitectures,
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
  return allRusts.find((post) => post.frontmatter.slug === `/marketplace/${slug}`)
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
 * Changelog
 * -----------------------------------------------------------------------------*/

export function getChangelogPaths() {
  return allChangelogs.map((doc) => `/${doc.params.join("/")}`)
}

export function getChanglogDoc(slug: string | string[]) {
  if (slug === "latest") {
    return allChangelogs.sort(sortByDate)[0]
  }

  return allChangelogs.find(
    (doc) => doc.frontmatter.slug === `/changelogs/${slug}`,
  )
}

const sortByDate = (a: any, b: any) => {
  const aDate = new Date(a.releaseDate)
  const bDate = new Date(b.releaseDate)
  return bDate.getTime() - aDate.getTime()
}

export function getChangelogToc() {
  return allChangelogs.sort(sortByDate).map((doc) => ({
    slug: doc.slug,
    content: doc.releaseDate,
    lvl: 2,
  }))
}
