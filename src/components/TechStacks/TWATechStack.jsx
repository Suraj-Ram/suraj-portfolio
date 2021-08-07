import React from "react"
import { SiFlask, SiTodoist } from "react-icons/si"
import { FaPython } from "react-icons/fa"
import TechItem from "./TechItem"
import TechStackBase from "./TechStackBase"

const TWATechStack = () => {
  return (
    <TechStackBase>
      <TechItem color="#4B8BBE" logo={<FaPython />}>
        {" "}
        Python
      </TechItem>
      <TechItem logo={<SiFlask />}>Flask</TechItem>
      <TechItem logo={<SiTodoist />} color="">
        Todoist API
      </TechItem>
    </TechStackBase>
  )
}

export default TWATechStack
