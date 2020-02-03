import React from "react"
import Link from "../components/Link"
import P from "../components/P"

export default function TimeToGiveBack() {
  return (
    <>
      <P>Hi, I'm Anmol. I go by nhooyr on the internet. I'm a software engineer from Toronto.</P>
      <P>I am a self taught engineer. I did not attend university and I did not graduate high school.</P>
      <P>
        In July, 2017, at the end of my junior year of high school I became employed as a full time engineer at{" "}
        <Link href="https://coder.com">Coder</Link>. As I was able to gain employment during high school, I felt there
        was no need for me to continue schooling and so I promptly dropped out.
      </P>
      <P>
        The greatest factor in my success as an engineer has been my own passion, initiative and focus. Nevertheless,
        the sheer volume of quality information online I have read in websites, blogs and forums has contributed
        immensely. For at least the last 8 years, the internet has been my primary source of education.
      </P>
      <P>It is time for me to contribute back.</P>
      <P>
        On this blog you can expect to find quality writings about software, philosophy, life and everything in between.
        There will never be <i>any</i> ads, popups or bullshit.
      </P>
      <P>
        From a technical standpoint, I believe this blog is well engineered and one of my first posts will be to justify
        its inner workings and help demystify modern frontend development.
      </P>
      <P>
        You can retrieve the full source code behind this blog and follow my progress at{" "}
        <Link href="https://github.com/nhooyr/blog">github.com/nhooyr/blog</Link>.
      </P>
      <P>I sincerely hope my efforts with this blog are successful in giving back.</P>
    </>
  )
}
