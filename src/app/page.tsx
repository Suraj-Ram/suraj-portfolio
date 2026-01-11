import RenderMarkdown from "@/components/RenderMarkdown";
import NextPage from "@/components/NextPage";
import PhotoHeroSmall from "@/components/PhotoHeroSmall";
import ProjectsParent from "@/components/ProjectsParent";
import { SeeMoreLink } from "@/components/SeeMoreLink";
import Experience from "@/components/Timeline";
import { ExperienceSubItem } from "../components/ExperienceSubItem";
import { SecondaryHeading } from "@/components/Typography";

// About Me Page
export default function Home() {
  return (
    <>
      <PhotoHeroSmall />

      <div className="py-2 lg:py-4">
        <RenderMarkdown source="src/content/AboutMe.mdx" />
      </div>

      {/* <SecondaryHeading>Experience</SecondaryHeading> */}
      {/* <ExperienceSubItem /> */}
      {/* <SeeMoreLink link="/experience" /> */}


      {/* <ProjectsParent /> */}
    </>
  );
}


