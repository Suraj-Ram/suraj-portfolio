import Link from "next/link";

export function PrimaryHeading({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <div className="flex items-center w-full mb-6 mt-3 lg:mt-6">
                <span className="flex-shrink mr-4 font-bold text-2xl md:text-3xl lg:text-4xl tracking-tight">
                    {children}
                </span>
                <div className="flex-grow border-t border-myGray-200"></div>
            </div>
        </div>
    )
}

export function SecondaryHeading({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex">
            <div className="flex items-center w-full mt-2 ">
                <span className="flex-shrink mr-4 font-semibold text-xl md:text-2xl lg:text-2xl tracking-tight">
                    {children}
                </span>
            </div>
        </div>
    );
}

export function UnorderedList({ children }: { children: React.ReactNode }) {
    return (
        <ul className="space-y-1 md:space-y-2 list-disc list-inside text-myGray-700 text-md tracking-wide">
            {children}
        </ul>
    );
}

export function ListItem({ children }: { children: React.ReactNode }) {
    return <li className="">{children}</li>;
}

export function LinkWrapper({ children, link }: { children: React.ReactNode, link: string }) {
    // Check if internal link or external link and return the appropriate component

    const baseClass = "underline hover:text-main-600 cursor-pointer"

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
    return <span className="font-bold tracking-wide">{children}</span>
}

export function Italics({ children }: { children: React.ReactNode }) {
    return <span className="italic text-myGray-500">{children}</span>
}



