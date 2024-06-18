import { ReactNode } from "react";

export enum TechStackItem {
	python = "Python",
	javascript = "JavaScript",
	typescript = "TypeScript",
	react = "React",
	nextjs = "NextJS",
	nodejs = "Node.js",
	express = "Express",
	firebase = "Firebase",
	noSql = "NoSQL",
	postgres = "PostgreSQL",
	openCV = "OpenCV",
	java = "Java",
	swing = "Swing",
	pytorch = "PyTorch",
	tensorflow = "TensorFlow",
	html = "HTML",
	css = "CSS",
	tailwind = "TailwindCSS",
	streamlit = "Streamlit",
	rust = "Rust",
	// ...
}

export interface ProjectItem {
	dateStr: string;
	title: string;
	// description takes type of JSX react component
	description: ReactNode;
	techStack: TechStackItem[];
	primaryLink: string;
	impactPoints?: string[];
	links?: {
		website?: string;
		github?: string;
	};
}

export const projectsData: ProjectItem[] = [
	{
		dateStr: "June 2024",
		title: "Multi-threaded Web Server 🦀",
		description: "A lightweight web server written in Rust that serves static files and supports HTTP/1.1. Implements a thread pool for handling multiple requests concurrently.",
		techStack: [TechStackItem.rust],
		primaryLink: "",
		impactPoints: [
			"Implemented a thread pool from scratch",
			"Supports gzip compression for serving static files",

		]
	},
	{
		dateStr: "January - December 2023",
		title: "Faculty Activity Tracker 🏅",
		description: "A performance review tool to be used for documenting and comparing faculty performance within the Arts and Design department.",
		techStack: [TechStackItem.typescript, TechStackItem.nextjs, TechStackItem.postgres],
		primaryLink: "https://github.com/sandboxnu/faculty-activity-tracker",
		impactPoints: [
			"To be used by 120+ faculty",
			"Implemented a role-based access control system",
		]
	},
	{
		title: "Recreation Tracker 💪",
		dateStr: "December 2022",
		// add jsx for desciprtion
		description: ("Tracks and logs the daily, weekly and monthly usage across my college's gyms to find out the best time to go work out!"
		),
		techStack: [TechStackItem.nodejs, TechStackItem.react, TechStackItem.firebase, TechStackItem.noSql],
		primaryLink: "https://github.com/Suraj-Ram/marino-tracker",
		links: {
			website: "https://recreation.northeastern.edu/",
		},
		impactPoints: [
			"Currently scraped more than 100,000 datapoints",
			"Frontend built using React and Recharts",
		]
	},
	{
		title: "SigLo - Reinvent your input. 🖐️",
		dateStr: "February 2022",
		description: ("Control your computer using gestures captured by the webcam. Can control arrow keys, horizontal and vertical scrolling, video playback and volume."

		),
		techStack: [TechStackItem.python, TechStackItem.openCV],
		primaryLink: "https://github.com/AndreyPiterkin/SigLo",
		links: {
			website: "https://devpost.com/software/siglo",
		},
		impactPoints: [
			"Won most technically challenging product at HackBeanPot 2022 🏆",
			"Uses 21 captured landmarks to compute hand position and gesture",
		]
	},
	{
		title: "Neural Stock Predictor",
		dateStr: "April 2024",
		description: "A stock price prediction tool using deep learning to analyze historical data and predict future stock price movements.",
		techStack: [TechStackItem.pytorch, TechStackItem.streamlit],
		primaryLink: ""
	},
	{
		title: "Java Image Editor",
		dateStr: "June 2022",
		description:
			"Image editor to tweak color levels and apply a variety of filter kernels using matrix operations.",
		techStack: [TechStackItem.java, TechStackItem.swing],
		primaryLink: "", // Since the code is private and no link was provided
		links: {},
		impactPoints: [
			"Uses MVC architecture for high readability and maintainability",
			"Supports a GUI and console interface for ease of use and flexibility"
		]
	},
	{
		title: "Distributed KV Store",
		dateStr: "March 2023",
		description: "Implementation of a distributed and replicated key-value data store that uses the RAFT protocol for replication consensus.",
		techStack: [TechStackItem.python],
		primaryLink: "",
	},
	{
		title: "Audinote",
		dateStr: "November 2021",
		description: "A minimalist note-taking app that transcribes spoken notes to text using the Web Speech API.",
		techStack: [TechStackItem.javascript, TechStackItem.html, TechStackItem.css],
		primaryLink: "https://github.com/JosephSalinas/project-13"
	},
	{
		title: "Portfolio Website",
		dateStr: "May 2023",
		description: "This website! Made to showcase my projects, skills, and experience.",
		techStack: [TechStackItem.nextjs, TechStackItem.tailwind],
		primaryLink: "",
		impactPoints: [
			"Statically generated site using Next 14",
			"Used MDX for content management",
		]
	}
];


