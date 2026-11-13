'use client'

import { FC, useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Check, Download, Code, Globe, Terminal } from 'lucide-react'
import { profile } from '../../content'
import { ChatModal } from '../chat/ChatModal'

interface EpilogueProps {
  hasResumePdf: boolean
  hasApiKey: boolean
}

export const Epilogue: FC<EpilogueProps> = ({ hasResumePdf, hasApiKey }) => {
  const [copied, setCopied] = useState(false)
  const [chatOpen, setChatOpen] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section className="relative w-full px-6 md:px-16 py-24 md:py-36 bg-surface-container-lowest text-center border-t border-border-hairline" id="epilogue">
      <div className="max-w-4xl mx-auto flex flex-col items-center">
        <div className="flex items-center gap-2 mb-6">
          <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
          <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary-container">
            Epilogue
          </span>
        </div>

        <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-bone-white leading-tight mb-4">
          The next chapter is <span className="italic text-primary-container font-light">unwritten.</span>
        </h2>

        <p className="font-body-lg text-body-lg text-tertiary max-w-xl mb-10">
          Seeking an AI Engineer role. I build LLM products end-to-end: RAG pipelines, multi-agent workflows, and production-grade interfaces.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <button
            onClick={handleCopyEmail}
            className="px-8 py-3.5 bg-primary-container text-surface-container-lowest font-body-sm text-body-sm font-semibold uppercase tracking-wider rounded hover:bg-secondary-container transition-all duration-200 shadow-[0_0_24px_rgba(255,87,34,0.25)] flex items-center gap-2"
          >
            {copied ? <Check className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
            <span>{copied ? 'Email Copied to Clipboard' : 'Copy Email Address'}</span>
          </button>

          {hasApiKey && (
            <button
              onClick={() => setChatOpen(true)}
              className="px-8 py-3.5 bg-surface-container text-bone-white font-body-sm text-body-sm font-medium uppercase tracking-wider rounded border border-border-hairline hover:bg-surface-container-high hover:text-primary transition-all duration-200 flex items-center gap-2"
            >
              <Terminal className="w-4 h-4 text-primary-container" />
              <span>Talk to Portfolio AI</span>
            </button>
          )}

          {hasResumePdf && (
            <a
              href={profile.links.resumePdf}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-surface-container text-bone-white font-body-sm text-body-sm font-medium uppercase tracking-wider rounded border border-border-hairline hover:bg-surface-container-high hover:text-primary transition-all duration-200 flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              <span>Download Résumé</span>
            </a>
          )}
        </div>

        {/* Social Links */}
        <div className="flex items-center gap-6 text-on-surface-variant font-label-caps text-label-caps uppercase tracking-widest">
          {profile.links.github && (
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-container transition-colors flex items-center gap-1.5"
            >
              <Code className="w-4 h-4" />
              <span>GitHub</span>
            </a>
          )}
          <span>·</span>
          {profile.links.linkedin && (
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-primary-container transition-colors flex items-center gap-1.5"
            >
              <Globe className="w-4 h-4" />
              <span>LinkedIn</span>
            </a>
          )}
          <span>·</span>
          <a
            href={`mailto:${profile.email}`}
            className="hover:text-primary-container transition-colors flex items-center gap-1.5"
          >
            <Mail className="w-4 h-4" />
            <span>Email</span>
          </a>
        </div>
      </div>
      <ChatModal isOpen={chatOpen} onClose={() => setChatOpen(false)} />
    </section>
  )
}
