import TechStackBase from "./TechStackBase";
import { TIPython, TIJavsscript, TIHTML, TITensorflow } from "./AllTechItems";

const MNISTTechStack = () => {
  return (
    <>
      <TechStackBase>
        <TIPython />
        <TITensorflow />
        <TIJavsscript />
        <TIHTML />
      </TechStackBase>
    </>
  );
};

export default MNISTTechStack;
