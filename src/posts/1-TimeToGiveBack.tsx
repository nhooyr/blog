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
        I'm a <i>fully</i> self taught engineer. I did not attend university and I did not graduate high school. While a
        major factor in my success as an engineer has been my own personal initiative and focus, the incredible amount
        of quality information available online in the form of blog posts, forums and pdfs has contributed immensely as
        well.
      </P>
      <P>
        I was convinced since at the end of my junior year of high school I was hired as a full time engineer by{" "}
        <Link href="https://coder.com">Coder</Link>. If while in high school, I could become employed as a software
        engineer by a real technology company, I figured it made
      </P>
    </>
  )
}
