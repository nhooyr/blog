import { css } from "@emotion/core"
import React from "react"
import H1 from "./components/H1"
import Link from "./components/Link"
import P from "./components/P"
import posts from "./posts"

export default function Home() {
  return (
    <>
      <P>
        Hi, I'm Anmol.
        <br />
        I go by nhooyr on the internet.
        <br />
        I'm a software engineer from <Link href="https://en.wikipedia.org/wiki/Kaslo">Kaslo, BC</Link>.
        <br />
        Welcome to my blog.
      </P>
      <PostIndex />
    </>
  )
}

function PostIndex() {
  return (
    <div
      css={css`
        ol {
          padding: 0;
          margin: 0;
        }

        li {
          display: inline-box;
          line-height: 2;
          white-space: nowrap;
          width: 100%;
        }
      `}
    >
      <H1
        css={css`
          font-size: 75px;
          font-weight: 200;
        `}
      >
        Posts
      </H1>

      <ol>
        {posts.map((p, i) => {
          const d = p.meta.publishDate
          const year = `${d.getFullYear()}`
          const month = `${d.getMonth() + 1}`.padStart(2, "0")
          const day = `${d.getDate()}`.padStart(2, "0")
          return (
            <li key={i}>
              <span>
                <Link href={p.meta.path}>
                  {year}/{month}/{day}
                  {/* Will not be perfectly aligned on the dash with all other posts but
                  whatever. Not easy to do with HTML/CSS without turning this list into a
                  flexbox. */}
                  &nbsp; &mdash; &nbsp;
                  {p.meta.title}
                </Link>
              </span>
              <br />
            </li>
          )
        })}
      </ol>
    </div>
  )
}
