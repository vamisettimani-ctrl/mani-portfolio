import { Resend } from 'resend'
import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json()
    if (!name || !email || !message || typeof name !== 'string' || typeof email !== 'string' || typeof message !== 'string') return NextResponse.json({ error: 'Please complete all fields.' }, { status: 400 })
    if (!process.env.RESEND_API_KEY) return NextResponse.json({ error: 'Email delivery is not configured yet.' }, { status: 503 })
    const resend = new Resend(process.env.RESEND_API_KEY)
    const { error } = await resend.emails.send({ from: 'Portfolio contact <onboarding@resend.dev>', to: ['vamisettimani@gmail.com'], replyTo: email, subject: `Portfolio message from ${name}`, text: `Name: ${name}\nEmail: ${email}\n\n${message}` })
    if (error) return NextResponse.json({ error: 'Unable to send your message.' }, { status: 500 })
    return NextResponse.json({ ok: true })
  } catch { return NextResponse.json({ error: 'Invalid request.' }, { status: 400 }) }
}
