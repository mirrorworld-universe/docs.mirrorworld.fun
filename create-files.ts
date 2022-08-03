import { resolve } from "path"
import sidebar from "./sidebar.config"
import { ensureFileSync } from "fs-extra"
import { writeFileSync } from "fs"

type IPage = { title: string; slug: string }

function getAllFiles() {
  return sidebar.docs.reduce((acc, curr) => {
    if (curr.type === "category") {
      // console.log("pages", curr.items)
      const parsed = curr.items.map((item) => ({
        title: item.label,
        slug: `data/${curr.id}/${item.id}.mdx`,
      }))

      return acc.concat(...parsed)
    } else {
      return acc
    }
  }, [] as IPage[])
}

async function main() {
  const files = getAllFiles()
  for (let i = 0; i < files.length; i++) {
    const file = files[i]
    ensureFileSync(file.slug)
    const content = `---
title: ${file.title}
description: ${file.title}
---

# ${file.title}

Todo`
    writeFileSync(resolve(__dirname, file.slug), content, "utf-8")
  }
}

main()
  .then((files) => console.log("files", files))
  .catch(console.error)
