import { css } from "@emotion/core"
import React from "react"

export function Text(props: { value: string; onChange: React.ChangeEventHandler<HTMLInputElement> }) {
  return (
    <input
      type="text"
      {...props}
      css={css`
        border-radius: 5px;
      `}
    />
  )
}

export function Submit(props: { value: string }) {
  return (
    <input
      type="submit"
      {...props}
      css={css`
        border-radius: 5px;
        background-color: rgb(0, 112, 201);
        color: white;
        :active {
          color: red;
        }
      `}
    />
  )
}
