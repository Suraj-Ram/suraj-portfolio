import React from "react"
import ProjectCard from "../ProjectCard"
import TWATechStack from "../TechStacks/TWATechStack"

const TWAProject = () => {
  return (
    <ProjectCard
      wip
      title="Todoist Assistant"
      description="A Python Flask service that interfaces with the Twilio Whatsapp API to get and add Todoist tasks by speech* and through messages (where both are sent through Whatsapp)."
      stack={<TWATechStack />}
    />
  )
}

export default TWAProject
