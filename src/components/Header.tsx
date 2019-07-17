import React from "react"
import githubIcon from "simple-icons/icons/github.svg"
import twitterIcon from "simple-icons/icons/twitter.svg"
import { css } from "styled-components"
import A from "./A"
import PlainLink from "./PlainLink"

const App: React.FC = () => {
  return (
    <header css={css`
margin-bottom: 15px;
`}>
      <nav
        css={css`
          ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 0;
            margin: 0;
          }

          ul li {
            list-style: none;
          }

          ul li h1 {
            font-weight: normal;
            margin: 0;
          }

          ul li img {
            width: 24px;
          }

          ul li:not(:first-child):not(:last-child) {
            margin-right: 20px;
            margin-left: auto;
          }
        `}
      >
        <ul>
          <li>
            <h1>
              <PlainLink href="/">nhooyr</PlainLink>
            </h1>
          </li>
          <li>
            <A href="https://github.com/nhooyr">
              <img src={githubIcon} alt="GitHub profile link"/>
            </A>
          </li>
          <li>
            <A href="https://twitter.com/nhooyr">
              <img src={twitterIcon} alt="Twitter profile link"/>
            </A>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default App
