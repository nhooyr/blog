import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import PostIndex from "./components/PostIndex"

const App: React.FC = () => {
  return (
    <>
      <Header />
      I'm Anmol.
      <br />
      I'm a software engineer in Toronto, Canada.
      <br />
      This is my personal site and blog.
      <PostIndex />
      <Footer />
    </>
  )
}

export default App
