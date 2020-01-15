import React from "react"
import { formatDate, Meta } from "../posts"
import H1 from "./H1"
import { H3 } from "./H3"

export default function PostHeader(props: Meta) {
  return (
    <div>
      <H1>{props.title}</H1>
      <H3>{formatDate(props.publishDate)}</H3>
      {props.editDate && <h3>{formatDate(props.editDate)}</h3>}
    </div>
  )
}
