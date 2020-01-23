import { FC } from "react"
import * as WhyNhooyr from "./WhyNhooyr"
import * as BeginningMyBlog from "./BeginningMyBlog"

export interface Meta {
  readonly title: string
  readonly path: string
  readonly publishDate: Date
  readonly editDate?: Date
}

export interface Post {
  readonly meta: Meta
  readonly body: () => Promise<FC>
}

export function formatDate(date: Date) {
  return date.toLocaleString(undefined, { month: "long", day: "numeric", year: "numeric" })
}

const index: Array<Post> = [
  {
    meta: WhyNhooyr.meta,
    body: () => import("./WhyNhooyr").then(m => m.body),
  },
  {
    meta: BeginningMyBlog.meta,
    body: () => import("./BeginningMyBlog").then(m => m.body),
  },
]

export default index
