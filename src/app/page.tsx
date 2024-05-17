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
			<PhotoHeroSmall />
			{/* @ts-expect-error Server Component */}
			<RenderMarkdown source="src/content/AboutMe.mdx" />
			<ProjectsParent />
			{/* <SecondaryHeading>Experience</SecondaryHeading> */}
			{/* <Experience /> */}
		</>
	);
}
