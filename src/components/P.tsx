import { css } from "@emotion/core"
import React from "react"

export default function P(props: React.PropsWithChildren<{}>) {
  return (
    <p
      css={css`
        line-height: 2;

        > a {
          text-decoration: underline !important;
        }
      `}
      {...props}
    />
  )
}
