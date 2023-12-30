import Harap from "@/public/projects/Harap.png";
import RockPaperScissors from "@/public/projects/RockPaperScissors.png";
import TerraTech from "@/public/projects/TerraTech.png";
import Calculator from "@/public/projects/Calculator.png";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
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
      "- I graduated the Faculty of Mathematics and Computer Science in English at Babes-Bolyai University.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 - 2023",
  },
  {
    title: "Apprentice Web Developer",
    location: "Transart",
    description:
      "- Enrolled in Transart's apprenticeship program to gain foundational knowledge in JavaScript, databases, and REST APIs. <br /> - Created various CRUD projects using Google's Firebase, Dexie.js, and ASP.NET.",
    icon: React.createElement(CgWorkAlt),
    date: "07/2022 – 08/2022",
  },
  {
    title: "Intern - Full-Stack Web Developer",
    location: "Cicada Technologies",
    description:
      "- Developed and rigorously tested components and features for Next.js projects, simultaneously handling backend development using Python, REST APIs, and PostgreSQL.<br /> - Designed an automatic program that utilizes AI to extract specific data from PDF and Excel files, alongside studying the technology.<br /> - Constructed an automated Python tool for extracting and exporting data from Trello boards into Excel files.",
    icon: React.createElement(CgWorkAlt),
    date: "04/2023 – 08/2023",
  },
] as const;

export const projectsData = [
  {
    title: "Povestea lui Harap-Alb",
    description:
      "A full-stack web application featuring authentication, inviting users to play a pixelated top-down 2D game demo inspired by the renowned Romanian folklore, 'Povestea lui Harap-Alb'. Along the way, they can engage in various mini-games to achieve high scores for a chance to appear on the leaderboards.",
    tags: ["React Router & Redux", "Spring Boot", "Material UI", "Phaser"],
    githubLink:
      "https://github.com/VadeanFlaviuAlexandru/Bachelor_Project___Povestea_Lui_HarapAlb",
    imageUrl: Harap,
    hasImage: true,
    DemoButton: true,
    demo: "https://povestea-lui-harap-alb.netlify.app/",
  },
  {
    title: "TerraTech",
    description:
      "A full-stack web application simulating the management of a company branch, with distinct user roles, including Admin, Manager, and Employee. The main focus is on user-friendly CRUD operations and comprehensive statistics across multiple teams.",
    tags: ["React Router & Redux", "TypeScript", "Spring Boot"],
    githubLink: "https://github.com/VadeanFlaviuAlexandru/TerraTech",
    imageUrl: TerraTech,
    hasImage: true,
    DemoButton: false,
    demo: "",
  },
];

export const projectsDataSecondPage = [
  {
    title: "PDF and XLS Summarization With ChatGPT and Hugging Face",
    description:
      "A solo project to which I was assigned in the last days of my internship at Cicada Technologies. The project involved researching artificial intelligence, large language models, and their application together for summarizing given PDF files and calculating probabilities based on provided XLS files. As part of the research, I also compared OpenAI's large language models and embeddings with free models available on Hugging Face.",
    tags: ["Python", "Streamlit", "AI", "LLMs", "Hugging Face APIs"],
    githubLink:
      "https://github.com/VadeanFlaviuAlexandru/AutomatedExtractionWithChatGPT_With_Research",
    imageUrl: RockPaperScissors,
    hasImage: false,
    DemoButton: false,
    demo: "",
  },
  {
    title: "Automated Extraction With Trello",
    description:
      "I had a solo project to which I was assigned in the middle of my internship at Cicada Technologies. The goal of the project was to retrieve data from a Trello board and exporting it to an Excel file. The initial phase involved conducting a brief research study. Using Python togheter with the py-trello library, I developed a script for retrieving the data. I utilized pandas to export the acquired data to an XLS file.",
    tags: ["Python", "Py-trello", "Trello API", "Pandas DataFrame"],
    githubLink:
      "https://github.com/VadeanFlaviuAlexandru/Bachelor_Project___Povestea_Lui_HarapAlb",
    imageUrl: RockPaperScissors,
    hasImage: false,
    DemoButton: false,
    demo: "",
  },
  {
    title: "Rock Paper Scissors ",
    description:
      "My first personal project aimed to understand CSS, HTML, and JavaScript—a local rock-paper-scissors game implemented in JavaScript, featuring client-side storage and incorporating various fun packages.",
    tags: ["JavaScript", "Dexie.js", "Bootstrap"],
    githubLink:
      "https://github.com/VadeanFlaviuAlexandru/Bachelor_Project___Povestea_Lui_HarapAlb",
    imageUrl: RockPaperScissors,
    hasImage: true,
    DemoButton: true,
    demo: "https://therockthepapertheschissors.netlify.app/",
  },
  {
    title: "Calculator",
    description:
      "A simple yet functional working calculator made in React, featuring a convenient day and night theme toggle button.",
    tags: ["React", "Responsive"],
    githubLink: "https://github.com/VadeanFlaviuAlexandru/Simple_Calculator",
    imageUrl: Calculator,
    hasImage: true,
    DemoButton: true,
    demo: "https://prettysimplecalculator.netlify.app/",
  },
];

export const skillsDataComfortable = [
  "JavaScript",
  "TypeScript",
  "React",
  "React Redux",
  "React Router",
  "Next.js",
  "Phaser 3",
  "SCSS",
  "Material UI",
  "Git",
  "Swagger / Postman",
  "Java",
  "Spring Boot",
] as const;

export const skillsDataPast = [
  "Angular",
  "Tailwind",
  "Python",
  "PostgreSQL",
  "Docker",
  "RabbitMQ",
  "JUnit 5",
  "Mockito",
  "Langchain",
  "Large Language Models",
  "AI",
] as const;

export const skillsDataMiscellaneous = [
  "Programming",
  "Content creation",
  "Technology",
  "Communication",
  "Teamwork",
  "Flexibility",
  "Problem-Solving",
  "Open-Mindedness",
] as const;
