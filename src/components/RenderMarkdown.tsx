// Uses the React Server Components variant, so a lot of code can be omitted
import { MDXRemote } from "next-mdx-remote/rsc"
import path from "path"
import { promises as fs } from "fs"
import * as T from "@/components/Typography"
import { MDXComponents } from "mdx/types"

async function getTextFromFile(filepath: string) {
    // Filepath is relative to project root directory
    const fullPath = path.join(process.cwd(), filepath)
    const fileContents = await fs.readFile(filepath)
    return fileContents
}

const customComponents: MDXComponents = {
    h1: (props: any) => <T.PrimaryHeading {...props} />,
    h2: (props: any) => <T.SecondaryHeading {...props} />,
    strong: (props: any) => <T.Bold {...props} />,
    a: (props: any) => <T.LinkWrapper {...props} link={props.href} />

}


export default async function RenderMarkdown({ source }: { source: string }) {
    const markdownContent = await getTextFromFile(source)

    return (
        // Use prose to add default styling to elements without a custom component
        <article className="prose max-w-none lg:prose-lg ">
            <T.PrimaryHeading>Suraj</T.PrimaryHeading>
            {/* @ts-expect-error Server Component */}
            <MDXRemote source={markdownContent} components={customComponents} />
        </article>
    )


}