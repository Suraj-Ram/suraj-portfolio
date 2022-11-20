import React from "react";
import projectsList from "../content/projects";
import {PrimaryHeading, SecondaryHeading, UnorderedList, ListItem, LinkWrapper} from "./TypoUtils"


function ProjectDate({ children }) {
  return (
    <p className="tracking-wide text-sm font-light text-gray-500 my-2">
      {children}
    </p>
  );
}

function Project({ projectContent }) {
  return (
    <div className="md:mb-1 lg:mb-3">
      <LinkWrapper>
        <SecondaryHeading text={projectContent.title} />
      </LinkWrapper>
      <ProjectDate>{projectContent.date}</ProjectDate>
      <UnorderedList>
        {projectContent.listDescription.map((item) => (
          <ListItem>{item}</ListItem>
        ))}
      </UnorderedList>
    </div>
  );
}

function Projects2() {
  return (
    <div className="mx-4">
      <PrimaryHeading text="🛠 Projects" />

      {projectsList.map((project) => (
        <Project projectContent={project}></Project>
      ))}

      <PrimaryHeading text="👔 Experience" />

      {/*       
      - A **Python** and **OpenCV** program that controls a computer using gestures captured by the webcam.
- Won most technically challenging product at HackBeanPot 2022 🏆.
- Supported gestures for controlling arrow keys, horizontal and vertical scrolling for going through presentations, seeking video playback and simply just scrolling through web pages.
- The program classifies gestures by interpreting 21 key hand landmarks provided by a pre-trained neural network from **MediaPipe** (a Google CV library).
- Read full listing on [Devpost!](https://devpost.com/software/siglo) */}
    </div>
  );
}

export default Projects2;
