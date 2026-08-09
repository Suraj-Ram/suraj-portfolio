import { ExperienceSubItem } from "@/components/ExperienceSubItem"
import RenderMarkdown from "@/components/RenderMarkdown"
import { SecondaryHeading } from "@/components/Typography"

export default function Experience() {
    return (
        <div className="py-10">
            <SecondaryHeading>Experience</SecondaryHeading>
            <ExperienceSubItem />
            <hr className="my-8 border-slate-200 dark:border-slate-600" />
            <RenderMarkdown source="src/content/Experience.mdx" />
        </div>
    )
}
