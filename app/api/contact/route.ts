import { NextResponse } from 'next/server';

// Validation Patterns
// These must match the frontend regex exactly
const PATTERNS = {
  name: /^[a-zA-Z\s]{2,}$/, // Letters and spaces only, min 2 chars
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, // Standard email format
  phone: /^\+?[0-9]{10,15}$/, // Digits only, optional +, 10-15 chars
  message: /^[\s\S]{10,}$/ // Min 10 chars, allow newlines
};

// Rate Limiting Map (IP -> Timestamp)
const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_WINDOW = 60 * 1000; // 60 seconds

interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
  website?: string; // Honeypot
}

export async function POST(request: Request) {
  try {
    // 0. Rate Limiting Check
    const ip = request.headers.get('x-forwarded-for') || 'unknown';
    const now = Date.now();
    const lastRequestTime = rateLimitMap.get(ip);

    if (lastRequestTime && now - lastRequestTime < RATE_LIMIT_WINDOW) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again in a minute.' },
        { status: 429 }
      );
    }

    // Update rate limit timestamp
    rateLimitMap.set(ip, now);

    // Clean up old entries periodically (optional, simple implementation)
    if (rateLimitMap.size > 1000) {
        for (const [key, time] of rateLimitMap.entries()) {
            if (now - time > RATE_LIMIT_WINDOW) rateLimitMap.delete(key);
        }
    }

    const body: unknown = await request.json();

    // 1. Basic type check
    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { success: false, error: 'Invalid request body' },
        { status: 400 }
      );
    }

    const { name, email, phone, city, message, website } = body as ContactFormData;

    // 2. Spam Check (Honeypot)
    // If the invisible 'website' field has value, it's a bot.
    if (website) {
       // Return a generic error or even success to trick the bot
       return NextResponse.json(
        { success: false, error: 'Spam detected.' },
        { status: 400 }
      );
    }


    // 2. Strict Server-Side Validation
    // Validate Name
    if (!name || !PATTERNS.name.test(name.trim())) {
      return NextResponse.json(
        { success: false, error: 'Invalid name. Use letters only, min 2 chars.' },
        { status: 400 }
      );
    }

    // Validate Email
    if (!email || !PATTERNS.email.test(email.trim())) {
      return NextResponse.json(
        { success: false, error: 'Invalid email address.' },
        { status: 400 }
      );
    }

    // Validate Phone
    if (!phone || !PATTERNS.phone.test(phone.replace(/\s/g, ''))) {
      return NextResponse.json(
        { success: false, error: 'Invalid phone number. Digits only, 10-15 chars.' },
        { status: 400 }
      );
    }

    // Validate City (Required)
    if (!city || city.trim().length < 2) {
      return NextResponse.json(
        { success: false, error: 'City is required.' },
        { status: 400 }
      );
    }

    // Validate Message
    if (!message || message.trim().length < 10) {
      return NextResponse.json(
        { success: false, error: 'Message too short (min 10 chars).' },
        { status: 400 }
      );
    }

    // 3. Forward to Google Apps Script
    const scriptUrl = process.env.GOOGLE_SCRIPT_URL;

    if (!scriptUrl) {
      console.error('GOOGLE_SCRIPT_URL is not defined');
      return NextResponse.json(
        { success: false, error: 'Server configuration error' },
        { status: 500 }
      );
    }

    const response = await fetch(scriptUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name.trim(),
        email: email.trim(),
        phone: phone.trim(),
        city: city.trim(),
        message: message.trim(),
        timestamp: new Date().toISOString()
      }),
    });

    if (!response.ok) {
        throw new Error(`Google Script Error: ${response.statusText}`);
    }

    const result = await response.json();

    if (result.result !== 'success' && !result.success) { // Handle varied GAS response structures
         throw new Error('Google Script reported failure');
    }

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('Contact API Error:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit form. Please try again.' },
      { status: 500 }
    );
  }
}
