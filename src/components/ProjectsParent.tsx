import { SecondaryHeading } from "./Typography";
import { TechStackItem } from "@/content/projects-content";
import { projectsData } from "@/content/projects-content";
import { BadgeCheckIcon, ChevronDown, ChevronRight } from "lucide-react";
import Link from "next/link";
import { SeeMoreLink } from "./SeeMoreLink";

const Step = ({
	title,
	children,
}: {
	title: string;
	children?: React.ReactNode;
}) => {
	return (
		<li className="">
			<div className="mb-2 flex items-center">
				<span className="sr-only">Check</span>
				<BadgeCheckIcon
					fill="#3B82F6"
					height={"1.2rem"}
					className="mr-1 text-white dark:text-slate-950"
				/>

				<p className="">{title}</p>
			</div>
			{children && <p className="">{children}</p>}
		</li>
	);
};

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
	impactPoints?: string[];
}
export function ProjectCard({
	dateStr,
	title,
	description,
	techStack,
	primaryLink,
	links,
	impactPoints,
}: ProjectCardProps) {
	function InnerProjectCard() {
		return (
			<div className="flex cursor-pointer items-center rounded-lg border border-gray-200 hover:border-gray-400 dark:border-slate-700 dark:hover:border-slate-500">
				<div className="flex-1 p-4">

					<span className="text-sm font-light uppercase text-gray-500 dark:text-slate-400">
						{dateStr}
					</span>
					<h2 className="text-xl font-semibold">{title}</h2>

					{techStack && techStack.length > 0 && (
						<p className="mt-1 mb-2 text-sm font-medium text-blue-600 dark:text-blue-400">
							{techStack.join(" | ")}
						</p>
					)}
					<p className="text-md text-gray-500 dark:text-slate-400">{description}</p>
					{/* Render out impact points as an unordered list with an icon as the bullet point */}
					{impactPoints && impactPoints.length > 0 && (
						<ul className="text-md mt-2 text-gray-600 dark:text-slate-300">
							{impactPoints?.map((point, i) => <Step key={i} title={point} />)}
						</ul>
					)}
				</div>
				<ChevronRight
					className={`mr-3 text-myGray-600 dark:text-slate-400 ${!primaryLink && "invisible"}`}
				/>
			</div>
		);
	}

	// If there are no links, return the card without a link
	if (!primaryLink) {
		return InnerProjectCard();
	}

	return (
		<Link
			href={primaryLink}
			target={primaryLink.startsWith("/") ? "_self" : "_blank"}
		>
			{InnerProjectCard()}
		</Link>
	);
}

export default function ProjectsParent() {
	const NUM_PROJECTS = 4;
	const featuredProjects = projectsData.slice(0, NUM_PROJECTS);

	return (
		<div className="">
			<SecondaryHeading>Projects</SecondaryHeading>
			<div className="flex flex-col gap-3">
				{featuredProjects.map((project, i) => (
					<ProjectCard key={i} {...project} links={project.links || {}} />
				))}
			</div>
			<SeeMoreLink link="/projects" />
		</div>
	);
}
