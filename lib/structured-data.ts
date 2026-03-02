// ============================================
// STRUCTURED DATA (JSON-LD) — Kartik Solar Enterprises
// Schema markup for rich search results
// ============================================

import { SITE_URL, SITE_NAME, BRAND } from './seo'

// ─── Organization Schema ──────────────────────────────────────

export function getOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: SITE_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    description:
      'Leading solar energy company in Uttarakhand providing residential, commercial, and industrial solar installations.',
    telephone: BRAND.phone,
    email: BRAND.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BRAND.address.street,
      addressLocality: BRAND.address.city,
      addressRegion: BRAND.address.state,
      postalCode: BRAND.address.postalCode,
      addressCountry: BRAND.address.country,
    },
    sameAs: [
      BRAND.social.facebook,
      BRAND.social.instagram,
    ].filter(Boolean),
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BRAND.phone,
      contactType: 'customer service',
      areaServed: 'IN',
      availableLanguage: ['English', 'Hindi'],
    },
  }
}

// ─── Local Business Schema ────────────────────────────────────

export function getLocalBusinessSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'ElectricalContractor',
    name: SITE_NAME,
    alternateName: 'Kartik Solar',
    url: SITE_URL,
    logo: `${SITE_URL}/images/logo.png`,
    image: `${SITE_URL}/images/og-default.png`,
    description:
      'Trusted solar panel installation company in Dehradun, Uttarakhand. Residential & commercial rooftop solar systems with government subsidy assistance.',
    telephone: BRAND.phone,
    email: BRAND.email,
    address: {
      '@type': 'PostalAddress',
      streetAddress: BRAND.address.street,
      addressLocality: BRAND.address.city,
      addressRegion: BRAND.address.state,
      postalCode: BRAND.address.postalCode,
      addressCountry: BRAND.address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '30.3165',
      longitude: '78.0322',
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '09:00',
        closes: '18:00',
      },
    ],
    areaServed: BRAND.serviceAreas.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    priceRange: '₹₹',
    aggregateRating: {
      '@type': 'AggregateRating',
      ratingValue: '4.9',
      bestRating: '5',
      ratingCount: '500',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Solar Energy Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Residential Solar Installation',
            description: 'Rooftop solar panel installation for homes with government subsidy assistance.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Commercial Solar Installation',
            description: 'Solar solutions for businesses, shops, and offices to reduce operational electricity costs.',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Solar Maintenance & AMC',
            description: 'Annual maintenance contracts for solar system cleaning, inspection, and performance optimization.',
          },
        },
      ],
    },
  }
}

// ─── Service Schema ───────────────────────────────────────────

export function getServiceSchema(service?: {
  name?: string
  description?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: service?.name || 'Solar Panel Installation',
    description:
      service?.description ||
      'Professional rooftop solar panel installation for residential and commercial properties in Uttarakhand.',
    provider: {
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
    },
    areaServed: BRAND.serviceAreas.map((area) => ({
      '@type': 'City',
      name: area,
    })),
    serviceType: 'Solar Energy Installation',
    category: 'Renewable Energy',
  }
}

// ─── Blog Article Schema ──────────────────────────────────────

export function getBlogArticleSchema(post: {
  title: string
  description: string
  slug: string
  date?: string
  author?: string
  image?: string
  category?: string
}) {
  const dateISO = post.date ? new Date(post.date).toISOString() : new Date().toISOString()

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url: `${SITE_URL}/blogs/${post.slug}`,
    datePublished: dateISO,
    dateModified: dateISO,
    author: {
      '@type': 'Person',
      name: post.author || 'Kartik Solar Team',
    },
    publisher: {
      '@type': 'Organization',
      name: SITE_NAME,
      logo: {
        '@type': 'ImageObject',
        url: `${SITE_URL}/images/logo.png`,
      },
    },
    image: post.image
      ? {
          '@type': 'ImageObject',
          url: post.image.startsWith('http') ? post.image : `${SITE_URL}${post.image}`,
        }
      : undefined,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blogs/${post.slug}`,
    },
    articleSection: post.category || 'Solar Energy',
    inLanguage: 'en-IN',
    keywords: [
      'solar energy',
      post.category || '',
      'Kartik Solar',
      'Uttarakhand',
    ]
      .filter(Boolean)
      .join(', '),
  }
}

// ─── Project Schema ───────────────────────────────────────────

export function getProjectSchema(project: {
  title: string
  slug: string
  location: string
  systemSize: string
  type: string
  image?: string
  shortDescription?: string
}) {
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    name: project.title,
    description:
      project.shortDescription ||
      `${project.systemSize} ${project.type} solar installation in ${project.location} by Kartik Solar Enterprises.`,
    url: `${SITE_URL}/projects/${project.slug}`,
    author: {
      '@type': 'Organization',
      name: SITE_NAME,
    },
    locationCreated: {
      '@type': 'Place',
      name: `${project.location}, Uttarakhand`,
      address: {
        '@type': 'PostalAddress',
        addressLocality: project.location,
        addressRegion: 'Uttarakhand',
        addressCountry: 'IN',
      },
    },
    image: project.image
      ? project.image.startsWith('http')
        ? project.image
        : `${SITE_URL}${project.image}`
      : undefined,
  }
}

// ─── Breadcrumb Schema ────────────────────────────────────────

export function getBreadcrumbSchema(
  items: { name: string; path: string }[]
) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  }
}

// ─── FAQ Schema (for FAQ sections) ────────────────────────────

export function getFaqSchema(faqs: { question: string; answer: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// ─── Website Schema (sitelinks search box) ────────────────────

export function getWebsiteSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: SITE_NAME,
    alternateName: 'Kartik Solar',
    url: SITE_URL,
    inLanguage: 'en-IN',
  }
}
