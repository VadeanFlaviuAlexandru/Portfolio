"use client";

import { useTheme } from "@/context/theme-context";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import SectionHeading from "../generic-components/section-heading";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="font-mulish scroll-mt-28">
      <SectionHeading>My experience 🚀</SectionHeading>
      <VerticalTimeline lineColor="">
        {experiencesData.map((item, index) => (
          <React.Fragment key={index}>
            <VerticalTimelineElement
              contentStyle={{
                background: theme === "light" ? "white" : "rgba(0, 0, 0, 0.2)",
                boxShadow: "none",
                border:
                  theme === "light"
                    ? "1px solid rgba(0, 0, 0, 0.2)"
                    : "1px solid rgba(255, 255, 255, 0.7)",
                textAlign: "left",
                padding: "1.3rem 2rem",
              }}
              contentArrowStyle={{
                borderRight:
                  theme === "light"
                    ? "0.4rem solid rgba(0, 0, 0, 0.2)"
                    : "0.4rem solid rgba(255, 255, 255, 0.7)",
              }}
              date={item.date}
              icon={item.icon}
              iconStyle={{
                background: theme === "light" ? "white" : "#0e131f",
                fontSize: "1.5rem",
              }}
            >
              <h3 className="font-bold capitalize text-lg">{item.title}</h3>
              <p className="!font-bold !mt-0 !text-base">{item.location}</p>
              <p
                className="!mt-1 !font-normal text-black dark:text-white"
                dangerouslySetInnerHTML={{ __html: item.description }}
              />
            </VerticalTimelineElement>
          </React.Fragment>
        ))}
      </VerticalTimeline>
    </section>
  );
}
