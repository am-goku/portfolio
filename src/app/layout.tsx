import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './layouts/Header'

import icn from "@/app/favicon.ico"

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Gokul Krishna",
  description: "Portfolio Website",
  category: "Web Development",
  keywords: [
    "MERN",
    "Web Developer",
    "Portfolio",
    "Javascript",
    "HTML",
    "CSS",
    "React",
    "Next",
    "MongoDB",
    "Node",
    "Expressjs",
    "Full Stack Developer",
    "Gokul Krishna",
    "Gokul Krishna G H",
    "Relink",
    "Trendly",
    "Brototype",
    "Developer"
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href={icn.src} />
      </head>
      <body className={inter.className}>
        <main className="flex flex-col gap-10" draggable={false}>
          <div className="">
            <Header />
          </div>
          {children}
        </main>
      </body>
    </html>
  );
}
