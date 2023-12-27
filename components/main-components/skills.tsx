"use client";

import {
  skillsDataComfortable,
  skillsDataMiscellaneous,
  skillsDataPast,
} from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import SectionHeading from "../generic-components/section-heading";
import { useState } from "react";

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
  const [more, setMore] = useState(false);

  return (
    <section
      id="skills"
      ref={ref}
      className="font-mulish max-w-[53rem] scroll-mt-28 text-center flex flex-col items-center"
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
      {!more && (
        <motion.button
          className="group bg-white px-7 py-3 flex items-center 
        gap-2 rounded-full outline-none focus:scale-110 
        hover:scale-110 active:scale-105 transition cursor-pointer 
        borderBlack dark:bg-white/10 dark:text-white
        mt-20 !w-60"
          onClick={() => {
            setMore(true);
          }}
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{
            once: true,
          }}
        >
          I can also tell you about...
        </motion.button>
      )}
      {more && (
        <div className="py-10">
          <SectionHeading>
            My{" "}
            <span className="font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Interests
            </span>{" "}
            and{" "}
            <span className="font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              Soft Skills
            </span>
          </SectionHeading>
          <ul
            className="flex flex-wrap justify-center gap-2 text-lg
      text-black"
          >
            {skillsDataMiscellaneous.map((skill, index) => (
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
        </div>
      )}
    </section>
  );
}
