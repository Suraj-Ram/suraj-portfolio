import { FaTools } from "react-icons/fa"

const ProjectCard = ({ title, description, stack, links, date, wip }) => {
  return (
    <div className="max-w-sm xl:max-w-md p-1 bg-gradient-to-tr from-cyan-400 to-green-500 mx-auto rounded-xl flex flex-col gap-2 mb-2 hover:shadow-lg  ">
      <div className="bg-white p-2 xl:p-3 rounded-xl w-full h-full">
        {/* bg-gradient-to-r from-cyan-400 to-sky-500 */}
        <h4 className="text-xl font-bold py-1">{title}</h4>

        {wip ? (
          <h6 className="flex gap-1 items-center mb-3 text-sm text-yellow-500 font-semibold">
            {" "}
            <FaTools /> Under development
          </h6>
        ) : (
          <h6 className="uppercase text-gray-800 text-sm mb-3 ">{date}</h6>
        )}
        <p className=" text-gray-700 text-base">{description}</p>
        {stack}
        {links}
      </div>
    </div>
  )
}

export default ProjectCard
