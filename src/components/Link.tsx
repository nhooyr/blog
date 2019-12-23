import { css } from "@emotion/core"
import React from "react"
import * as navi from "react-navi"
import { useNavigation } from "react-navi"

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
  const navigation = useNavigation()

  const prefetch = () => {
    navigation.prefetch(props.href).catch()
  }
  // @ts-ignore
  return (
    <navi.Link
      onFocus={prefetch}
      onMouseOver={prefetch}
      css={css`
        :link {
          text-decoration: none;
          color: inherit;
        }
        :visited {
          color: ${props.visitable ? "purple" : "inherit"};
        }
        :active {
          color: red;
        }
      `}
      {...{ ...props, visitable: undefined }}
    />
  )
}
