/**
 * Seed Script — Blogs Page Content (Complete)
 *
 * Seeds the blogsPage singleton with ALL section content extracted from
 * the actual React components. Run from solar1/:
 *
 *   npx tsx scripts/seedBlogsPage.ts
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
  console.log('📰 Seeding Blogs Page content (complete)...\n')

  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error('❌ SANITY_WRITE_TOKEN is required. Add it to .env.local')
    process.exit(1)
  }

  // First, find existing post document IDs by slug
  const postSlugs = [
    'education',
    'cost-savings',
    'subsidy',
    'lifestyle',
    'maintenance',
    'case-studies',
  ]

  const postRefs: Array<{ _key: string; _type: 'reference'; _ref: string }> = []

  for (const slug of postSlugs) {
    const postId = await client.fetch(
      `*[_type == "post" && slug.current == $slug][0]._id`,
      { slug },
    )
    if (postId) {
      postRefs.push({
        _key: `fp-${slug}`,
        _type: 'reference',
        _ref: postId,
      })
      console.log(`  ✅ Found post: ${slug} → ${postId}`)
    } else {
      console.log(`  ⚠️  Post not found in CMS: ${slug} (skipping reference)`)
    }
  }

  await client.createOrReplace({
    _id: 'blogsPage',
    _type: 'blogsPage',

    // ═══════════════════════════════════════════════════
    // 1. HERO / HEADER SECTION (from Blog.tsx)
    // ═══════════════════════════════════════════════════
    heroSection: {
      badge: 'Learn About Solar',
      heading: 'Solar',
      headingHighlight: 'Knowledge Hub',
      headingTrailing: 'for Smarter Energy Decisions',
      subheading:
        'Explore expert guides, cost-saving tips, and government updates designed to help Indian homeowners understand solar energy, reduce electricity bills, and make informed decisions.',
      viewAllText: 'View All Articles',
      viewAllLink: '/blog',
    },

    // ═══════════════════════════════════════════════════
    // 2. GRID SECTION (from Blog.tsx)
    // ═══════════════════════════════════════════════════
    gridSection: {
      postsPerPage: 9,
      loadMoreText: 'Load More Articles',
      readMoreText: 'Read Full Article →',
      ...(postRefs.length > 0 ? { featuredPosts: postRefs } : {}),
    },

    // ═══════════════════════════════════════════════════
    // SEO
    // ═══════════════════════════════════════════════════
    seo: {
      metaTitle:
        'Solar Blog | Kartik Solar Enterprises — Tips, Guides & Updates',
      metaDescription:
        'Read expert articles about solar energy, government subsidies, savings tips, and maintenance guides. Stay informed with Kartik Solar Enterprises — Dehradun\'s trusted solar company.',
    },
  })

  console.log('\n✅ Blogs Page seeded successfully with all section content!')
}

main().catch((err) => {
  console.error('❌ Seed failed:', err)
  process.exit(1)
})
