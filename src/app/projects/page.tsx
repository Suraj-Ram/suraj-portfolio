import { SecondaryHeading } from "@/components/Typography";
import { projectsData } from "@/content/projects-content";
import { ProjectCard } from "@/components/ProjectsParent";

export default function Projects() {
  return (
    <>
      <div className="py-10">
        <SecondaryHeading>Projects</SecondaryHeading>
        <div className="flex flex-col gap-3">
          {projectsData.map((project, i) => (
            <ProjectCard key={i} {...project} links={project.links || {}} />
          ))}
        </div>
      </div>
    </>
  );
}
