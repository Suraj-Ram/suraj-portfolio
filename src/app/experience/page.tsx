import RenderMarkdown from "@/components/RenderMarkdown"
import { Timeline, TimelineItem } from "@/components/Timeline"
import { PrimaryHeading } from "@/components/Typography"

export default function Experience() {
    return (
        <>
            <PrimaryHeading>Experience</PrimaryHeading>
            {/* @ts-expect-error Server Component */}
            <RenderMarkdown source="src/content/Experience.mdx" />
        </>
    )
}