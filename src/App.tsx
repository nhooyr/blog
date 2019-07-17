import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import PostIndex from "./components/PostIndex"
import styled from "styled-components"

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

const App: React.FC = () => {
  return (
    <AppContainer>
      <Header />
      I'm Anmol.
      <br />
      I'm a software engineer in Toronto, Canada.
      <br />
      This is my personal site and blog.
      <PostIndex />
      <Footer />
    </AppContainer>
  )
}

export default App
