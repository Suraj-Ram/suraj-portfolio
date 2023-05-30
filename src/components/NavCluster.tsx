"use client"; // Used to get pathname (hook available on client only)

import { usePathname } from "next/navigation";
import Link from "next/link";

function NavItem({ name, link }: { name: string; link: string }) {
	const currLocation = usePathname();

	const linkClassBase = "px-2 py-3 hover:text-main-600";
	const linkClassInactive = linkClassBase + " text-myGray-600";
	const linkClassActive = linkClassBase + " text-main-600";

	return (
		<Link
			href={link}
			className={currLocation === link ? linkClassActive : linkClassInactive}
		>
			{name}
		</Link>
	);
}

export default function NavCluster() {
	const navItems = [
		{
			id: 0,
			name: "About Me",
			link: "/",
		},
		{
			id: 1,
			name: "Projects",
			link: "/projects",
		},
		{
			id: 2,
			name: "Experience",
			link: "/experience",
		},
	];

	return (
		// TODO: change the color of the border
		<div className="flex justify-center items-center mx-auto md:gap-1 lg:gap-3 border max-w-xs rounded-3xl border-myGray-200">
			{navItems.map((item) => (
				<NavItem key={item.id} name={item.name} link={item.link} />
			))}
		</div>
	);
}
