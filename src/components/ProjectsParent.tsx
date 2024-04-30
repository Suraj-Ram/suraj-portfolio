import { SecondaryHeading } from "./Typography";
import { TechStackItem } from "@/content/projects-content";
import { projectsData } from "@/content/projects-content";
import { ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";

interface ProjectCardProps {
	// add same fields as ProjectItem
	dateStr: string;
	title: string;
	description: React.ReactNode;
	techStack: TechStackItem[];
	primaryLink: string;
	links: {
		website?: string;
		github?: string;
	};
}
function ProjectCard({
	dateStr,
	title,
	description,
	techStack,
	primaryLink,
	links,
}: ProjectCardProps) {
	function InnerProjectCard() {
		return (
			<div className="rounded-lg border border-gray-200 flex items-center cursor-pointer hover:border-gray-400">
				<div className="p-4 flex-1">
					<span className="text-gray-500 text-sm">{dateStr}</span>
					<h2 className="text-xl font-semibold">{title}</h2>
					<p className="text-gray-600 text-md">{description}</p>
					<span className="text-sm text-gray-500">{techStack}</span>
				</div>
				<ChevronRight className="text-myGray-600 mr-3" />
			</div>
		);
	}

	// If there are no links, return the card without a link
	if (Object.keys(links).length === 0) {
		return InnerProjectCard();
	}

	return (
		<Link href={primaryLink} target="_blank">
			{InnerProjectCard()}
		</Link>
	);
}

export default function ProjectsParent() {
	return (
		<div className="py-10">
			<SecondaryHeading>Projects</SecondaryHeading>
			<div className="flex flex-col gap-3">
				{projectsData.map((project, i) => (
					<ProjectCard key={i} {...project} links={project.links || {}} />
				))}
			</div>
			{/* See more */}
			<Link href="/projects">
				<span className=" flex items-center justify-center my-4 px-4 py-2 text-sm font-medium">
					See more
					<svg
						className="h-4 w-4 ml-1"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth={2}
							d="M19 9l-7 7-7-7"
						/>
					</svg>
				</span>
			</Link>
		</div>
	);
}
