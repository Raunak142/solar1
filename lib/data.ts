// Server-side data fetching functions for Sanity CMS
// These run at build time / ISR revalidation — never on the client

import { client, urlFor, getFileUrl } from './sanity'
import {
  homePageQuery,
  allFaqsQuery,
  allTestimonialsQuery,
  allProjectsQuery,
  allBenefitsQuery,
  benefitsByCategoryQuery,
  allServicesQuery,
  allPostsQuery,
} from './queries'
import type {
  SanityHomePage,
  SanityFaq,
  SanityTestimonial,
  SanityProject,
  SanityBenefit,
  SanityService,
  SanityPost,
} from './sanity-types'

// ============================================
// SHARED TYPES (used by both data layer & components)
// ============================================

export interface HeroData {
  badge: string
  heading: string
  subheading: string
  ctaText: string
  ctaLink: string
  image: string
  annualSavings: string
  totalClients: string
}

export interface FaqItem {
  question: string
  answer: string
}

export interface TestimonialItem {
  id: string | number
  name: string
  location: string
  systemSize: string
  rating: number
  quote: string
  video: string
  poster: string
}

export interface ProjectItem {
  id: number | string
  slug: string
  title: string
  category: string
  location: string
  systemSize: string
  type: string
  image: string
  monthlySavings?: string
  yearlySavings?: string
  installationTime: string
  panelType: string
  inverter?: string
  battery: string
  content: string
}

export interface BenefitItem {
  title: string
  description: string
  icon: string
  color: string
}

export interface ServiceItem {
  title: string
  icon: string
}

export interface BlogPostItem {
  id: string
  slug: string
  title: string
  category: string
  description: string
  image: string
  date: string
  author: string
  color: string
}

// ============================================
// FALLBACK DATA
// ============================================

const fallbackHero: HeroData = {
  badge: '#1 Solar Partner in Uttarakhand',
  heading: 'Power Your Home with Free Energy from the Sun',
  subheading: 'Join 500+ happy families in Dehradun who cut their electricity bills by up to 90%. Reliable, affordable, and built for the hills.',
  ctaText: 'Explore Solutions',
  ctaLink: '/#services',
  image: '/images/House.png',
  annualSavings: '₹60,000+',
  totalClients: '500+',
}

const fallbackFaqs: FaqItem[] = [
  { question: 'Is solar really worth it for Indian homes?', answer: 'Yes. With rising electricity prices, solar helps you save up to 70–90% on your monthly bills. It\'s a one-time investment that gives you free power for 25+ years.' },
  { question: 'Will solar panels work during cloudy or rainy days?', answer: 'Yes. Panels still generate electricity during cloudy days, though at a slightly reduced capacity. Uttarakhand\'s climate is suitable for solar production.' },
  { question: 'What happens at night?', answer: 'At night, your home uses grid power. If you choose a battery system, you can use stored solar power even at night.' },
  { question: 'Can I run AC, fridge, TV, and washing machine on solar?', answer: 'Yes. We design systems based on your appliance usage so that all essential devices run smoothly.' },
  { question: 'How much rooftop space do I need?', answer: 'Approximate requirement:1kW = 80–100 sq. ft., 3kW = 250–300 sq. ft., 5kW = 400–500 sq. ft.' },
  { question: 'What is the lifespan of solar panels?', answer: 'High-quality solar panels last 25+ years. Inverters usually last 8–12 years.' },
]

const fallbackTestimonials: TestimonialItem[] = [
  { id: 1, name: 'Ramesh Sharma', location: 'Rajpur Road, Dehradun', systemSize: '5 kW', rating: 5, quote: 'SolarX made the entire process simple and affordable. My electricity bill is almost zero now.', video: '/blog1.mp4', poster: '/images/Testimonial1.png' },
  { id: 2, name: 'Priya Gupta', location: 'Vasant Vihar, Dehradun', systemSize: '3 kW', rating: 5, quote: 'The team explained everything clearly. Very professional installation.', video: '/blog2.mp4', poster: '/images/Testimonial2.png' },
  { id: 3, name: 'Anil Thakur', location: 'Selaqui, Dehradun', systemSize: '10 kW', rating: 5, quote: 'My factory\'s power bill dropped by ₹40,000 per month. Best investment ever.', video: '/blog3.mp4', poster: '/images/Testimonial3.png' },
  { id: 4, name: 'Sunita Rawat', location: 'Mussoorie', systemSize: '4 kW', rating: 5, quote: 'Living off-grid in the hills was a dream. SolarX made it happen.', video: '/blog4.mp4', poster: '/images/Testimonial4.png' },
  { id: 5, name: 'Vikram Singh', location: 'Clement Town, Dehradun', systemSize: '6 kW', rating: 5, quote: 'No more power cuts during summers. My family is very happy with SolarX.', video: '/blog1.mp4', poster: '/images/Testimonial1.png' },
]

