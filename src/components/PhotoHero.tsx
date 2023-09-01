import Image from "next/image";
import { Bold, LinkWrapper } from "./Typography";
import headshotPicture from "../assets/headshot.jpg";

function SocialLinks() {
	return (
		<div className="text-myGray-600 space-x-5">
			<LinkWrapper link="https://github.com/Suraj-Ram">GitHub</LinkWrapper>
			<LinkWrapper link="/resume.pdf">Resume</LinkWrapper>
			<LinkWrapper link="https://www.linkedin.com/in/surajramchandran/">
				LinkedIn
			</LinkWrapper>
		</div>
	);
}

function Name() {
	return (
		<span className="text-4xl md:text-5xl lg:text-6xl text-main-600 font-bold tracking-tight">
			Suraj Ramchandran
		</span>
	);
}

export default function PhotoHero() {
	return (
		<>
			<div className="flex flex-col md:flex-row justify-between md:mx-4 mb-10 items-center">
				<div className="flex flex-col max-w-xl gap-2 order-2">
					<span className="text-lg text-myGray-400 ">Hi, I'm 👋</span>
					<Name />

					<span className="text-lg text-myGray-700 text-">
						I am a third-year Computer Science (B.S.) student at Northeastern
						University interested in <Bold>Full-stack Development</Bold> and <Bold>Machine Learning</Bold>.
					</span>
					<SocialLinks />
				</div>

				<Image
					src={headshotPicture}
					alt="Picture of Suraj"
					className="order-1 md:order-2 rounded-full shadow-md"
					height={180}
				></Image>
			</div>
		</>
	);
}
