import { css } from "@emotion/core"
import React, { ReactElement } from "react"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import Header from "./components/Header"
import Post from "./components/Post"
import PostIndex from "./components/PostIndex"

const App: React.FC = (): ReactElement => {
  return (
    <div css={appContainerCSS}>
      <BrowserRouter>
        <Header />
        <main css={mainCSS}>
          <Switch>
            <Route path="/post" component={Post} />
            <Route
              path="/"
              exact
              component={(): ReactElement => (
                <>
                  <p>
                    {"Hi, I'm Anmol."}
                    <br />
                    {"I'm a software engineer in Toronto, Canada."}
                    <br />
                    This is my personal site and blog.
                  </p>
                  <PostIndex />
                </>
              )}
            />
            <Redirect from="/" to="/" />
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  )
}

export default App

const appContainerCSS = css`
  color: #333;

  h1 {
    color: black;
  }

  line-height: 1.8;

  display: flex;
  flex-direction: column;

  padding: 20px 40px;
  max-width: 750px;
  min-width: 320px;

  margin: auto;
`

const mainCSS = css`
  flex: 1;

  > * + * {
    margin-top: 30px;
  }
`
