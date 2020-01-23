import React from "react"
import P from "../components/P"

export const meta = {
  title: "Beginning My Blog",
  path: "/beginning-my-blog",
  publishDate: new Date("January 20, 2020"),
}

export function body() {
  return (
    <>
      <P>
        Hi, I'm Anmol. I go by nhooyr on the internet. I'm a software engineer from Toronto. I feel a personal
        responsibility towards sharing information. I grew up poor with little guidance
      </P>
    </>
  )
}
