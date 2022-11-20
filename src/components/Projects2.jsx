import React from "react";
import projectsList from "../content/projects";
import ContentWrapper from "./ContentWrapper";
import {
  PrimaryHeading,
  SecondaryHeading,
  UnorderedList,
  ListItem,
  LinkWrapper,
} from "./TypoUtils";

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
    <ContentWrapper>
      <PrimaryHeading text="🛠 Projects" />

      {projectsList.map((project) => (
        <Project projectContent={project}></Project>
      ))}
    </ContentWrapper>
  );
}

export default Projects2;
