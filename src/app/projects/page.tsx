import { PrimaryHeading } from "@/components/Typography";
import RenderMarkdown from "@/components/RenderMarkdown";
import NextPage from "@/components/NextPage";

export default function Projects() {
	return (
		<>
			<PrimaryHeading>Projects</PrimaryHeading>
			{/* @ts-expect-error Server Component */}
			<RenderMarkdown source="src/content/Projects.mdx" />
      <NextPage stub="/experience" name="Experience" />
		</>
	);
}

{
	/* <p class="text-gray-500 dark:text-gray-400">500,000 people & companies have made over a million apps with Glide. <a href="#" class="inline-flex items-center font-medium text-blue-600 dark:text-blue-500 hover:underline">
Read their stories
<svg aria-hidden="true" class="w-5 h-5 ml-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
</a></p>
 */
}
