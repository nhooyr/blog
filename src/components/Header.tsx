import { css } from "@emotion/core"
import React from "react"

import GithubIcon from "simple-icons/icons/github.svg"
import InstagramIcon from "simple-icons/icons/instagram.svg"
import MailIcon from "simple-icons/icons/minutemailer.svg"
import SpotifyIcon from "simple-icons/icons/spotify.svg"
import H2 from "./H2"
import Link from "./Link"

export default function Header() {
  return (
    <header>
      <nav
        css={css`
          color: var(--bright-color);

          ul {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0;
          }

          ul li + li {
            margin-left: 25px;
          }

          ul li:nth-of-type(2) {
            margin-left: auto;
          }
        `}
      >
        <ul>
          <li>
            <H2
              css={css`
                margin: 0;
              `}
            >
              <Link href="/" visitable={false}>
                nhooyr
              </Link>
            </H2>
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
            <Icon href="https://open.spotify.com/user/o6axtjatwqae3o0csu8gslie9?si=JSkyYtwuRFuZZK8kiAXhkQ">
              <SpotifyIcon />
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
    <Link
      css={css`
        svg {
          width: 24px;
          height: 100%;
        }
      `}
      href={props.href}
      visitable={false}
      aria-label={props.href}
    >
      {props.children}
    </Link>
  )
}
