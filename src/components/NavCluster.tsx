"use client"; // Used to get pathname (hook available on client only)

import { usePathname } from "next/navigation";
import Link from "next/link";

function NavItem({ name, link }: { name: string; link: string }) {
	const currLocation = usePathname();

	const linkClassBase = "px-2 py-3 hover:text-main-600 dark:hover:text-main-400";
	const linkClassInactive = linkClassBase + " text-myGray-600 dark:text-slate-400";
	const linkClassActive = linkClassBase + " text-main-600 dark:text-main-400";

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
		<div className="mx-auto flex max-w-xs items-center justify-center rounded-3xl border border-myGray-200 dark:border-slate-700 md:gap-1 lg:gap-3">
			{navItems.map((item) => (
				<NavItem key={item.id} name={item.name} link={item.link} />
			))}
		</div>
	);
}
