import React from "react";
import ProjectCard from "../ProjectCard2";
import MNISTTechStack from "../TechStacks/MNISTTechStack";
import MNISTLinkItems from "../LinkItems/MNISTLinkItems";

const MNISTProject = () => {
  return (
    <ProjectCard
      title="MNIST Web Serve"
      description="Multiple Python Keras models, trained on the MNIST dataset, served on a interactive webpage through the use of Tensorflow JS for loading and getting predictions from the model and p5.js for canvas operations."
      stack={<MNISTTechStack />}
      links={<MNISTLinkItems />}
    />
  );
};

export default MNISTProject;
