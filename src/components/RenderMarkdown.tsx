// Uses the React Server Components variant, so a lot of code can be omitted
import { MDXRemote } from "next-mdx-remote/rsc"
import { promises as fs } from "fs"
import * as T from "@/components/Typography"
import { MDXComponents } from "mdx/types"
import Image, { ImageProps } from "next/image"
import type { ReactNode } from "react"

async function getTextFromFile(filepath: string) {
    // Filepath is relative to project root directory
    // Read as utf8 so we return a string (not a Buffer) which MDXRemote accepts
    const fileContents = await fs.readFile(filepath, "utf8")
    return fileContents
}

const CustomImage = (props: ImageProps) => {
    // TODO play around with the styling of the image
    return (
        <div className="relative flex justify-center items-center border center">
            <Image {...props} alt={props.alt ?? ""} style={{ objectFit: "cover" }} />
        </div>
    )
}

const customComponents: MDXComponents = {
    h1: ({ children }: { children?: ReactNode }) => <T.PrimaryHeading>{children}</T.PrimaryHeading>,
    h2: ({ children }: { children?: ReactNode }) => <T.SecondaryHeading>{children}</T.SecondaryHeading>,
    h3: ({ children }: { children?: ReactNode }) => <T.Heading3>{children}</T.Heading3>,
    h4: ({ children }: { children?: ReactNode }) => <T.Heading4>{children}</T.Heading4>,
    h6: ({ children }: { children?: ReactNode }) => <T.Date>{children}</T.Date>,
    ul: ({ children }: { children?: ReactNode }) => <T.UnorderedList>{children}</T.UnorderedList>,
    li: ({ children }: { children?: ReactNode }) => <T.ListItem>{children}</T.ListItem>,
    strong: ({ children }: { children?: ReactNode }) => <T.Bold>{children}</T.Bold>,
    em: ({ children }: { children?: ReactNode }) => <T.Italics>{children}</T.Italics>,
    a: ({ children, href }: { children?: ReactNode; href?: string }) => (
        <T.LinkWrapper link={href ?? ""}>{children}</T.LinkWrapper>
    ),
    Image: CustomImage,
}

export default async function RenderMarkdown({ source }: { source: string }) {
    const markdownContent = await getTextFromFile(source)

    return (
        // Use prose to add default styling to elements without a custom component
        <article className="max-w-none prose">
            <MDXRemote source={markdownContent} components={customComponents} />
        </article>
    )
}
