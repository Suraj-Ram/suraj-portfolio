"use client";

import { usePathname } from "next/navigation";
import NavCluster from "./NavCluster";
import Link from "next/link";

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

function LinkItem({ name, link, active }: { name: string; link: string, active: boolean }) {
	return (
		<a
			href={link}
			className={`px-2 hover:text-main-600 text-sm font-bold ${active ? "text-main-600" : "text-gray-600"}`}
		>
			{name}
		</a>
	);
}

function LogoLink({invisible}: {invisible: boolean}) {
    return (
        <Link href="/">
            <h1 className={`font-mono text-sm font-bold hover:text-main-600 ${invisible ? "invisible": ""}`}>Suraj Ramchandran</h1>
        </Link>
    )
}

// container mx-auto px-8 py-4 md:max-w-2xl xl:max-w-3xl
export default function Navbar() {
    const loc = usePathname();

	return (
		// append to classname if outside container: `container mx-auto px-8 mt-4 `
		<div className="flex justify-between py-3 ">
			{/* Logo */}
			<div>
				<LogoLink invisible={loc === "/"} />
			</div>
			{/* Nav bar */}
			<div className="flex justify-center items-center">
				{navLinks.map((navLink) => {
					return <LinkItem key={navLink.name} name={navLink.name} link={navLink.link} active={loc === navLink.link}/>;
				})}
			</div>
		</div>
	);
}
