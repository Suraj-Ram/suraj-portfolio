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
      <PrimaryHeading text={" 🙋🏽‍♂️ About Me"}></PrimaryHeading>
      <UnorderedList>
        <ListItem>
          My passion lies in systematic software development and creating
          scalable and performant backend solutions. 💙
        </ListItem>
        <ListItem>
          {" "}
          I am currently a <S>project lead</S> at{" "}
          <InternalLinkWrapper link="/experience">
            SandboxNU
          </InternalLinkWrapper>
          . Where I am heading up a team of 6 people to create a web application
          that aids a Northeastern professor in conducting performance reviews ✅
          for their merit committee. {" "}
        </ListItem>

        <ListItem>Recently, I am exploring machine learning 📊 and its applications through my DS 4400 course.</ListItem>

        {/* <ListItem>My passion lies in Machine Learning ... TODO: </ListItem> */}
        {/* <ListItem>I am from India, but have lived and studied in five countries! (🇻🇳, 🇷🇺, 🇺🇸, 🇹🇷, 🇦🇪)</ListItem> */}
      </UnorderedList>
    </ContentWrapper>
  );
}

export default AboutMe;
