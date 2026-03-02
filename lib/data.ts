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
  postBySlugQuery,
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
  annualSavingsDescription: string
  totalClients: string
  trustLine: string
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
  shortDescription?: string
  impactBefore?: string
  impactAfter?: string
  ctaText?: string
  tagline?: string
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
  heading: 'Powering Indian Homes with Smart Solar Energy',
  subheading: 'Switch to reliable, affordable solar solutions designed specially for Indian homes and climate conditions. Kartik Solar Enterprises helps families reduce electricity bills, avoid power cuts, and enjoy long-term energy savings.',
  ctaText: 'Get Free Solar Consultation',
  ctaLink: '/#services',
  image: '/images/House.png',
  annualSavings: '₹50,000 – ₹80,000+',
  annualSavingsDescription: 'depending on usage',
  totalClients: '500+',
  trustLine: 'Trusted by 500+ happy families | Local installation & support | Government subsidy guidance',
}

const fallbackFaqs: FaqItem[] = [
  { question: 'Is solar really worth it for Indian homes?', answer: 'Yes. With rising electricity prices, solar helps homeowners reduce bills by up to 70–90%. It is a long-term investment that provides savings for 25+ years while increasing energy independence.' },
  { question: 'How much can I save every month with solar?', answer: 'Savings depend on your electricity usage and system size, but most households save between ₹2,000–₹6,000 per month after installing solar.' },
  { question: 'Will solar panels work during cloudy or rainy days?', answer: 'Yes. Solar panels still generate electricity during cloudy weather, though output may be slightly lower. Systems are designed to perform efficiently even during monsoon seasons.' },
  { question: 'What happens at night?', answer: 'Solar panels generate electricity during the day. At night, you can use grid power or optional battery backup systems to run essential appliances.' },
  { question: 'Can solar run AC, fridge, TV, and washing machine?', answer: 'Yes. A properly designed system can easily run daily household appliances including ACs, refrigerators, TVs, washing machines, fans, and lights.' },
  { question: 'How much rooftop space is required?', answer: 'On average, a 1 kW solar system needs about 80–100 sq. ft. of shadow-free rooftop area. Our team conducts a site survey to recommend the right setup.' },
  { question: 'How long do solar panels last?', answer: 'High-quality solar panels typically last 25 years or more with minimal performance reduction over time.' },
  { question: 'Do you help with government subsidy and documentation?', answer: 'Yes. Kartik Solar Enterprises provides complete assistance with subsidy applications, documentation, and net metering processes.' },
  { question: 'How long does installation take?', answer: 'Most residential installations are completed within 1–3 days after approvals and material readiness.' },
  { question: 'Do solar panels require regular maintenance?', answer: 'Solar systems require very little maintenance. Occasional cleaning and basic inspection are enough, and our team provides support whenever needed.' },
  { question: 'Will solar panels get damaged in heat, rain, or storms?', answer: 'No. Our systems are designed for Indian climate conditions, including high temperatures, dust, heavy rain, and strong winds common in Uttarakhand.' },
  { question: 'What support do you provide after installation?', answer: 'We provide ongoing service support, warranty assistance, and system guidance to ensure your solar system runs smoothly for years.' },
]

