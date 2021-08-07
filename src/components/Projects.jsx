import ProjectCard from "./ProjectCard2";
import TechStack from "./TechStack";
import MNISTTechStack from "./TechStacks/MNISTTechStack";

const Projects = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 text-black dark:text-white">
        Projects
      </h2>
      <div className="md:flex gap-5 justify-center  my-1">
        <ProjectCard />
        <ProjectCard
          title="MNIST Web Serve"
          description="Multiple Python Keras models, trained on the MNIST dataset, served on a interactive webpage through the use of Tensorflow JS for loading and getting predictions from the model and p5.js for canvas operations."
          stack={<MNISTTechStack />}
        />
        {/* <ProjectCard stack={<MNISTTechStack />} /> */}
        <ProjectCard />
        <MNISTTechStack></MNISTTechStack>
      </div>
    </div>
  );
};

export default Projects;
