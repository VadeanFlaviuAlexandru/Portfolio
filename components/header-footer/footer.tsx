import React from "react";

export default function Footer() {
  return (
    <footer className="mb-10 px-4 text-center text-black dark:text-white">
      <p className="text-xs">
        <span className="font-bold bg-gradient-to-r from-cyan-400 to-fuchsia-400 bg-clip-text text-transparent">
          I also built this website
        </span>{" "}
        with TypeScript, Next.js, React, React Email, React Resend, Tailwind
        CSS, Three.js and Framer Motion. Full details on the GitHub page!
      </p>
    </footer>
  );
}
