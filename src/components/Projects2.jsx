import React from "react";
import projectsList from "../content/projects";

function PrimaryHeading({ text }) {
  return (
    <div className="flex">
      <div class="flex items-center w-full mb-6 mt-3 lg:mt-6">
        <span class="flex-shrink mr-4 font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight">
          {text}
        </span>
        <div class="flex-grow border-t border-gray-200"></div>
      </div>
    </div>
  );
}

function SecondaryHeading({ text }) {
  return (
    <div className="flex">
      <div class="flex items-center w-full">
        <span class="flex-shrink mr-4 font-semibold text-xl md:text-2xl lg:text-2xl tracking-tight">
          {text}
        </span>
      </div>
    </div>
  );
}

function UnorderedList({ children }) {
  return (
    <ul className=" space-y-1 md:space-y-2 list-disc list-inside text-gray-700 text-md tracking-wide">
      {children}
    </ul>
  );
}

function ListItem({ children }) {
  return <li className="">{children}</li>;
}

function LinkWrapper({ children, link }) {
  return (
    <a
      href={link}
      target="_blank"
      className="underline hover:text-blue-600 cursor-pointer"
    >
      {children}
    </a>
  );
}

function ProjectDate({ children }) {
  return (
    <p className="tracking-wide text-sm font-light text-gray-500 my-2">
      {children}
    </p>
  );
}

function Project({ projectContent }) {
  return (
    <>
      <LinkWrapper>
        <SecondaryHeading text={projectContent.title} />
      </LinkWrapper>
      <ProjectDate>{projectContent.date}</ProjectDate>
      <UnorderedList>
        {projectContent.listDescription.map((item) => (
          <ListItem>{item}</ListItem>
        ))}
      </UnorderedList>
    </>
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
