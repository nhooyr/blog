import React, { ReactElement } from "react"
import styled from "styled-components"
import { InternalLink } from "./Link"

const PostIndex: React.FC = (): ReactElement => {
  return (
    <>
      <div>
        <IndexYear y="2019" />
        <OL reversed>
          {[...Array(10).keys()].reverse().map(
            (i): ReactElement => {
              i += 1
              return (
                <LI key={i}>
                  <InternalLink to="/post">
                    <PostTitle>My Post dsadmsaldsakdmsaldmaskdmkldmaslkdmaskldmaslkdddsadas</PostTitle>
                    <PostDate>May 25</PostDate>
                  </InternalLink>
                </LI>
              )
            },
          )}
        </OL>
      </div>

      <div>
        <IndexYear y="2018" />
        <OL reversed>
          {[...Array(10).keys()].reverse().map(
            (i): ReactElement => {
              i += 1
              return (
                <LI key={i}>
                  <InternalLink to="/post">
                    <PostTitle>My Post dsadmsaldsakdmsaldmaskdmkldmaslkdmaskldmaslkdddsadas</PostTitle>
                    <PostDate>May 25</PostDate>
                  </InternalLink>
                </LI>
              )
            },
          )}
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

  ${InternalLink} {
    display: flex;
    justify-content: space-between;
  }
`

const H2 = styled.h2`
  margin: 0;
  font-weight: normal;
`

const IndexYear: React.FC<{ y: string }> = (props): ReactElement => {
  return (
    <H2 id={props.y}>
      <InternalLink to={`/#${props.y}`} visitable={false}>
        {props.y}
      </InternalLink>
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