const fallbackTestimonials: TestimonialItem[] = [
  { id: 1, name: 'Vikram Negi', location: 'Clement Town, Dehradun', systemSize: '5 kW', rating: 5, quote: 'Power cuts were a big problem in our area, especially during the summer. Since installing the system with battery backup, our home has run all day smoothly. Installation was quick and very clean.', video: '', poster: '/images/Testimonial1.png' },
  { id: 2, name: 'Sanjay Sharma', location: 'Rajpur Road, Dehradun', systemSize: '7 kW', rating: 5, quote: 'My electricity bill used to cross ₹6,000 every month. After installing solar with Kartik Solar, it has reduced to almost nothing. The team handled everything professionally, including subsidy paperwork. Highly recommended!', video: '', poster: '/images/Testimonial2.png' },
  { id: 3, name: 'Priya Rawat', location: 'Vasant Vihar, Dehradun', systemSize: '3 kW', rating: 5, quote: 'Electricity costs were affecting our business profits. Kartik Solar installed a rooftop system that now powers our refrigerators and lighting during the day. We are saving more than expected every month.', video: '', poster: '/images/Testimonial3.png' },
  { id: 4, name: 'Rajesh Barthwal', location: 'Haridwar', systemSize: '10 kW', rating: 5, quote: 'We wanted to reduce operational costs and stabilise power supply for machinery. The Kartik Solar team designed the perfect system for our factory. The savings and performance have been excellent.', video: '', poster: '/images/Testimonial4.png' },
  { id: 5, name: 'Meenakshi Bisht', location: 'Mussoorie', systemSize: '4 kW', rating: 5, quote: 'Living in the hills means unreliable electricity, but solar changed everything for us. We now have uninterrupted power and zero dependency on diesel generators. Best investment for our home.', video: '', poster: '/images/Testimonial5.png' },
  { id: 6, name: 'Amit Dobhal', location: 'Rishikesh', systemSize: '5 kW', rating: 5, quote: 'The process was seamless and easy to understand from consultation to installation. The team communicated everything and kept every promise. There has been a significant drop in our office electricity expenses.', video: '', poster: '/images/Testimonial6.png' },
]

// ============================================
// FETCH FUNCTIONS
// ============================================

export async function getHeroData(): Promise<HeroData> {
  // TEMPORARY: bypass CMS, use local fallback data directly
  return fallbackHero
}

export async function getFaqs(): Promise<FaqItem[]> {
  try {
    const data: SanityFaq[] = await client.fetch(allFaqsQuery, {})
    if (!data || data.length === 0) return fallbackFaqs
    return data.map((faq) => ({ question: faq.question, answer: faq.answer }))
  } catch (err) {
    console.error('getFaqs error:', err)
    return fallbackFaqs
  }
}

export async function getTestimonials(): Promise<TestimonialItem[]> {
  // Use fallback data directly to ensure the exact 6 realistic testimonials requested are displayed
  // with their unique portraits and quotes.
  return fallbackTestimonials
}

// Slugs of projects that have been removed from the site
const excludedProjectSlugs = [
  'gupta-home',
  'singh-residence',
  'city-care-clinic',
  'modern-honda-showroom',
  'auto-parts-factory',
  'village-clinic',
]

export async function getProjects(): Promise<ProjectItem[]> {
  // TEMPORARY: bypass CMS
  const { projects } = await import('@/components/sections/projects/projectData')
  return projects
}

export async function getBenefits(category?: string): Promise<BenefitItem[]> {
  try {
    const query = category ? benefitsByCategoryQuery : allBenefitsQuery
    const params = category ? { category } : {}
    const data: SanityBenefit[] = await client.fetch(query, params)
    if (!data || data.length === 0) return []
    return data.map((b) => ({
      title: b.title,
      description: b.description,
      icon: b.icon,
      color: b.color,
    }))
  } catch (err) {
    console.error('getBenefits error:', err)
    return []
  }
}

export async function getServices(): Promise<ServiceItem[]> {
  try {
    const data: SanityService[] = await client.fetch(allServicesQuery, {})
    if (!data || data.length === 0) return []
    return data.map((s) => ({ title: s.title, icon: s.icon }))
  } catch (err) {
    console.error('getServices error:', err)
    return []
  }
}

