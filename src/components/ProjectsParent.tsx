import { SecondaryHeading } from "./Typography";

export default function ProjectsParent() {
	return (
		<>
			<SecondaryHeading>Projects</SecondaryHeading>
			<div className="flex flex-col gap-3">
				{/* Make project card */}
				{/* <div className="space-y-4">
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div> */}
				{/* <BentoContainer /> */}
				<ProjectCard />
				<ProjectCard />
				<ProjectCard />
			</div>
		</>
	);
}
function ProjectCard() {
	return (
		<div className="rounded-lg border">
			{/* TODO: Add a chevron icon on left of card */}
			<div className="p-4">
				<h2 className="text-xl font-semibold">SigLo - Reinvent your input.</h2>
				<p className="text-gray-700 text-md">
					Use gestures, captured by webcam, to interact with their computer
					naturally.
				</p>
				<span className="text-sm text-gray-500">Python, Typescript</span>
			</div>
		</div>
	);
}

function BentoContainer() {
	return (
		<div className="grid auto-rows-[192px] grid-cols-3 gap-4">
			{[...Array(7)].map((_, i) => (
				<div
					key={i}
					className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-neutral-900 ${
						i === 3 || i === 6 ? "col-span-2" : ""
					}`}
				>
					<ProjectCard />
				</div>
			))}
		</div>
	);
}
