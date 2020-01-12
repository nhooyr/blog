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

export function formatDate(
  date: Date,
  opts: {
    year: boolean
  } = {
    year: true,
  },
) {
  return date.toLocaleString(undefined, { month: "long", day: "numeric", year: opts.year ? "numeric" : undefined })
}

const index: Array<Post> = [
  {
    meta: {
      title: "Why?",
      path: "/why",
      publishDate: new Date("January 10, 2020"),
    },
    body: () => import("./Why"),
  },
  {
    meta: {
      title: "Sup Carberry",
      path: "/sup",
      publishDate: new Date("January 13, 2020"),
    },
    body: () => import("./Sup"),
  },
]

export default index
