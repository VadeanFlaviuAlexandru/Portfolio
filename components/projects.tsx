"use client";

import { projectsData } from "@/lib/data";
import React from "react";
import { DuckWashingMachine } from "./3d_models/DuckWashingMachine";
import Project from "./generic_components/project";
import SectionHeading from "./generic_components/section-heading";

export default function Projects() {
    return (
        <section id="projects" className="scroll-mt-28 mb-28">
            <SectionHeading>My projects</SectionHeading>
            <div>
                {projectsData.map((project, index) => (
                    <React.Fragment key={index}>
                        <Project {...project} />
                    </React.Fragment>
                ))}
            </div>
            <DuckWashingMachine />
        </section>
    );
}