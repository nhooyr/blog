import { css } from "@emotion/core"
import React from "react"

import GithubIcon from "simple-icons/icons/github.svg"
import InstagramIcon from "simple-icons/icons/instagram.svg"
import MailIcon from "simple-icons/icons/minutemailer.svg"
import A from "./A"

export default function App() {
  return (
    <header>
      <nav
        css={css`
          color: black;

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
            <h2
              css={css`
                margin: 0;

                font-size: 30px;
                font-weight: normal;
              `}
            >
              <A href="/" visitable={false}>
                nhooyr
              </A>
            </h2>
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

function Icon(props: { href: string; children?: React.ReactNode }) {
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
