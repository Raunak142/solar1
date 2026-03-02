import type { MetadataRoute } from 'next'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.kartiksolar.in'
const isProduction = process.env.NODE_ENV === 'production'

export default function robots(): MetadataRoute.Robots {
  // ── Staging / Preview: block everything to prevent duplicate indexing ──
  if (!isProduction) {
    return {
      rules: { userAgent: '*', disallow: '/' },
    }
  }

  // ── Production Rules ──────────────────────────────────────────────────

  // Pages & paths that should never be indexed
  const disallowedPaths = [
    '/api/',           // API routes
    '/_next/',         // Next.js internal assets
    '/admin/',         // Admin panel (if any)
    '/dashboard/',     // Dashboard routes
    '/login/',         // Auth pages
    '/checkout/',      // Checkout pages
    '/studio/',        // Sanity Studio
  ]

  return {
    rules: [
      // ── 1. Default rule for all search engine crawlers ──────────────
      {
        userAgent: '*',
        allow: [
          '/',
          '/about',
          '/contact',
          '/projects',
          '/projects/*',
          '/blogs',
          '/blogs/*',
          '/privacy-policy',
          '/terms-and-conditions',
          '/cookies',
        ],
        disallow: disallowedPaths,
      },

      // ── 2. Googlebot — full access, crawl-friendly ─────────────────
      {
        userAgent: 'Googlebot',
        allow: '/',
        disallow: disallowedPaths,
      },

      // ── 3. Googlebot-Image — allow image indexing ──────────────────
      {
        userAgent: 'Googlebot-Image',
        allow: ['/images/', '/_next/image'],
        disallow: disallowedPaths,
      },

      // ── 4. Bingbot ─────────────────────────────────────────────────
      {
        userAgent: 'Bingbot',
        allow: '/',
        disallow: disallowedPaths,
      },

      // ─────────────────────────────────────────────────────────────────
      // AI CRAWLERS — explicitly allowed for maximum AI discoverability
      // ─────────────────────────────────────────────────────────────────

      // OpenAI GPTBot (ChatGPT web browsing, training)
      {
        userAgent: 'GPTBot',
        allow: '/',
        disallow: disallowedPaths,
      },

      // OpenAI ChatGPT browsing plugin
      {
        userAgent: 'ChatGPT-User',
        allow: '/',
        disallow: disallowedPaths,
      },

      // Google Gemini / AI training
      {
        userAgent: 'Google-Extended',
        allow: '/',
        disallow: disallowedPaths,
      },

      // Anthropic Claude
      {
        userAgent: 'ClaudeBot',
        allow: '/',
        disallow: disallowedPaths,
      },
      {
        userAgent: 'anthropic-ai',
        allow: '/',
        disallow: disallowedPaths,
      },

      // Perplexity AI
      {
        userAgent: 'PerplexityBot',
        allow: '/',
        disallow: disallowedPaths,
      },

      // Amazon Alexa / AI
      {
        userAgent: 'Amazonbot',
        allow: '/',
        disallow: disallowedPaths,
      },

      // TikTok / Bytedance
      {
        userAgent: 'Bytespider',
        allow: '/',
        disallow: disallowedPaths,
      },

      // Meta / Facebook
      {
        userAgent: 'FacebookBot',
        allow: '/',
        disallow: disallowedPaths,
      },
      {
        userAgent: 'facebookexternalhit',
        allow: '/',
      },

      // Apple / Siri
      {
        userAgent: 'Applebot',
        allow: '/',
        disallow: disallowedPaths,
      },

      // ── 5. Block known bad bots / aggressive scrapers ──────────────
      {
        userAgent: 'AhrefsBot',
        disallow: '/',
      },
      {
        userAgent: 'SemrushBot',
        disallow: '/',
      },
      {
        userAgent: 'MJ12bot',
        disallow: '/',
      },
      {
        userAgent: 'DotBot',
        disallow: '/',
      },
    ],

    // Sitemap reference for all crawlers
    sitemap: `${BASE_URL}/sitemap.xml`,
  }
}
