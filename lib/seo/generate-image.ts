import { buildUrl } from "cloudinary-build-url"

export function sanitize(text: string) {
  return encodeURIComponent(text).replace(/%(23|2C|2F|3F|5C)/g, "%25$1")
}

export interface GenerateShareImageUrlOptions {
  title: string
  description?: string
}

/**
 * 
 * @param param0 buildUrl("jbakebwa.dev/twitter-cards/mw-docs-card", {
    cloud: {
      cloudName: "xtellar",
    },
    
  })
 * @returns 
 */

export function generateShareImageUrl({
  title,
  description,
}: GenerateShareImageUrlOptions) {
  return buildUrl("jbakebwa.dev/twitter-cards/mw-docs-card", {
    cloud: {
      cloudName: "xtellar",
    },
    transformations: {
      resize: {
        width: 1280,
      },
      chaining: [
        {
          overlay: [
            `text:${sanitize(
              "Poppins",
            )}_64_semibold_line_spacing_-20:${sanitize(title)}`,
            "c_fit",
            "co_rgb:DCFF1C",
            "g_north_west",
            "x_76",
            "y_200",
            "w_960",
          ].join(","),
        },
        {
          overlay: [
            `text:${sanitize("Poppins")}_48:${sanitize(description)}`,
            "c_fit",
            "co_rgb:FFFFFF",
            "g_south_west",
            "y_200",
            "x_76",
            "w_960",
          ].join(","),
        },
      ],
    },
  })
}
