import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
        Projects
      </h2>
      <div className="md:flex gap-5 justify-center  my-1">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
    </div>
  );
};

export default Projects;
