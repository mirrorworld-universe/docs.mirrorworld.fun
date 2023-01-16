import { ElementType } from "react"
import { HiOutlineViewGrid, HiBriefcase } from "react-icons/hi"
import { MdArchitecture, MdAllInbox } from "react-icons/md"
import { AiOutlineCompass, AiOutlineAndroid } from "react-icons/ai"
import { SiJavascript, SiUnity, SiRust, SiSwift } from "react-icons/si"
import { FaHandsHelping } from "react-icons/fa"

type SidebarItemDoc = {
  type: "doc"
  id: string
  label: string
  new?: boolean
  href?: string
  isExternal?: boolean
  children?: SidebarItemDoc[]
}

type SidebarItem =
  | {
      type: "category"
      icon?: ElementType
      id: string
      label: string
      collapsible?: boolean
      collapsed?: boolean
      items: SidebarItem[]
    }
  | SidebarItemDoc
  | {
      type: "link"
      id: string
      label: string
      href: string
    }

const sidebar: Record<"docs", SidebarItem[]> = {
  docs: [
    {
      type: "category",
      label: "Overview",
      icon: AiOutlineCompass,
      id: "overview",
      items: [
        { type: "doc", label: "Introduction", id: "introduction" },
        {
          type: "doc",
          label: "Getting started (~5 mins)",
          id: "getting-started",
        },
        {
          type: "doc",
          label: "HTTP API",
          id: "http-api",
          new: true,
          isExternal: true,
          href: "https://developer.mirrorworld.fun",
        },
        { type: "doc", label: "Marketplace Storefront", id: "storefront" },
      ],
    },
    {
      type: "category",
      label: "Architecture",
      icon: MdArchitecture,
      id: "architecture",
      items: [{ type: "doc", label: "Wallet Design", id: "wallet-design" }],
    },

    {
      type: "category",
      label: "Android",
      icon: AiOutlineAndroid,
      id: "android",
      items: [
        { type: "doc", label: "Installation", id: "android-installation" },
        { type: "doc", label: "API Reference", id: "android-api" },
        {
          type: "doc",
          label: "Authentication Tips",
          id: "android-authentication",
        },
        { type: "doc", label: "Examples", id: "android-examples" },
      ],
    },
    {
      type: "category",
      label: "iOS",
      icon: SiSwift,
      id: "ios",
      items: [
        { type: "doc", label: "Installation", id: "ios-installation" },
        { type: "doc", label: "API Reference", id: "ios-api" },
        { type: "doc", label: "Authentication Tip", id: "ios-authentication" },
      ],
    },
    {
      type: "category",
      label: "Unity",
      icon: SiUnity,
      id: "unity",
      items: [
        { type: "doc", label: "Installation", id: "unity-installation" },
        { type: "doc", label: "API Reference", id: "unity-api" },
        { type: "doc", label: "Authentication", id: "unity-authentication" },
      ],
    },
    {
      type: "category",
      label: "JavaScript",
      icon: SiJavascript,
      id: "js",
      items: [
        { type: "doc", label: "Installation", id: "js-installation" },
        { type: "doc", label: "API Reference", id: "js-api" },
        { type: "doc", label: "Authentication Guide", id: "js-authentication" },
        { type: "doc", label: "Examples", id: "js-examples" },
        {
          type: "doc",
          label: "Changelog",
          id: "js-changelog",
          new: true,
          isExternal: true,
          href: "https://github.com/mirrorworld-universe/mirrorworld-sdk-js/blob/main/packages/web/CHANGELOG.md",
        },
      ],
    },
    {
      type: "category",
      label: "Rust",
      icon: SiRust,
      id: "rust",
      items: [
        { type: "doc", label: "Installation", id: "rust-installation" },
        { type: "doc", label: "API Reference", id: "rust-api" },
        { type: "doc", label: "Examples", id: "rust-example" },
        // { type: "doc", label: "Tokenization", id: "rust-tokenization" },
      ],
    },
    {
      type: "category",
      label: "Resources",
      icon: HiOutlineViewGrid,
      id: "resources",
      items: [
        {
          type: "doc",
          label: "Blogs",
          id: "resources-blogs",
          new: true,
          isExternal: true,
          href: "https://blog.mirrorworld.fun",
        },
        { type: "doc", label: "Support", id: "support" },
        // { type: "doc", label: "Tutorials", id: "tutorials" },
      ],
    },
    {
      type: "category",
      label: "Guides",
      icon: FaHandsHelping,
      id: "guides",
      items: [
        { type: "doc", label: "All guides", id: "" },
        {
          type: "doc",
          label: "Usage with Next.js",
          id: "next-js-guide-mirrorworld-sdk",
        },
      ],
    },
    {
      type: "category",
      label: "Showcase",
      icon: HiBriefcase,
      id: "showcase",
      items: [
        {
          type: "doc",
          label: "All showcases",
          id: "all",
        },
      ],
    },
  ],
}

export default sidebar
