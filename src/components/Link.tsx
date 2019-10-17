import * as React from "react"
import { AnchorHTMLAttributes } from "react"
import { Link, LinkProps as RouterLinkProps } from "react-router-dom"
import styled, { css } from "styled-components"

interface LinkProps {
  readonly visitable?: boolean
}

function linkStyles(props: LinkProps) {
  if (props.visitable == undefined) {
    props = {
      visitable: true,
      ...props,
    }
  }

  return css`
    :link {
      text-decoration: none;
      color: black;
    }

    :visited {
      color: ${props.visitable ? "purple" : "black"};
    }

    :active {
      color: red;
    }
  `
}

// TODO it'd be nice to figure out at some point how to abstract away stripping a prop.
export const InternalLink = styled((props: RouterLinkProps) => <Link {...{
  ...props,
  visitable: undefined,
}} />)<LinkProps>(linkStyles)

export const ExternalLink = styled((props: AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <a {...{...props, visitable: undefined}} />
))<LinkProps>(linkStyles)
