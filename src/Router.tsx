import { default as Navi, mount, route } from "navi"
import React from "react"
import * as ReactNavi from "react-navi"
import { HelmetProvider } from "react-navi-helmet-async"
import { FilledContext } from "react-helmet-async"
import App from "./App"
import NotFound from "./components/404"
import PostHeader from "./components/PostHeader"
import Home from "./Home"
import posts from "./posts"

export default function Router(props: {
  navigation?: Navi.Navigation
  routes?: Navi.Matcher<{}>
  helmetContext?: FilledContext
}) {
  return (
    <HelmetProvider context={props.helmetContext}>
      <ReactNavi.Router {...props}>
        <App />
      </ReactNavi.Router>
    </HelmetProvider>
  )
}

function genRoutes() {
  const routes: { [path: string]: any } = {
    "/": route({
      head: (
        <>
          <meta name="description" content="nhooyr's blog." />
        </>
      ),
      view: <Home />,
    }),
    "/404": route({
      head: (
        <>
          <meta name="description" content="Resource not found." />
        </>
      ),
      view: <NotFound />,
    }),
  }

  posts.forEach((p, i) => {
    routes[p.meta.path] = route(async () => {
      const Body = (await posts[i].body()).default
      return {
        head: (
          <>
            <meta name="description" content={`${p.meta.title}.`} />
          </>
        ),
        view: (
          <>
            <PostHeader {...p.meta} />
            <Body />
          </>
        ),
      }
    })
  })

  return routes
}

export const routes = mount(genRoutes())
