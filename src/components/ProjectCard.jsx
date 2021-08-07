const ProjectCard = ({ title, description, stack, links }) => {
  return (
    <div className="max-w-sm xl:max-w-md p-1 bg-gradient-to-tr from-cyan-400 to-green-500 mx-auto rounded-xl flex flex-col gap-2 mb-2 hover:shadow-lg  ">
      <div className="bg-white p-2 xl:p-3 rounded-xl w-full h-full">
        {/* bg-gradient-to-r from-cyan-400 to-sky-500 */}
        <h4 className="text-xl font-bold mb-3 py-1">{title}</h4>
        <p className=" text-gray-700 text-base">{description}</p>
        {stack}
        {links}
      </div>
    </div>
  )
}

export default ProjectCard
