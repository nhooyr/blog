import styled from "styled-components"
import React from "react"
import PlainLink from "./PlainLink"

const PostIndex: React.FC = () => {
  return (
    <Main>
      <ol reversed>
        {[...Array(10).keys()].reverse().map(i => {
          i += 1
          return (
            <li key={i}>
              {i === 10 ? <IndexYear y="2019" /> : null}
              {i === 5 ? <IndexYear y="2018" /> : null}
              <a href="https://example.com">
                <PostTitle>My Post dsadmsaldsakdmsaldmaskdmkldmaslkdmaskldmaslkdddsadas</PostTitle>
                <PostDate>May 25</PostDate>
              </a>
            </li>
          )
        })}
      </ol>
    </Main>
  )
}

const Main = styled.main`
  flex: 1;

  ol {
    padding: 0;
    width: 100%;
  }

  ol li {
    list-style: none;
    margin: 30px 0;
  }

  ol li a {
    display: flex;
    justify-content: space-between;
  }
`

const H2 = styled.h2`
  font-weight: normal;
  margin-top: 50px;
`

const IndexYear: React.FC<{ y: string; className?: string }> = props => {
  return (
    <H2 id={props.y}>
      <PlainLink href={`/#${props.y}`}>{props.y}</PlainLink>
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
