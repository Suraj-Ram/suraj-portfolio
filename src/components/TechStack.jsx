import { FaJs } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";

// OLD - DONT USE

const TechItem = ({ children, logo, color }) => {
  return (
    <li className="flex items-center">
      <span style={{ color, margin: "0", padding: "0" }}> {logo} </span>
      <span className="ml-1"> {children} </span>
    </li>
  );
};

const TechStack = () => {
  return (
    <div>
      <h5 className=" text-sm uppercase bg-clip-text text-transparent bg-gradient-to-tr from-cyan-400 to-green-500 font-bold mt-2 mb-1">
        Tech Stack
      </h5>
      <ul>
        <TechItem color="#4B8BBE" logo={<FaPython />}>
          {" "}
          Python
        </TechItem>
        <TechItem logo={<SiTensorflow />} color="#FFA800">
          Tensorflow 2
        </TechItem>
        <TechItem logo={<FaJs />} color="#f7df1e">
          Javascript
        </TechItem>
        <TechItem logo={<FaHtml5 />} color="#e34c26">
          HTML
        </TechItem>
      </ul>
    </div>
  );
};

export default TechStack;
