import { css } from "@emotion/core"
import React from "react"
import * as P from "../posts/Meta"

const PostHeader: React.FC<P.Meta> = props => (
  <div
    css={css`
      h1 {
        font-size: 45px;
        margin: 20px 0 0 0;
        font-weight: 300;
      }

      h3 {
        font-size: 19px;
        margin: 0;
        font-weight: 300;
      }
    `}
  >
    <h1>{props.title}</h1>
    <h3>{formatDate(props.publishDate)}</h3>
    <h3>{`Edited ${formatDate(props.editDate)}`}</h3>
  </div>
)

const Post: React.FC = () => {
  return (
    <>
      <PostHeader
        title="Kyle is an amazing banana"
        publishDate={new Date("April 3, 2019")}
        editDate={new Date("May 5, 2019")}
      />
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

export default Post

function formatDate(date: Date) {
  return date.toLocaleString(undefined, { month: "long", day: "numeric", year: "numeric" })
}
