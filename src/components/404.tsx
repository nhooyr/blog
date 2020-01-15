import { css } from "@emotion/core"
import React from "react"
import H1 from "./H1"

export function NotFound() {
  return (
    <div
      css={css`
        top: 0;
        left: 0;
        position: fixed;
        width: 100vw;
        height: 100vh;
        min-height: 400px;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: -1;
      `}
    >
      <H1
        css={css`
          margin: 0;
          font-size: 200px;
          font-weight: 100;
        `}
      >
        404
      </H1>
    </div>
  )
}
