import React from "react"
import { FaChrome, FaExternalLinkAlt } from "react-icons/fa"
import { GoMarkGithub } from "react-icons/go"
import LinkItemsBase from "./LinkItemsBase"

const TaskTabLinkItems = () => {
  const links = [
    {
      link: "https://tasktab-beta.netlify.com/",
      logo: <FaExternalLinkAlt />,
    },
    {
      link: "https://github.com/Suraj-Ram/TaskTab",
      logo: <GoMarkGithub />,
    },
    {
      link: "https://chrome.google.com/webstore/detail/tasktab/bgahngpgbbclbppokppmbnckdfkfccmo",
      logo: <FaChrome />,
    },
  ]
  return <LinkItemsBase links={links} />
}

export default TaskTabLinkItems
