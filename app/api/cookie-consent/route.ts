import { NextResponse } from 'next/server';
import { appendCookieConsent } from '@/lib/cookieSheets';

// Rate limiting
const rateLimitMap = new Map<string, number>();
const RATE_LIMIT_WINDOW = 10 * 1000; // 10 seconds between consent calls

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  try {
    // ── Rate limiting ──────────────────────────────────
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      request.headers.get('x-real-ip') ||
      'unknown';
    const now = Date.now();
    const lastRequest = rateLimitMap.get(ip);

    if (lastRequest && now - lastRequest < RATE_LIMIT_WINDOW) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please wait.' },
        { status: 429 }
      );
    }
    rateLimitMap.set(ip, now);

    // Clean up old entries
    if (rateLimitMap.size > 500) {
      for (const [key, time] of rateLimitMap.entries()) {
        if (now - time > RATE_LIMIT_WINDOW) rateLimitMap.delete(key);
      }
    }

    // ── Parse body ─────────────────────────────────────
    const body = await request.json();

    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        { success: false, error: 'Invalid request body' },
        { status: 400 }
      );
    }

    const { email, status, timestamp, page } = body as {
      email?: string;
      status?: string;
      timestamp?: string;
      page?: string;
    };

    // ── Validate consent status ────────────────────────
    if (!status || !['accepted', 'rejected'].includes(status)) {
      return NextResponse.json(
        { success: false, error: 'Invalid consent status.' },
        { status: 400 }
      );
    }

    // ── Validate email (if provided) ───────────────────
    const trimmedEmail = email?.trim() || '';
    if (trimmedEmail && !EMAIL_REGEX.test(trimmedEmail)) {
      return NextResponse.json(
        { success: false, error: 'Invalid email format.' },
        { status: 400 }
      );
    }

    // ── Get user agent ─────────────────────────────────
    const userAgent = request.headers.get('user-agent') || 'unknown';

    // ── Append to Google Sheet ─────────────────────────
    await appendCookieConsent({
      email: trimmedEmail,
      status: status as 'accepted' | 'rejected',
      timestamp: timestamp || new Date().toISOString(),
      ip,
      userAgent,
      page: page || 'unknown',
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    console.error('Cookie consent API error:', error);
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to save consent. Please try again.',
      },
      { status: 500 }
    );
  }
}
