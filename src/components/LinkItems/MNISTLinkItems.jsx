import React from "react";
import LinkItemsBase from "./LinkItemsBase";
import { GoMarkGithub } from "react-icons/go";
import { FaExternalLinkAlt } from "react-icons/fa";

const MNISTLinkItems = () => {
  return (
    <div>
      <LinkItemsBase
        links={[
          { link: "https://mnist.surajram.xyz", logo: <FaExternalLinkAlt /> },
          {
            link: "https://github.com/Suraj-Ram/mnist-web-serve",
            logo: <GoMarkGithub />,
          },
        ]}
      />
    </div>
  );
};

export default MNISTLinkItems;
