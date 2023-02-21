import consola from "consola"
import tablemark from "tablemark"
import outdent from "outdent"
import { writeFileSync } from "fs"
import { resolve } from "path"
import API_ERROR_REFERENCE_DATA from "../errors/errors.json"

function toCellText(v) {
  // Process error codes
  if (!isNaN(Number(v))) return `\`${v}\``
  // Process error messages
  // if (API_ERROR_REFERENCE_DATA.errors[v]) return `\`${v}\``
  if (!v) return ""
  // Return default
  return v
}

async function generateDocs() {
  const errors = API_ERROR_REFERENCE_DATA.errors
  const { OK, ...rest } = errors
  const result = tablemark(
    Object.values(rest).map(({ code, error, message }) => ({
      code: outdent`${code.trim()}`,
      error: outdent`${error.trim()}`,
      message: outdent`${message.trim()}`,
    })),
    {
      toCellText,
    },
  )

  // Write to file
  let content = outdent`---
  title: API Error Reference
  description: Mirror World API Error Reference
  ---
  
  # API Error Reference
  
  This is a list of all API Errors that can be returned by the Mirror World API Cluster.\n
  `

  content += result

  writeFileSync(
    resolve(__dirname, "../data/further-reading/api-error-reference.mdx"),
    content,
  )

  consola.success(
    "Generated API Error Reference for the following Errors",
    API_ERROR_REFERENCE_DATA.keys,
  )
}

generateDocs()
  .then(() => consola.success("Done ✨"))
  .catch(console.error)
