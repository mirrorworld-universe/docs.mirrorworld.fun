import { AiFillCode, AiOutlineAndroid } from "react-icons/ai"
import { FaVuejs } from "react-icons/fa"
import {
  SiJavascript,
  SiNodedotjs,
  SiReact,
  SiRust,
  SiSwift,
  SiUnity,
} from "react-icons/si"

export const frameworks = {
  android: { icon: AiOutlineAndroid, label: "Android" },
  ios: { icon: SiSwift, label: "iOS (Swift)" },
  unity: { icon: SiUnity, label: "Unity" },
  js: { icon: SiJavascript, label: "JavaScript" },
  rust: { icon: SiRust, label: "Rust" },
}

export const FRAMEWORKS = ["android", "ios", "unity", "js", "rust"] as const

export type Framework = keyof typeof frameworks

export function isFramework(str: string): str is Framework {
  return FRAMEWORKS.includes(str as any)
}

export function getFrameworkIndex(str: string): number {
  return FRAMEWORKS.indexOf(str as any)
}
