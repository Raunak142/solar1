/**
 * Sanity CMS — Global Settings Seed Script
 * Kartik Solar Enterprises
 *
 * Seeds the Global Settings singleton document.
 * Run from solar1/:
 *
 *   npx tsx scripts/seedSanityContent.ts
 *
 * For seeding all CMS content, run individual scripts:
 *   npx tsx scripts/seedHomePage.ts        — Home page + FAQs, Testimonials, Benefits, Services
 *   npx tsx scripts/seedAboutPage.ts       — About page sections
 *   npx tsx scripts/seedContactPage.ts     — Contact page sections
 *   npx tsx scripts/seedProjectsPage.ts    — Projects page config + featured refs
 *   npx tsx scripts/seedProjects.ts        — 9 project documents
 *   npx tsx scripts/seedBlogs.ts           — 6 blog posts + blogsPage link
 *   npx tsx scripts/seedLegalPages.ts      — Privacy, Cookies, Terms
 *   npx tsx scripts/seedFooter.ts          — Footer content
 *
 * Requires: SANITY_WRITE_TOKEN in .env.local
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
  console.log('🔧 Seeding Global Settings...\n')

  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error('❌ SANITY_WRITE_TOKEN is required. Add it to .env.local')
    process.exit(1)
  }

  await client.createOrReplace({
    _id: 'globalSettings',
    _type: 'globalSettings',
    companyName: 'Kartik Solar Enterprises',
    phone: '+91-7300-92-7300',
    email: 'kartiksolar.in@gmail.com',
    whatsappNumber: '+919897012345',
    address: {
      street: 'Kaulagarh Road',
      city: 'Dehradun',
      state: 'Uttarakhand',
      postalCode: '248001',
      country: 'IN',
    },
    facebookUrl: 'https://www.facebook.com/kartiksolar',
    instagramUrl: 'https://www.instagram.com/kartiksolar',
    linkedinUrl: '',
    youtubeUrl: '',
    twitterUrl: '',
    // Default SEO
    defaultMetaTitle:
      'Kartik Solar Enterprises | #1 Solar Company in Dehradun, Uttarakhand',
    defaultMetaDescription:
      "Kartik Solar Enterprises — Dehradun's trusted solar energy company. Residential & commercial solar installation, government subsidy support, and 25-year warranty. Save up to ₹80,000/year on electricity.",
    defaultOgTitle:
      'Kartik Solar Enterprises | Smart Solar Solutions for Indian Homes',
    defaultOgDescription:
      'Switch to affordable, reliable solar energy with Kartik Solar. Expert installation in Dehradun, Haridwar, Rishikesh & Uttarakhand. Free consultation available.',
    defaultTwitterCardType: 'summary_large_image',
    defaultTwitterTitle:
      'Kartik Solar Enterprises — #1 Solar Partner in Uttarakhand',
    defaultTwitterDescription:
      'Powering Indian homes with smart solar energy. Trusted by 500+ families in Dehradun & Uttarakhand.',
  })

  console.log('✅ Global Settings seeded successfully!')
}

main().catch((err) => {
  console.error('❌ Seed failed:', err)
  process.exit(1)
})
