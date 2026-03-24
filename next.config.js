/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/hog_ingest/static/:path*',
        destination: 'https://us-assets.i.posthog.com/static/:path*',
      },
      {
        source: '/hog_ingest/:path*',
        destination: 'https://us.i.posthog.com/:path*',
      },
      {
        source: '/resume',
        destination: '/resume.pdf',
      }
    ]
  },
  skipTrailingSlashRedirect: true,
}


module.exports = nextConfig
