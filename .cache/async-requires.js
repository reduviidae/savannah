// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("/home/wiljago/Projects/savannah/.cache/dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("/home/wiljago/Projects/savannah/src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("/home/wiljago/Projects/savannah/src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-thankyou-js": () => import("/home/wiljago/Projects/savannah/src/pages/thankyou.js" /* webpackChunkName: "component---src-pages-thankyou-js" */)
}

exports.data = () => import("/home/wiljago/Projects/savannah/.cache/data.json")

