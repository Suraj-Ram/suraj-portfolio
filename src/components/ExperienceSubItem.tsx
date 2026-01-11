import { SecondaryHeading } from "@/components/Typography";
import Image from "next/image";

export function ExperienceSubItem() {
	const experience_data: {
		company: string;
		role: string;
		dateRanges: string[];
		logo: string;
	}[] = [
		{
			company: "Klaviyo",
			role: "Software Engineer -- Development Infrastructure",
			dateRanges: ["July 2024 → December 2024", "August 2025 → Today"],
			logo: "/logos/klaviyo_logo.jpeg",
		},
		// {
		// 	company: "Klaviyo",
		// 	role: "Software Engineer -- Development Infrastructure",
		// 	dateRanges: ["August 2025 → Today"],
		// 	logo: "/logos/klaviyo_logo.jpeg",
		// },
		// {
		// 	company: "Klaviyo",
		// 	role: "SWE Intern -- Software Delivery",
		// 	dateRanges: ["July 2024 → December 2024"],
		// 	logo: "/logos/klaviyo_logo.jpeg",
		// },
		// {
		// 	company: "Sandbox",
		// 	role: "Head of Developer Experience",
		// 	date: "September 2022 → Today",
		// 	logo: "/logos/sandboxnu_logo2.jpg",
		// },
		{
			company: "Instawork",
			role: "SWE Intern -- User Vetting",
			dateRanges: ["July 2023 → December 2023"],
			logo: "/logos/instawork_logo.png",
		},
	];

	return (
		<>
			<div className="divide-y divide-slate-200">
				{experience_data.map((item) => {
					return (
						<div
							className="flex gap-4 py-3 first:pt-2 md:py-6 last:pb-2"
							key={item.logo}
						>
							<Image
								width={56}
								height={56}
								src={item.logo}
								alt={`logo`}
								className="h-14 w-14 rounded-xl shadow-md"
							/>
							<div className="col-span-9 flex flex-col">
								<span className="text-l font-semibold text-slate-800">
									{item.company}
								</span>
								<span className="text-md text-slate-700">{item.role}</span>

								{item.dateRanges.toReversed().map((range) => (
									<span
										key={range}
										className="col-span-2 mt-2 block font-mono text-sm font-medium tracking-tighter text-slate-500"
									>
										{range}
									</span>
								))}
							</div>
						</div>
					);
				})}
			</div>
		</>
	);
}
