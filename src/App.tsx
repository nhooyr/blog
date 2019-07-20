import React from "react"
import Header from "./components/Header"
import PostIndex from "./components/PostIndex"
import styled from "styled-components"

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header />
      <Main>
        <p>
          Hi, I'm Anmol.
          <br />
          I'm a software engineer in Toronto, Canada.
          <br />
          This is my personal site and blog.
        </p>
        <PostIndex />
      </Main>
    </AppContainer>
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
`

const Main = styled.main`
  flex: 1;

  > * + * {
    margin-top: 45px;
  }
`
