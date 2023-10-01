"use client";

import Alex from "@/public/photos/Alex.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { GrContactInfo } from "react-icons/gr";
import { useSectionInView } from "../lib/hooks";
import { DuckMailGirl } from "./3d_models/DuckMailGirl";
import { UseActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = UseActiveSectionContext();

  return (
    <section ref={ref} id="home" className="scroll-mt-[100rem]">
      <div className="flex flex-col items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              className="shadow-xl object-cover h-60
                            w-60 rounded-full border-[0.35rem]
                            border-white"
              src={Alex}
              alt="Portrait-Alex"
              width="192"
              height="192"
              quality="95"
              priority={true}
            />
          </motion.div>
          <motion.span
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            <DuckMailGirl />
          </motion.span>
        </div>
        <motion.h1
          className="mb-10 mt-4 px-4 text-2xl 
                    font-medium !leading-[1.5] 
                    sm:text-4xl text-center"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
        >
          Hello, I'm <span className="font-bold"> Alex.</span>
          <br />
          <span className="font-bold">Full-stack developer</span> with a deep
          appreciation
          <br />
          for <span className="font-bold">art</span> and{" "}
          <span className="font-bold">technology.</span>
        </motion.h1>
        <motion.div
          className="flex flex-col sm:flex-row items-center
                    justify-center gap-3 px-4 text-lg"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.1,
          }}
        >
          <Link
            className="group rounded-full bg-gray-900 text-white px-7
                        py-3 flex items-center gap-2 outline-none focus:scale-100  
                        hover:bg-gray-950 active:scale-105 transition"
            href="#contact"
            onClick={() => {
              setActiveSection("Contact");
              setTimeOfLastClick(Date.now());
            }}
          >
            Contact me
            <BsArrowRight
              className="
                            opacity-70 
                            group-hover:translate-x-3
                            group-hover:opacity-100
                            transition"
            />
          </Link>
          <a
            href="@/public/cv.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group rounded-full bg-white text-black px-7
                        py-3 flex items-center gap-2 outline-none focus:scale-100  
                        active:scale-105 transition cursor-pointer"
          >
            Check my CV{" "}
            <GrContactInfo
              className="
                            opacity-70 
                            group-hover:translate-x-1
                            group-hover:opacity-100
                            group-hover:scale-125
                            transition"
            />
          </a>
          <a
            className="bg-white p-4 text-gray-700 hover:text-gray-950
                        flex items-center gap-2 rounded-full focus:scale-[1.15] 
                        hover:scale-[1.15] active:scale-105 transition 
                        cursor-pointer borderBlack"
            href="https://www.linkedin.com/in/alexvad/"
            target="_blank"
          >
            <BsLinkedin />
          </a>
          <a
            className="bg-white p-4 text-gray-700 flex items-center gap-2 
                        text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15]
                        hover:text-gray-950 active:scale-105 transition cursor-pointer 
                        borderBlack"
            href="https://github.com/VadeanFlaviuAlexandru"
            target="_blank"
          >
            <FaGithubSquare />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