export async function getBlogPosts(): Promise<BlogPostItem[]> {
  const { blogPosts: localPosts } = await import('@/components/sections/blogData')

  // Local data is the source of truth for which blogs to show
  const localBySlug = new Map(localPosts.map((p) => [p.slug, p]))
  const allowedSlugs = new Set(localPosts.map((p) => p.slug))

  try {
    const data: SanityPost[] = await client.fetch(allPostsQuery)
    const seenSlugs = new Set<string>()
    const result: BlogPostItem[] = []

    // Only include CMS posts that also exist in local data
    if (data && data.length > 0) {
      for (const post of data) {
        const slug = post.slug.current
        if (!allowedSlugs.has(slug)) continue // skip CMS-only posts
        if (seenSlugs.has(slug)) continue     // skip duplicates
        seenSlugs.add(slug)

        const localFallback = localBySlug.get(slug)!
        const image = post.image
          ? urlFor(post.image).width(800).url()
          : (localFallback.image || '/images/Panel.png')

        result.push({
          id: post._id,
          slug,
          title: post.title,
          category: post.category,
          description: post.description,
          image,
          date: post.publishedAt
            ? new Date(post.publishedAt).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })
            : localFallback.date,
          author: post.author,
          color: post.color || 'bg-green-600',
        })
      }
    }

    // Add any local posts not found in CMS
    for (const local of localPosts) {
      if (seenSlugs.has(local.slug)) continue
      result.push({
        id: local.id,
        slug: local.slug,
        title: local.title,
        category: local.category,
        description: local.description,
        image: local.image || '/images/Panel.png',
        date: local.date,
        author: local.author,
        color: local.color,
      })
    }

    return result
  } catch (err) {
    console.error('getBlogPosts error:', err)
    return localPosts.map((p) => ({
      id: p.id,
      slug: p.slug,
      title: p.title,
      category: p.category,
      description: p.description,
      image: p.image || '/images/Panel.png',
      date: p.date,
      author: p.author,
      color: p.color,
    }))
  }
}

// ============================================
// BLOG DETAIL (for static generation of /blogs/[slug])
// ============================================

export interface BlogPostDetail {
  id: string
  slug: string
  title: string
  category: string
  description: string
  image: string
  date: string
  author: string
  color: string
  content: string      // HTML content from fallback
  sanityContent: any   // Portable Text content from CMS
}

export async function getAllBlogSlugs(): Promise<string[]> {
  try {
    const data: SanityPost[] = await client.fetch(allPostsQuery)
    const cmsSlugs = data ? data.map((p) => p.slug.current) : []
    // Also include fallback/local blog slugs
    const { blogPosts } = await import('@/components/sections/blogData')
    const localSlugs = blogPosts.map((p) => p.slug)
    // Deduplicate
    return [...new Set([...cmsSlugs, ...localSlugs])]
  } catch {
    const { blogPosts } = await import('@/components/sections/blogData')
    return blogPosts.map((p) => p.slug)
  }
}

export async function getBlogPostBySlug(slug: string): Promise<BlogPostDetail | null> {
  // Try local/fallback data first (matches existing priority)
  const { blogPosts } = await import('@/components/sections/blogData')
  const localPost = blogPosts.find((p) => p.slug === slug)
  if (localPost) {
    return {
      id: localPost.id,
      slug: localPost.slug,
      title: localPost.title,
      category: localPost.category,
      description: localPost.description,
      image: localPost.image,
      date: localPost.date,
      author: localPost.author,
      color: localPost.color,
      content: localPost.content,
      sanityContent: null,
    }
  }

  // Fallback to Sanity CMS
  try {
    const sanityPost: SanityPost = await client.fetch(postBySlugQuery, { slug })
    if (!sanityPost) return null
    return {
      id: sanityPost._id,
      slug: sanityPost.slug.current,
      title: sanityPost.title,
      category: sanityPost.category,
      description: sanityPost.description,
      image: sanityPost.image ? urlFor(sanityPost.image).width(1200).height(800).url() : '/images/Panel.png',
      date: new Date(sanityPost.publishedAt).toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      author: sanityPost.author,
      color: sanityPost.color || 'bg-green-600',
      content: '',
      sanityContent: sanityPost.content,
    }
  } catch (err) {
    console.error('getBlogPostBySlug error:', err)
    return null
  }
}
