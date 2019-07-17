import { css } from "styled-components"
import React from "react"
import A from "./A"

const Footer: React.FC = () => {
  return (
    <footer
      css={css`
        margin-top: 35px;
      `}
    >
      <A
        css={css`
          float: right;
        `}
        href="mailto:hi@nhooyr.io"
      >
        contact
      </A>
    </footer>
  )
}

export default Footer
