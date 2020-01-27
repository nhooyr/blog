import { css } from "@emotion/core"
import React from "react"
import * as navi from "react-navi"

interface Props extends navi.Link.Props {
  readonly visitable?: boolean
}

export default function Link(props: Props) {
  if (props.visitable === undefined) {
    props = {
      ...props,
      visitable: true,
    }
  }

  return (
    <navi.Link
      css={css`
        :link {
          text-decoration: none;
          color: inherit;
        }
        :visited {
          color: ${props.visitable ? "purple" : "inherit"};
        }
        :hover {
          text-decoration: underline;
        }
        :active {
          color: red;
        }
      `}
      {...{ ...props, visitable: undefined }}
    />
  )
}
