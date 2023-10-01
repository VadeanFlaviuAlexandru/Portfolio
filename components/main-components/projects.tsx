"use client";

import { projectsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import Project from "../generic-components/project";
import SectionHeading from "../generic-components/section-heading";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28">
      <SectionHeading>My projects 📚</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
