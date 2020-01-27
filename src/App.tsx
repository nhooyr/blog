import { css } from "@emotion/core"
import { lazy, mount, route } from "navi"
import React, { Suspense } from "react"
import { NotFoundBoundary, Router, View } from "react-navi"
import Header from "./components/Header"
import Loading from "./components/Loading"
import { NotFound } from "./components/404"
import PostHeader from "./components/PostHeader"
import ScrollMemory from "./components/ScrollMemory"
import Home from "./Home"
import posts from "./posts"

const routes: { [path: string]: any } = {
  "/": route({
    view: <Home />,
  }),
}

posts.forEach((p, i) => {
  routes[p.meta.path] = lazy(async () => {
    const Body = (await posts[i].body()).default
    return route({
      view: (
        <>
          <PostHeader {...p.meta} />
          <Body />
        </>
      ),
    })
  })
})

export default function App() {
  return (
    <Router routes={mount(routes)}>
      <ScrollMemory />
      <Loading />
      <div
        css={css`
          color: #333;

          padding: 10px 20px 40px 20px;
          max-width: 720px;
          min-width: 320px;
          margin: auto;

          > * + * {
            margin: 40px 0 0 0;
          }
        `}
      >
        <Header />
        <main
          css={css`
            > * + * {
              margin: 30px 0 0 0;
            }
          `}
        >
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
