import { css } from "@emotion/core"
import React, { useCallback, useState } from "react"
import Link from "../components/Link"
import P from "../components/P"

export default function WhyNhooyr() {
  const [rot13Input, setROT13Input] = useState("nhooyr")
  const onROT13Change = useCallback((ev: React.ChangeEvent<HTMLInputElement>) => {
    setROT13Input(ev.target.value)
  }, [
    setROT13Input,
  ])
  const rot13Submit = useCallback(ev => {
    ev.preventDefault()

    let cipherText = ""
    for (let char of rot13Input) {
      let cc = char.charCodeAt(0)
      if (65 <= cc && cc <= 90) {
        cc = ((cc - 65) + 13) % 26 + 65
        char = String.fromCharCode(cc)
      } else if (97 <= cc && cc <= 122) {
        cc = ((cc - 97) + 13) % 26 + 97
        char = String.fromCharCode(cc)
      }

      cipherText += char
    }
    setROT13Input(cipherText)
  }, [rot13Input, setROT13Input])

  if (process.env.NODE_ENV === "production") {
    return <P>Coming soon...</P>
  }
  return (
    <>
      <P>
        Back in middle school, I went through quite a few online usernames but never settled on one. Whenever I'd sign
        up for a new service, my current username happened to be taken and then I would conjure up a new one.
      </P>
      <P>
        First it was anmol444, then armyofminions and then aubble. Around the 9th grade, I remember trying to sign up
        for twitter with aubble but it happened to be taken. I became frustrated at having different usernames for
        different services and decided to find a name that wasn't taken.
      </P>
      <P>
        I was reading a <Link href="https://en.wikipedia.org/wiki/The_Code_Book">book on cryptography</Link> at the time
        and had learnt about the <Link href="https://en.wikipedia.org/wiki/rot13">ROT13</Link> cipher. It's a
        monoalphabetic cipher where each letter maps to the 13th letter after it in the alphabet. It has the elegant
        property that encryption and decryption identical operations.
      </P>
      <P>
        I applied it to aubble and out came nhooyr. I ran a google search on nhooyr. For the first time ever I saw a
        google page with zero results.
      </P>
      <P>That’s when I knew it was mine.</P>
      <form onSubmit={rot13Submit}>
        <input type="text" name="ROT13" value={rot13Input} onChange={onROT13Change} />
        <input css={css`
  :active {
    color: red;
  }
`} type="submit" value="ROT13" />
      </form>
    </>
  )
}
