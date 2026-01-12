import posthog from "posthog-js";

// Will be one of 'production', 'preview', or 'development'
const vercelEnvironment = process.env.NEXT_PUBLIC_VERCEL_ENV;

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
	api_host: "/hog_ingest",
	ui_host: "https://us.posthog.com",
	defaults: "2025-11-30",
	loaded: (posthog) => {
		posthog.register({
			environment: vercelEnvironment,
		});
	},
});
