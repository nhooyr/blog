import { css } from "@emotion/core"
import * as P from "../postmeta"
import React from "react"
import Code from "./Code"

function PostHeader(props: P.Meta) {
  return (
    <div
      css={css`
        h1 {
          color: black;
          font-size: 40px;
          line-height: 1.2;
          margin: 0;
          font-weight: 300;
        }

        h3 {
          font-weight: 300;
          font-size: 19px;
          margin: 5px 0 0 0;
        }
      `}
    >
      <h1>{props.title}</h1>
      <h3>{formatDate(props.publishDate)}</h3>
      {props.editDate && <h3>{formatDate(props.editDate)}</h3>}
    </div>
  )
}

export default function Post() {
  return (
    <>
      <PostHeader
        title="Kyle is an amazing banana"
        publishDate={new Date("April 3, 2019")}
        // editDate={new Date("May 5, 2019")}
      />
      <p>
        The Western (Section 2.8) musical tradition that developed in Europe after the middle ages is based on major and
        minor scales, but there are other scales that are a part of this tradition. In the chromatic scale, every
        interval (Section 4.5) is a half step (Section 4.2). This scale gives all the sharp, 􏰅at, and natural (Section
        1.1.3) notes commonly used in all Western music. It is also the twelve-tone scale used by twentieth-century
        composers to create their atonal music (pg 91). Young instrumentalists are encouraged to practice playing the
        chromatic scale in order to ensure
      </p>
      <Code language="javascript">{source}</Code>
      <p>
        The Western (Section 2.8) musical tradition that developed in Europe after the middle ages is based on major and
        minor scales, but there are other scales that are a part of this tradition. In the chromatic scale, every
        interval (Section 4.5) is a half step (Section 4.2). This scale gives all the sharp, 􏰅at, and natural (Section
        1.1.3) notes commonly used in all Western music. It is also the twelve-tone scale used by twentieth-century
        composers to create their atonal music (pg 91). Young instrumentalists are encouraged to practice playing the
        chromatic scale in order to ensure
      </p>
      <p>
        The Western (Section 2.8) musical tradition that developed in Europe after the middle ages is based on major and
        minor scales, but there are other scales that are a part of this tradition. In the chromatic scale, every
        interval (Section 4.5) is a half step (Section 4.2). This scale gives all the sharp, 􏰅at, and natural (Section
        1.1.3) notes commonly used in all Western music. It is also the twelve-tone scale used by twentieth-century
        composers to create their atonal music (pg 91). Young instrumentalists are encouraged to practice playing the
        chromatic scale in order to ensure
      </p>
    </>
  )
}

function formatDate(date: Date) {
  return date.toLocaleString(undefined, { month: "long", day: "numeric", year: "numeric" })
}

const source = `module.exports = api => {
  api.cache.forever()

  const dev = process.env.NODE_ENV === "development"
  return {
    presets: [
      [
        "@babel/preset-env",
        {
          useBuiltIns: "usage",
          corejs: 3,
        },
      ],
      [
        "@babel/preset-react",
        {
          development: dev,
        },
      ],
      "@babel/preset-typescript",
      "@emotion/babel-preset-css-prop",
    ],
    plugins: [
      [
        "emotion",
        {
          sourceMap: dev,
        },
      ],
      "@babel/plugin-proposal-class-properties",
    ],
  }
}`
