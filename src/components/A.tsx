import styled from "styled-components"
// import React from "react"

// const Link: React.FC = (): => {}

const A = styled.a<{ visitable?: boolean }>`
  :link {
    text-decoration: none;
    color: black;
  }

  :visited {
    color: ${(props): string => (props.visitable ? "purple" : "black")};
  }

  :active {
    color: red;
  }
`

A.defaultProps = {
  visitable: true,
}

export default A
