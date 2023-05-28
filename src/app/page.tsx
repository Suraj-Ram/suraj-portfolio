import Image from 'next/image'
import RenderMarkdown from '@/components/RenderMarkdown'

// About Me Page
export default function Home() {
  {/* @ts-expect-error Server Component */}
  return <RenderMarkdown source='src/content/AboutMe.mdx' />
}
