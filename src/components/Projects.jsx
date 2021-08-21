import MNISTProject from "./Projects/MNISTProject";
import ShortifyProject from "./Projects/ShortifyProject";
import TaskTabProject from "./Projects/TaskTabProject";
import TWAProject from "./Projects/TWAProject";

const Projects = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
        Projects
      </h2>
      <div className="md:flex flex-wrap gap-5 justify-center my-1">
        <TWAProject />
        <MNISTProject />
        <TaskTabProject />
        <ShortifyProject />

        {/* <ProjectCard stack={<MNISTTechStack />} /> */}
        {/* <ProjectCard /> */}
      </div>
    </div>
  );
};

export default Projects;
