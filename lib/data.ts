import Harap from "@/public/projects/Harap.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Faculty of Mathematics and Computer Science",
    location: "Babes-Bolyai University",
    description:
      "I graduated the Faculty of Mathematics and Computer Science in English at Babes-Bolyai University.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023",
  },
  {
    title: "Apprentice Web Developer",
    location: "Transart",
    description:
      "Enrolled in Transart's apprenticeship program to gain foundational knowledge in JavaScript, databases, and REST APIs. Created various CRUD projects using Google's Firebase, Dexie.js, andASP.NET.",
    icon: React.createElement(CgWorkAlt),
    date: "07/2022 – 08/2022",
  },
  {
    title: "Intern - Full Stack Web Developer",
    location: "Cicada Technologies",
    description:
      "Developed and rigorously tested components and features for Next.js projects, simultaneously handling backend development using Python, REST APIs, and PostgreSQL. Designed an automatic program that utilizes AI to extract specific data from PDF and Excel files, alongside studying the technology. Constructed an automated Python tool for extracting and exporting data from Trello boards into Excel files.",
    icon: React.createElement(FaReact),
    date: "04/2023 – 08/2023",
  },
] as const;

export const projectsData = [
  {
    title: "Povestea lui Harap-Alb",
    description:
      "A playable demo of the famous romanian folktale: Povestea lui Harap-Alb.",
    tags: ["Phaser"],
    imageUrl: Harap,
  },
] as const;

export const skillsDataPro = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Python",
] as const;

export const skillsDataFam = ["PostgreSQL", "Framer Motion"] as const;
