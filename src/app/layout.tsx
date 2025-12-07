import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'SkillStacker',
  description: 'SkillStacker is a unique subscription service that offers personalized skill-building content tailored to the evolving needs of small business owners and entrepreneurs through AI-driven analysis. It combines educational resources with no-code/low-code tools to help them implement their learning immediately.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
