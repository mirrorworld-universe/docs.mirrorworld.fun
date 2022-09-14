export type ENV = "production" | "development" | "staging" | "test"

export const __ENV__: ENV =
  (process.env.NEXT_PUBLIC_NODE_ENV as ENV) || process.env.NODE_ENV
