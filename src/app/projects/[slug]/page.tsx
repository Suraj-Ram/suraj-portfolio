import RenderMarkdown from "@/components/RenderMarkdown";
import { SecondaryHeading } from "@/components/Typography";
import testImage from "@/content/project-pages/images/klaviyo.jpeg";
import Image from "next/image";

export default function Projects({ params }: { params: any }) {
  return (
    <div className="py-10">
      <h6 className="text-sm uppercase text-gray-400">Project</h6>
      {/* @ts-expect-error Server Component */}
      <RenderMarkdown source="src/content/project-pages/faculty-activity-tracker.mdx" />
      {/* <Image src={testImage} alt="test image" /> */}

      {/* <div className="absolute left-0 top-0 rounded-lg bg-blue-300 p-4 transition duration-700 hover:bg-green-300">
        <a href={"https://google.com"}>SREE</a>
      </div> */}
    </div>
  );
}
