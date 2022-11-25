import React from "react";
import ContentWrapper from "./ContentWrapper";
import { ProjectDate } from "./ProjectDate";
import {
  LinkWrapper,
  ListItem,
  PrimaryHeading,
  SecondaryHeading,
  UnorderedList,
  S,
} from "./TypoUtils";

function Experience() {
  return (
    <ContentWrapper>
      <PrimaryHeading text="👔 Experience" />

      <SecondaryHeading
        text={
          <>
            <LinkWrapper link="https://sandboxnu.com">Sandbox</LinkWrapper>
            <span className="text-gray-600 font-light"> @ Northeastern</span>
          </>
        }
      ></SecondaryHeading>
      <ProjectDate>September 2022 - Present</ProjectDate>
      <UnorderedList>
        <ListItem>
          Sandbox is Northeastern's student-led software consultancy where we
          develop software for clients from the university community
        </ListItem>
        <ListItem>
          I worked in a team of 8 people (1 PM, 5 developers, & 2 designers) to
          create an internal tool for an Arts professor and his professor
          evaluation committee
        </ListItem>
        <ListItem>
          As a predominantly backend developer, I programmed a REST API in{" "}
          <S>NestJS</S> to do CRUD operations on a Postgres database
        </ListItem>
        <ListItem>
          In addition, I collaboratively implemented Google OAuth authentication
          using <S>Passport</S> and <S>JSON Web Tokens</S>
        </ListItem>
      </UnorderedList>

      <SecondaryHeading
        text={
          <>
            <LinkWrapper link="https://nutamid.org/tech-consulting/">
              TAMID
            </LinkWrapper>
            <span className="text-gray-600 font-light"> @ Northeastern</span>
          </>
        }
      ></SecondaryHeading>
      <ProjectDate>December 2021 - May 2022</ProjectDate>
      <UnorderedList>
        <ListItem>
          TAMID is a national consulting club that connects early-stage startups
          to university students
        </ListItem>
        <ListItem>
          My team and I worked with{" "}
          <LinkWrapper link="https://getpresently.com/">Presently</LinkWrapper>,
          a NY-based startup focused on building end-to-end platforms to make
          picking and giving gifts easier
        </ListItem>
        <ListItem>
          Added animations, tooltips and other visual features to{" "}
          <LinkWrapper link="https://giftpicker.io/">giftpicker.io</LinkWrapper>{" "}
          (one of Presently's products)by writing new components in their <S>React</S> codebase, for my first deliverable
        </ListItem>
        <ListItem>Conceptualized and developed a web app that matched users for a "secret santa" style gift exchange, in a team of 15 developers, for my second deliverable</ListItem>
        <ListItem>For this, I wrote backend <S>serverless functions</S> that used clustering algorithms which paired users based on a list of common interests </ListItem>

        
        {/* Designed and developed a  */}
        
        

      </UnorderedList>
    </ContentWrapper>
  );
}

export default Experience;
