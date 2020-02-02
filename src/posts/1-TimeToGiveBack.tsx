import React from "react"
import Link from "../components/Link"
import P from "../components/P"

export default function TimeToGiveBack() {
  if (process.env.NODE_ENV === "production") {
    return <P>Coming soon...</P>
  }
  return (
    <>
      <P>Hi, I'm Anmol. I go by nhooyr on the internet. I'm a software engineer from Toronto.</P>
      <P>

        The last three years of my life have been some of the most wonderful and unexpected. I dropped out of high
        school in Grade 12 to take a full time software engineering position at{" "}
        <Link href="https://coder.com">Coder</Link>.
      </P>
    </>
  )
}
