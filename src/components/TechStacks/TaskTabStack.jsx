import React from "react"
import { FaBootstrap, FaHtml5 } from "react-icons/fa"
import TechItem from "./TechItem"
import TechStackBase from "./TechStackBase"
import { FaJs } from "react-icons/fa"

const TaskTabStack = () => {
  return (
    <TechStackBase>
      <TechItem logo={<FaHtml5 />} color="#e34c26">
        HTML
      </TechItem>
      <TechItem logo={<FaJs />} color="#f7df1e">
        Javascript
      </TechItem>
      <TechItem logo={<FaBootstrap />} color="#563d7c">
        Bootstrap
      </TechItem>
    </TechStackBase>
  )
}

export default TaskTabStack
