import { css } from "linaria"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

export const globalCSS = css`
  /* stylelint-disable selector-pseudo-class-no-unknown */
  :global(*) {
    @import-sanitize;

    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
        "Droid Sans", "Helvetica Neue", sans-serif;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    }

    #root {
      display: flex;
      flex-direction: column;
      min-height: 100vh;

      word-wrap: break-word;
      padding: 20px 20px;
      max-width: 650px;
      min-width: 320px;
      margin: auto;
    }
    
    a:link {
    color: black;
  }
  }
`


ReactDOM.render(<App/>, document.getElementById("root"))
