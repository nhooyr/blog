import * as Navi from "navi"
import React from "react"
import ReactDOM from "react-dom"
import "sanitize.css"
import "sanitize.css/forms.css"
import "sanitize.css/typography.css"
import Router, { routes } from "./Router"

async function main() {
  // https://alxgbsn.co.uk/2011/10/17/enable-css-active-pseudo-styles-in-mobile-safari/
  document.body.ontouchstart = () => null

  const navigation = Navi.createBrowserNavigation({ routes })
  // Ensures the current route is fully loaded to avoid flashes.
  await navigation.getRoute()

  const renderer = process.env.NODE_ENV === "production" ? ReactDOM.hydrate : ReactDOM.render

  renderer(<Router navigation={navigation} />, document.getElementById("root"))
}

main()
