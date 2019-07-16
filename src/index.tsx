import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import "sanitize.css"
import "sanitize.css/forms.css"
import "sanitize.css/typography.css"
// https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31245#issuecomment-463640878
// eslint-disable-next-line @typescript-eslint/no-unused-vars,import/no-unresolved
import * as types from "styled-components/cssprop"

ReactDOM.render(<App />, document.getElementById("root"))
