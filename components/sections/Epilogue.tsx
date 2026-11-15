'use client'

import { FC, useState, useEffect } from 'react'
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
  const [contactFormOpen, setContactFormOpen] = useState(false)
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' })
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; message?: string }>({})
  const [currentYear, setCurrentYear] = useState(2026)

  useEffect(() => {
    setCurrentYear(new Date().getFullYear())
  }, [])

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleOpenContactForm = () => setContactFormOpen(true)

  const handleCloseContactForm = () => setContactFormOpen(false)

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setContactFormOpen(false)
  }

  const handleFormChange = (field: 'name' | 'email' | 'message', value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }))
    setFormErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  return (
    <section className="relative w-full px-6 md:px-16 py-24 md:py-36 bg-surface-container-lowest text-center border-t border-border-hairline" id="epilogue">
      <div className="absolute -top-12 md:-top-16 right-0 select-none pointer-events-none rounded-full bg-[rgba(249,94,20,.10)] blur-[130px] w-64 h-64 opacity-20 z-0 -rotate-6" />
      <div className="max-w-6xl mx-auto relative">
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

          <button
            onClick={handleOpenContactForm}
            className="px-8 py-3.5 bg-surface-container-low text-bone-white font-body-sm text-body-sm font-medium uppercase tracking-wider rounded border border-border-hairline hover:bg-surface-container hover:text-primary-container transition-all duration-200 flex items-center gap-2"
          >
            <Mail className="w-4 h-4 text-primary-container" />
            <span>Contact Form</span>
          </button>
        </div>

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

        {/* Email as readable text */}
        <p className="font-body-md text-body-md text-tertiary mb-12">
          Email: <a href={`mailto:${profile.email}`} className="text-primary-container hover:text-secondary-container transition-colors underline">{profile.email}</a>
        </p>

        {/* Frontend-only Contact Form */}
        {contactFormOpen && (
          <div className="fixed inset-0 z-50 bg-surface-container-lowest/95 backdrop-blur-lg flex items-center justify-center p-6 md:p-12 animate-in fade-in duration-200">
            <button
              onClick={handleCloseContactForm}
              className="absolute top-6 right-6 p-2 text-bone-white hover:text-primary-container focus:outline-none focus:ring-2 focus:ring-primary-container rounded"
              aria-label="Close contact form"
            >
              <span className="w-6 h-6">{'×'}</span>
            </button>
            <div className="max-w-lg w-full bg-surface-container-low border border-border-hairline rounded-lg p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary-container font-bold">
                  Send a Message
                </span>
              </div>

              <form onSubmit={handleFormSubmit} noValidate>
                <div className="space-y-5">
                  <div>
                    <label htmlFor="contact-name" className="block font-label-caps text-label-caps uppercase text-on-surface-variant mb-2 font-medium">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formValues.name}
                      onChange={(e) => handleFormChange('name', e.target.value)}
                      className="w-full px-4 py-3 bg-surface-container-lowest border border-border-hairline rounded text-bone-white focus:outline-none focus:ring-2 focus:ring-primary-container transition-all font-body-sm"
                      placeholder="Your name"
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-xs text-error-container font-mono">{formErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block font-label-caps text-label-caps uppercase text-on-surface-variant mb-2 font-medium">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formValues.email}
                      onChange={(e) => handleFormChange('email', e.target.value)}
                      className="w-full px-4 py-3 bg-surface-container-lowest border border-border-hairline rounded text-bone-white focus:outline-none focus:ring-2 focus:ring-primary-container transition-all font-body-sm"
                      placeholder="you@example.com"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-xs text-error-container font-mono">{formErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block font-label-caps text-label-caps uppercase text-on-surface-variant mb-2 font-medium">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      value={formValues.message}
                      onChange={(e) => handleFormChange('message', e.target.value)}
                      className="w-full px-4 py-3 bg-surface-container-lowest border border-border-hairline rounded text-bone-white focus:outline-none focus:ring-2 focus:ring-primary-container transition-all font-body-sm"
                      placeholder="How can I help you?"
                    />
                    {formErrors.message && (
                      <p className="mt-1 text-xs text-error-container font-mono">{formErrors.message}</p>
                    )}
                  </div>

                  <p className="text-xs text-on-surface-variant text-center font-mono mb-6">
                    This contact form is frontend-only. No submission service is connected yet.
                  </p>

                  <button
                    type="submit"
                    className="w-full px-8 py-3.5 bg-primary-container text-surface-container-lowest font-body-sm text-body-sm font-semibold uppercase tracking-wider rounded hover:bg-secondary-container transition-all duration-200 shadow-[0_0_24px_rgba(255,87,34,0.25)]"
                  >
                    OPEN EMAIL APP
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

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
    </section>
  )
}
