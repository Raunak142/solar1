// ============================================
// SEO UTILITY MODULE — Kartik Solar Enterprises
// Centralized metadata generation for all pages
// ============================================

import type { Metadata } from 'next'

// ─── Constants ────────────────────────────────────────────────
export const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.kartiksolar.in'
export const SITE_NAME = 'Kartik Solar Enterprises'
export const DEFAULT_OG_IMAGE = `${SITE_URL}/images/og-default.png`
export const BRAND = {
  name: 'Kartik Solar Enterprises',
  tagline: '#1 Solar Partner in Uttarakhand',
  phone: '+91-7300-92-7300',
  email: 'kartiksolar.in@gmail.com',
  address: {
    street: 'Kaulagarh Road',
    city: 'Dehradun',
    state: 'Uttarakhand',
    postalCode: '248001',
    country: 'IN',
  },
  serviceAreas: ['Dehradun', 'Haridwar', 'Rishikesh', 'Mussoorie', 'Roorkee', 'Uttarakhand'],
  social: {
    facebook: 'https://www.facebook.com/kartiksolar',
    instagram: 'https://www.instagram.com/kartiksolar',
  },
} as const

// ─── Types ────────────────────────────────────────────────────

interface SeoInput {
  /** SEO title (50–60 chars ideal).  Falls back to default. */
  title: string
  /** Meta description (140–160 chars ideal). */
  description: string
  /** Canonical path, e.g. "/about" or "/blogs/education" */
  path: string
  /** Override OG image URL */
  ogImage?: string
  /** OG type. Defaults to 'website'. */
  ogType?: 'website' | 'article' | 'profile'
  /** Additional keywords (merged with defaults) */
  keywords?: string[]
  /** Robots directive. Defaults to index,follow. */
  robots?: { index: boolean; follow: boolean }
  /** Article-specific metadata */
  article?: {
    publishedTime?: string
    modifiedTime?: string
    author?: string
    category?: string
    tags?: string[]
  }
}

// ─── Default Keywords ─────────────────────────────────────────

const DEFAULT_KEYWORDS = [
  'solar energy Dehradun',
  'solar panels Uttarakhand',
  'rooftop solar installation',
  'Kartik Solar Enterprises',
  'solar subsidy India',
  'solar for home',
  'solar panel installation near me',
  'best solar company Dehradun',
  'residential solar system',
  'PM Surya Ghar Yojana',
]

// ─── Canonical URL Builder ────────────────────────────────────

/**
 * Generates a clean canonical URL:
 * - Enforces HTTPS
 * - Strips query params & hash
 * - Removes trailing slashes (except root)
 * - Always uses the primary domain
 */
export function getCanonicalUrl(path: string): string {
  // Ensure we start with a clean path
  let clean = path.split('?')[0].split('#')[0]
  // Remove trailing slash (but keep "/" for homepage)
  if (clean !== '/' && clean.endsWith('/')) {
    clean = clean.slice(0, -1)
  }
  // Ensure path starts with /
  if (!clean.startsWith('/')) {
    clean = `/${clean}`
  }
  return `${SITE_URL}${clean}`
}

// ─── Core Metadata Generator ─────────────────────────────────

/**
 * Generates a complete Next.js Metadata object from simple inputs.
 * Use this in every page's `generateMetadata()` function.
 *
 * @example
 * export async function generateMetadata(): Promise<Metadata> {
 *   return generateSeoMetadata({
 *     title: 'About Us — Our Solar Story',
 *     description: 'Learn about Kartik Solar...',
 *     path: '/about',
 *   })
 * }
 */
export function generateSeoMetadata(input: SeoInput): Metadata {
  const {
    title,
    description,
    path,
    ogImage = DEFAULT_OG_IMAGE,
    ogType = 'website',
    keywords = [],
    robots = { index: true, follow: true },
    article,
  } = input

  const canonicalUrl = getCanonicalUrl(path)
  const mergedKeywords = [...new Set([...DEFAULT_KEYWORDS, ...keywords])]

  const metadata: Metadata = {
    title,
    description,
    keywords: mergedKeywords,
    authors: [{ name: SITE_NAME, url: SITE_URL }],
    creator: SITE_NAME,
    publisher: SITE_NAME,

    // Canonical URL
    alternates: {
      canonical: canonicalUrl,
    },

    // Robots
    robots: {
      index: robots.index,
      follow: robots.follow,
      googleBot: {
        index: robots.index,
        follow: robots.follow,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },

    // Open Graph
    openGraph: {
      type: ogType,
      locale: 'en_IN',
      url: canonicalUrl,
      siteName: SITE_NAME,
      title,
      description,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(article && ogType === 'article'
        ? {
            publishedTime: article.publishedTime,
            modifiedTime: article.modifiedTime,
            authors: article.author ? [article.author] : undefined,
            tags: article.tags,
          }
        : {}),
    },

    // Twitter
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
      creator: `@kartiksolar`,
    },

    // Other meta
    other: {
      // Geo tags for local SEO
      'geo.region': 'IN-UK',
      'geo.placename': 'Dehradun',
      'geo.position': '30.3165;78.0322',
      'ICBM': '30.3165, 78.0322',
      // Language
      'content-language': 'en-IN',
    },
  }

  return metadata
}

// ─── Pre-built Page Metadata ──────────────────────────────────

