import RightArrow from "@/components/icons/RightArrow";
import Link from "next/link";

export default function NextPage({ stub, name }: { stub: string, name: string}) {
	return (
		<div className="flex justify-end font-semibold">
			<span
				className="flex cursor-pointer items-center justify-center gap-1 
                            rounded-md border border-myGray-200 p-3 text-main-600
                            hover:underline dark:border-slate-700 dark:text-main-400"
			>
				<Link href={stub}>{name}</Link>
				<RightArrow className="h-4" />
			</span>
		</div>
	);
}
