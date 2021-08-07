import React from "react"
import TaskTabLinkItems from "../LinkItems/TaskTabLinkItems"
import ProjectCard from "../ProjectCard"
import TaskTabStack from "../TechStacks/TaskTabStack"

const TaskTabProject = () => {
  return (
    <ProjectCard
      title="TaskTab"
      description="A chrome 'new-tab' page extension and web app to easily manage your day-to-day tasks. Styled using Bootstrap 4 and the CSS Grid, it has a modern and distraction-free look. Stores tasks into cookies to save them."
      date="Aug 2019"
      stack={<TaskTabStack />}
      links={<TaskTabLinkItems />}
    />
  )
}

export default TaskTabProject
