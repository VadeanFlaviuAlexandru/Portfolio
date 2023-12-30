import SectionDivider from "@/components/generic-components/section-divider";
import About from "@/components/main-components/about";
import Contact from "@/components/main-components/contact";
import Experience from "@/components/main-components/experience";
import Intro from "@/components/main-components/intro";
import Projects from "@/components/main-components/projects";
import Skills from "@/components/main-components/skills";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 max-sm:overflow-x-hidden">
      <Intro />
      <SectionDivider />
      <About />
      <SectionDivider />
      <Projects />
      <SectionDivider />
      <Skills />
      <SectionDivider />
      <Experience />
      <SectionDivider />
      <Contact />
    </main>
  );
}
