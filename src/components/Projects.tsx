"use client";
import useActiveSection from "@/hooks/useActiveSection.hook";
import { projectsData } from "../../lib/data";

import ProjectCard from "./ProjectCard";
import SectionHeading from "./SectionHeading";

type Props = {};

function Projects({}: Props) {
  const ref = useActiveSection("Projects", 0.5);
  return (
    <section
      ref={ref}
      id="projects"
      className="mb-28 max-w-[80rem] sm:mb-0 scroll-mt-28"
    >
      <SectionHeading>My Projects</SectionHeading>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        {/* <ProjectCard */}
        {projectsData.map((project) => (
          <ProjectCard project={project} key={project.title} />
        ))}
      </div>
    </section>
  );
}

export default Projects;
