
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("/home/nyx/Documents/Projects/masterprocess.github.io/src/pages/404.js")),
  "component---src-pages-index-js": preferDefault(require("/home/nyx/Documents/Projects/masterprocess.github.io/src/pages/index.js")),
  "component---src-pages-page-2-js": preferDefault(require("/home/nyx/Documents/Projects/masterprocess.github.io/src/pages/page-2.js")),
  "component---src-pages-using-ssr-js": preferDefault(require("/home/nyx/Documents/Projects/masterprocess.github.io/src/pages/using-ssr.js")),
  "component---src-pages-using-typescript-tsx": preferDefault(require("/home/nyx/Documents/Projects/masterprocess.github.io/src/pages/using-typescript.tsx")),
  "component---src-templates-using-dsg-js": preferDefault(require("/home/nyx/Documents/Projects/masterprocess.github.io/src/templates/using-dsg.js"))
}

