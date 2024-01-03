"use client";

import { projectsData, projectsDataSecondPage } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion, useScroll, useTransform } from "framer-motion";
import { StaticImageData } from "next/image";
import React, { useRef, useState } from "react";
import Project from "../generic-components/project";
import SectionHeading from "../generic-components/section-heading";

interface project {
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  imageUrl: StaticImageData | null;
  demo: string | null;
}
[];

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [secondPage, setSecondPage] = useState(false);
  const [projects, setProjects] = useState<project[]>(projectsData);
  const refer = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: refer,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <section ref={ref} id="projects" className="font-mulish scroll-mt-28">
      <div className="flex flex-col justify-center items-center">
        <SectionHeading>My projects 📚</SectionHeading>
        <p
          className="max-w-[40rem] text-center leading-8 
      scroll-mt-28 m-10 text-xl"
        >
          If a project captures your interest, feel free to visit its{" "}
          <span className="font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
            GitHub page
          </span>
          . You'll discover the{" "}
          <span className="font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
            complete details
          </span>{" "}
          accompanied by{" "}
          <span className="font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
            screenshots!
          </span>{" "}
        </p>
      </div>
      <div>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
      {!secondPage && (
        <motion.div
          ref={refer}
          style={{ scale: scaleProgess, opacity: opacityProgess }}
          className="flex justify-center items-center"
        >
          <button
            className="group bg-white px-7 py-3 flex items-center 
        gap-2 rounded-full outline-none focus:scale-110 
        hover:scale-110 active:scale-105 transition cursor-pointer 
        borderBlack dark:bg-white/10 dark:text-white
        mt-20"
            onClick={() => {
              setSecondPage(true);
              setProjects((projects) => [
                ...projects,
                ...projectsDataSecondPage,
              ]);
            }}
          >
            I can also show some older projects...
          </button>
        </motion.div>
      )}
      {secondPage && (
        <motion.div
          ref={refer}
          style={{ scale: scaleProgess, opacity: opacityProgess }}
          className="flex justify-center items-center"
        >
          <p className="max-w-[40rem] text-center leading-8 mt-20 text-2xl">
            I have a few even older projects, but they are relatively simple.
            While{" "}
            <span className="font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
              I did contribute to group projects
            </span>{" "}
            during my time at the faculty, they remain incomplete. If you're
            curious, you can find them on my GitHub!
          </p>
        </motion.div>
      )}
    </section>
  );
}
