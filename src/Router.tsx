import { default as Navi, mount, route } from "navi"
import React from "react"
import * as ReactNavi from "react-navi"
import App from "./App"
import PostHeader from "./components/PostHeader"
import Home from "./Home"
import posts from "./posts"

export default function Router(props: { navigation?: Navi.Navigation; routes?: Navi.Matcher<{}> }) {
  return (
    <ReactNavi.Router {...props}>
      <App />
    </ReactNavi.Router>
  )
}

function genRoutes() {
  const routes: { [path: string]: any } = {
    "/": route({
      view: <Home />,
    }),
  }

  posts.forEach((p, i) => {
    routes[p.meta.path] = route(async () => {
      const Body = (await posts[i].body()).default
      return {
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
