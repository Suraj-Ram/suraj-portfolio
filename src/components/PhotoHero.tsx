import Image from "next/image";
import { Bold, LinkWrapper } from "./Typography";
import headshotPicture from "../assets/headshot.jpg";

function SocialLinks() {
	return (
		<div className="space-x-5 text-myGray-600 dark:text-slate-400">
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
		<span className="text-4xl font-bold tracking-tight text-main-600 dark:text-main-400 md:text-5xl lg:text-6xl">
			Suraj Ramchandran
		</span>
	);
}

export default function PhotoHero() {
	return (
		<>
			<div className="mb-10 flex flex-col items-center justify-between md:mx-4 md:flex-row">
				<div className="order-2 flex max-w-xl flex-col gap-2">
					<span className="text-lg text-myGray-400 dark:text-slate-400 ">Hi, I'm 👋</span>
					<Name />

					<span className="text-lg text-myGray-700 dark:text-slate-300">
						I am a third-year Computer Science (B.S.) student at Northeastern
						University interested in <Bold>Full-stack Development</Bold> and <Bold>Machine Learning</Bold>.
					</span>
					<SocialLinks />
				</div>

				<Image
					src={headshotPicture}
					alt="Picture of Suraj"
					className="order-1 rounded-full shadow-md md:order-2"
					height={180}
				></Image>
			</div>
		</>
	);
}
