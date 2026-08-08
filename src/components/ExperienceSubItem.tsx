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
		{
			company: "Instawork",
			role: "SWE Intern -- User Vetting",
			dateRanges: ["July 2023 → December 2023"],
			logo: "/logos/instawork_logo.png",
		},
	];

	return (
		<div className="divide-y divide-slate-200 dark:divide-slate-700">
			{experience_data.map((item) => {
				return (
					<div
						className="flex gap-4 py-4 first:pt-2 last:pb-2 md:py-6"
						key={item.logo}
					>
						<Image
							width={56}
							height={56}
							src={item.logo}
							alt={`${item.company} logo`}
							className="h-14 w-14 rounded-xl bg-white shadow-sm ring-1 ring-slate-200 dark:ring-slate-700"
						/>
						<div className="flex flex-col gap-0.5">
							<span className="text-base font-semibold tracking-tight text-slate-900 dark:text-white">
								{item.company}
							</span>
							<span className="text-sm text-slate-700 dark:text-slate-200 md:text-base">
								{item.role}
							</span>

							{item.dateRanges.toReversed().map((range) => (
								<span
									key={range}
									className="mt-1.5 block font-mono text-sm font-medium tracking-tight text-slate-500 dark:text-slate-300"
								>
									{range}
								</span>
							))}
						</div>
					</div>
				);
			})}
		</div>
	);
}
