import { css } from "@emotion/core"
import React from "react"

import GithubIcon from "simple-icons/icons/github.svg"
import InstagramIcon from "simple-icons/icons/instagram.svg"
import MailIcon from "simple-icons/icons/minutemailer.svg"
import TwitterIcon from "simple-icons/icons/twitter.svg"
import { A, Link } from "./Link"

const App: React.FC = () => {
  return (
    <header>
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

          ul li img {
            width: 24px;
          }

          ul li + li {
            margin-left: 20px;
          }

          ul li:nth-of-type(2) {
            margin-left: auto;
          }
        `}
      >
        <ul>
          <li>
            <h1
              css={css`
                margin: 0;

                font-size: 30px;
                font-weight: 400;
              `}
            >
              <Link to="/" visitable={false}>
                nhooyr
              </Link>
            </h1>
          </li>
          <li>
            <Icon href="https://github.com/nhooyr">
              <GithubIcon />
            </Icon>
          </li>
          <li>
            <Icon href="https://www.instagram.com/nhooyr/">
              <InstagramIcon />
            </Icon>
          </li>
          <li>
            <Icon href="mailto:hi@nhooyr.io">
              <MailIcon />
            </Icon>
          </li>
        </ul>
      </nav>
    </header>
  )
}

const Icon: React.FC<{ href: string }> = props => {
  return (
    <A css={iconCSS} href={props.href} visitable={false}>
      {props.children}
    </A>
  )
}

const iconCSS = css`
  svg {
    width: 24px;
    height: 100%;
  }
`

export default App
