import Image from "next/image";
import headshotPicture from "../assets/headshot.jpg";
import { LinkWrapper } from "./Typography";
import { Linkedin, Github, FileBadge } from "lucide-react";

function SocialIconLinks() {
	return (
		<div className="flex text-myGray-400 space-x-3 py-4">
			<LinkWrapper link={"https://www.linkedin.com/in/surajramchandran/"}>
				<Linkedin />
			</LinkWrapper>
			<LinkWrapper link={"https://github.com/Suraj-Ram"}>
				<Github />
			</LinkWrapper>
			<LinkWrapper link={"/resume.pdf"}>
				<FileBadge />
			</LinkWrapper>
		</div>
	);
}

export default function PhotoHeroSmall() {
	// TODO make this whole component friendly on mobile
	return (
		<>
			<div className="flex flex-col sm:flex-row justify-between py-2 lg:py-6 items-center">
				<div className="flex flex-col max-w-xl gap-2 order-2">
					<span className="text-md text-myGray-400 tracking-wide">
						👋 Hi, I'm
					</span>
					<span className="text-2xl md:text-3xl lg:text-4xl text-main-600 font-extrabold font-accent">
						Suraj Ramchandran
					</span>
					<span className="text-l text-slate-700 font-light">
						Software Engineer & life-long Student
					</span>
					<SocialIconLinks />
				</div>

				{/* <Image
					src={headshotPicture}
					alt="Picture of Suraj"
					className="order-1 sm:order-2 rounded-full shadow-md transition duration-300 ease-in-out"
					height={100}
				></Image> */}
			</div>
		</>
	);
}