// ============================================
// FETCH FUNCTIONS
// ============================================

export async function getHeroData(): Promise<HeroData> {
  try {
    const data: SanityHomePage = await client.fetch(homePageQuery)
    if (data?.heroSection) {
      const h = data.heroSection
      return {
        badge: h.badge || fallbackHero.badge,
        heading: h.heading || fallbackHero.heading,
        subheading: h.subheading || fallbackHero.subheading,
        ctaText: h.ctaText || fallbackHero.ctaText,
        ctaLink: h.ctaLink || fallbackHero.ctaLink,
        image: h.image ? urlFor(h.image).width(1200).height(900).url() : fallbackHero.image,
        annualSavings: h.annualSavings || fallbackHero.annualSavings,
        totalClients: h.totalClients || fallbackHero.totalClients,
      }
    }
  } catch (error) {
    console.error('Error fetching hero data:', error)
  }
  return fallbackHero
}

export async function getFaqs(): Promise<FaqItem[]> {
  try {
    const sanityFaqs: SanityFaq[] = await client.fetch(allFaqsQuery)
    if (sanityFaqs && sanityFaqs.length > 0) {
      return sanityFaqs.map((faq) => ({
        question: faq.question,
        answer: faq.answer,
      }))
    }
  } catch (error) {
    console.error('Error fetching FAQs:', error)
  }
  return fallbackFaqs
}

export async function getTestimonials(): Promise<TestimonialItem[]> {
  try {
    const sanityTestimonials: SanityTestimonial[] = await client.fetch(allTestimonialsQuery)
    if (sanityTestimonials && sanityTestimonials.length > 0) {
      return sanityTestimonials.map((t) => ({
        id: t._id,
        name: t.name,
        location: t.location,
        systemSize: t.systemSize,
        rating: t.rating,
        quote: t.quote,
        video: t.video ? getFileUrl(t.video) : '/blog1.mp4',
        poster: t.poster ? urlFor(t.poster).width(760).height(1000).url() : '/images/Testimonial1.png',
      }))
    }
  } catch (error) {
    console.error('Error fetching testimonials:', error)
  }
  return fallbackTestimonials
}

export async function getProjects(): Promise<ProjectItem[]> {
  try {
    const sanityProjects: SanityProject[] = await client.fetch(allProjectsQuery)
    if (sanityProjects && sanityProjects.length > 0) {
      return sanityProjects.map((p, i) => ({
        id: p._id || i,
        slug: p.slug?.current || `project-${i}`,
        title: p.title,
        category: p.category,
        location: p.location,
        systemSize: p.systemSize,
        type: p.type || p.category,
        image: p.image ? urlFor(p.image).width(1200).height(800).url() : '/images/Panel.png',
        monthlySavings: p.monthlySavings,
        yearlySavings: p.yearlySavings,
        installationTime: p.installationTime,
        panelType: p.panelType,
        inverter: p.inverter,
        battery: p.battery,
        content: '',
      }))
    }
  } catch (error) {
    console.error('Error fetching projects:', error)
  }
  // Import fallback dynamically to avoid bundling in server
  const { projects } = await import('@/components/sections/projects/projectData')
  return projects
}

export async function getBenefits(category?: string): Promise<BenefitItem[]> {
  try {
    let sanityBenefits: SanityBenefit[]
    if (category) {
      sanityBenefits = await client.fetch(benefitsByCategoryQuery, { category })
    } else {
      sanityBenefits = await client.fetch(allBenefitsQuery)
    }
    if (sanityBenefits && sanityBenefits.length > 0) {
      return sanityBenefits.map((b) => ({
        title: b.title,
        description: b.description,
        icon: b.icon,
        color: b.color || 'bg-green-500',
      }))
    }
  } catch (error) {
    console.error('Error fetching benefits:', error)
  }
  return []
}

export async function getServices(): Promise<ServiceItem[]> {
  try {
    const sanityServices: SanityService[] = await client.fetch(allServicesQuery)
    if (sanityServices && sanityServices.length > 0) {
      return sanityServices.map((s) => ({
        title: s.title,
        icon: s.icon,
      }))
    }
  } catch (error) {
    console.error('Error fetching services:', error)
  }
  return []
}

export async function getBlogPosts(): Promise<BlogPostItem[]> {
  try {
    const sanityPosts: SanityPost[] = await client.fetch(allPostsQuery)
    if (sanityPosts && sanityPosts.length > 0) {
      return sanityPosts.map((post) => ({
        id: post._id,
        slug: post.slug.current,
        title: post.title,
        category: post.category,
        description: post.description,
        image: post.image ? urlFor(post.image).width(800).height(600).url() : '/images/Panel.png',
        date: new Date(post.publishedAt).toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
        }),
        author: post.author,
        color: post.color,
      }))
    }
  } catch (error) {
    console.error('Error fetching blog posts:', error)
  }
  return []
}
