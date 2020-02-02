import React from "react"
import ReactDOM from "react-dom"
import Router, { routes } from "./Router"

it("renders without crashing", (): void => {
  window.scroll = () => {
    return
  }
  const div = document.createElement("div")
  ReactDOM.render(<Router routes={routes} />, div)
  ReactDOM.unmountComponentAtNode(div)
})
