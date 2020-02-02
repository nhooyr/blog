import * as Navi from "navi"
import React from "react"
import ReactDOM from "react-dom"
import Router, { routes } from "./Router"

window.scrollTo = () => {}

test("routes", async () => {
  const crawledRoutes = await Navi.crawl({
    routes: routes,
  })

  const promises = new Array<Promise<void>>()
  for (const path of crawledRoutes.paths) {
    const p = (async () => {
      const div = document.createElement("div")

      const nav = Navi.createMemoryNavigation({ routes, url: path })
      ReactDOM.render(<Router navigation={nav} />, div)

      ReactDOM.unmountComponentAtNode(div)
    })()
    promises.push(p)
  }
  Promise.all(promises)
})
