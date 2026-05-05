import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Discord Bot Uptime Monitor — Keep Your Bots Online 24/7',
  description: 'Monitor Discord bots across multiple servers, track uptime, detect crashes, and auto-restart them with detailed incident reports.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="57b3d548-f839-40a4-af99-aff3789ba4bc"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
