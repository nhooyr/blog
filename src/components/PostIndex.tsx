import React from "react"
import styled from "styled-components"
import A from "./A"

const PostIndex: React.FC = () => {
  return (
    <>
      <div>
        <IndexYear y="2019" />
        <OL reversed>
          {[...Array(10).keys()].reverse().map(i => {
            i += 1
            return (
              <LI key={i}>
                <A href="https://example.com">
                  <PostTitle>My Post dsadmsaldsakdmsaldmaskdmkldmaslkdmaskldmaslkdddsadas</PostTitle>
                  <PostDate>May 25</PostDate>
                </A>
              </LI>
            )
          })}
        </OL>
      </div>

      <div>
        <IndexYear y="2018" />
        <OL reversed>
          {[...Array(10).keys()].reverse().map(i => {
            i += 1
            return (
              <LI key={i}>
                <A href="https://example.com">
                  <PostTitle>My Post dsadmsaldsakdmsaldmaskdmkldmaslkdmaskldmaslkdddsadas</PostTitle>
                  <PostDate>May 25</PostDate>
                </A>
              </LI>
            )
          })}
        </OL>
      </div>
    </>
  )
}

const OL = styled.ol`
  padding: 0;
  margin: 0;
  width: 100%;
`

const LI = styled.li`
  list-style: none;
  margin: 20px 0;

  ${A} {
    display: flex;
    justify-content: space-between;
  }
`

const H2 = styled.h2`
  margin: 0;
  font-weight: normal;
`

const IndexYear: React.FC<{ y: string }> = props => {
  return (
    <H2 id={props.y}>
      <A href={`/#${props.y}`} visitable={false}>
        {props.y}
      </A>
    </H2>
  )
}

const PostTitle = styled.div`
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`

const PostDate = styled.div`
  margin-left: 30px;
`

export default PostIndex
