import About from "@/components/about";
import SectionDivider from "@/components/generic_components/section-divider";
import Intro from "@/components/intro";
import Projects from "@/components/projects";

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
    </main>
  );
}
