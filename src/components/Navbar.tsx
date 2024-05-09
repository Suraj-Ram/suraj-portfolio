"use client";

import { usePathname } from "next/navigation";
import NavCluster from "./NavCluster";

const navLinks = [
	{
		name: "home",
		link: "/",
	},
	{
		name: "projects",
		link: "/projects",
	},
	{
		name: "experience",
		link: "/experience",
	},
];

function LinkItem({ name, link }: { name: string; link: string }) {
	const currLocation = usePathname();

	const linkClassBase = "px-2 py-3 hover:text-main-600 text-sm font-bold";
	const linkClassInactive = linkClassBase + " text-myGray-600";
	const linkClassActive = linkClassBase + " text-main-600";

	return (
		<a
			href={link}
			className={currLocation === link ? linkClassActive : linkClassInactive}
		>
			{name}
		</a>
	);
}
// container mx-auto px-8 py-4 md:max-w-2xl xl:max-w-3xl
export default function Navbar() {
	return (
		// append to classname if outside container: `container mx-auto px-8 mt-4 `
		<div className="flex justify-between">
			{/* Logo */}
			<div>
				<h1 className="">dark</h1>
			</div>
			{/* Nav bar */}
			<div className="flex justify-center items-center">
				{navLinks.map((link) => {
					return <LinkItem key={link.name} name={link.name} link={link.link} />;
				})}
			</div>
		</div>
	);
}
