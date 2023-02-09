const docsSite = {
  hostname: "docs.mirrorworld.fun",
  targetSubdirectory: "/docs",
  assetsPathnames: [
    "/public/",
    "/static/",
    "/images/",
    "/fonts/",
    "/pwa/",
    "/_next/",
  ],
}

async function handleRequest(request) {
  // returns an empty string or a path if one exists
  const formatPath = (url) => {
    const pruned = url.pathname.split("/").filter((part) => part)
    return pruned && pruned.length > 1 ? `${pruned.join("/")}` : ""
  }

  const parsedUrl = new URL(request.url)
  const requestMatches = (match) => new RegExp(match).test(parsedUrl.pathname)
  const targetPath = formatPath(parsedUrl)

  // if the request is for blog html, get it
  if (requestMatches(docsSite.targetSubdirectory)) {
    console.log("this is a request for a docs document", parsedUrl.pathname)
    return fetch(`https://${docsSite.hostname}/${targetPath}`)
  }

  // if its docs html, get it
  if (requestMatches(docsSite.targetSubdirectory)) {
    console.log("this is a request for a blog document", parsedUrl.pathname)
    return fetch(`https://${docsSite.hostname}/${targetPath}`)
  }

  // if its blog assets, get them
  if ([docsSite.assetsPathnames].some(requestMatches)) {
    console.log("this is a request for docs assets", parsedUrl.pathname)
    const assetUrl = request.url.replace(parsedUrl.hostname, docsSite.hostname)
    return fetch(assetUrl)
  }

  console.log("this is a request to my root domain", parsedUrl.pathname)
  // if its not a request blog related stuff, do nothing
  return fetch(request)
}

addEventListener("fetch", (event) => {
  event.respondWith(handleRequest(event.request))
})
