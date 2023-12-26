"use client";

import { skillsDataComfortable, skillsDataPast } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "../generic-components/section-heading";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="font-mulish max-w-[53rem] scroll-mt-28 text-center "
    >
      <SectionHeading>
        What I'm very{" "}
        <span className="font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
          comfortable with
        </span>
      </SectionHeading>
      <ul
        className="mb-10 flex flex-wrap justify-center gap-2 text-lg
      text-black"
      >
        {skillsDataComfortable.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 
            dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
      <SectionHeading>
        What{" "}
        <span className="font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
          I've worked with
        </span>{" "}
        in the past
      </SectionHeading>
      <ul
        className="flex flex-wrap justify-center gap-2 text-lg
      text-black"
      >
        {skillsDataPast.map((skill, index) => (
          <motion.li
            className="bg-white borderBlack rounded-xl px-5 py-3 
            dark:bg-white/10 dark:text-white/80"
            key={index}
            variants={fadeInAnimationVariants}
            initial="initial"
            whileInView="animate"
            viewport={{
              once: true,
            }}
            custom={index}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
