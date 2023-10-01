import About from "@/components/about";
import Contact from "@/components/contact";
import Experience from "@/components/experience";
import SectionDivider from "@/components/generic_components/section-divider";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import Skills from "@/components/skills";

export default function Home() {
  return (
    <main
      className="flex min-h-screen flex-col
     items-center justify-between p-24"
    >
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
