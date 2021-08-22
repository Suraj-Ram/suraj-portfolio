import TechStackBase from "./TechStackBase";
import { TIPython, TIFlask, TITodoist } from "./AllTechItems";

const TWATechStack = () => {
  return (
    <TechStackBase>
      <TIPython />
      <TIFlask />
      <TITodoist />
    </TechStackBase>
  );
};

export default TWATechStack;
