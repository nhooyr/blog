import { css } from "@emotion/core"
import React from "react"

export default function H2(props: React.PropsWithChildren<{}>) {
  return (
    <h2
      css={css`
        font-size: 30px;
        font-weight: 300;
      `}
      {...props}
    />
  )
}