/** Home page metadata */
export function getHomeMetadata(): Metadata {
  return generateSeoMetadata({
    title: 'Kartik Solar Enterprises — #1 Solar Partner in Uttarakhand',
    description:
      'Switch to solar and save up to 90% on electricity bills. Trusted rooftop solar installation for homes in Dehradun, Haridwar, Rishikesh & Uttarakhand. Free consultation.',
    path: '/',
    keywords: [
      'solar installation Dehradun',
      'solar energy Uttarakhand',
      'rooftop solar near me',
      'best solar company Uttarakhand',
      'solar power for home India',
      'solar panel price Dehradun',
      'save electricity bills solar',
    ],
  })
}

/** About page metadata */
export function getAboutMetadata(): Metadata {
  return generateSeoMetadata({
    title: 'About Us — Our Solar Energy Mission',
    description:
      'Kartik Solar Enterprises is pioneering affordable solar energy for Indian homes. Based in Dehradun, we deliver reliable rooftop solar systems across Uttarakhand.',
    path: '/about',
    keywords: [
      'about Kartik Solar',
      'solar company Dehradun',
      'solar energy mission India',
      'Uttarakhand solar provider',
    ],
  })
}

/** Contact page metadata */
export function getContactMetadata(): Metadata {
  return generateSeoMetadata({
    title: 'Contact Us — Free Solar Consultation',
    description:
      'Get a free solar consultation from Kartik Solar Enterprises. Call us, visit our Dehradun office, or fill the form. Expert advice on rooftop solar, subsidies & installation.',
    path: '/contact',
    keywords: [
      'contact Kartik Solar',
      'solar consultation Dehradun',
      'free solar quote',
      'solar installation enquiry',
    ],
  })
}

/** Projects listing page metadata */
export function getProjectsMetadata(): Metadata {
  return generateSeoMetadata({
    title: 'Our Solar Projects — Real Installations Across Uttarakhand',
    description:
      'Explore completed solar installations by Kartik Solar Enterprises. Residential, commercial & industrial projects across Dehradun, Haridwar & Uttarakhand.',
    path: '/projects',
    keywords: [
      'solar projects Dehradun',
      'solar installation portfolio',
      'rooftop solar case studies',
      'solar panel installation examples',
    ],
  })
}

/** Blogs listing page metadata */
export function getBlogsListingMetadata(): Metadata {
  return generateSeoMetadata({
    title: 'Solar Energy Blog — Tips, Guides & Industry News',
    description:
      'Read expert articles on solar energy, government subsidies, installation tips, cost savings & more. Stay informed with Kartik Solar Enterprises blog.',
    path: '/blogs',
    keywords: [
      'solar energy blog',
      'solar tips India',
      'solar subsidy updates',
      'solar installation guide',
    ],
  })
}

/** Privacy policy page metadata */
export function getPrivacyMetadata(): Metadata {
  return generateSeoMetadata({
    title: 'Privacy Policy',
    description: 'Privacy policy for Kartik Solar Enterprises website. Learn how we collect, use, and protect your personal information.',
    path: '/privacy-policy',
    robots: { index: true, follow: true },
  })
}

/** Terms page metadata */
export function getTermsMetadata(): Metadata {
  return generateSeoMetadata({
    title: 'Terms and Conditions',
    description: 'Terms and conditions for Kartik Solar Enterprises services and website usage.',
    path: '/terms-and-conditions',
    robots: { index: true, follow: true },
  })
}

/** Cookies page metadata */
export function getCookiesMetadata(): Metadata {
  return generateSeoMetadata({
    title: 'Cookie Policy',
    description: 'Cookie policy for Kartik Solar Enterprises website. Learn how we use cookies to improve your experience.',
    path: '/cookies',
    robots: { index: true, follow: true },
  })
}

// ─── Dynamic Page Metadata Generators ─────────────────────────

/**
 * Generate metadata for a single blog post.
 * Call from blogs/[slug]/page.tsx generateMetadata()
 */
export function getBlogPostMetadata(post: {
  title: string
  description: string
  slug: string
  image?: string
  date?: string
  author?: string
  category?: string
}): Metadata {
  return generateSeoMetadata({
    title: post.title,
    description: post.description,
    path: `/blogs/${post.slug}`,
    ogImage: post.image || DEFAULT_OG_IMAGE,
    ogType: 'article',
    keywords: [
      'solar energy',
      post.category?.toLowerCase() || 'solar',
      `${post.category?.toLowerCase()} solar India`,
      'solar tips Uttarakhand',
    ],
    article: {
      publishedTime: post.date ? new Date(post.date).toISOString() : undefined,
      author: post.author || SITE_NAME,
      category: post.category,
      tags: ['Solar Energy', 'Uttarakhand', post.category || 'Solar'].filter(Boolean),
    },
  })
}

/**
 * Generate metadata for a single project page.
 * Call from projects/[slug]/page.tsx generateMetadata()
 */
export function getProjectMetadata(project: {
  title: string
  slug: string
  location: string
  systemSize: string
  type: string
  shortDescription?: string
  image?: string
}): Metadata {
  const description =
    project.shortDescription ||
    `${project.systemSize} ${project.type} solar installation in ${project.location}, Uttarakhand by Kartik Solar Enterprises. View system details, specifications & results.`

  return generateSeoMetadata({
    title: `${project.title} — ${project.systemSize} Solar Installation`,
    description: description.slice(0, 160),
    path: `/projects/${project.slug}`,
    ogImage: project.image || DEFAULT_OG_IMAGE,
    keywords: [
      `solar installation ${project.location}`,
      `${project.systemSize} solar system`,
      `${project.type.toLowerCase()} solar`,
      `solar project ${project.location}`,
      'rooftop solar Uttarakhand',
    ],
  })
}
