import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Header from './layouts/Header'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Gokul Krishna',
  description: 'Portfolio Website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
