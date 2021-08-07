import TechItem from "./TechItem";
import TechStackBase from "./TechStackBase";
import { FaJs } from "react-icons/fa";
import { SiTensorflow } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";

const MNISTTechStack = () => {
  return (
    <>
      <TechStackBase>
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
      </TechStackBase>
    </>
  );
};

export default MNISTTechStack;
