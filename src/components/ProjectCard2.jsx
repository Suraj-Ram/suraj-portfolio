import TechStack from "./TechStack";
import { GoMarkGithub } from "react-icons/go";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ title, description, stack, links }) => {
  return (
    <div className="max-w-sm p-1 bg-gradient-to-tr from-cyan-400 to-green-500 mx-auto rounded-xl flex flex-col gap-2 mb-2 hover:shadow-lg  ">
      <div className="bg-white p-3 rounded-xl">
        {/* bg-gradient-to-r from-cyan-400 to-sky-500 */}
        <h4 className="text-xl font-bold mb-3 py-1">{title}</h4>
        <p className=" text-gray-700 text-base">{description}</p>
        {stack}
        <div className="flex justify-center gap-x-4">
          <a
            href="https://mnist.surajram.xyz"
            target="_blank"
            className="flex justify-center items-center text-cyan-500"
          >
            <FaExternalLinkAlt></FaExternalLinkAlt>
          </a>
          <a
            href="https://github.com/Suraj-Ram/mnist-web-serve"
            target="_blank"
            className="flex justify-center items-center text-cyan-500"
          >
            <GoMarkGithub />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
