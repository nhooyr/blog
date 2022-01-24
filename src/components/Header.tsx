import { css } from "@emotion/core"
import React from "react"

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
            white-space: nowrap;
            overflow: auto;
            margin: 0;
          }

          ul li + li {
            margin-left: 20px;
          }

          ul li:nth-of-type(1) {
            margin-right: auto;
          }

          ul li:nth-of-type(2) {
            margin-left: 40px;
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
            <Link
              href="https://open.spotify.com/user/o6axtjatwqae3o0csu8gslie9?si=JSkyYtwuRFuZZK8kiAXhkQ"
              visitable={false}
            >
              spotify
            </Link>
          </li>
          <li>
            <Link href="https://github.com/nhooyr" visitable={false}>
              github
            </Link>
          </li>
          <li>
            <Link href="mailto:hi@nhooyr.io" visitable={false}>
              email
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
