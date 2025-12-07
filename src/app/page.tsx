import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'SkillStacker',
  description: 'SkillStacker is a unique subscription service that offers personalized skill-building content tailored to the evolving needs of small business owners and entrepreneurs through AI-driven analysis. It combines educational resources with no-code/low-code tools to help them implement their learning immediately.',
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">SkillStacker</h1>
      <p className="mt-4 text-lg">SkillStacker is a unique subscription service that offers personalized skill-building content tailored to the evolving needs of small business owners and entrepreneurs through AI-driven analysis. It combines educational resources with no-code/low-code tools to help them implement their learning immediately.</p>
    </main>
  )
}
