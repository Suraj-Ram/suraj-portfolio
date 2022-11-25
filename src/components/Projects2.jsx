import React from "react";
import projectsList from "../content/projects";
import ContentWrapper from "./ContentWrapper";
import { ProjectDate } from "./ProjectDate";
import {
  PrimaryHeading,
  SecondaryHeading,
  UnorderedList,
  ListItem,
  LinkWrapper,
} from "./TypoUtils";

function Project({ projectContent }) {
  return (
    <div className="md:mb-1 lg:mb-3">
      <LinkWrapper link={projectContent.ghLink}>
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
