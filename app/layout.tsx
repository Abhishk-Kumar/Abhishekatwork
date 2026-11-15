import type { Metadata } from 'next'
import { Newsreader, JetBrains_Mono, Dancing_Script } from 'next/font/google'
import './globals.css'
import { Header } from './../components/layout/Header'
import { Footer } from './../components/layout/Footer'
import { ScrollProgress } from './../components/layout/ScrollProgress'
import { profile, skills } from '../content'
import fs from 'fs'
import path from 'path'

const newsreader = Newsreader({
  subsets: ['latin'],
  variable: '--font-newsreader',
  display: 'swap',
  style: ['normal', 'italic'],
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
})

const scriptFont = Dancing_Script({
  subsets: ['latin'],
  variable: '--font-script',
  weight: '500',
  display: 'swap',
})

const siteUrl = process.env.SITE_URL ?? process.env.VERCEL_PROJECT_PRODUCTION_URL ? 'https://' + process.env.VERCEL_PROJECT_PRODUCTION_URL : 'http://localhost:3000'

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${profile.name} — ${profile.headline}`,
    template: `%s | ${profile.name}`,
  },
  description: profile.summary,
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    title: `${profile.name} — ${profile.headline}`,
    description: profile.summary,
    url: siteUrl,
    siteName: profile.name,
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: `${profile.name} — ${profile.headline}`,
    description: profile.summary,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  let hasResumePdf = false
  try {
    hasResumePdf = fs.existsSync(path.join(process.cwd(), 'public', 'resume.pdf'))
  } catch {
    hasResumePdf = false
  }

  const allSkills = [...skills.aiMl, ...skills.languages, ...skills.backend, ...skills.frontend, ...skills.databases, ...skills.devops, ...skills.practices]

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    jobTitle: 'AI Engineer',
    url: siteUrl,
    sameAs: [
      profile.links.github,
      profile.links.linkedin,
    ],
    knowsAbout: allSkills,
  }

  return (
    <html lang="en" className={`dark ${newsreader.variable} ${jetbrainsMono.variable} ${scriptFont.variable}`} suppressHydrationWarning>
      <body className="bg-background text-on-surface antialiased selection:bg-primary-container selection:text-surface-container-lowest" suppressHydrationWarning>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:z-50 focus:p-4 focus:bg-primary-container focus:text-surface-container-lowest font-label-caps uppercase"
        >
          Skip to main content
        </a>
<div aria-hidden className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
  <div className="glow-orb glow-a aria-hidden" />
  <div className="glow-orb glow-b aria-hidden" />
  <div className="glow-orb glow-c aria-hidden" />
  <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,87,34,0.05),transparent_60%)]" />
</div>
        <div className="relative z-10">
          <ScrollProgress />
          <Header hasResumePdf={hasResumePdf} />
        </div>
        <div id="main-content" className="relative z-10">{children}</div>
        <div className="relative z-10">
          <Footer hasResumePdf={hasResumePdf} />
        </div>
      </body>
    </html>
  )
}
