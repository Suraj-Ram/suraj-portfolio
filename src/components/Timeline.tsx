interface TimelineItemProps {
	date?: string;
	title?: string;
	description?: string;
	children?: React.ReactNode;
}

interface JobExperienceItem {
	date: string,
	title: string,


}

export const TimelineItem: React.FC<TimelineItemProps> = ({
	date,
	title,
	description,
	children,
}) => {
	return (
		<li className="mb-10 ms-4">
			<div className="absolute -start-1.5 mt-1.5 h-3 w-3 rounded-full border border-white bg-slate-200 dark:border-slate-900 dark:bg-slate-700"></div>
			<time className="mb-1 text-sm font-normal leading-none text-slate-400 dark:text-slate-500">
				{date}
			</time>
			<h3 className="text-lg font-semibold text-slate-900 dark:text-white">
				{title}
			</h3>
			<p className="mb-4 text-base font-normal text-slate-500 dark:text-slate-400">
				{description}
			</p>
			{children}
		</li>
	);
};

export const Timeline: React.FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<ol className="relative border-s border-slate-200 dark:border-slate-700">
			{children}
		</ol>
	);
};

export default function Experience() {
	return (
		<Timeline>
			<TimelineItem
				date="July - December 2024"
				title="Incoming Intern @ Klaviyo"
				description="Editors team."
			></TimelineItem>
			<TimelineItem
				date="July - December 2023"
				title="SWE Intern @ Instawork"
				// description="I enhanced operational efficiencies and boosted sales. I innovated a LLM-enabled shift instruction quiz, improving shift quality by 25%, and initiated a pre-booking screening flow that increased healthcare sales by 30%. I designed a data pipeline for efficient legal data exports, saving over 2 hours per export, and developed a video upload feature for skill assessments in culinary roles, streamlining the process with Amazon S3 and React-Native."
				description="I enhanced operational efficiencies and boosted sales. "
			>
			</TimelineItem>
		</Timeline>
	);
}
