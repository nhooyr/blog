import { css } from "@emotion/core"
import React from "react"

export function NotFound() {
  return (
    <div>
      <h1
        css={css`
          text-align: center;
          color: black;
          font-size: 200px;
          font-weight: 100;
        `}
      >
        404
      </h1>
    </div>
  )
}
