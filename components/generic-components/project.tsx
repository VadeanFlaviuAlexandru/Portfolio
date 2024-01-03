"use client";

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image, { StaticImageData } from "next/image";
import { useRef } from "react";
import "./project.scss";

type ProjectProps = {
  title: string;
  description: string;
  tags: string[];
  imageUrl: StaticImageData | null;
  githubLink: string;
  demo: string | null;
};

const GradientText: React.FC<{ text: string }> = ({ text }) => {
  const gradientPairs = [
    "A full-stack web application",
    "top-down 2D game demo",
    "distinct user roles",
    "different responsibilities and restrictions",
    "CRUD operations and comprehensive statistics",
    "artificial intelligence, large language models",
    "summarizing",
    "calculating probabilities",
    "I developed a script",
    "rock-paper-scissors game",
    "client-side storage",
    "working calculator",
    "day and night theme toggle button.",
    "Using Python",
  ];

  return (
    <span>
      {text.split(new RegExp(`(${gradientPairs.join("|")})`)).map((part, i) => (
        <span
          key={i}
          className={
            gradientPairs.includes(part)
              ? "font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent"
              : ""
          }
        >
          {part}
        </span>
      ))}
    </span>
  );
};

export default function Project({
  title,
  description,
  tags,
  imageUrl,
  githubLink,
  demo,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{ scale: scaleProgess, opacity: opacityProgess }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section
        className={`
        bg-white border-black max-w-[50rem] rounded-lg overflow-hidden
        sm:pr-4 sm:group-even:pr-1 relative sm:h-[21rem] hover:bg-black/10
        transition ${
          imageUrl !== null ? "sm:group-even:pl-8" : "sm:group-even:pl-0"
        }
        dark:text-white dark:bg-white/10 dark:hover:bg-white/20
      `}
      >
        <div
          className={`
          pt-5 px-5 sm:pl-5 sm:pr-4 sm:pt-5
          ${imageUrl !== null ? "sm:max-w-[65%]" : "sm:max-w-full"}
          flex flex-col h-full
          ${
            imageUrl !== null
              ? "sm:group-even:ml-[17.5rem]"
              : "sm:group-even:mr-10"
          } sm:group-even:pr-0
        `}
        >
          <h3 className="text-2xl font-semibold">{title}</h3>
          <ul className="flex flex-wrap mt-1 gap-2 ">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase 
                tracking-wider text-white rounded-full dark:text-white"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <p className="mt-4 leading-relaxed text-black dark:text-white">
            <GradientText text={description} />{" "}
          </p>
          <div className="flex flex-row mt-auto mb-5 gap-5 max-sm:mt-5">
            <a
              className="bg-white p-2 text-black rounded-full
            focus:scale-[1.15] hover:scale-[1.15] 
            active:scale-105 transition cursor-pointer borderBlack 
            dark:bg-white dark:text-black max-w-px"
              href={githubLink}
              target="_blank"
            >
              Read more on Github
            </a>
            {demo !== null && (
              <a
                className="p-2 rounded-full 
              focus:scale-[1.15] hover:scale-[1.15] 
              active:scale-105 transition cursor-pointer borderBlack 
            text-black max-w-px gradient-animation"
                href={demo == null ? "" : demo}
                target="_blank"
              >
                Demo
              </a>
            )}
          </div>
        </div>
        {imageUrl !== null && (
          <Image
            src={imageUrl == null ? "" : imageUrl}
            alt="Project I worked on"
            quality={95}
            className="absolute hidden sm:block top-8 -right-40 group-even:w-[28.5rem] w-[27.5rem] rounded-t-lg 
          shadow-2xltransition group-hover:scale-[1.04] group-hover:-translate-x-3 
          first-letter:group-hover:translate-y-3 group-hover:-rotate-2
          group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3
          group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
          />
        )}
      </section>
    </motion.div>
  );
}
