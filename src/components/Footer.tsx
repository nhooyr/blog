import { css } from "linaria"
import React from "react"

const Footer: React.FC = () => {
  return (
    <footer
      className={css`
        display: flex;
      `}
    >
      <a
        className={css`
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
