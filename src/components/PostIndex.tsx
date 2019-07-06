import { styled } from "linaria/react"
import React from "react"

const PostIndex: React.FC = () => {
  return (
    <Main>
      I'm Anmol. I'm a software engineer in Toronto, Canada. This is my personal site and blog.
      <ol reversed>
        {[...Array(10).keys()].reverse().map(i => {
          i += 1
          return (
            <li key={i}>
              {i === 10 ? <h2>2019</h2> : null}
              {i === 5 ? <h2>2018</h2> : null}
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
  
  h2 {
    font-weight: normal;
    margin-top: 50px;
  }
`

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
