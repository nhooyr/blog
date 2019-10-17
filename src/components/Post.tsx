import React from "react"
import styled from "styled-components"

const Post: React.FC = (): JSX.Element => {
  return (
    <>
      <div>
        <H1>Post Title</H1>
        <H3>April 3, 2019</H3>
        <H3>Edited May 5, 2019</H3>
      </div>
      <P>
        The Western (Section 2.8) musical tradition that developed in Europe after the middle ages is based on major and
        minor scales, but there are other scales that are a part of this tradition. In the chromatic scale, every
        interval (Section 4.5) is a half step (Section 4.2). This scale gives all the sharp, 􏰅at, and natural (Section
        1.1.3) notes commonly used in all Western music. It is also the twelve-tone scale used by twentieth-century
        composers to create their atonal music (pg 91). Young instrumentalists are encouraged to practice playing the
        chromatic scale in order to ensure
      </P>
      <P>
        The Western (Section 2.8) musical tradition that developed in Europe after the middle ages is based on major and
        minor scales, but there are other scales that are a part of this tradition. In the chromatic scale, every
        interval (Section 4.5) is a half step (Section 4.2). This scale gives all the sharp, 􏰅at, and natural (Section
        1.1.3) notes commonly used in all Western music. It is also the twelve-tone scale used by twentieth-century
        composers to create their atonal music (pg 91). Young instrumentalists are encouraged to practice playing the
        chromatic scale in order to ensure
      </P>
      <P>
        The Western (Section 2.8) musical tradition that developed in Europe after the middle ages is based on major and
        minor scales, but there are other scales that are a part of this tradition. In the chromatic scale, every
        interval (Section 4.5) is a half step (Section 4.2). This scale gives all the sharp, 􏰅at, and natural (Section
        1.1.3) notes commonly used in all Western music. It is also the twelve-tone scale used by twentieth-century
        composers to create their atonal music (pg 91). Young instrumentalists are encouraged to practice playing the
        chromatic scale in order to ensure
      </P>
    </>
  )
}

export default Post

const H1 = styled.h1`
  font-size: 40px;
  margin-bottom: 5px;
  font-weight: 300;
`

const H3 = styled.h3`
  margin: 0;
  font-weight: 300;
`

const P = styled.p`
  font-weight: 300;
`
