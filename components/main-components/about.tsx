"use client";

import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "../generic-components/section-heading";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className=" max-w-[45rem] text-center leading-8 
      scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me ✨</SectionHeading>
      <p className="mb-3">
        I've had a lifelong appreciation for art, and technology has opened up
        exciting avenues for creative expression for not just myself but for
        everyone. Over time, my curiosity about the inner workings and
        underlying principles grew. Naturally, I embarked on a journey in
        computer science. Upon completing my studies in computer science and
        mathematics at Babes-Bolyai University, I discovered the beautiful
        synergy of merging my two passions: the world of art and the realm of
        technology.
      </p>
    </motion.section>
  );
}
