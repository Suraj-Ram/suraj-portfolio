import TechItem from "./TechItem";
import { FaPython, FaJs, FaHtml5, FaBootstrap } from "react-icons/fa";
import { SiTensorflow, SiFirebase, SiFlask, SiTodoist } from "react-icons/si";

export const TIPython = () => {
  return (
    <TechItem color="#4B8BBE" logo={<FaPython />}>
      {" "}
      Python
    </TechItem>
  );
};

export const TITensorflow = () => {
  return (
    <TechItem logo={<SiTensorflow />} color="#FFA800">
      Tensorflow 2
    </TechItem>
  );
};

export const TIJavsscript = () => {
  return (
    <TechItem logo={<FaJs />} color="#f7df1e">
      Javascript
    </TechItem>
  );
};

export const TIHTML = () => {
  return (
    <TechItem logo={<FaHtml5 />} color="#e34c26">
      HTML
    </TechItem>
  );
};

export const TIExpress = () => {
  return <TechItem logo="&nbsp; &nbsp;">Express</TechItem>;
};

export const TIFirebase3 = () => {
  return (
    <TechItem logo={<SiFirebase />} color="#FFCA28">
      Firebase (Functions, Firestore & Hosting)
    </TechItem>
  );
};

export const TIBootstrap = () => {
  return (
    <TechItem logo={<FaBootstrap />} color="#563d7c">
      Bootstrap
    </TechItem>
  );
};

export const TIFlask = () => {
  return <TechItem logo={<SiFlask />}>Flask</TechItem>;
};

export const TITodoist = () => {
  return (
    <TechItem logo={<SiTodoist />} color="">
      Todoist API
    </TechItem>
  );
};
