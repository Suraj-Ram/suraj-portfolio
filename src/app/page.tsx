import RenderMarkdown from "@/components/RenderMarkdown";
import NextPage from "@/components/NextPage";
import { SecondaryHeading } from "@/components/Typography";
import PhotoHeroSmall from "@/components/PhotoHeroSmall";
import ProjectsParent from "@/components/ProjectsParent";
import Experience from "@/components/Timeline";

// About Me Page
export default function Home() {
	return (
		<>
			{/* @ts-expect-error Server Component */}
			<RenderMarkdown source="src/content/AboutMe.mdx" />
			{/* <RenderMarkdown source="src/content/Projects.mdx" /> */}
			{/* <SecondaryHeading>Projects</SecondaryHeading> */}
			<ProjectsParent />
			<SecondaryHeading>Experience</SecondaryHeading>
			<Experience />
		</>
	);
}
