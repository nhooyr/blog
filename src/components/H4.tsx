import React from "react"
import { css } from "@emotion/core"

export function H4(props: React.PropsWithChildren<{}>) {
  return (
    <h3
      css={css`
        font-weight: 300;
        font-size: 15px;
        margin: 5px 0 0 0;
      `}
      {...props}
    />
  )
}
