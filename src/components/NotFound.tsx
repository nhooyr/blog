import { css } from "@emotion/core"
import React from "react"
import H1 from "./H1"

export function NotFound() {
  return (
    <div>
      // TODO REAL CENTER
      <H1
        css={css`
          text-align: center;
          font-size: 200px;
          font-weight: 100;
        `}
      >
        404
      </H1>
    </div>
  )
}
