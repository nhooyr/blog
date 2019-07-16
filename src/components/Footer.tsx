import { css } from "styled-components"
import React from "react"

const Footer: React.FC = () => {
  return (
    <footer
      css={css`
        display: flex;
      `}
    >
      <a
        css={css`
          margin-left: auto;
        `}
        href="mailto:hi@nhooyr.io"
      >
        contact
      </a>
    </footer>
  )
}

export default Footer
