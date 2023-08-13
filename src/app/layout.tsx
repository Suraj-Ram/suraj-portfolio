import { Analytics } from '@vercel/analytics/react'
import PhotoHero from '@/components/PhotoHero'
import NavCluster from '@/components/NavCluster'
import './globals.css'

export const metadata = {
  // TODO add more metadata
  title: 'Suraj Portfolio',
  description: "Suraj's developer portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-myGray-200">
        <Analytics />
        <div className="container mx-auto p-8 md:mt-12 shadow-2xl rounded-lg md:max-w-5xl xl:max-w-6xl md:mb-8 bg-myGray-50 font-sans">
          <PhotoHero />
          <NavCluster />
          <main className='mx-4'>{children}</main>
        </div>
      </body>
    </html>
  )
}
