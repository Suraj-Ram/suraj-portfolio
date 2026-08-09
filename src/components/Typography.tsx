import Link from "next/link";

export function PrimaryHeading({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <div className="mt-3 flex w-full items-center md:mb-3 lg:mb-6 lg:mt-6">
                <span className="mr-4 flex-shrink text-2xl font-bold tracking-tight md:text-3xl lg:text-4xl">
                    {children}
                </span>
                <div className="flex-grow border-t border-myGray-200 dark:border-slate-700"></div>
            </div>
        </div>
    )
}

export function SecondaryHeading({ children }: { children: React.ReactNode }) {
    return (
        <div className="mb-2 mt-1 flex md:mb-5 md:mt-3">
            <div className="mt-2 flex w-full items-center ">
                <span className="mr-4 flex-shrink font-accent text-2xl font-semibold tracking-tight text-black dark:text-white md:text-3xl">
                    {children}
                </span>
            </div>
        </div>
    );
}

export function Heading3({ children }: { children: React.ReactNode }) {
    return (
        <h3 className="mb-1 mt-6 text-xl font-semibold text-slate-900 dark:text-white md:text-xl lg:mt-8 lg:text-2xl">{children}</h3>
    );
}

export function Heading4({ children }: { children: React.ReactNode }) {
    return (
        <h4 className="mb-0.5 mt-5 text-lg font-semibold text-slate-900 dark:text-white md:text-xl lg:mt-6 lg:text-xl">{children}</h4>
    );
}


export function UnorderedList({ children }: { children: React.ReactNode }) {
    return (
        <ul className="mb-4 list-outside list-disc space-y-1.5 text-md tracking-wide text-slate-700 dark:text-slate-200 md:space-y-2">
            {children}
        </ul>
    );
}

export function ListItem({ children }: { children: React.ReactNode }) {
    return <li className="">{children}</li>;
}

export function LinkWrapper({ children, link }: { children: React.ReactNode, link: string }) {
    // Check if internal link or external link and return the appropriate component

    const baseClass = "underline cursor-pointer text-main-600 hover:text-main-700 dark:text-main-400 dark:hover:text-main-300"

    function InternalLink() {
        return <Link href={link} className={baseClass}>{children}</Link>
    }

    function ExternalLink() {
        return (<a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className={baseClass}
        >
            {children}
        </a>)

    }

    return (
        link.slice(0, 4) === "http" ? <ExternalLink /> : <InternalLink />
    )
}

export function Bold({ children }: { children: React.ReactNode }) {
    return <span className="font-bold tracking-wide text-slate-900 dark:text-white">{children}</span>
}

export function Italics({ children }: { children: React.ReactNode }) {
    return <span className="italic text-slate-500 dark:text-slate-200">{children}</span>
}

export function Date({ children }: { children: React.ReactNode }) {
    return <p className="mb-2 mt-1 font-mono text-sm font-medium tracking-tight text-slate-500 dark:text-slate-200">{children}</p>
}

export function Divider() {
    return <div className="my-4 border-t border-slate-200 dark:border-slate-600"></div>
}
