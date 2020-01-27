import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "sanitize.css"
import "sanitize.css/forms.css"
import "sanitize.css/typography.css"

// https://alxgbsn.co.uk/2011/10/17/enable-css-active-pseudo-styles-in-mobile-safari/
document.body.ontouchstart = () => null

const root = document.createElement("div")
document.body.appendChild(root)
ReactDOM.render(<App />, root)
