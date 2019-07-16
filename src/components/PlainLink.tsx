import React, { ReactNode } from "react"
import { css } from "styled-components"

const PlainLink: React.FC<{ href: string; children: ReactNode }> = props => {
  return (
    <a
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
    </a>
  )
}

export default PlainLink
