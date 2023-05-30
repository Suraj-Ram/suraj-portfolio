import RenderMarkdown from "@/components/RenderMarkdown";
import NextPage from "@/components/NextPage";

// About Me Page
export default function Home() {
	return (
		<>
			{/* @ts-expect-error Server Component */}
			<RenderMarkdown source="src/content/AboutMe.mdx" />
      <NextPage stub="/projects" name="Projects" />
		</>
	);
}
