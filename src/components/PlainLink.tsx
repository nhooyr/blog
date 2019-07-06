import React, { ReactNode } from "react"
import { css } from "linaria"

const PlainLink: React.FC<{ href: string; children: ReactNode }> = props => {
  return (
    <a
      className={css`
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
