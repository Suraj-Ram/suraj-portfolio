import { GoMarkGithub } from "react-icons/go"
import { FaExternalLinkAlt, FaLinkedin } from "react-icons/fa"

const Contact = () => {
  return (
    <div>
      <h2 className="font-bold text-2xl md:text-4xl tracking-tight mb-4 mt-4 text-black dark:text-white">
        Contact
      </h2>
      <div className="text-base md:text-xl">
        <a
          href="https://github.com/Suraj-Ram"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-gray-600 pb-2"
        >
          <span>
            {" "}
            <GoMarkGithub />{" "}
          </span>
          <span className="ml-2">Github</span>
        </a>

        <a
          href="https://www.linkedin.com/in/surajramchandran/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center hover:text-gray-600 pb-2"
        >
          <span>
            <FaLinkedin></FaLinkedin>
          </span>
          <span className="ml-2">Linkedin</span>
        </a>
      </div>
    </div>
  )
}

export default Contact
