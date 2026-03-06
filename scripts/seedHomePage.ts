/**
 * Seed Script — Home Page Content (Complete)
 *
 * Seeds the homePage singleton with ALL section content extracted from
 * the actual React components. Run from solar1/:
 *
 *   npx tsx scripts/seedHomePage.ts
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
  console.log('🏠 Seeding Home Page content (complete)...\n')

  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error('❌ SANITY_WRITE_TOKEN is required. Add it to .env.local')
    process.exit(1)
  }

  await client.createOrReplace({
    _id: 'homePage',
    _type: 'homePage',

    // ═══════════════════════════════════════════════════
    // 1. HERO SECTION (from Hero.tsx + data.ts fallbackHero)
    // ═══════════════════════════════════════════════════
    heroSection: {
      badge: '#1 Solar Partner in Uttarakhand',
      heading: 'Powering Indian Homes with Smart Solar Energy',
      subheading:
        'Switch to reliable, affordable solar solutions designed specially for Indian homes and climate conditions. Kartik Solar Enterprises helps families reduce electricity bills, avoid power cuts, and enjoy long-term energy savings.',
      ctaText: 'Get Free Solar Consultation',
      ctaLink: '/#services',
      annualSavings: '₹50,000 – ₹80,000+',
      annualSavingsDescription: 'depending on usage',
      totalClients: '500+',
      trustLine:
        'Trusted by 500+ happy families | Local installation & support | Government subsidy guidance',
    },

    // ═══════════════════════════════════════════════════
    // 2. TRUST PARTNERS (from Hero.tsx — sub-hero section)
    // ═══════════════════════════════════════════════════
    trustPartnersSection: {
      badge: 'Industry Certified Brands',
      heading: 'Trusted Technology Partners',
      subheading:
        "We install high-quality solar components from India's most reliable manufacturers to ensure long-lasting performance, maximum efficiency, and complete safety for your home or business.",
      partners: [
        { _key: 'p1', name: 'Luminous', color: 'text-[#ed1b24]' },
        { _key: 'p2', name: 'Tata Power', color: 'text-[#0b5c9b]' },
        { _key: 'p3', name: 'Havells', color: 'text-[#ed1c24]' },
        { _key: 'p4', name: 'Microtek', color: 'text-[#ff0000]' },
        { _key: 'p5', name: 'Adani Solar', color: 'text-[#183661]' },
        { _key: 'p6', name: 'Growatt', color: 'text-[#8ac340]' },
        { _key: 'p7', name: 'Waaree', color: 'text-[#f37021]' },
      ],
    },

    // ═══════════════════════════════════════════════════
    // 3. ABOUT SECTION (from About.tsx)
    // ═══════════════════════════════════════════════════
    aboutSection: {
      badge: 'Who We Are',
      heading: 'Smart Solar Energy for the Indian Household',
      paragraph1:
        'Kartik Solar Enterprises is creating a new way for Indian homes to generate and use electricity. Focusing on Indian homes and the Indian climate, we aim to meet real energy needs with our innovative, affordable, and personalized solar solutions.',
      paragraph2:
        'We aim to simplify and modernize solar energy to provide the Indian family with a practical and affordable energy solution while retaining a focus on performance and the long-term efficiency of the systems.',
    },

    // ═══════════════════════════════════════════════════
    // 4. SERVICES SECTION (from Services.tsx — 6 benefit cards + 6 service tags + CTA)
    // ═══════════════════════════════════════════════════
    servicesSection: {
      badge: 'Why Solar?',
      heading: 'Intelligent Solution for Indian Consumers',
      subheading:
        'With the aid of Kartik Solar Enterprises, Indian middle-class families can utilize safe and affordable solar options while managing climbing electricity costs.',
      benefitCards: [
        {
          _key: 'sb1',
          icon: 'IndianRupee',
          title: 'Reduce Electricity Bills',
          description: 'Save up to 70-90% on monthly electricity costs.',
        },
        {
          _key: 'sb2',
          icon: 'Zap',
          title: 'Energy Independence',
          description: 'Reduce dependency on grid power and avoid power cuts.',
        },
        {
          _key: 'sb3',
          icon: 'Shield',
          title: 'Government Subsidies',
          description: 'Get government support through PM Surya Ghar Yojana.',
        },
        {
          _key: 'sb4',
          icon: 'Leaf',
          title: 'Eco-Friendly Living',
          description: 'Reduce carbon footprint and contribute to clean energy.',
        },
        {
          _key: 'sb5',
          icon: 'Clock',
          title: '25+ Year Lifespan',
          description: 'Solar panels provide decades of reliable performance.',
        },
        {
          _key: 'sb6',
          icon: 'Home',
          title: 'Increase Property Value',
          description: 'Solar-powered homes have higher market value.',
        },
      ],
      ctaHeading: 'Not Sure Which Solar System is Right for Your Home?',
      ctaText:
        'Our experts at Kartik Solar Enterprises analyze your electricity usage, rooftop space, and budget to recommend the perfect solar solution.',
      ctaButtonText: 'Start Your Solar Journey',
      ctaButtonLink: '/contact',
    },

    // ═══════════════════════════════════════════════════
    // 5. FEATURES SECTION (from Features.tsx — 4 items with images)
    // ═══════════════════════════════════════════════════
    featuresSection: {
      heading: 'Why Kartik Solar Panels Are a Smarter Choice',
      subheading:
        'Many companies only install solar panels. Kartik Solar Enterprises delivers complete energy solutions carefully designed for Indian homes, Indian weather conditions, and practical household budgets — ensuring real savings and reliable performance for years to come.',
      features: [
        {
          _key: 'f1',
          icon: 'Zap',
          title: 'Designed for the Indian Climate',
          description:
            'Engineered to perform efficiently in extreme heat, dust, monsoon rains, and voltage fluctuations. Our systems are built to handle real Indian conditions while maintaining stable performance and longer life.',
          // image: '/images/House.png' — referenced locally, no Sanity asset
        },
        {
          _key: 'f2',
          icon: 'Settings',
          title: 'Smart Energy Optimization',
          description:
            'We study your electricity usage, peak consumption hours, and seasonal patterns to design the right system size — so you get maximum savings without overspending on unnecessary capacity.',
          // image: '/images/Field Panel.png'
        },
        {
          _key: 'f3',
          icon: 'Handshake',
          title: 'Reliable Long-Term Support',
          description:
            "Our relationship doesn\u2019t end after installation. From regular system checks to quick service support and smooth warranty assistance, we ensure your solar system keeps running worry-free.",
          // image: '/images/GroundPanel.png'
        },
        {
          _key: 'f4',
          icon: 'ShieldCheck',
          title: 'Built for Long-Term Value',
          description:
            'Premium components combined with expert installation deliver dependable performance for 25+ years — helping you save money every month while contributing to a cleaner environment.',
          // image: '/images/Panel.png'
        },
      ],
    },

    // ═══════════════════════════════════════════════════
    // 6. BENEFITS SECTION (from Benefits.tsx — 8 cards + comparison table + trust)
    // ═══════════════════════════════════════════════════
    benefitsSection: {
      badge: 'Benefits',
      heading: 'The Kartik Solar Advantage',
      subheading:
        'Along with solar panel installation, Kartik Solar Enterprises offers a total energy solution tailored for Indian homes considering Indian climate conditions.',
      comparisonHeading: 'Kartik Solar vs Traditional Electricity',
      comparisonRows: [
        { _key: 'c1', feature: 'Monthly Cost', kartikSolar: 'Low & Stable', traditional: 'Continuously Increasing' },
        { _key: 'c2', feature: 'Power Cuts', kartikSolar: 'Backup Options Available', traditional: 'Frequent Interruptions' },
        { _key: 'c3', feature: 'Long-Term Savings', kartikSolar: 'High Savings (25+ Years)', traditional: 'No Savings' },
        { _key: 'c4', feature: 'Pollution', kartikSolar: 'Clean Energy', traditional: 'High Carbon Emissions' },
        { _key: 'c5', feature: 'Future Ready', kartikSolar: 'Smart & Sustainable', traditional: 'Outdated System' },
      ],
      trustHeading: 'Why Families Trust Kartik Solar Enterprises',
      trustItems: [
        'Government-approved installation support',
        '25+ years solar panel performance life',
        'Trusted by local homeowners',
        'Dedicated Dehradun-based service & support',
      ],
    },

    // ═══════════════════════════════════════════════════
    // 7. PROJECTS SECTION (from Projects.tsx)
    // ═══════════════════════════════════════════════════
    projectsSection: {
      badge: 'Our Projects',
      heading: 'Powering Real Homes with Real Savings',
      subheading:
        'Every project we complete represents a family choosing smarter energy. From consultation to installation, Kartik Solar Enterprises helps homeowners reduce electricity bills and enjoy reliable solar power built for Indian conditions.',
      showCount: 6,
      viewAllText: 'See All Projects',
      viewAllLink: '/projects',
    },

    // ═══════════════════════════════════════════════════
    // 8. TESTIMONIALS SECTION (from Testimonials.tsx)
    // ═══════════════════════════════════════════════════
    testimonialsSection: {
      badge: 'Testimonials',
      heading: 'Trusted by Homes & Businesses Across Uttarakhand',
      subheading:
        'Real experiences from families and businesses who switched to clean, reliable solar energy with Kartik Solar.',
      reviews: [
        {
          _key: 'r1',
          name: 'Vikram Negi',
          location: 'Clement Town, Dehradun',
          systemSize: '5 kW',
          rating: 5,
          quote: 'Power cuts were a big problem in our area, especially during the summer. Since installing the system with battery backup, our home has run all day smoothly. Installation was quick and very clean.',
        },
        {
          _key: 'r2',
          name: 'Sanjay Sharma',
          location: 'Rajpur Road, Dehradun',
          systemSize: '7 kW',
          rating: 5,
          quote: 'My electricity bill used to cross ₹6,000 every month. After installing solar with Kartik Solar, it has reduced to almost nothing. The team handled everything professionally, including subsidy paperwork. Highly recommended!',
        },
        {
          _key: 'r3',
          name: 'Priya Rawat',
          location: 'Vasant Vihar, Dehradun',
          systemSize: '3 kW',
          rating: 5,
          quote: 'Electricity costs were affecting our business profits. Kartik Solar installed a rooftop system that now powers our refrigerators and lighting during the day. We are saving more than expected every month.',
        },
        {
          _key: 'r4',
          name: 'Rajesh Barthwal',
          location: 'Haridwar',
          systemSize: '10 kW',
          rating: 5,
          quote: 'We wanted to reduce operational costs and stabilise power supply for machinery. The Kartik Solar team designed the perfect system for our factory. The savings and performance have been excellent.',
        },
        {
          _key: 'r5',
          name: 'Meenakshi Bisht',
          location: 'Mussoorie',
          systemSize: '4 kW',
          rating: 5,
          quote: 'Living in the hills means unreliable electricity, but solar changed everything for us. We now have uninterrupted power and zero dependency on diesel generators. Best investment for our home.',
        },
        {
          _key: 'r6',
          name: 'Amit Dobhal',
          location: 'Rishikesh',
          systemSize: '5 kW',
          rating: 5,
          quote: 'The process was seamless and easy to understand from consultation to installation. The team communicated everything and kept every promise. There has been a significant drop in our office electricity expenses.',
        },
      ],
    },

    // ═══════════════════════════════════════════════════
    // 9. FAQ SECTION (from FAQ.tsx — all 12 questions)
    // ═══════════════════════════════════════════════════
    faqSection: {
      badge: 'FAQ',
      heading: 'Frequently asked questions',
      showInitially: 6,
      viewMoreText: 'View More Questions',
      viewLessText: 'Show Less Questions',
      questions: [
        { _key: 'q1', question: 'Is solar really worth it for Indian homes?', answer: 'Yes. With rising electricity prices, solar helps homeowners reduce bills by up to 70–90%. It is a long-term investment that provides savings for 25+ years while increasing energy independence.' },
        { _key: 'q2', question: 'How much can I save every month with solar?', answer: 'Savings depend on your electricity usage and system size, but most households save between ₹2,000–₹6,000 per month after installing solar.' },
        { _key: 'q3', question: 'Will solar panels work during cloudy or rainy days?', answer: 'Yes. Solar panels still generate electricity during cloudy weather, though output may be slightly lower. Systems are designed to perform efficiently even during monsoon seasons.' },
        { _key: 'q4', question: 'What happens at night?', answer: 'Solar panels generate electricity during the day. At night, you can use grid power or optional battery backup systems to run essential appliances.' },
        { _key: 'q5', question: 'Can solar run AC, fridge, TV, and washing machine?', answer: 'Yes. A properly designed system can easily run daily household appliances including ACs, refrigerators, TVs, washing machines, fans, and lights.' },
        { _key: 'q6', question: 'How much rooftop space is required?', answer: 'On average, a 1 kW solar system needs about 80–100 sq. ft. of shadow-free rooftop area. Our team conducts a site survey to recommend the right setup.' },
        { _key: 'q7', question: 'How long do solar panels last?', answer: 'High-quality solar panels typically last 25 years or more with minimal performance reduction over time.' },
        { _key: 'q8', question: 'Do you help with government subsidy and documentation?', answer: 'Yes. Kartik Solar Enterprises provides complete assistance with subsidy applications, documentation, and net metering processes.' },
        { _key: 'q9', question: 'How long does installation take?', answer: 'Most residential installations are completed within 1–3 days after approvals and material readiness.' },
        { _key: 'q10', question: 'Do solar panels require regular maintenance?', answer: 'Solar systems require very little maintenance. Occasional cleaning and basic inspection are enough, and our team provides support whenever needed.' },
        { _key: 'q11', question: 'Will solar panels get damaged in heat, rain, or storms?', answer: 'No. Our systems are designed for Indian climate conditions, including high temperatures, dust, heavy rain, and strong winds common in Uttarakhand.' },
        { _key: 'q12', question: 'What support do you provide after installation?', answer: 'We provide ongoing service support, warranty assistance, and system guidance to ensure your solar system runs smoothly for years.' },
      ],
      bottomText:
        "Still have questions? We're here to help! Whether you're curious about installation, costs, or how solar works, our team is ready to guide.",
      ctaButtonText: 'Explore More',
      ctaButtonLink: '/contact',
    },

    // ═══════════════════════════════════════════════════
    // 10. BLOG SECTION (from Blog.tsx)
    // ═══════════════════════════════════════════════════
    blogSection: {
      badge: 'Learn About Solar',
      heading: 'Solar Knowledge Hub for Smarter Energy Decisions',
      subheading:
        'Explore expert guides, cost-saving tips, and government updates designed to help Indian homeowners understand solar energy, reduce electricity bills, and make informed decisions.',
      showCount: 3,
      viewAllText: 'View All Articles',
      viewAllLink: '/blog',
    },

    // ═══════════════════════════════════════════════════
    // 11. CTA SECTION (from CTA.tsx)
    // ═══════════════════════════════════════════════════
    ctaSection: {
      heading: 'Take the First Step Toward Lower Electricity Bills',
      subheading:
        'Do not hesitate to contact us. Our team will get back to you within 24 hours.',
      submitButtonText: 'Send Now',
      successMessage:
        "Message Sent! Thank you! We'll get back to you within 24 hours.",
      mapLocation: 'Dehradun, Uttarakhand',
      mapDirectionsText: 'Get Directions',
    },

    // ═══════════════════════════════════════════════════
    // SEO
    // ═══════════════════════════════════════════════════
    seo: {
      metaTitle:
        'Kartik Solar Enterprises | #1 Solar Company in Dehradun, Uttarakhand',
      metaDescription:
        "Kartik Solar Enterprises — Dehradun's trusted solar company. Residential & commercial solar panel installation with government subsidy support. Save up to ₹80,000/year.",
    },
  })

  console.log('✅ Home Page seeded successfully with all section content!')
}

main().catch((err) => {
  console.error('❌ Seed failed:', err)
  process.exit(1)
})
