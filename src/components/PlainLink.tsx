import React, { ReactNode } from "react"
import { css } from "styled-components"
import A from "./A"

const PlainLink: React.FC<{ href: string; children: ReactNode }> = props => {
  return (
    <A
      css={css`
        :visited {
          color: black;
        }

        :active {
          color: red;
        }
      `}
      href={props.href}
    >
      {props.children}
    </A>
  )
}

export default PlainLink
