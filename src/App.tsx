import React from "react"
import appCSS from "./App.module.css"
import fetchAsText from "./fetch"
import githubIcon from "simple-icons/icons/github.svg"
import twitterIcon from "simple-icons/icons/twitter.svg"

const App: React.FC = () => {
  let ctxFn = require.context("./posts", false, /\.md$/)

  ctxFn.keys().forEach(async key => {
    let any = ctxFn(key)
    console.log(await fetchAsText(any))
  })

  return <>
    <header>
      <nav className={appCSS.nav}>
        <ul>
          <li>
            <h1>
              nhooyr
            </h1>
          </li>
          <li>
            <a href="https://github.com/nhooyr">
              <img src={githubIcon} alt="GitHub profile link"/>
            </a>
          </li>
          <li>
            <a href="https://twitter.com/nhooyr">
              <img src={twitterIcon} alt="Twitter profile link"/>
            </a>
          </li>
        </ul>
      </nav>
    </header>

    <main className={appCSS.main}>
      I'm Anmol. I'm a software engineer in Toronto, Canada.
      This is my personal site and blog.

      <ol reversed>
        {[...Array(10).keys()].reverse().map(i => {
          i += 1
          return <li key={i}>
            {i === 10 ? <h2>2019</h2> : null}
            {i === 5 ? <h2>2018</h2> : null}
            <a href="https://example.com">
              <div className={appCSS.postTitle}>
                My Post dsadmsaldsakdmsaldmaskdmkldmaslkdmaskldmaslkdddsadas
              </div>
              <div className={appCSS.postDate}>
                May 25
              </div>
            </a>
          </li>
        })}
      </ol>
    </main>

    <footer className={appCSS.footer}>
      <a className={appCSS.contact} href="mailto:hi@nhooyr.io">
        contact
      </a>
    </footer>

  </>
}

export default App;
