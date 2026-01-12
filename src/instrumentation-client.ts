import posthog from 'posthog-js'

console.log("env label")
console.log(process.env.NEXT_PUBLIC_VERCEL_ENV)

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
  api_host: "/hog_ingest",
  ui_host: "https://us.posthog.com",
  defaults: '2025-11-30'
});
