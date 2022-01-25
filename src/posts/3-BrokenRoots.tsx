import React from "react"
import P from "../components/P"
import Link from "../components/Link"
import posts from "."

export default function BrokenRoots() {
  return (
    <>
      <P>
        <em>
          <strong>edit:</strong>
        </em>{" "}
        It's been a rocky year. Very high highs and very low lows. I started writing this blog post on December 25, 2020
        but I've finally published it now on January 25th, 2020. Not because it was hard to write but because I wasn't
        comfortable with it being public. I'm still not but it's good practice being vulnerable in public and I think
        it could help someone with similar thoughts.
      </P>
      <P>
        I've greatly come to appreciate how little I understand anything. Every question I answer I have ten more. At my
        current rate, most of my ambitions will be left abandoned. It makes me sad. I need to get faster and so I've
        decided to quit my job at Coder and work on my productivity full time. My goal over next year is to understand
        and reliably replicate my peak productivity every single day.
      </P>
      <P>I have a strong intuition I can be much faster and I'm going to lay out my reasoning below.</P>
      <P>
        My primary problem my whole life up until now has been my unreliability. I suspect it's similar for many. One
        day I feel elated but the next I can't get out of bed. Or I'm only productive in the very late hours of the
        night which is completely impractical and leads to my sleep schedule constantly shifting forward.
      </P>
      <P>
        Back in highschool I had many consecutive months of incredible productivity that allowed me to get very good at
        software, physics and math. It happened once in grade 9, a few times in grade 10, a few times in grade 11 and
        then once in grade 12. These periods of incredible performance are how I got good enough to get hired at
        coder.com. See <Link href={posts.slice().reverse()[0].meta.path}>Time to Give Back</Link>.
      </P>
      <P>
        After I started working in the industry, I've only felt the same levels of productivity once. It frustrates me
        to no end. I see no reason why I shouldn't be able to replicate my performance during those times again.
      </P>
      <P>
        Yes I've talked to doctors to see if I'm depressed or suffer from anxiety and they say I do. I've tried
        anti-depressants but they don't seem to work and carry numerous negative side effects. Based on what I've
        intuited and read, I'm not convinced that the science behind modern mental health is robust or correct. I'm not
        going to justify that claim in this blog as it deserves it's own but bear with me.
      </P>
      <P>
        Because of their fundamental influence upon the entirety of my life, my core habits and behaviors are my
        "roots". They are presently broken because I cannot be reliably productive to the degree I believe I'm capable
        of. I should clarify that by productive I don't merely mean able to do things but do things with a near
        axiomatic level of precision and understanding. It's impossible to define and it's mostly intuition but I just
        know I'm not operating at the level I could be.
      </P>
      <P>
        Not only do I wish to find a set of roots but I also wish to find the most minimal set of maximally efficient
        roots. The most minimal solution to every problem tends to contain the most truth.
      </P>
      <P>
        I've discussed the topic of my broken roots with many people. The advice I've heard most is that I'm just burnt
        out or just need to tough it out. For a variety of reasons I've come to believe that neither reason adds up. I
        genuinely do not believe that people can burn out in the way that is commonly believed. Nor do I accept that it
        is efficient to solider though.
      </P>
      <P>
        It's very hard to reflect, look inward and realize you're not living up to your potential. But easy to blame it
        on burnout or needing to "try" harder. The reality as far as I understand it is that most people are always
        trying their best. No one intentionally doesn't try. That very notion doesn't align with human behaviour. Why
        wouldn't someone try their best? At the very least, it certainly doesn't apply to me. I'm always trying as hard
        as I can. What I'm getting at is that I believe there are real concrete reasons for my inferior performance,
        especially compared to my past and they're not because I've been doing it too long or because I haven't been
        trying enough.
      </P>
      <P>I mean no offence to anyone who has given or accepted said advice.</P>
      <P>
        I know I seem like a crazy fanatic but I trust my intuition and vision. I'll update the blog once I have
        something concrete. Until I'm satisfied with my roots, I can't stand by anything I write. I made an exception
        for this one post.
      </P>
    </>
  )
}
