"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "../generic-components/section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="font-mulish max-w-[45rem] text-center leading-8 
      scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me ✨</SectionHeading>
      <p className="mb-3 text-xl">
        Ever since I was young, technology has always been full of surprises for
        me. Although a common experience for everybody, from video games to CGI
        in entertainment, I was personally{" "}
        <span className="font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
          intrigued to hear how things worked.
        </span>
        <br />
        <br />
        Because of this, the accessibility to express yourself, I believe it's
        the reason I've picked up a lot of{" "}
        <span className="font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
          hobbies{" "}
        </span>
        over the years. Well, not that many, but from learning to play the
        ukulele, painting, skateboarding (I still can't do tricks), to
        eventually editing, writing music and stories, making video games and
        web applications,{" "}
        <span className="font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
          I've always enjoyed the journey
        </span>
        , especially since I like to share what I do with my close friends.
        Occasionally, when it comes to my personal GitHub projects, it's a
        love-hate relationship because of the bugs I stumble upon, but I manage
        in the end.
      </p>
    </motion.section>
  );
}
