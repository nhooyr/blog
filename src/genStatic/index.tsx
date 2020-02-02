import * as fs from "fs"
import * as Navi from "navi"
import * as React from "react"
import ReactDOMServer from "react-dom/server"
import Router, { routes } from "../Router"

const indexHTML = fs.readFileSync("out/index.html").toString()

async function renderPageToString(path: string) {
  const navigation = Navi.createMemoryNavigation({
    routes: routes,
    url: path,
  })

  const route = await navigation.getRoute()

  const rootHTML = ReactDOMServer.renderToString(<Router navigation={navigation} />)

  let html = indexHTML.replace(`<div id="root"></div>`, `<div id="root">${rootHTML}</div>`)
  if (route.title) {
    html = indexHTML.replace(`<title>nhooyr.io</title>`, `<title>${route.title}</title>`)
  }
  return html
}

async function main() {
  const crawledRoutes = await Navi.crawl({
    routes: routes,
  })
  for (const p of crawledRoutes.paths) {
    const staticHTML = await renderPageToString(p)
    let fileName = p.slice(1)
    if (fileName === "") {
      fileName = "index"
    }
    fs.writeFileSync(`out/${fileName}.html`, staticHTML)
  }
}

main()
