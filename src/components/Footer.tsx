import { css } from "styled-components"
import React from "react"
import A from "./A"

const Footer: React.FC = () => {
  return (
    <footer
      css={css`
        display: flex;
      `}
    >
      <A
        css={css`
          margin-left: auto;
        `}
        href="mailto:hi@nhooyr.io"
      >
        contact
      </A>
    </footer>
  )
}

export default Footer
