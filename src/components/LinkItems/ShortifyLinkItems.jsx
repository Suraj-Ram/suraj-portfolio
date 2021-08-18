import React from "react"
import LinkItemsBase from "./LinkItemsBase"
import { GoMarkGithub } from "react-icons/go"

const ShortifyLinkItems = () => {
  return (
    <div>
      <LinkItemsBase
        links={[
          {
            link: "https://github.com/Suraj-Ram/shortify",
            logo: <GoMarkGithub />,
          },
        ]}
      />
    </div>
  )
}

export default ShortifyLinkItems
