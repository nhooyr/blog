import { css } from "@emotion/core"
import React, { useEffect } from "react"
import { BrowserRouter, Redirect, Route, Switch, useHistory } from "react-router-dom"
import Header from "./components/Header"
import Post from "./components/Post"
import Home from "./pages/Home"

export default function App() {
  return (
    <BrowserRouter>
      <ScrollMemory />
      <div css={appContainerCSS}>
        <Header />
        <main css={mainCSS}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/post" component={Post} />
            <Redirect from="/" to="/" />
          </Switch>
        </main>
      </div>
    </BrowserRouter>
  )
}

// TODO COMPLETELY REMOVE BULLSHIT CSS, MAKE EACH INDEX A BUNCH OF PARAGRAPHS AND USE LINE HEIGHT TY
const appContainerCSS = css`
  color: #333;
  p {
    line-height: 2;
  }

  padding: 20px 40px 30px 40px;
  max-width: 640px;
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

function useScrollMemory() {
  const history = useHistory()
  useEffect(() => {
    if (history.action !== "POP") {
      window.scrollTo(0, 0)
    }
  }, [history.location.pathname])
}

function ScrollMemory() {
  useScrollMemory()
  return null
}
