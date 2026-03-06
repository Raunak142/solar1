/**
 * Seed Script — Legal Pages (Privacy, Cookies, Terms)
 *
 * Seeds all 3 legal page singletons with content extracted from the
 * React components. Run from solar1/:
 *
 *   npx tsx scripts/seedLegalPages.ts
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
// Helper: build a Portable Text block
// ============================================

let blockIdx = 0

function heading(style: 'h2' | 'h3', text: string) {
  const key = `b${blockIdx++}`
  return {
    _type: 'block',
    _key: key,
    style,
    markDefs: [],
    children: [{ _type: 'span', _key: `${key}s`, text, marks: [] }],
  }
}

function para(text: string) {
  const key = `b${blockIdx++}`
  return {
    _type: 'block',
    _key: key,
    style: 'normal',
    markDefs: [],
    children: [{ _type: 'span', _key: `${key}s`, text, marks: [] }],
  }
}

function bullet(text: string) {
  const key = `b${blockIdx++}`
  return {
    _type: 'block',
    _key: key,
    style: 'normal',
    listItem: 'bullet',
    level: 1,
    markDefs: [],
    children: [{ _type: 'span', _key: `${key}s`, text, marks: [] }],
  }
}

// ============================================
// Privacy Policy content
// ============================================

function privacyContent() {
  blockIdx = 0
  return [
    heading('h2', '1. Introduction'),
    para('The purpose of this privacy policy is to explain the ways in which we at Kartik Solar Enterprises ("we," "us," or "our") collect, use, and protect your personal data when you visit our Website at solar1-cyan.vercel.app or use our solar energy services. You are invited to review the policy.'),

    heading('h2', '2. Collection of Your Data'),
    para('We are processing and collecting the following personal data from you:'),
    bullet('Identification Information: If you communicate with us through the WhatsApp application or the contact form or you do an enquiry and communicate with us, we collect your name, phone number, email, and address.'),
    bullet('Technical and Property Data: While you are in an online consultation, you might provide us the measurements of your roof, your electricity bills, your location for site assessment(s). You might also share the photos of your house.'),
    bullet('Usage data: Data is collected and recorded automatically through the utilization of cookies and analytics. This data includes your IP address, the type of browser you are using, pages visited, duration spent on the Website, and referring URLs.'),
    bullet('Communication Record: You may have communications via email, WhatsApp, or phone with our staff, and the law provides the extent of records of such communications.'),

    heading('h2', '3. Your Data: What We Do with Your Data'),
    para('Your personal data is used to:'),
    bullet('Answer questions and perform solar consultations'),
    bullet('Draft and send quotes and descriptions for solar projects'),
    bullet('Schedule site visits and installations, as well as maintenance'),
    bullet('File government subsidies on your behalf'),
    bullet('Provide updates, and offers on services and programs (with your consent)'),
    bullet('Help improve our website, services, and customer experience'),
    bullet('Fulfill our obligations under the laws of India'),

    heading('h2', '4. Processing Justification (Invoking the IT Act, 2000, & DPDP Act, 2023)'),
    para('Your data is processed for the following justified reasons:'),
    bullet('Consent: Where consent is provided for particular communications'),
    bullet('Contractual duty: Related to services for solar installation'),
    bullet('Legal duty: Following the laws of India'),
    bullet('Interest: For the improvement of services and website'),

    heading('h2', '5. Data Sharing and Disclosure'),
    para('Your personal data is never sold, traded, or rented to other entities. We may share your information only under the following circumstances:'),
    bullet('For project execution with installation partners or subcontractors'),
    bullet('Data may be shared with government entities, such as DISCOM (distribution companies) or MNRE, for net metering and subsidy applications.'),
    bullet('The sharing of data with technology service providers (such as website hosting and analytics) is a result of data processing agreements.'),
    bullet('Data may be disclosed when provided for under a law, a court order, or in instances of an appropriate lawful regulatory scope in India.'),

    heading('h2', '6. Data Retention'),
    para('Personal data will be kept as long as it is necessary to achieve the purpose outlined in this Policy or as required by law. Data related to inquiries will be kept for 3 years. Data related to Projects and Warranty will be kept for 10 years as per the service warranty obligations. You may request for deletion of your data in the absence of any legal retention obligations.'),

    heading('h2', '7. Your Rights'),
    para('In respect of the current legislation in India, including the Digital Personal Data Protection Act, 2023, you are entitled to:'),
    bullet('Be informed of, and have access to, the personal data we hold about you.'),
    bullet('Have any data you claim is inaccurate or incomplete corrected.'),
    bullet('Have your personal data deleted, (unless otherwise provided for by law).'),
    bullet('Revoke your consent to receive direct marketing communications.'),
    bullet('Submit a complaint to our Data Grievance Officer.'),
    para('To exercise your rights, please write to us at kartiksolar.in@gmail.com, with the subject line "Data Privacy Request".'),

    heading('h2', '8. Data Protection'),
    para('Data protection from unauthorized access, loss, destruction, or disclosure is a priority for us. We help protect your data by utilizing HTTPS for our website. Unfortunately, total data protection threats cannot be compromised.'),

    heading('h2', '9. Other Websites'),
    para("Our website may contain links to third parties, including government and brand partner websites. We recommend reviewing the third-party site's privacy policies, as we do not govern or control them."),

    heading('h2', "10. Children's Data"),
    para("Our website's and services' intended audience is not individuals below 18 years old. We do not collect personal data from children. Please contact us if you believe we have obtained personal data from children."),

    heading('h2', '11. Privacy Policy Updates'),
    para('Our Privacy Policy is subject to change. Updates are made available on this page, and a date will be published to indicate the most recent change. We recommend you periodically check for updates.'),

    heading('h2', '12. Data Grievance Officer'),
    para('Name: Kartik Solar Enterprises — Grievance Officer'),
    para('Email: kartiksolar.in@gmail.com'),
    para('Address: 25/4, Rajpur Road, Dehradun, Uttarakhand, India – 248001'),
    para('We will respond to all data privacy complaints within 30 days.'),
  ]
}

// ============================================
// Cookies Policy content
// ============================================

function cookiesContent() {
  blockIdx = 0
  return [
    heading('h2', "1. What do we mean by 'Cookies'?"),
    para("Cookies are small files saved on the device used to access a webpage for the first time. Depending on the device they are used to help improve the webpage, remember the user's preferences, or help the website owner understand user behavior to improve the site."),

    heading('h2', '2. What are the Cookies used by Kartik Solar Enterprises'),
    para('When you visit solar1-cyan.vercel.app, we collect Cookies to understand how we can improve our interaction with you. We use several types of Cookies, These are meant to help improve user experience.'),

    heading('h3', '2.1. Cookies That Are Strictly Necessary'),
    para('These Cookies are essential for the proper functioning of the site. Therefore, they are strict, and cannot be changed.'),
    bullet('Security and fraud protection, session management, and form submission.'),
    bullet('Load balancing and server management (via Vercel)'),

    heading('h3', '2.2 Performance and Analytics Cookies'),
    para('These cookies track site user activity and suggest what improvements can be made.'),
    bullet('How often and how long users spend on pages'),
    bullet('Errors and broken links'),
    bullet('Pages and content that receive the most traffic'),
    bullet('We use Google Analytics. You can opt out at tools.google.com/dlpage/gaoptout'),

    heading('h3', '2.3 Functional Cookies'),
    para('These allow enhanced and more personalized features.'),
    bullet('Recording your preferences for future communications'),
    bullet('Features of the WhatsApp chat widget'),
    bullet('Configuration of the embedded video/media player'),

    heading('h3', '2.4 Marketing and Targeting Cookies (if applicable)'),
    para('Marketing cookies may be used to promote our solar services to you on other websites. While we do not currently run paid advertising campaigns, we may do so in the future.'),

    heading('h2', '3. Cookies from Other Websites'),
    para('Some cookies come from other websites. This includes:'),
    bullet('Vercel — infrastructure and CDN delivery'),
    bullet('Google Analytics — anonymous visitor statistics'),
    bullet('WhatsApp Business Widget — live chat button'),
    bullet('Sanity CMS — delivery of blog content'),
    para('These websites have their own privacy policies. Third-party cookies are not our responsibility.'),

    heading('h2', '4. Cookie Duration'),
    bullet('Session Cookies: Active until the browser session ends.'),
    bullet('Persistent Cookies: Stay for a predetermined duration (30 days to 2 years) or until deleted manually.'),

    heading('h2', '5. Cookies Management and Disablement'),
    para('Management of cookies can be accessed via most web browser settings:'),
    bullet('Google Chrome: Settings > Privacy and Security > Cookies'),
    bullet('Mozilla Firefox: Settings > Privacy & Security > Cookies'),
    bullet('Microsoft Edge: Settings > Cookies and Site Permissions'),
    bullet('Safari: Preferences > Privacy > Manage Website Data'),

    heading('h2', '6. Do Not Track'),
    para("Our website does not currently acknowledge DNT signals, however, the cookie policy does illustrate the methods we employ to honor users' privacy."),

    heading('h2', '7. Consent'),
    para('When users visit websites, they see a notice asking them to give consent regarding cookies. Users can deny these cookies. We respect your privacy.'),

    heading('h2', '8. Changes to This Cookies Policy'),
    para('This policy may change. All changes will be reflected on this site. We encourage users to check frequently.'),

    heading('h2', '9. Questions Regarding Cookies'),
    para('You can contact us regarding our Cookies Policy:'),
    para('Kartik Solar Enterprises'),
    para('Email: kartiksolar.in@gmail.com'),
    para('Phone: +91 98970 12345'),
    para('Address: 25/4, Rajpur Road, Dehradun, Uttarakhand, India – 248001'),
  ]
}

// ============================================
// Terms & Conditions content
// ============================================

function termsContent() {
  blockIdx = 0
  return [
    heading('h2', '1. Acceptance of Terms'),
    para('By visiting the site solar1-cyan.vercel.app (the "Site") owned by Kartik Solar Enterprises, or by using any solar energy product, installation, or consulting service with us, you agree to these Terms and Conditions. If you do not agree, do not use our Website or services.'),

    heading('h2', '2. Company Information'),
    bullet('Business Name: Kartik Solar Enterprises'),
    bullet('Address: 25/4, Rajpur Road, Dehradun, Uttarakhand, India - 248001'),
    bullet('Email: kartiksolar.in@gmail.com'),
    bullet('Phone: +91 98970 12345'),
    bullet('Serviceable Areas: Dehradun, Haridwar, Rishikesh, and surrounding areas of Uttarakhand'),

    heading('h2', '3. Services'),
    para('Kartik Solar Enterprises provides:'),
    bullet('Design, supply and installation of solar panel systems for residential purposes'),
    bullet('Solar energy solutions for commercial and industrial sectors'),
    bullet('Consultation, site evaluation, and feasibility study'),
    bullet('Configuration of battery backup and energy storage'),
    bullet('Support in government subsidy application (MNRE/PM Surya Ghar Yojana)'),
    bullet('Post installation maintenance, service, and warranty support'),
    para('All services depend on project contracts, site circumstances, and government regulations.'),

    heading('h2', '4. Pricing and Quotations'),
    para('Quotes are valid for 30 days. Subject to change due to government grants, material costs, taxes (GST), and site conditions.'),

    heading('h2', '5. Terms of Payment'),
    bullet('Advance payment (typically 30-50%)'),
    bullet('Progress payment during installation'),
    bullet('Retention payment at completion'),
    para('Payment by bank transfer (NEFT/RTGS/IMPS), UPI, or cheque. All prices include applicable GST.'),

    heading('h2', '6. Warranty Conditions'),
    bullet('Solar panels: 25-year performance warranty'),
    bullet('Inverter: 5–10 years (per manufacturer)'),
    bullet('Battery: 2–5 years (per manufacturer)'),
    bullet('Workmanship: 1-year from commissioning'),

    heading('h2', '7. Customer Obligations'),
    bullet('Submit complete site information'),
    bullet('Grant unobstructed entry on scheduled days'),
    bullet('Obtain necessary permissions before installation'),
    bullet('Not alter installed systems without written approval'),
    bullet('Report damages or concerns promptly'),

    heading('h2', '8. Intellectual Property'),
    para('All website content belongs to Kartik Solar Enterprises and may not be reproduced without permission.'),

    heading('h2', '9. Limitations on Liability'),
    para('Kartik Solar shall not be liable for indirect damages, estimated savings variations, or delays caused by third parties.'),

    heading('h2', '10. Applicable Law & Jurisdiction'),
    para('Governed by the laws of India. Disputes subject to the Courts of Dehradun, Uttarakhand.'),

    heading('h2', '11. Amendments to Terms'),
    para('Kartik Solar reserves the right to modify these Terms. Updated Terms will be posted on the Website.'),

    heading('h2', '12. Contact for Queries'),
    para('For questions regarding these Terms:'),
    para('Kartik Solar Enterprises'),
    para('25/4, Rajpur Road, Dehradun, Uttarakhand 248001'),
    para('Email: kartiksolar.in@gmail.com'),
    para('Phone: +91 98970 12345'),
  ]
}

// ============================================
// Main seed function
// ============================================

async function main() {
  console.log('⚖️  Seeding Legal Pages...\n')

  if (!process.env.SANITY_WRITE_TOKEN) {
    console.error('❌ SANITY_WRITE_TOKEN is required. Add it to .env.local')
    process.exit(1)
  }

  // ── 1. Privacy Policy ──
  await client.createOrReplace({
    _id: 'privacyPolicy',
    _type: 'privacyPolicy',
    title: 'Privacy Policy',
    badge: 'Legal',
    effectiveDate: '1st February 2026',
    lastUpdated: '28th February 2026',
    content: privacyContent(),
    seo: {
      metaTitle: 'Privacy Policy | Kartik Solar Enterprises',
      metaDescription:
        'Read the privacy policy of Kartik Solar Enterprises. Learn how we collect, use, and protect your personal data.',
    },
  })
  console.log('  ✅ Privacy Policy')

  // ── 2. Cookies Policy ──
  await client.createOrReplace({
    _id: 'cookiesPolicy',
    _type: 'cookiesPolicy',
    title: 'Cookies Policy',
    badge: 'Legal',
    effectiveDate: '1st February 2026',
    lastUpdated: '28th February 2026',
    content: cookiesContent(),
    seo: {
      metaTitle: 'Cookies Policy | Kartik Solar Enterprises',
      metaDescription:
        'Understand how Kartik Solar Enterprises uses cookies on its website and how you can manage your cookie preferences.',
    },
  })
  console.log('  ✅ Cookies Policy')

  // ── 3. Terms & Conditions ──
  await client.createOrReplace({
    _id: 'termsAndConditions',
    _type: 'termsAndConditions',
    title: 'Terms & Conditions',
    badge: 'Legal',
    effectiveDate: '1st February 2026',
    lastUpdated: '28th February 2026',
    content: termsContent(),
    seo: {
      metaTitle: 'Terms & Conditions | Kartik Solar Enterprises',
      metaDescription:
        'Review the terms and conditions for using Kartik Solar Enterprises services and website.',
    },
  })
  console.log('  ✅ Terms & Conditions')

  console.log('\n🎉 All 3 legal pages seeded successfully!')
}

main().catch((err) => {
  console.error('❌ Seed failed:', err)
  process.exit(1)
})
