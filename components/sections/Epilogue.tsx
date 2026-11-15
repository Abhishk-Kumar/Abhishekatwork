'use client'

import { FC, useState } from 'react'
import { Mail, Check, Download, Code, Globe } from 'lucide-react'
import { profile } from '../../content'

interface EpilogueProps {
  hasResumePdf: boolean
}

export const Epilogue: FC<EpilogueProps> = ({ hasResumePdf }) => {
  const [copied, setCopied] = useState(false)
  const [sending, setSending] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [formValues, setFormValues] = useState({ name: '', email: '', message: '' })
  const [formErrors, setFormErrors] = useState<{ name?: string; email?: string; message?: string }>({})

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleFormChange = (field: 'name' | 'email' | 'message', value: string) => {
    setFormValues((prev) => ({ ...prev, [field]: value }))
    setFormErrors((prev) => ({ ...prev, [field]: undefined }))
  }

  const validateForm = () => {
    const errors: { name?: string; email?: string; message?: string } = {}
    if (!formValues.name.trim()) errors.name = 'Name is required.'
    if (!formValues.email.trim()) errors.email = 'Email is required.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formValues.email)) errors.email = 'Invalid email address.'
    if (!formValues.message.trim()) errors.message = 'Message is required.'
    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!validateForm()) return

    setSending(true)
    setSubmitStatus('idle')

    const honeypot = (e.currentTarget as HTMLFormElement).elements.namedItem('website')
    if (honeypot && (honeypot as HTMLInputElement).value) {
      setSending(false)
      setSubmitStatus('error')
      return
    }

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formValues.name,
          email: formValues.email,
          message: formValues.message,
        }),
      })

      if (res.ok) {
        setSubmitStatus('success')
        setFormValues({ name: '', email: '', message: '' })
        setFormErrors({})
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setSending(false)
    }
  }

  return (
    <section className="relative w-full px-6 md:px-16 py-24 md:py-36 border-t border-border-hairline" id="epilogue">
      <div className="max-w-6xl mx-auto relative">
        <div className="grid lg:grid-cols-12 gap-12">
          {/* Left: cols 1-6 */}
          <div className="lg:col-span-6 space-y-8">
            <div className="flex items-center gap-2 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
              <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary-container">
                Epilogue
              </span>
            </div>

            <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-bone-white leading-tight mb-4">
              The next chapter is <span className="italic text-primary-container font-normal">unwritten.</span>
            </h2>

            <p className="font-body-lg text-body-lg text-tertiary max-w-xl mb-8">
              {profile.summary}
            </p>

            {/* Email card */}
            <div className="border border-border-hairline bg-surface-container-low rounded-lg p-5">
              <div className="flex items-baseline gap-2 mb-3">
                <span className="font-body-lg text-lg font-semibold text-bone-white">{profile.email}</span>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 p-1.5 rounded hover:bg-surface-container-high transition-colors focus-visible:ring-2 focus-visible:ring-primary-container"
                >
                  {copied ? <Check className="w-4 h-4 text-primary-container" /> : <Mail className="w-4 h-4 text-primary-container" />}
                </button>
              </div>
              {copied && (
                <p className="text-xs font-mono text-tertiary-container">Email copied to clipboard</p>
              )}
            </div>

            {/* Buttons row */}
            <div className="flex flex-wrap gap-3">
              <button
                onClick={handleCopyEmail}
                className="flex-1 min-w-[120px] px-4 py-3 bg-primary-container text-surface-container-lowest font-body-sm text-body-sm font-semibold uppercase tracking-wider rounded hover:bg-secondary-container transition-colors flex items-center justify-center gap-2"
              >
                {copied ? <Check className="w-4 h-4" /> : <Mail className="w-4 h-4" />}
                <span>{copied ? 'Copied' : 'Copy Email'}</span>
              </button>
              <a
                href={`mailto:${profile.email}`}
                className="flex-1 min-w-[120px] px-4 py-3 bg-surface-container-low text-bone-white font-body-sm text-body-sm font-medium uppercase tracking-wider rounded border border-border-hairline hover:bg-surface-container hover:text-primary-container transition-colors flex items-center justify-center gap-2"
              >
                <Mail className="w-4 h-4 text-primary-container" />Contact Form
              </a>
              {hasResumePdf && (
                <a
                  href={profile.links.resumePdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 min-w-[120px] px-4 py-3 bg-surface-container-low text-bone-white font-body-sm text-body-sm font-medium uppercase tracking-wider rounded border border-border-hairline hover:bg-surface-container hover:text-primary-container transition-colors flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />Download Résumé
                </a>
              )}
            </div>
          </div>

          {/* Right: cols 7-12 - inline form card */}
          <div className="lg:col-span-6">
            <div className="border border-border-hairline bg-surface-container-low rounded-lg p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary-container animate-pulse" />
                <span className="font-label-caps text-label-caps uppercase tracking-widest text-primary-container font-bold">
                  Send a Message
                </span>
              </div>

              <form onSubmit={handleFormSubmit} noValidate>
                <input
                  type="text"
                  name="website"
                  tabIndex={-1}
                  autoComplete="off"
                  style={{ position: 'absolute', left: '-9999px', opacity: 0 }}
                />

                <div className="space-y-4">
                  <div>
                    <label htmlFor="contact-name" className="block font-label-caps text-label-caps uppercase text-on-surface-variant mb-1 font-medium text-[11px]">
                      Name
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={formValues.name}
                      onChange={(e) => handleFormChange('name', e.target.value)}
                      className={`w-full px-4 py-3 rounded border text-bone-white font-body-sm transition-colors ${
                        formErrors.name ? 'border-error-container' : 'border-border-hairline'
                      } focus-visible:ring-2 focus-visible:ring-primary-container outline-none`}
                      placeholder="Your name"
                    />
                    {formErrors.name && (
                      <p className="mt-1 text-xs text-error-container font-mono">{formErrors.name}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-email" className="block font-label-caps text-label-caps uppercase text-on-surface-variant mb-1 font-medium text-[11px]">
                      Email Address
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={formValues.email}
                      onChange={(e) => handleFormChange('email', e.target.value)}
                      className={`w-full px-4 py-3 rounded border text-bone-white font-body-sm transition-colors ${
                        formErrors.email ? 'border-error-container' : 'border-border-hairline'
                      } focus-visible:ring-2 focus-visible:ring-primary-container outline-none`}
                      placeholder="you@example.com"
                    />
                    {formErrors.email && (
                      <p className="mt-1 text-xs text-error-container font-mono">{formErrors.email}</p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="contact-message" className="block font-label-caps text-label-caps uppercase text-on-surface-variant mb-1 font-medium text-[11px]">
                      Message
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formValues.message}
                      onChange={(e) => handleFormChange('message', e.target.value)}
                      className={`w-full px-4 py-3 rounded border text-bone-white font-body-sm transition-colors ${
                        formErrors.message ? 'border-error-container' : 'border-border-hairline'
                      } focus-visible:ring-2 focus-visible:ring-primary-container outline-none`}
                      placeholder="How can I help you?"
                    />
                    {formErrors.message && (
                      <p className="mt-1 text-xs text-error-container font-mono">{formErrors.message}</p>
                    )}
                  </div>

                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full px-8 py-3.5 rounded font-body-sm text-body-sm font-semibold uppercase tracking-wider transition-colors focus-visible:ring-2 focus-visible:ring-primary-container outline-none"
                  >
                    {submitStatus === 'success' ? (
                      <div className="flex items-center gap-2 text-surface-container-lowest">
                        <Check className="w-4 h-4 text-surface-container-lowest" />
                        <span>Message sent</span>
                      </div>
                    ) : sending ? (
                      <div className="flex items-center gap-2 text-surface-container-lowest animate-pulse">
                        <span className="w-3 h-3 rounded-full border-2 border-current border-t-transparent animate-spin" />
                        <span>Sending…</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Mail className="w-4 h-4" />
                        <span>{submitStatus === 'error' ? 'Try email directly' : 'Send Message'}</span>
                      </div>
                    )}
                  </button>

                  {submitStatus === 'error' && (
                    <p className="mt-3 text-xs text-error-container font-mono text-center">
                      Couldn&apos;t send — email me directly at <a href={`mailto:${profile.email}`} className="text-primary-container hover:underline">{profile.email}</a>
                    </p>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}