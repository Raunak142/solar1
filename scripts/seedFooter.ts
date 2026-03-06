/**
 * Seed Script — Footer Content
 *
 * Seeds the footer singleton with all content from Footer.tsx.
 * Run from solar1/:
 *
 *   npx tsx scripts/seedFooter.ts
 */

import { config } from 'dotenv'
import { createClient } from '@sanity/client'

config({ path: '.env.local' })

const client = createClient({
  projectId: 'd2e8myqh',
  dataset: 'production',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: process.env.SANITY_WRITE_TOKEN,
})

async function main() {
  console.log('🦶 Seeding Footer content...\n')

  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error('❌ SANITY_WRITE_TOKEN is required. Add it to .env.local')
    process.exit(1)
  }

  await client.createOrReplace({
    _id: 'footer',
    _type: 'footer',

    // ═══════════════════════════════════════════════════
    // 1. BRAND COLUMN
    // ═══════════════════════════════════════════════════
    brandSection: {
      logoAlt: 'Kartik Solar Logo',
      description:
        'A Dehradun-based solar company dedicated to powering Indian homes with clean, reliable, and affordable energy solutions designed for Indian climate conditions.',
      socialLinks: [
        {
          _key: 'fb',
          name: 'Facebook',
          icon: 'Facebook',
          url: 'https://www.facebook.com',
        },
        {
          _key: 'tw',
          name: 'Twitter',
          icon: 'Twitter',
          url: 'https://twitter.com',
        },
        {
          _key: 'ig',
          name: 'Instagram',
          icon: 'Instagram',
          url: 'https://www.instagram.com',
        },
        {
          _key: 'yt',
          name: 'YouTube',
          icon: 'Youtube',
          url: 'https://www.youtube.com',
        },
      ],
    },

    // ═══════════════════════════════════════════════════
    // 2. MENU LINKS
    // ═══════════════════════════════════════════════════
    menuSection: {
      heading: 'Menu',
      links: [
        { _key: 'm1', label: 'About Us', href: '/about' },
        { _key: 'm2', label: 'Projects', href: '/projects' },
        { _key: 'm3', label: 'Blogs', href: '/blog' },
        { _key: 'm4', label: 'Services', href: '/#services' },
        { _key: 'm5', label: 'Contact', href: '/contact' },
      ],
    },

    // ═══════════════════════════════════════════════════
    // 3. SOLUTIONS / QUICK LINKS
    // ═══════════════════════════════════════════════════
    solutionsSection: {
      heading: 'Solutions',
      links: [
        {
          _key: 's1',
          label: 'Residential Solar',
          href: '/projects?category=residential',
        },
        {
          _key: 's2',
          label: 'Commercial Solar',
          href: '/projects?category=commercial',
        },
        { _key: 's3', label: 'Support', href: '/contact' },
        { _key: 's4', label: 'Privacy Policy', href: '/privacy-policy' },
        { _key: 's5', label: 'Cookies Policy', href: '/cookies' },
        {
          _key: 's6',
          label: 'Terms & Conditions',
          href: '/terms-and-conditions',
        },
      ],
    },

    // ═══════════════════════════════════════════════════
    // 4. CONTACT INFO
    // ═══════════════════════════════════════════════════
    contactSection: {
      heading: 'Get in Touch',
      address: '25/4, Rajpur Road,\nDehradun, Uttarakhand\nIndia - 248001',
      email: 'connect@KartikSolar.in',
      phone: '+91 98970 12345',
      phoneUrl: 'tel:+919897012345',
    },

    // ═══════════════════════════════════════════════════
    // 5. BOTTOM BAR
    // ═══════════════════════════════════════════════════
    bottomBar: {
      copyrightText: '© {year} Kartik Solar Energy Solutions. All rights reserved.',
      creditText: 'Made by',
      creditHighlight: 'Ophanim Technologies',
    },
  })

  console.log('✅ Footer seeded successfully!')
}

main().catch((err) => {
  console.error('❌ Seed failed:', err)
  process.exit(1)
})
