import React from "react";
import { GoMarkGithub } from "react-icons/go";
import { FaExternalLinkAlt } from "react-icons/fa";

//input array with objects containing a link and logo component
const LinkItemsBase = ({ links }) => {
  const linkColor = "text-cyan-500";
  return (
    <div className="flex justify-center gap-x-4">
      {/* <a
        href="https://mnist.surajram.xyz"
        target="_blank"
        className="flex justify-center items-center text-cyan-500"
      >
        <FaExternalLinkAlt></FaExternalLinkAlt>
      </a>
      <a
        href="https://github.com/Suraj-Ram/mnist-web-serve"
        target="_blank"
        className="flex justify-center items-center text-cyan-500"
      >
        <GoMarkGithub />
      </a> */}

      {links.map((el, index) => (
        <a
          key={index}
          href={el.link}
          target="_blank"
          className="flex justify-center items-center text-cyan-500"
        >
          {el.logo}
        </a>
      ))}
    </div>
  );
};

export default LinkItemsBase;
