import { Analytics } from "@vercel/analytics/react";
import "./globals.css";
import PhotoHeroSmall from "@/components/PhotoHeroSmall";
import { Sun } from "lucide-react";
import NavCluster from "@/components/NavCluster";
import Navbar from "@/components/Navbar";

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
				{/* <NavCluster /> */}
				<div className="container mx-auto px-8 py-4 md:max-w-2xl xl:max-w-3xl md:mb-8 font-sans">
					<Navbar />
					<PhotoHeroSmall />
					<main className="mx-4">{children}</main>
				</div>
			</body>
		</html>
	);
}
