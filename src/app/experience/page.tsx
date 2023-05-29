import RenderMarkdown from "@/components/RenderMarkdown"
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