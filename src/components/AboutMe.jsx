import React from "react";
import ContentWrapper from "./ContentWrapper";
import {
  ListItem,
  PrimaryHeading,
  UnorderedList,
  S,
  InternalLinkWrapper,
} from "./TypoUtils";

function AboutMe() {
  return (
    <ContentWrapper>
      <PrimaryHeading text={"About Me"}></PrimaryHeading>
      <UnorderedList>
        <ListItem>
          {" "}
          I am currently a <S>developer</S> at{" "}
          <InternalLinkWrapper link="/experience">SandboxNU</InternalLinkWrapper>, a
          student-led software consultancy at Northeastern{" "}
        </ListItem>
        <ListItem>My passion lies in Machine Learning ... TODO: </ListItem>
        {/* <ListItem>I am from India, but have lived and studied in five countries! (🇻🇳, 🇷🇺, 🇺🇸, 🇹🇷, 🇦🇪)</ListItem> */}
        <ListItem></ListItem>
      </UnorderedList>
    </ContentWrapper>
  );
}

export default AboutMe;
