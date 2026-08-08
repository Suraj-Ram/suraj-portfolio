import Navbar from "@/components/Navbar";
import ThemeProvider from "@/components/ThemeProvider";
import { Analytics } from "@vercel/analytics/react";
import { Playfair_Display, Plus_Jakarta_Sans, Roboto_Mono } from "next/font/google";
import "./globals.css";

const inter = Plus_Jakarta_Sans({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-inter",
});

const roboto_mono = Roboto_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto-mono",
});

const playfair_display = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair-display",
});

export const metadata = {
  // TODO add more metadata
  title: "Suraj Portfolio",
  description: "Suraj's developer portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${roboto_mono.variable} ${playfair_display.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-slate-50 text-slate-900 antialiased dark:bg-slate-950 dark:text-slate-100">
        <ThemeProvider>
          <Analytics />
          <div className="container mx-auto px-8 py-4 font-sans md:mb-8 md:max-w-2xl xl:max-w-3xl">
            <Navbar />
            <main className="mx-4">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
