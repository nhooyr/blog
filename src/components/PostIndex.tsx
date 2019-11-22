import styled from "@emotion/styled"
import React, { ReactElement } from "react"
import { Link, A } from "./Link"

const posts = [
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

const PostIndex: React.FC = (): ReactElement => {
  return (
    <>
      {posts.map(p => (
        <div key={p.year}>
          <IndexYear y={p.year} />
          <OL reversed>
            {[...Array(10).keys()].reverse().map(i => {
              return (
                <LI key={i}>
                  <Link to="/post">
                    <PostTitle>My Post dsadmsaldsakdmsaldmaskdmkldmaslkdmaskldmaslkdddsadas</PostTitle>
                    <PostDate>May 25</PostDate>
                  </Link>
                </LI>
              )
            })}
          </OL>
        </div>
      ))}
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

  * {
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
