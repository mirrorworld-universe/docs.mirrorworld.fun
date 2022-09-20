import { ElementType } from "react"
import { AiOutlineCompass, AiOutlineAndroid } from "react-icons/ai"
import { HiOutlineViewGrid } from "react-icons/hi"
import { MdArchitecture } from "react-icons/md"
import { SiJavascript, SiUnity, SiRust } from "react-icons/si"

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
  | {
      type: "doc"
      id: string
      label: string
      new?: boolean
      href?: string
      isExternal?: boolean
    }
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
        // { type: "doc", label: "Features", id: "features" },
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
        { type: "doc", label: "Installation", id: "android-authentication" },
        { type: "doc", label: "API Reference", id: "android-APIReference" },
        {
          type: "doc",
          label: "Authentication Tips",
          id: "android-AuthenticationTips",
        },
        { type: "doc", label: "Examples", id: "android-Examples" },
      ],
    },
    // {
    //   type: "category",
    //   label: "iOS",
    //   icon: SiSwift,
    //   id: "ios",
    //   items: [
    //     { type: "doc", label: "Installation", id: "ios-installation" },
    //     { type: "doc", label: "Authentication", id: "ios-authentication" },
    //     { type: "doc", label: "Marketplace", id: "ios-marketplace" },
    //     { type: "doc", label: "Tokenization", id: "ios-tokenization" },
    //   ],
    // },
    {
      type: "category",
      label: "Unity",
      icon: SiUnity,
      id: "unity",
      items: [
        { type: "doc", label: "Installation", id: "unity-installation" },
        { type: "doc", label: "API Reference", id: "unity-api" },
        { type: "doc", label: "Authentication", id: "unity-authentication" },
        { type: "doc", label: "Marketplace", id: "unity-marketplace" },
        { type: "doc", label: "Tokenization", id: "unity-tokenization" },
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
          id: "changelogs",
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
        { type: "doc", label: "Support", id: "support" },
        { type: "doc", label: "Tutorials", id: "tutorials" },
        { type: "doc", label: "Guides", id: "guides" },
      ],
    },
  ],
}

export default sidebar
