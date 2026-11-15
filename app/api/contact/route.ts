import { NextRequest, NextResponse } from 'next/server'

// Simple in-memory rate limiter per IP
const ipRequests = new Map<string, { count: number; resetTime: number }>()

export async function POST(req: NextRequest) {
  const resendApiKey = process.env.RESEND_API_KEY
  const contactToEmail = process.env.CONTACT_TO_EMAIL

  // Per-IP rate limit (5 requests per 10 minutes)
  const ip = req.headers.get('x-forwarded-for') || '127.0.0.1'
  const now = Date.now()
  const ipData = ipRequests.get(ip) || { count: 0, resetTime: now + 10 * 60 * 1000 }
  if (now > ipData.resetTime) {
    ipData.count = 0
    ipData.resetTime = now + 10 * 60 * 1000
  }
  if (ipData.count >= 5) {
    return NextResponse.json(
      { error: 'Rate limit reached. Please email directly.' },
      { status: 429 }
    )
  }

  try {
    const body = await req.json()

    // Honeypot check
    if (body.website && body.website.trim()) {
      return NextResponse.json({ error: 'Spam detected.' }, { status: 400 })
    }

    // 4KB message cap
    const message = body.message || ''
    if (message.length > 4096) {
      return NextResponse.json({ error: 'Message exceeds 4KB limit.' }, { status: 400 })
    }

    // Basic zod-style validation inline
    const name = String(body.name || '').trim()
    const email = String(body.email || '').trim()

    if (!name) {
      return NextResponse.json({ error: 'Name is required.' }, { status: 400 })
    }
    if (!email) {
      return NextResponse.json({ error: 'Email is required.' }, { status: 400 })
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json({ error: 'Invalid email address.' }, { status: 400 })
    }
    if (!message) {
      return NextResponse.json({ error: 'Message is required.' }, { status: 400 })
    }

    ipData.count++
    ipRequests.set(ip, ipData)

    if (resendApiKey && contactToEmail) {
      const res = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${resendApiKey}`,
        },
        body: JSON.stringify({
          from: 'Portfolio <onboarding@resend.dev>',
          to: [contactToEmail],
          subject: `Portfolio contact from ${name}`,
          reply_to: email,
          text: `Name: ${name}\nEmail: ${email}\nMessage:\n${message}`,
        }),
      })

      if (!res.ok) {
        return NextResponse.json({ error: 'Could not send message.' }, { status: 500 })
      }

      return NextResponse.json({ ok: true, message: 'Message sent.' })
    }

    // No email backend configured — tell the client to fall back to mailto
    return NextResponse.json({ ok: false, noBackend: true }, { status: 200 })
  } catch {
    return NextResponse.json({ error: 'Failed to process message.' }, { status: 500 })
  }
}
