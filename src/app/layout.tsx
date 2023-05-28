import PhotoHero from '@/components/PhotoHero'
import NavCluster from '@/components/NavCluster'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

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
      <body className={inter.className}>
        <div className="container mx-auto p-8  md:mt-12 shadow-2xl rounded-lg md:max-w-5xl xl:max-w-6xl md:mb-8">
          <PhotoHero/>
          <NavCluster />
          {/* <PhotoHero />
          <NavCluster /> */}
          {/* <main>{main}</main> */}
        </div>
      </body>
    </html>
  )
}
