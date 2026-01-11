// Uses the React Server Components variant, so a lot of code can be omitted
import { MDXRemote } from "next-mdx-remote/rsc"
import path from "path"
import { promises as fs } from "fs"
import * as T from "@/components/Typography"
import { MDXComponents } from "mdx/types"
import Image from "next/image"

async function getTextFromFile(filepath: string) {
    // Filepath is relative to project root directory
    const fileContents = await fs.readFile(filepath)
    return fileContents
}

const customComponents: MDXComponents = {
    h1: (props: any) => <T.PrimaryHeading {...props} />,
    h2: (props: any) => <T.SecondaryHeading {...props} />,
    h3: (props: any) => <T.Heading3 {...props} />,
    h4: (props: any) => <T.Heading4 {...props} />,
    h6: (props: any) => <T.Date {...props} />,
    ul: (props: any) => <T.UnorderedList {...props} />,
    li: (props: any) => <T.ListItem {...props} />,
    strong: (props: any) => <T.Bold {...props} />,
    em: (props: any) => <T.Italics {...props} />,
    a: (props: any) => <T.LinkWrapper {...props} link={props.href} />,
    Image: (props: any) => <CustomImage {...props} />,
}

const CustomImage = (props: any) => {
    // TODO play around with the styling of the image
    return (
        <div className="relative flex justify-center items-center border center">
            {/* <div className=""> */}
            <Image {...props} objectFit="cover" />
            {/* </div> */}
        </div>
    )
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
