import { css } from "@emotion/core"
import React, { AnchorHTMLAttributes } from "react"
import * as Router from "react-router-dom"

export const Link: React.FC<LinkProps & Router.LinkProps> = props => (
  <Router.Link css={linkStyles(props.visitable)} {...stripVisitable(props)} />
)

export const A: React.FC<LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>> = props => (
  <a css={linkStyles(props.visitable)} {...stripVisitable(props)} />
)

function stripVisitable<T extends LinkProps>(props: T) {
  return { ...props, visitable: undefined }
}

function linkStyles(visitable = true) {
  return css`
    :link {
      text-decoration: none;
      color: black;
    }
    :visited {
      color: ${visitable ? "purple" : "black"};
    }
    :active {
      color: red;
    }
  `
}

interface LinkProps {
  readonly visitable?: boolean
}
