import { css } from "@emotion/core"
import React from "react"
import A from "../components/A"

export default function Home() {
  return (
    <>
      <p
        css={css`
          margin-top: 0;
        `}
      >
        Hi, I'm Anmol.
        <br />
        I'm a software engineer from Toronto.
        <br />
        This is my blog.
        <br />
        It's a WIP.
      </p>
      {/*<PostIndex />*/}
    </>
  )
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
function PostIndex() {
  return (
    <>
      {posts.map(p => (
        <div css={yearIndexCSS} key={p.year}>
          <h3 css={yearCSS} id={p.year}>
            <A href={`/#${p.year}`} visitable={false}>
              {p.year}
            </A>
          </h3>

          <ol reversed>
            {[...Array(10).keys()].reverse().map(i => {
              return (
                <li key={i}>
                  <A href="/post">MyPost dsadmsal dsakdmsaldmas kdmkldmaslk dmads mak da sl dm kl dm aslk d</A>
                </li>
              )
            })}
          </ol>
        </div>
      ))}
    </>
  )
}

const yearIndexCSS = css`
  margin-top: 40px;

  ol {
    padding: 0;
    margin: 0;
    width: 100%;

    > * + * {
      margin-top: 20px;
    }
  }

  li {
    list-style: none;

    * {
      display: flex;
      justify-content: space-between;
    }
  }
`

const yearCSS = css`
  font-size: 40px;
  line-height: 1.2;
  margin: 0 0 10px 0;
  font-weight: 300;
`

const posts = [
  {
    year: "2020",
    posts: [
      {
        title: "wowwowow",
        date: "May 25",
      },
    ],
  },
  {
    year: "2019",
    posts: [
      {
        title: "wowwowow",
        date: "May 25",
      },
    ],
  },
  {
    year: "2018",
    posts: [
      {
        title: "wowwowow",
        date: "May 25",
      },
    ],
  },
]
