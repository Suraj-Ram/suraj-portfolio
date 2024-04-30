import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import PhotoHeroSmall from "@/components/PhotoHeroSmall";
import { Sun } from "lucide-react";

export const metadata = {
	// TODO add more metadata
	title: "Suraj Portfolio",
	description: "Suraj's developer portfolio",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body className="">
				<Analytics />
				<div className="container mx-auto p-8 md:max-w-2xl xl:max-w-3xl md:mb-8 font-sans">
					<PhotoHeroSmall />
					<main className="mx-4">{children}</main>
				</div>
			</body>
		</html>
	);
}

function NewNavBar() {
	return (
		<nav className="flex justify-between mx-4 mb-10">
			<div className="flex">
				<Sun />
			</div>
			<div className="flex">
				<a href="/">Home</a> /
				<a href="/projects">Projects</a> /
				<a href="/blog">Blog</a> /
				<a href="/contact">Contact</a>
			</div>
		</nav>
	);
}
