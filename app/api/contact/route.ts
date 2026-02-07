import { NextRequest, NextResponse } from 'next/server'
import rateLimit from '@/lib/rateLimit'
import { validateContactForm } from '@/lib/validation'

// Rate limiting: 5 requests per 15 minutes per IP
const limiter = rateLimit({
  interval: 15 * 60 * 1000, // 15 minutes
  uniqueTokenPerInterval: 500, // Max 500 unique IPs per interval
})

export async function POST(request: NextRequest) {
  try {
    // Apply rate limiting
    const identifier = request.ip ?? 'anonymous'
    const { success, limit, reset, remaining } = await limiter.check(5, identifier)

    if (!success) {
      return NextResponse.json(
        { 
          error: 'Rate limit exceeded. Please try again later.',
          limit,
          reset,
          remaining: 0
        },
        { 
          status: 429,
          headers: {
            'X-RateLimit-Limit': limit.toString(),
            'X-RateLimit-Remaining': '0',
            'X-RateLimit-Reset': reset.toString(),
          }
        }
      )
    }

    // Parse and validate request body
    const body = await request.json()
    const validation = validateContactForm(body)

    if (!validation.isValid) {
      return NextResponse.json(
        { error: 'Validation failed', details: validation.errors },
        { status: 400 }
      )
    }

    const { name, email, subject, message } = validation.data

    // Here you would typically:
    // 1. Save to database
    // 2. Send email notification
    // 3. Log the contact attempt
    
    // For demo purposes, we'll simulate processing
    console.log('Contact form submission:', {
      name,
      email,
      subject,
      message: message.substring(0, 100) + '...',
      timestamp: new Date().toISOString(),
      ip: identifier
    })

    // Simulate email sending (replace with actual email service)
    // await sendEmail({
    //   to: process.env.CONTACT_EMAIL,
    //   subject: `Portfolio Contact: ${subject}`,
    //   html: `
    //     <h2>New Contact Form Submission</h2>
    //     <p><strong>Name:</strong> ${name}</p>
    //     <p><strong>Email:</strong> ${email}</p>
    //     <p><strong>Subject:</strong> ${subject}</p>
    //     <p><strong>Message:</strong></p>
    //     <p>${message.replace(/\n/g, '<br>')}</p>
    //   `
    // })

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully! I\'ll get back to you soon.' 
      },
      { 
        status: 200,
        headers: {
          'X-RateLimit-Limit': limit.toString(),
          'X-RateLimit-Remaining': remaining.toString(),
          'X-RateLimit-Reset': reset.toString(),
        }
      }
    )

  } catch (error) {
    console.error('Contact form error:', error)
    
    return NextResponse.json(
      { error: 'Internal server error. Please try again later.' },
      { status: 500 }
    )
  }
}

// Handle unsupported methods
export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed' },
    { status: 405 }
  )
}