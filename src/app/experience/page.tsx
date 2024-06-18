import { ExperienceSubItem } from "@/components/ExperienceSubItem"
import RenderMarkdown from "@/components/RenderMarkdown"
import { Timeline, TimelineItem } from "@/components/Timeline"
import { PrimaryHeading, SecondaryHeading } from "@/components/Typography"

export default function Experience() {
    return (
        <>
            <div className="py-10">
                <SecondaryHeading>Experience</SecondaryHeading>
                <ExperienceSubItem />
                <hr className="my-8" />

                {/* @ts-expect-error Server Component */}
                <RenderMarkdown source="src/content/Experience.mdx" />
            </div>
        </>
    )
}