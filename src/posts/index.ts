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
      title: "Broken Roots",
      path: "/2020/12/25/broken-roots",
      publishDate: new Date("Dec 25, 2020"),
      editDate: new Date("Jan 25, 2022"),
    },
    body: () => import("./3-BrokenRoots"),
  },
  {
    meta: {
      title: "Why nhooyr?",
      path: "/why-nhooyr",
      publishDate: new Date("Feb 9, 2020"),
    },
    body: () => import("./2-WhyNhooyr"),
  },
  {
    meta: {
      title: "Time To Give Back",
      path: "/time-to-give-back",
      publishDate: new Date("Feb 2, 2020"),
      editDate: new Date("Dec 20, 2021"),
    },
    body: () => import("./1-TimeToGiveBack"),
  },
]

export default index
