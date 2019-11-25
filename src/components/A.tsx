import { css } from "@emotion/core"
import React, { AnchorHTMLAttributes } from "react"
import { HashLink } from "react-router-hash-link"

interface Props {
  readonly children: React.ReactNode
  readonly href: string
  readonly visitable?: boolean
}

export default function A(props: Props & AnchorHTMLAttributes<HTMLAnchorElement>) {
  props = { ...props, css: linkStyles(props.visitable), visitable: undefined }

  try {
    new URL(props.href)
    return <a href={props.href} {...props} />
  } catch {
    return <HashLink to={props.href} {...props} />
  }
}

function linkStyles(visitable = true) {
  return css`
    :link {
      text-decoration: none;
      color: inherit;
    }
    :visited {
      color: ${visitable ? "purple" : "inherit"};
    }
    :active {
      color: red;
    }
  `
}
