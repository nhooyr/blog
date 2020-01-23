import React from "react"
import P from "../components/P"
import Link from "../components/Link"

export const meta = {
  title: "Why nhooyr?",
  path: "/why-nhooyr",
  publishDate: new Date("January 30, 2020"),
}

export function body() {
  return (
    <>
      <P>
        Back in middle school, I went through quite a few online usernames but never settled on one. Whenever I'd sign
        up for a new service, my current username happened to be taken and then I would conjure up a new one.
      </P>
      <P>
        First it was anmol444, then armyofminions and then aubble. Around the 9th grade, I remember trying to sign up for
        twitter with aubble but it happened to be taken. I became frustrated at having different usernames for different
        services and decided to find a name that wasn't taken.
      </P>
      <P>
        I was reading a <Link href="https://en.wikipedia.org/wiki/The_Code_Book">book on cryptography</Link> at the time
        and had learnt about the <Link href="https://en.wikipedia.org/wiki/rot13">ROT13</Link> cipher. It's a
        monoalphabetic cipher where each letter maps to the 13th letter after it in the alphabet. It has the
        elegant property that encryption and decryption identical operations.
      </P>
      <P>
        I applied it to aubble and out came nhooyr. I ran a google search on nhooyr. For the first time ever I saw
        a google page with zero results.
      </P>
      <P>
        That’s when I knew it was mine.
      </P>
    </>
  )
}
