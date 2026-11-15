import { Hero } from '../components/sections/Hero'
import { Origin } from '../components/sections/Origin'
import { Craft } from '../components/sections/Craft'
import { Artifacts } from '../components/sections/Artifacts'
import { Arsenal } from '../components/sections/Arsenal'
import { Epilogue } from '../components/sections/Epilogue'
import { profile } from '../content'
import fs from 'fs'
import path from 'path'

export default function Page() {
  let hasResumePdf = false
  let hasApiKey = false
  try {
    hasResumePdf = fs.existsSync(path.join(process.cwd(), 'public', 'resume.pdf'))
    hasApiKey = !!process.env.GROQ_API_KEY
  } catch {
    hasResumePdf = false
    hasApiKey = false
  }

  return (
    <main className="w-full flex flex-col">
      <Hero hasResumePdf={hasResumePdf} />
      <Origin />
      <Craft />
      <Artifacts />
      <Arsenal />
      <Epilogue hasResumePdf={hasResumePdf} />
    </main>
  )
}

