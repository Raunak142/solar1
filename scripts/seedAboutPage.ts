/**
 * Seed Script — About Page Content (Complete)
 *
 * Seeds the aboutPage singleton with ALL section content extracted from
 * the actual React components. Run from solar1/:
 *
 *   npx tsx scripts/seedAboutPage.ts
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
  console.log('👥 Seeding About Page content (complete)...\n')

  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error('❌ SANITY_WRITE_TOKEN is required. Add it to .env.local')
    process.exit(1)
  }

  await client.createOrReplace({
    _id: 'aboutPage',
    _type: 'aboutPage',

    // ═══════════════════════════════════════════════════
    // 1. HERO SECTION (from AboutHero.tsx)
    // ═══════════════════════════════════════════════════
    heroSection: {
      badge: 'Our Mission',
      heading: "Empowering India's Sustainable Future — One Home at a Time",
      subheading:
        'Kartik Solar Enterprises is pioneering the way Indian families generate and use electricity. Our mission is to provide every household, particularly the Indian climate and energy needs, the access to clean, dependable, and cheap solar energy. From Dehradun, we want to provide solar energy to every home.',
      ctaText: 'See How We Power Homes',
      ctaLink: '/#services',
      // backgroundImage: undefined, // { _type: 'image', asset: { _type: 'reference', _ref: 'image-id-here' } }
    },

    // ═══════════════════════════════════════════════════
    // 2. INTRO SECTION (from AboutIntro.tsx)
    // ═══════════════════════════════════════════════════
    introSection: {
      badge: 'Our Story',
      heading: 'Sunshine to Savings — Beginning Our Journey',
      paragraph1:
        'Kartik Solar Enterprises started in Dehradun with the belief that clean energy should not be a luxury. They believed that energy should be accessible to every Indian family.',
      paragraph2:
        'As residents of Uttarakhand, we noticed an anomaly. There was an abundance of sunlight, yet, many homes were still struggling with rising electricity bills. Because of frequent power-cuts, families were forced to rely on expensive grid electricity. Year after year families were spending more money, but were receiving less reliability in return.',
      paragraph3: "That's where our journey began.",
      paragraph4:
        'We started Kartik Solar Enterprises with the purpose of bringing simple and affordable solar solutions to the community. We build solar solutions meant for Indian rooftops, for mountain regions, and for all kinds of weather. Every installation democratizes energy for the family and is an investment towards a more sustainable future.',
      statValue: '500+',
      statLabel: 'Happy Families Switched to Solar',
      highlights: [
        {
          _key: 'h1',
          title: 'Local Expertise',
          description:
            "We understand Uttarakhand's terrain, weather patterns, and household energy needs — allowing us to design systems that truly work in local conditions.",
        },
        {
          _key: 'h2',
          title: 'Global Quality Standards',
          description:
            'We combine local understanding with high-quality solar technology, ensuring long-lasting performance and dependable energy for decades.',
        },
      ],
    },

    // ═══════════════════════════════════════════════════
    // 3. FOUNDER SECTION (from AboutFounder.tsx)
    // ═══════════════════════════════════════════════════
    founderSection: {
      label: 'From the Founder',
      heading: "It's About Empowerment",
      founderName: 'Raunak',
      founderRole: 'Founder & CEO, Kartik Solar Enterprises',
      // image: undefined, // { _type: 'image', asset: { _type: 'reference', _ref: 'image-id-here' } }
      quoteParagraph1:
        'The journey of establishing Kartik Solar Enterprises went beyond simply being able to point out solar panels on a building. It was about giving families the peace of mind with respect to their electricity situation. Lessening the monthly burden that stems from the uncertainty of and the value of their electricity, the cuts, and the bills.',
      quoteParagraph2:
        'In a state that is as naturally beautiful as Uttarakhand, it is also our responsibility to choose the clean energy option. Every rooftop that turns to solar is, not only, saving themselves some money, but also, paving the way for a healthier and more sustainable future for all of us.',
      closingQuote:
        'We are privileged to extend our families, one home and one rooftop at a time.',
    },

    // ═══════════════════════════════════════════════════
    // 4. TEAM SECTION (from AboutTeam.tsx)
    // ═══════════════════════════════════════════════════
    teamSection: {
      heading: 'Meet the People Behind Kartik Solar',
      subheading:
        'Our experienced team of engineers, solar experts, and support professionals work together to deliver reliable clean energy solutions across Uttarakhand.',
      members: [
        {
          _key: 'm1',
          name: 'Raunak',
          role: 'Founder & Solar Consultant',
          tagline: 'Vision & Leadership',
          // image: undefined, // { _type: 'image', asset: { _type: 'reference', _ref: 'image-id-here' } }
        },
        {
          _key: 'm2',
          name: 'Ashish',
          role: 'Lead Installation Engineer',
          tagline: 'Precision & Quality',
          // image: undefined, // { _type: 'image', asset: { _type: 'reference', _ref: 'image-id-here' } }
        },
        {
          _key: 'm3',
          name: 'Sneha',
          role: 'Site & Project Manager',
          tagline: 'Seamless Execution',
          // image: undefined, // { _type: 'image', asset: { _type: 'reference', _ref: 'image-id-here' } }
        },
        {
          _key: 'm4',
          name: 'Kaushik',
          role: 'Customer Success',
          tagline: 'Client Satisfaction',
          // image: undefined, // { _type: 'image', asset: { _type: 'reference', _ref: 'image-id-here' } }
        },
      ],
    },

    // ═══════════════════════════════════════════════════
    // 5. DIFFERENTIATORS SECTION (from AboutDifferentiators.tsx)
    // ═══════════════════════════════════════════════════
    differentiatorsSection: {
      badge: 'Why Us',
      heading: 'Why Choose Kartik Solar?',
      subheading:
        "We don't only install solar panels. We assist families in making the switch to an energy solution that is created specifically for Indian homes and the climate.",
      differentiators: [
        {
          _key: 'd1',
          icon: 'Home',
          title: 'Personalized for Your Home',
          description:
            'Every house is different. We carefully study your electricity usage, rooftop space, and budget to design a system that truly works for your family.',
        },
        {
          _key: 'd2',
          icon: 'Headphones',
          title: 'Complete End-to-End Support',
          description:
            'From consultation and subsidy guidance to installation and after-service — we handle everything so your solar journey stays simple and stress-free.',
        },
        {
          _key: 'd3',
          icon: 'ShieldCheck',
          title: 'High-Quality & Reliable Systems',
          description:
            'We use trusted panels, efficient inverters, and durable mounting systems designed to perform in Indian heat, dust, and monsoon weather.',
        },
        {
          _key: 'd4',
          icon: 'BadgeCheck',
          title: 'Transparent & Honest Pricing',
          description:
            'No hidden charges. No confusing technical terms. Just clear guidance and honest pricing you can trust.',
        },
        {
          _key: 'd5',
          icon: 'Wrench',
          title: 'Long-Term Service & Support',
          description:
            'Solar is a 25+ year investment. Our team stays connected even after installation to ensure smooth performance and peace of mind.',
        },
        {
          _key: 'd6',
          icon: 'MapPin',
          title: 'Local Experts You Can Trust',
          description:
            'Based in Dehradun, we understand local weather, rooftops, and energy needs — giving you faster service and reliable support nearby.',
        },
      ],
    },

    // ═══════════════════════════════════════════════════
    // 6. MISSION & VISION SECTION (from AboutMission.tsx)
    // ═══════════════════════════════════════════════════
    missionVisionSection: {
      sectionBadge: 'What Drives Us',
      sectionHeading: 'Purpose That Powers Every Installation',
      missionHeading: 'Our Mission',
      mission:
        'To help Indian families reduce electricity expenses and achieve energy independence through clean, affordable, and dependable solar solutions.',
      visionHeading: 'Our Vision',
      vision:
        'To become a trusted solar partner across Uttarakhand and India by delivering quality installations, honest service, and long-lasting customer relationships.',
    },

    // ═══════════════════════════════════════════════════
    // 7. TRUST / IMPACT SECTION (from AboutTrust.tsx)
    // ═══════════════════════════════════════════════════
    trustSection: {
      badge: 'Our Impact',
      heading: 'Our Impact So Far',
      stats: [
        {
          _key: 's1',
          label: 'Years Combined Experience',
          value: 10,
          suffix: '+',
          icon: 'Star',
        },
        {
          _key: 's2',
          label: 'Happy Families Powered by Solar',
          value: 500,
          suffix: '+',
          icon: 'Home',
        },
        {
          _key: 's3',
          label: 'Clean Energy Installed',
          value: 2,
          suffix: ' MW+',
          icon: 'Zap',
        },
        {
          _key: 's4',
          label: 'Local Support from Dehradun Team',
          value: 24,
          suffix: '/7',
          icon: 'Phone',
        },
      ],
    },

    // ═══════════════════════════════════════════════════
    // 8. CTA SECTION (from AboutCTA.tsx)
    // ═══════════════════════════════════════════════════
    ctaSection: {
      heading: 'Ready to Switch to Solar?',
      description:
        'Join hundreds of families who are already saving money and enjoying reliable power with Kartik Solar Enterprises.',
      primaryCtaText: 'Contact Us',
      primaryCtaLink: '/contact',
      secondaryCtaText: 'View Projects',
      secondaryCtaLink: '/projects',
      footnote:
        'Free consultation • Subsidy guidance • Long-term warranty support',
    },

    // ═══════════════════════════════════════════════════
    // SEO
    // ═══════════════════════════════════════════════════
    seo: {
      metaTitle:
        'About Us | Kartik Solar Enterprises — Solar Company in Dehradun',
      metaDescription:
        "Learn about Kartik Solar Enterprises — Dehradun's trusted solar installation company. Meet our founder, team, and discover our mission to empower Indian homes with clean solar energy.",
    },
  })

  console.log('✅ About Page seeded successfully with all section content!')
}

main().catch((err) => {
  console.error('❌ Seed failed:', err)
  process.exit(1)
})
