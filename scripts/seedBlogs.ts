/**
 * Seed Script — Individual Blog Post Documents
 *
 * Seeds all blog post documents from blogData.ts into Sanity CMS.
 * The HTML content is converted into Portable Text blocks.
 * Run from solar1/:
 *
 *   npx tsx scripts/seedBlogs.ts
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

// ============================================
// Simple HTML → Portable Text converter
// Handles: <h2>, <h3>, <p>, <ul>/<li>, <blockquote>
// ============================================

function htmlToPortableText(html: string): any[] {
  const blocks: any[] = []
  let blockIndex = 0

  const cleaned = html
    .replace(/\r\n/g, '\n')
    .replace(/\n\s*\n/g, '\n')
    .trim()

  // Match common block-level tags
  const tagRegex = /<(h2|h3|p|li|blockquote)[^>]*>([\s\S]*?)<\/\1>/gi
  let match: RegExpExecArray | null

  while ((match = tagRegex.exec(cleaned)) !== null) {
    const tag = match[1].toLowerCase()
    const rawContent = match[2]
      .replace(/<\/?strong>/gi, '')
      .replace(/<\/?em>/gi, '')
      .replace(/<\/?span[^>]*>/gi, '')
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/<[^>]*>/g, '')
      .replace(/&amp;/g, '&')
      .replace(/&lt;/g, '<')
      .replace(/&gt;/g, '>')
      .replace(/&#39;/g, "'")
      .replace(/&quot;/g, '"')
      .replace(/₹/g, '₹')
      .trim()

    if (!rawContent) continue

    const key = `block-${blockIndex++}`

    if (tag === 'h2') {
      blocks.push({
        _type: 'block',
        _key: key,
        style: 'h2',
        markDefs: [],
        children: [{ _type: 'span', _key: `${key}-s`, text: rawContent, marks: [] }],
      })
    } else if (tag === 'h3') {
      blocks.push({
        _type: 'block',
        _key: key,
        style: 'h3',
        markDefs: [],
        children: [{ _type: 'span', _key: `${key}-s`, text: rawContent, marks: [] }],
      })
    } else if (tag === 'blockquote') {
      blocks.push({
        _type: 'block',
        _key: key,
        style: 'blockquote',
        markDefs: [],
        children: [{ _type: 'span', _key: `${key}-s`, text: rawContent, marks: [] }],
      })
    } else if (tag === 'li') {
      blocks.push({
        _type: 'block',
        _key: key,
        style: 'normal',
        listItem: 'bullet',
        level: 1,
        markDefs: [],
        children: [{ _type: 'span', _key: `${key}-s`, text: rawContent, marks: [] }],
      })
    } else {
      // <p>
      blocks.push({
        _type: 'block',
        _key: key,
        style: 'normal',
        markDefs: [],
        children: [{ _type: 'span', _key: `${key}-s`, text: rawContent, marks: [] }],
      })
    }
  }

  return blocks
}

// ============================================
// All blog posts from blogData.ts
// ============================================

interface BlogSeed {
  id: string
  slug: string
  title: string
  category: string
  description: string
  image: string
  date: string
  author: string
  color: string
  content: string
}

const blogPosts: BlogSeed[] = [
  {
    id: 'education',
    slug: 'education',
    title: "Solar Energy 101: A Beginner's Guide",
    category: 'Education',
    description:
      'Understand how solar works, installation basics, and why thousands of Indian homes are switching to clean energy.',
    image: '/images/Panel.png',
    date: 'Jan 15, 2026',
    author: 'Kartik Solar Team',
    color: 'bg-blue-500',
    content: `
      <p>Solar energy is quickly becoming one of the smartest investments for Indian homeowners and businesses. With rising electricity costs, frequent power cuts, and growing environmental concerns, more families across Uttarakhand are switching to solar power for reliable and affordable energy.</p>
      <p>This beginner-friendly guide explains how solar works, what you need to install a system, and why solar is perfectly suited for Indian homes and climate conditions.</p>
      <h2>What is Solar Energy?</h2>
      <p>Solar energy is electricity generated using sunlight. Solar panels capture sunlight and convert it into usable electricity for your home or business.</p>
      <p>A rooftop solar system allows you to generate your own power during the day, reducing dependency on the electricity grid and lowering monthly bills.</p>
      <h2>How Does a Solar System Work?</h2>
      <p>Solar panels absorb sunlight and generate DC electricity. A solar inverter converts DC electricity into AC power used by home appliances. A net meter exports extra electricity to the grid or stores it in batteries.</p>
      <p>During the daytime, your home runs on solar power first, and only uses grid electricity when required.</p>
      <h2>Why Solar is Ideal for Indian Homes</h2>
      <p>India receives abundant sunlight throughout the year, making solar highly efficient. For cities like Dehradun, Haridwar, and Rishikesh, rooftop solar delivers excellent long-term savings.</p>
      <h2>How Much Can You Save?</h2>
      <p>Most households can reduce electricity bills by 70–90% depending on system size and usage. Solar pays for itself in just 3-4 years!</p>
      <h2>Installation Process (Simple & Fast)</h2>
      <p>The process is simple: Site Survey, Design, Installation, and Activation. Our local Dehradun team handles everything end-to-end in 2–5 days.</p>
    `,
  },
  {
    id: 'cost-savings',
    slug: 'cost-savings',
    title: 'Understanding Solar Savings & ROI',
    category: 'Finance',
    description:
      'Learn how solar reduces monthly bills, system payback time, and how to calculate long-term savings for your home.',
    image: '/images/Cost.png',
    date: 'Jan 12, 2026',
    author: 'Finance Expert',
    color: 'bg-green-500',
    content: `
      <p>Switching to solar energy is not just an environmental decision — it is one of the smartest financial investments for Indian homeowners today. With rising electricity tariffs and long-term energy uncertainty, solar helps you control energy costs while generating savings for decades.</p>
      <p>This guide explains how solar savings work, how return on investment (ROI) is calculated, and why rooftop solar systems provide strong financial benefits for homes across Uttarakhand.</p>
      <h2>The Economics of Going Solar</h2>
      <p>Installing solar converts your monthly electricity expense into a long-term asset. Instead of paying increasing power bills every year, your rooftop generates electricity for 25+ years with minimal maintenance.</p>
      <p>Solar systems typically recover their cost within a few years and then continue producing almost free electricity.</p>
      <h2>How ROI is Calculated</h2>
      <p>ROI depends on three factors: the initial system cost after subsidy benefits, monthly bill reduction from solar power, and total lifetime savings across the 25+ year system life.</p>
      <p>Most residential solar systems in India achieve payback within 3–5 years, after which electricity generation becomes nearly free.</p>
      <h2>Factors That Influence Savings</h2>
      <ul>
        <li>System size and electricity consumption</li>
        <li>Current electricity tariff rates</li>
        <li>Sunlight availability and roof orientation</li>
        <li>Government subsidies & net metering benefits</li>
      </ul>
      <h2>Monthly Savings Example</h2>
      <p>Average Monthly Bill: ₹3,000. Annual Savings: ₹36,000. 25-Year Savings: ₹9 Lakhs+. Solar turns electricity expenses into long-term financial returns.</p>
    `,
  },
  {
    id: 'subsidy',
    slug: 'subsidy',
    title: 'Government Subsidies & Solar Policies',
    category: 'Government',
    description:
      'A simple guide to MNRE schemes, PM Surya Ghar Yojana, and how to claim solar subsidies in Uttarakhand.',
    image: '/images/RoofPanel.png',
    date: 'Jan 10, 2026',
    author: 'Policy Desk',
    color: 'bg-amber-500',
    content: `
      <p>The Indian government provides an extensive policy framework to support rooftop solar adoption. Solar energy reliance can become more economical through subsidies and incentive programs.</p>
      <p>This guide explains the PM Surya Ghar Yojana, available subsidy benefits, eligibility criteria, and how residents of Uttarakhand can easily apply with complete support from Kartik Solar Enterprises.</p>
      <h2>PM Surya Ghar: Muft Bijli Yojana</h2>
      <p>The Government of India launched the PM Surya Ghar: Muft Bijli Yojana to help households generate their own electricity through rooftop solar systems. The scheme aims to reduce electricity bills while encouraging clean energy adoption across the country.</p>
      <p>Eligible households can receive direct financial subsidies credited to their bank accounts after successful installation and inspection.</p>
      <h2>Subsidy Structure (Indicative)</h2>
      <p>Up to 2 kW: ₹30,000 per kW subsidy (up to ₹60,000). Up to 3 kW: Additional ₹18,000 subsidy (Total up to ₹78,000). Above 3 kW: Subsidy capped at 3 kW residential structure.</p>
      <p>Subsidy values may change based on government policy updates. Always verify through the official MNRE portal.</p>
      <h2>How to Apply for Solar Subsidy</h2>
      <p>The process involves four steps: Register Online, Choose Vendor, Installation, and Subsidy Credit. After installation and net-meter approval, the subsidy amount is directly transferred to your registered bank account.</p>
      <h2>How Kartik Solar Helps You</h2>
      <ul>
        <li>Complete documentation & portal registration</li>
        <li>DISCOM approvals & net-meter coordination</li>
        <li>Fast installation & inspection support</li>
        <li>Hassle-free subsidy claim process</li>
      </ul>
    `,
  },
  {
    id: 'lifestyle',
    slug: 'lifestyle',
    title: 'Living the Solar Lifestyle',
    category: 'Lifestyle',
    description:
      'How switching to solar improves your quality of life, increases property value, and reduces carbon footprint.',
    image: '/images/House.png',
    date: 'Jan 08, 2026',
    author: 'Green Living',
    color: 'bg-purple-500',
    content: `
      <p>Switching to solar energy is more than a financial decision — it's a lifestyle upgrade. Across Uttarakhand, homeowners are choosing solar not only to reduce electricity bills but to enjoy energy independence, comfort, and a greener way of living.</p>
      <p>A solar-powered home represents modern living: lower expenses, reliable power, and a conscious step toward protecting the environment for future generations.</p>
      <h2>More Than Just Electricity Savings</h2>
      <p>Solar energy gives homeowners freedom from rising electricity tariffs and frequent power cuts. Instead of worrying about monthly bills, families enjoy predictable energy costs and long-term peace of mind.</p>
      <p>Your home produces clean energy every day — turning sunlight into savings while supporting a sustainable future.</p>
      <h2>Increase Property Value</h2>
      <p>Solar homes attract buyers willing to pay premium prices. Reduced electricity expenses make properties more desirable. Energy-efficient homes are the new real estate standard.</p>
      <h2>Reliable Power & Comfort</h2>
      <p>In areas experiencing frequent outages, hybrid solar systems with battery backup ensure uninterrupted electricity for lights, fans, Wi-Fi, and essential appliances.</p>
      <ul>
        <li>Work-from-home without interruptions</li>
        <li>Children can study without power cuts</li>
        <li>Comfortable living even during grid failures</li>
        <li>Peace of mind during summers & monsoons</li>
      </ul>
      <h2>Reduce Your Carbon Footprint</h2>
      <p>A typical residential solar system offsets several tons of carbon emissions during its lifetime — equivalent to planting hundreds of trees. By choosing solar, you actively contribute to cleaner air and a healthier environment.</p>
    `,
  },
  {
    id: 'maintenance',
    slug: 'maintenance',
    title: 'Maintenance Tips for Peak Performance',
    category: 'Technical',
    description:
      'Simple maintenance routines to ensure your solar panels generate maximum power for 25+ years.',
    image: '/images/Field Panel.png',
    date: 'Jan 05, 2026',
    author: 'Tech Support',
    color: 'bg-orange-500',
    content: `
      <p>Solar panels are designed for durability and long-term performance. With minimal maintenance, a well-installed system can deliver reliable electricity for more than 25 years. A few simple care practices ensure your solar investment continues generating maximum savings.</p>
      <p>In regions like Uttarakhand, where dust, seasonal rainfall, and bird activity are common, periodic maintenance helps maintain peak efficiency and uninterrupted energy production.</p>
      <h2>Low Maintenance, High Output</h2>
      <p>Solar panels have no moving parts, making them extremely reliable. Most performance losses occur due to dirt accumulation or minor electrical issues — both easily preventable with routine checks.</p>
      <p>Even a thin layer of dust can reduce generation by 5–15%. Regular cleaning ensures optimal sunlight absorption.</p>
      <h2>Cleaning Your Solar Panels</h2>
      <p>Rinse panels with clean water every few months, especially during dry seasons. Use a soft sponge or cloth. Avoid harsh chemicals or abrasive tools. For steep roofs, always hire professionals instead of cleaning yourself.</p>
      <h2>Monitor System Performance</h2>
      <p>Modern solar inverters include smart monitoring apps that allow you to track energy production in real time. Monitoring helps detect problems early and maintain optimal performance.</p>
      <ul>
        <li>Track daily electricity generation</li>
        <li>Identify shading or dirt issues early</li>
        <li>Detect inverter or wiring faults quickly</li>
        <li>Ensure maximum long-term savings</li>
      </ul>
      <h2>Kartik Solar AMC Support</h2>
      <p>For complete peace of mind, Kartik Solar offers Annual Maintenance Contracts (AMC). Our local experts perform routine inspections, professional cleaning, electrical safety checks, and performance optimization.</p>
    `,
  },
  {
    id: 'case-studies',
    slug: 'case-studies',
    title: 'Real Stories from Happy Customers',
    category: 'Case Studies',
    description:
      'Explore real-world installations across Uttarakhand and hear directly from homes powered by Kartik Solar.',
    image: '/images/House.png',
    date: 'Jan 01, 2026',
    author: 'Community Team',
    color: 'bg-teal-500',
    content: `
      <p>Behind every solar installation is a real family or business choosing smarter energy. Across Uttarakhand, Kartik Solar Enterprises has helped homeowners and commercial clients reduce electricity bills, gain energy independence, and move toward a cleaner future.</p>
      <p>Here are some real stories from customers who transformed their daily lives and operations by switching to solar energy.</p>
      <h2>Transforming Homes in Dehradun</h2>
      <p>Mr. Sharma from Rajpur Road, Dehradun, faced exorbitant electricity bills above ₹8,000. Following an in-depth energy analysis, Kartik Solar put in place a bespoke 5 kW rooftop solar array system aimed at optimising savings.</p>
      <blockquote>"The professionalism at Kartik Solar is outstanding. The installation in my house took only two days, and my most recent electricity bill is almost nonexistent. It is a great feeling to consume my own energy." — Mr. Sharma</blockquote>
      <h2>Powering Businesses in Haridwar</h2>
      <p>A manufacturing unit in Haridwar had issues with steady power supply and high operational costs. To improve energy reliability and reduce costs, Kartik Solar implemented a 50 kW on-grid solar system.</p>
      <blockquote>"Our factory had a high power bill due to the operational instability of our machines. After we installed the solar system with the help of Kartik Solar, our power expenses dropped, and the performance of our machines was greatly improved." — Factory Owner</blockquote>
      <h2>Why Customers Choose Kartik Solar</h2>
      <ul>
        <li>Customized system design for every rooftop</li>
        <li>Fast installation by local experts</li>
        <li>Government subsidy assistance</li>
        <li>Long-term service & maintenance support</li>
      </ul>
    `,
  },
]

// ============================================
// Date parser helper
// ============================================
function parseDate(dateStr: string): string {
  const d = new Date(dateStr)
  if (isNaN(d.getTime())) return new Date().toISOString()
  return d.toISOString()
}

// ============================================
// Main seed function
// ============================================

async function main() {
  console.log('✍️  Seeding individual blog post documents...\n')

  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error('❌ SANITY_WRITE_TOKEN is required. Add it to .env.local')
    process.exit(1)
  }

  // ── Step 1: Seed individual blog post documents ──
  const postRefs: Array<{ _key: string; _type: 'reference'; _ref: string }> = []

  for (const post of blogPosts) {
    const docId = `post-${post.slug}`
    const portableTextContent = htmlToPortableText(post.content)

    const doc = {
      _id: docId,
      _type: 'post' as const,
      title: post.title,
      slug: { _type: 'slug', current: post.slug },
      category: post.category,
      description: post.description,
      // image: skipped — upload via Sanity Studio
      publishedAt: parseDate(post.date),
      author: post.author,
      color: post.color,
      content: portableTextContent,
    }

    await client.createOrReplace(doc)
    console.log(`  ✅ ${post.title} (${post.category})`)

    // Collect reference for blogsPage linkage
    postRefs.push({
      _key: `fp-${post.slug}`,
      _type: 'reference',
      _ref: docId,
    })
  }

  console.log(`\n✅ All ${blogPosts.length} blog post documents seeded successfully!`)

  // ── Step 2: Update blogsPage singleton with references ──
  console.log('\n📰 Linking blog posts to Blogs Page schema...\n')

  await client.createOrReplace({
    _id: 'blogsPage',
    _type: 'blogsPage',

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

    gridSection: {
      postsPerPage: 9,
      loadMoreText: 'Load More Articles',
      readMoreText: 'Read Full Article →',
      featuredPosts: postRefs,
    },

    seo: {
      metaTitle:
        'Solar Blog | Kartik Solar Enterprises — Tips, Guides & Updates',
      metaDescription:
        "Read expert articles about solar energy, government subsidies, savings tips, and maintenance guides. Stay informed with Kartik Solar Enterprises — Dehradun's trusted solar company.",
    },
  })

  console.log('✅ Blogs Page updated with featured post references!')
  console.log('\n🎉 Done! All blog posts seeded and linked to Blogs Page.')
}

main().catch((err) => {
  console.error('❌ Seed failed:', err)
  process.exit(1)
})
