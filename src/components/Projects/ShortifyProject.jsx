import ShortifyLinkItems from "../LinkItems/ShortifyLinkItems"
import ProjectCard from "../ProjectCard"
import ShortifyTechStack from "../TechStacks/ShortifyTechStack"

const ShortifyProject = () => {
  return (
    <ProjectCard
      title="Shortify"
      description="A link shortner built using modern web technologies. Features a backend serverless API that interfaces with a persistent database to redirect users to requested website. "
      stack={<ShortifyTechStack />}
      links={<ShortifyLinkItems />}
    />
  )
}

export default ShortifyProject
