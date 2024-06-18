import Link from "next/link";


export const SeeMoreLink = ({ link, message }: { link: string; message?: string }) => (
    <Link href={link}>
        <span className=" flex items-center justify-center my-4 px-4 py-2 text-sm font-medium">
            {message ? message : "See more"}
            <svg
                className="h-4 w-4 ml-1"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7" />
            </svg>
        </span>
    </Link>
);
