import { ReactNode } from "react";
import { PrimaryHeading } from "@/components/Typography";
import { Verified, Trophy } from "lucide-react";

export enum TechStackItem {
	python = "Python",
	javascript = "JavaScript",
	typescript = "TypeScript",
	react = "React",
	nextjs = "Next.js",
	nodejs = "Node.js",
	express = "Express",
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

/*

## [Recreation Tracker](https://github.com/Suraj-Ram/marino-tracker)
###### December 2022
- A web application written in **React** and **Javascript** that tracks the usage across 5 different sections of my crowded university gym, Marino Center.
- Wrote a web scraper that is deployed that scraped [Marino's website](https://recreation.northeastern.edu/) to log sub-hourly usage metrics in a Cloud Firestore document database. Currently at more than 45,000+ documents!
- Created a front end using React and the Recharts graphing library to show daily usage data for each day per gym section.

## [SigLo - Reinvent your input.](https://github.com/AndreyPiterkin/SigLo)
###### February 2022

- A **Python** and **OpenCV** program that controls a computer using gestures captured by the webcam.
- Won most technically challenging product at HackBeanPot 2022 🏆.
- Supported gestures for controlling arrow keys, horizontal and vertical scrolling for going through presentations, seeking video playback and simply just scrolling through web pages.
- The program classifies gestures by interpreting 21 key hand landmarks provided by a pre-trained neural network from [**MediaPipe**](https://google.github.io/mediapipe/) (a Google-developed computer vision library).
- [Read full listing on Devpost](https://devpost.com/software/siglo)!

## Java Image Editor
###### June 2022
- An image editor written in **Java 8** that applies a variety of filters using matrix operations.
- Utilizes the MVC architecture to decouple the Model, View and Controller.
- The application supports common image types and `.ppm` images.
- Can be interacted with using the GUI (made using **Swing**) and via the console through text inputs
- *Code is private, but can be made public upon request.*

## [AudiNote - Notes with Voice](https://github.com/JosephSalinas/project-13)
###### October 2021
- A minimalist note-taking web app, written in **Javascript**, that transcribes spoken notes using the [**Web Speech API**](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API)
- It stores a collection of notes that can be modified in the future and persists them in the LocalStorage.
*/

export const projectsData: ProjectItem[] = [
    {
        dateStr: "Jan - Dec 2023",
        title: "Faculty Activity Tracker",
        description: "",
        techStack: [],
        primaryLink: ""
    },
	{
		title: "Recreation Tracker",
		dateStr: "December 2022",
		// add jsx for desciprtion
		description: ( "Small 2 sentence description"
		),
		techStack: [],
		primaryLink: "https://github.com/Suraj-Ram/marino-tracker",
		links: {
			website: "https://recreation.northeastern.edu/",
		},
        impactPoints: [
            "Currently scrapped more than 100,000 datapoints",
        ]
	},
	{
		title: "SigLo - Reinvent your input.",
		dateStr: "February 2022",
		description:( "aaaaaaaaa"

        ),
		techStack: [],
		primaryLink: "https://github.com/AndreyPiterkin/SigLo",
		links: {
			website: "https://devpost.com/software/siglo",
		},
        impactPoints: [
            "Won most technically challenging product at HackBeanPot 2022 🏆",
        ]
	},
	{
		title: "Java Image Editor",
		dateStr: "June 2022",
		description:
			"An image editor written in Java 8 that applies a variety of filters using matrix operations. It utilizes the MVC architecture to decouple the Model, View, and Controller. The application supports common image types and .ppm images, and can be interacted with using the GUI made using Swing and via the console through text inputs.",
		techStack: [],
		primaryLink: "", // Since the code is private and no link was provided
		links: {},
            
	},
];
