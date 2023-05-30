import RightArrow from "@/components/icons/RightArrow";
import Link from "next/link";

export default function NextPage({ stub, name }: { stub: string, name: string}) {
	return (
		<div className="flex justify-end font-semibold">
			<span
				className="flex items-center gap-1 justify-center 
                            border border-myGray-200 text-main-600 p-3 rounded-md
                            hover:underline cursor-pointer"
			>
				<Link href={stub}>{name}</Link>
				<RightArrow className="h-4" />
			</span>
		</div>
	);
}
