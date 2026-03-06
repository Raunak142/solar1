/**
 * Seed Script — Contact Page Content (Complete)
 *
 * Seeds the contactPage singleton with ALL section content extracted from
 * the actual React components. Run from solar1/:
 *
 *   npx tsx scripts/seedContactPage.ts
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
  console.log('📞 Seeding Contact Page content (complete)...\n')

  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error('❌ SANITY_WRITE_TOKEN is required. Add it to .env.local')
    process.exit(1)
  }

  await client.createOrReplace({
    _id: 'contactPage',
    _type: 'contactPage',

    // ═══════════════════════════════════════════════════
    // 1. HERO SECTION (from ContactHero.tsx)
    // ═══════════════════════════════════════════════════
    heroSection: {
      badge: 'Contact Us',
      heading: "Let's Power Your Home with",
      headingHighlight: 'Solar',
      subheading:
        'Have questions about solar installation, savings, or government subsidies? Our Dehradun-based team is here to guide you with expert advice and personalized solutions designed for Indian homes and climate conditions.',
    },

    // ═══════════════════════════════════════════════════
    // 2. FORM SECTION (from ContactForm.tsx)
    // ═══════════════════════════════════════════════════
    formSection: {
      badge: 'Get In Touch',
      heading: "Let's Start Your Solar Journey",
      subheading:
        'Share your requirements with us, and our solar experts will provide a personalized solution tailored to your home, budget, and energy needs.',

      sidebarHeading: 'Talk to Our Team',
      sidebarDescription:
        'Get expert advice on solar installation, subsidies, and savings.',

      contactInfoItems: [
        {
          _key: 'ci1',
          icon: 'Mail',
          label: 'Email Support',
          value: 'connect@kartiksolar.in',
          subtext: 'For quotes & subsidy inquiries',
        },
        {
          _key: 'ci2',
          icon: 'Phone',
          label: 'Speak to an Expert',
          value: '+91 98970 12345',
          subtext: 'Mon-Sat from 9am to 7pm',
        },
        {
          _key: 'ci3',
          icon: 'MapPin',
          label: 'Visit Our Office',
          value: '25/4, Rajpur Road',
          subtext: 'Dehradun, Uttarakhand 248001',
        },
        {
          _key: 'ci4',
          icon: 'Clock',
          label: 'Working Hours',
          value: 'Mon - Sat: 9am - 7pm',
          subtext: 'Sunday: Closed',
        },
      ],

      quickStats: [
        { _key: 'qs1', value: '500+', label: 'Projects Completed' },
        { _key: 'qs2', value: '98%', label: 'Customer Satisfaction' },
      ],

      nameLabel: 'Full Name *',
      emailLabel: 'Email Address *',
      phoneLabel: 'Phone Number *',
      cityLabel: 'City *',
      messageLabel: 'Your Message *',
      submitButtonText: 'Send Message',
      successTitle: 'Message Sent Successfully!',
      successMessage:
        "Thank you for reaching out. We'll get back to you within 24 hours.",
      privacyText:
        'By submitting this form, you agree to our Privacy Policy',
    },

    // ═══════════════════════════════════════════════════
    // 3. MAP SECTION (from ContactMap.tsx)
    // ═══════════════════════════════════════════════════
    mapSection: {
      mapEmbedUrl:
        'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.15286591!2d78.0411!3d30.3244!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390929c356c888af%3A0x4c3562c032518799!2sClock%20Tower%2C%20Dehradun!5e0!3m2!1sen!2sin!4v1710321234567',

      locationName: 'Kartik Solar HQ',
      locationTagline: 'Our Flagship Hub',
      address: 'Clock Tower, Rajpur Road,',
      addressLine2: 'Dehradun, Uttarakhand 248001',
      phone: '+91 (555) 555-0123',
      directionsUrl:
        'https://www.google.com/maps/dir/?api=1&destination=30.3244,78.0411',
      directionsButtonText: 'Directions',
      chatButtonText: 'Chat Now',

      mobileHeading: 'Kartik Solar HQ',
      mobileAddress: 'Clock Tower, Rajpur Road, Dehradun, Uttarakhand',
      mobilePhoneUrl: 'tel:+915555550123',
    },

    // ═══════════════════════════════════════════════════
    // 4. FAQ SECTION (from ContactFAQ.tsx)
    // ═══════════════════════════════════════════════════
    faqSection: {
      heading: 'Common Questions',
      subheading: 'Quick answers to help you decide.',
      faqs: [
        {
          _key: 'faq1',
          question: 'Is the site survey and solar consultation really free?',
          answer:
            'Yes. Our team provides a completely free site visit and consultation to understand your roof space, electricity usage, and recommend the best solar solution.',
        },
        {
          _key: 'faq2',
          question: 'How much can I save on electricity bills with solar?',
          answer:
            'Most homes reduce their electricity bills by 70–90%, depending on system size and energy consumption. We provide a personalized savings estimate during consultation.',
        },
        {
          _key: 'faq3',
          question: 'Do you help with government subsidy and documentation?',
          answer:
            'Absolutely. Kartik Solar handles the entire subsidy process — from application and approvals to net-metering — making the experience hassle-free for you.',
        },
        {
          _key: 'faq4',
          question: 'How long does solar installation take?',
          answer:
            'Most residential systems are installed within 2–5 days after approvals. Our local Dehradun team manages everything end-to-end.',
        },
        {
          _key: 'faq5',
          question: 'Will solar work during cloudy weather or power cuts?',
          answer:
            'Yes. Solar panels still generate power in cloudy conditions. With optional battery backup, your home can also stay powered during outages.',
        },
        {
          _key: 'faq6',
          question: 'What happens after installation? Do you provide support?',
          answer:
            'Yes. We provide ongoing monitoring, maintenance support, and warranty assistance to ensure your system performs efficiently for years.',
        },
      ],
    },

    // ═══════════════════════════════════════════════════
    // SEO
    // ═══════════════════════════════════════════════════
    seo: {
      metaTitle:
        'Contact Us | Kartik Solar Enterprises — Solar Company in Dehradun',
      metaDescription:
        "Get in touch with Kartik Solar Enterprises for solar installation, subsidies, and savings. Located in Dehradun, Uttarakhand. Free consultation and expert advice for Indian homes.",
    },
  })

  console.log('✅ Contact Page seeded successfully with all section content!')
}

main().catch((err) => {
  console.error('❌ Seed failed:', err)
  process.exit(1)
})
