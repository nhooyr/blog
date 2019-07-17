import styled from "styled-components"

const A = styled.a<{ visitable?: boolean }>`
  :link {
    text-decoration: none;
    color: black;
  }

  :visited {
    color: ${props => (props.visitable ? "purple" : "black")};
  }

  :active {
    color: red;
  }
`

A.defaultProps = {
  visitable: true,
}

export default A
