import { FC } from "react"

export interface Meta {
  readonly title: string
  readonly path: string
  readonly publishDate: Date
  readonly editDate?: Date
}

export interface Post {
  readonly meta: Meta
  readonly body: () => Promise<{
    readonly default: FC
  }>
}

export function formatDate(date: Date) {
  return date.toLocaleString(undefined, { month: "long", day: "numeric", year: "numeric" })
}

const index: Array<Post> = [
  {
    meta: {
      title: "Beginning My Blog",
      path: "/beginning-my-blog",
      publishDate: new Date("January 20, 2020"),
    },
    body: () => import("./BeginningMyBlog"),
  },
]

export default index
