"use client";

import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";
import Alex from "@/public/photos/Alex.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  BsArrowRight,
  BsFillPersonLinesFill,
  BsLinkedin,
} from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { DuckPond } from "../3d-model/DuckPond";
import "./intro.scss";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  const openPDF = () => {
    window.open("/cv/cv.pdf", "_blank");
  };

  return (
    <section
      ref={ref}
      id="home"
      className="max-w-[50rem] text-center sm:mb-0 
      scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src={Alex}
              alt="Ricardo portrait"
              width="192"
              height="192"
              quality="95"
              priority={true}
              className="h-60 w-60 rounded-full object-cover border-[0.15rem] border-blue-100 shadow-xl"
            />
          </motion.div>
          <DuckPond />
        </div>
      </div>

      <motion.h1
        className="font-mulish mb-10 mt-4 px-4 text-2xl font-medium 
        !leading-[1.5] sm:text-4xl max-w-1.25/2"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span>
          Hello <span className="hand inline-block">👋</span> I'm{" "}
          <span className="font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
            Alex
          </span>
        </span>
        <br />I have a{" "}
        <span className="font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
          deep appreciation
        </span>{" "}
        for{" "}
        <span className="font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
          art
        </span>{" "}
        and{" "}
        <span className="font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
          technology
        </span>
        , which is why I like building{" "}
        <span className="font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
          full-stack web applications.
        </span>
      </motion.h1>

      <motion.div
        className="font-mulish flex flex-col sm:flex-row items-center 
        justify-center gap-5 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-black text-white px-7 py-3 
          flex items-center gap-2 rounded-full outline-none 
          focus:scale-110 hover:scale-110 hover:bg-black/95
          active:scale-105 transition font-xl dark:bg-white dark:text-black"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
        </Link>

        <a
          className="group bg-white px-7 py-3 flex items-center 
          gap-2 rounded-full outline-none focus:scale-110 
          hover:scale-110 active:scale-105 transition cursor-pointer 
          borderBlack dark:bg-white/10 dark:text-white"
          href="#"
          onClick={openPDF}
        >
          Check my CV
          <BsFillPersonLinesFill className="dark:text-white group-hover:translate-x-2 transition" />
        </a>

        <a
          className="bg-white p-4
          hover:text-gray-950 flex items-center gap-2 rounded-full 
          focus:scale-[1.15] hover:scale-[1.15] active:scale-105 
          transition cursor-pointer borderBlack dark:bg-white/10
          dark:text-white"
          href="https://www.linkedin.com/in/alexvad/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-4 flex items-center
          gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] 
          hover:scale-[1.15] hover:text-gray-950 active:scale-105
          transition cursor-pointer borderBlack 
          dark:bg-white/10 dark:text-white"
          href="https://github.com/VadeanFlaviuAlexandru"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
