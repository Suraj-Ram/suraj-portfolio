import TechItem from "./TechItem"
import TechStackBase from "./TechStackBase"
import { FaHtml5, FaJs } from "react-icons/fa"
import { SiFirebase } from "react-icons/si"

const ShortifyTechStack = () => {
  return (
    <TechStackBase>
      <TechItem logo={<FaJs />} color="#f7df1e">
        Javascript
      </TechItem>
      <TechItem>Express</TechItem>
      <TechItem logo={<SiFirebase />} color="#FFCA28">
        Firebase (Functions, Firestore & Hosting)
      </TechItem>
      <TechItem logo={<FaHtml5 />} color="#e34c26">
        HTML
      </TechItem>
    </TechStackBase>
  )
}

export default ShortifyTechStack
