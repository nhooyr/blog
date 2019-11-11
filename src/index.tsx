import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import "sanitize.css"
import "sanitize.css/forms.css"
import "sanitize.css/typography.css"

const root = document.createElement("div")
document.body.appendChild(root)
ReactDOM.render(<App />, root)
