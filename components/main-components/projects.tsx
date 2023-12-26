"use client";

import { projectsData, projectsDataSecondPage } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React, { useState } from "react";
import Project from "../generic-components/project";
import SectionHeading from "../generic-components/section-heading";
import { StaticImageData } from "next/image";

interface project {
  title: string;
  description: string;
  tags: string[];
  githubLink: string;
  imageUrl: StaticImageData;
  DemoButton: boolean;
  demo: string;
}
[];

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);
  const [secondPage, setSecondPage] = useState(false);
  const [projects, setProjects] = useState<project[]>(projectsData);

  return (
    <section ref={ref} id="projects" className="font-mulish scroll-mt-28">
      <div className="flex flex-col justify-center items-center">
        <SectionHeading>My projects 📚</SectionHeading>
        <p
          className="max-w-[41rem] text-center leading-8 
      scroll-mt-28 m-10 text-xl"
        >
          If a project captures your interest, feel free to visit its GitHub
          page. There, you'll discover the complete details accompanied by
          screenshots!
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
        <div className="flex justify-center items-center">
          <button
            className="group bg-white px-7 py-3 flex items-center 
        gap-2 rounded-full outline-none focus:scale-110 
        hover:scale-110 active:scale-105 transition cursor-pointer 
        borderBlack dark:bg-white/10 dark:text-white
        mt-5"
            onClick={() => {
              setSecondPage(true);
              setProjects((projects) => [
                ...projects,
                ...projectsDataSecondPage,
              ]);
            }}
          >
            show more
          </button>
        </div>
      )}
    </section>
  );
}
