import { PrimaryHeading } from "@/components/Typography"
import RenderMarkdown from "@/components/RenderMarkdown"


export default function Projects() {
  return (
    <>
      <PrimaryHeading>Projects</PrimaryHeading>
      {/* @ts-expect-error Server Component */}
      <RenderMarkdown source="src/content/Projects.mdx" />
    </>
  )
}