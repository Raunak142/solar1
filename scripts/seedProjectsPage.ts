/**
 * Seed Script — Projects Page Content (Complete)
 *
 * Seeds the projectsPage singleton with ALL section content extracted from
 * the actual React components. Run from solar1/:
 *
 *   npx tsx scripts/seedProjectsPage.ts
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
  console.log('🔧 Seeding Projects Page content (complete)...\n')

  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error('❌ SANITY_WRITE_TOKEN is required. Add it to .env.local')
    process.exit(1)
  }

  await client.createOrReplace({
    _id: 'projectsPage',
    _type: 'projectsPage',

    // ═══════════════════════════════════════════════════
    // 1. HERO SECTION (from ProjectHero.tsx)
    // ═══════════════════════════════════════════════════
    heroSection: {
      headingPart1: 'Powering Real Homes with',
      headingHighlight: 'Real Savings',
      subheading:
        'At Kartik Solar Enterprises, every installation represents a family or business taking control of rising electricity costs. From residential rooftops to commercial projects across Uttarakhand, we deliver reliable solar solutions designed for Indian climate conditions.',
      // backgroundImage: undefined, // Use Sanity Studio to upload /images/RoofPanel.png
    },

    // ═══════════════════════════════════════════════════
    // 2. FILTER SECTION (from ProjectFilters.tsx)
    // ═══════════════════════════════════════════════════
    filterSection: {
      categories: [
        { _key: 'cat-all', id: 'all', label: 'All Projects' },
        { _key: 'cat-residential', id: 'residential', label: 'Residential' },
        { _key: 'cat-commercial', id: 'commercial', label: 'Commercial' },
        { _key: 'cat-industrial', id: 'industrial', label: 'Industrial' },
        { _key: 'cat-offgrid', id: 'offgrid', label: 'Off-Grid' },
      ],
    },

    // ═══════════════════════════════════════════════════
    // 3. GRID SECTION (from ProjectGrid.tsx)
    // ═══════════════════════════════════════════════════
    gridSection: {
      columns: 3,
      emptyStateMessage: 'No projects found in this category.',
      featuredProjects: [
        { _key: 'fp1', _type: 'reference', _ref: 'project-sharma-residence' },
        { _key: 'fp2', _type: 'reference', _ref: 'project-verma-villa' },
        { _key: 'fp3', _type: 'reference', _ref: 'project-agarwal-sweets' },
        { _key: 'fp4', _type: 'reference', _ref: 'project-techpark-office' },
        { _key: 'fp5', _type: 'reference', _ref: 'project-doon-packaging-unit' },
        { _key: 'fp6', _type: 'reference', _ref: 'project-logistics-warehouse' },
        { _key: 'fp7', _type: 'reference', _ref: 'project-mountain-retreat' },
        { _key: 'fp8', _type: 'reference', _ref: 'project-hillside-school' },
        { _key: 'fp9', _type: 'reference', _ref: 'project-orchard-farmhouse' },
      ],
    },

    // ═══════════════════════════════════════════════════
    // 4. CTA SECTION (from ProjectsMain.tsx bottom CTA)
    // ═══════════════════════════════════════════════════
    ctaSection: {
      heading: 'Ready to Power Your Home with Smart Solar Energy?',
      description:
        'Discover how much you can save with a customized solar solution designed for Indian homes, local weather, and your monthly electricity needs.',
      ctaText: 'Start Your Solar Journey',
      ctaLink: '/contact',
      highlights: [
        { _key: 'h1', icon: 'CheckCircle', text: 'Free Site Survey' },
        { _key: 'h2', icon: 'Clock', text: 'Installed in 2-5 Days' },
        { _key: 'h3', icon: 'Shield', text: '25-Year Warranty' },
      ],
    },

    // ═══════════════════════════════════════════════════
    // SEO
    // ═══════════════════════════════════════════════════
    seo: {
      metaTitle:
        'Solar Projects | Kartik Solar Enterprises — Installations Across Uttarakhand',
      metaDescription:
        'Explore solar installations by Kartik Solar Enterprises across Uttarakhand. Residential, commercial, industrial, and off-grid projects delivering real savings and reliable clean energy.',
    },
  })

  console.log('✅ Projects Page seeded successfully with all section content!')
}

main().catch((err) => {
  console.error('❌ Seed failed:', err)
  process.exit(1)
})
