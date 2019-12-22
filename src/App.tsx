import { css } from "@emotion/core"
import { lazy, mount, route, withView } from "navi"
import React, { Suspense } from "react"
import { Router, View } from "react-navi"
import Header from "./components/Header"
import Home from "./pages/Home"

const routes = mount({
  "/": route({
    view: <Home />,
  }),
  "/post": lazy(async () => withView((await import("./components/Post")).default)),
})

export default function App() {
  return (
    <Router routes={routes}>
      <div css={appContainerCSS}>
        <Header />
        <main css={mainCSS}>
          <Suspense fallback={null}>
            <View />
          </Suspense>
        </main>
      </div>
    </Router>
  )
}

// TODO COMPLETELY REMOVE BULLSHIT CSS, MAKE EACH INDEX A BUNCH OF PARAGRAPHS AND USE LINE HEIGHT TY
const appContainerCSS = css`
  color: #333;
  p {
    line-height: 2;
  }

  padding: 20px 40px 30px 40px;
  max-width: 660px;
  min-width: 320px;
  margin: auto;

  > * + * {
    margin-top: 40px;
  }
`

const mainCSS = css`
  > * + * {
    margin-top: 30px;
  }
`
