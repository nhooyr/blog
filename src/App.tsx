import { css } from "linaria"
import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"

export const globalCSS = css`
  /* stylelint-disable selector-pseudo-class-no-unknown */
  :global() {
    @import-sanitize;

    body {
      margin: 0;
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell", "Fira Sans",
        "Droid Sans", "Helvetica Neue", sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
    }

    code {
      font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New", monospace;
    }

    *,
    ::before,
    ::after {
      box-sizing: border-box;
    }

    #root {
      display: flex;
      flex-direction: column;
      min-height: 100vh;

      word-wrap: break-word;
      padding: 20px 20px;
      max-width: 650px;
      min-width: 320px;
      margin: auto;
    }
  }
`

const App: React.FC = () => {
  return (
    <>
      <Header />

      <main
        className={css`
          flex: 1;

          ol {
            padding: 0;
            width: 100%;
          }

          ol li {
            list-style: none;
            margin: 30px 0;
          }

          ol li a {
            display: flex;
            justify-content: space-between;
          }

          li a:link {
            text-decoration: none;
            color: black;
          }

          li a:active {
            /*color: blue;*/
          }

          h2 {
            font-weight: normal;
            margin-top: 50px;
          }
        `}
      >
        I'm Anmol. I'm a software engineer in Toronto, Canada. This is my personal site and blog.
        <ol reversed>
          {[...Array(10).keys()].reverse().map(i => {
            i += 1
            return (
              <li key={i}>
                {i === 10 ? <h2>2019</h2> : null}
                {i === 5 ? <h2>2018</h2> : null}
                <a href="https://example.com">
                  <div
                    className={css`
                      flex: 1;
                      overflow: hidden;
                      text-overflow: ellipsis;
                      white-space: nowrap;
                    `}
                  >
                    My Post dsadmsaldsakdmsaldmaskdmkldmaslkdmaskldmaslkdddsadas
                  </div>
                  <div
                    className={css`
                      margin-left: 30px;
                    `}
                  >
                    May 25
                  </div>
                </a>
              </li>
            )
          })}
        </ol>
      </main>

      <Footer />
    </>
  )
}

export default App
