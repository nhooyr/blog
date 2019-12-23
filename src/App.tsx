import { css } from "@emotion/core"
import { lazy, mount, route, withView } from "navi"
import React, { Suspense, useEffect } from "react"
import { NotFoundBoundary, Router, useCurrentRoute, useNavigation, View } from "react-navi"
import Header from "./components/Header"
import Loading from "./components/Loading"
import { NotFound } from "./components/NotFound"
import Home from "./pages/Home"

const routes = mount({
  "/": route({
    view: <Home />,
  }),
  "/post": lazy(async () => withView(async () => await import("./components/Post"))),
})

export default function App() {
  return (
    <Router routes={routes}>
      <ScrollMemory />
      <Loading />
      <div css={appContainerCSS}>
        <Header />
        <main css={mainCSS}>
          <Suspense fallback={null}>
            <NotFoundBoundary render={NotFound}>
              <View disableScrolling />
            </NotFoundBoundary>
          </Suspense>
        </main>
      </div>
    </Router>
  )
}

function useScrollMemory() {
  const history = useNavigation()._history
  useEffect(() => {
    if (history.action !== "POP") {
      window.scrollTo(0, 0)
    }
  }, [useCurrentRoute().url.pathname])
}

function ScrollMemory() {
  useScrollMemory()
  return null
}

// TODO COMPLETELY REMOVE BULLSHIT CSS, MAKE EACH INDEX A BUNCH OF PARAGRAPHS AND USE LINE HEIGHT TY
const appContainerCSS = css`
  color: #333;
  p {
    line-height: 2;
  }

  padding: 20px 40px 30px 40px;
  max-width: 720px;
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
