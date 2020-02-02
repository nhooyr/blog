import { css } from "@emotion/core"
import React from "react"

export default function H1(props: React.PropsWithChildren<{}>) {
  return (
    <h1
      css={css`
        color: var(--bright-color);
        font-size: 50px;
        line-height: 1.2;
        margin: 20px 0 0 0;
        font-weight: 300;
      `}
      {...props}
    />
  )
}
