import React, { ReactElement } from "react"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom"
import styled from "@emotion/styled"
import Header from "./components/Header"
import Post from "./components/Post"
import PostIndex from "./components/PostIndex"

const App: React.FC = (): ReactElement => {
  return (
    <BrowserRouter>
      <AppContainer>
        <Header />
        <Main>
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
        </Main>
      </AppContainer>
    </BrowserRouter>
  )
}

export default App

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  word-wrap: break-word;
  padding: 20px 20px;
  max-width: 650px;
  min-width: 320px;
  margin: auto;

  line-height: 1.8;
`

const Main = styled.main`
  flex: 1;

  > * + * {
    margin-top: 30px;
  }
`
