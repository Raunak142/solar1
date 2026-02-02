// Type definitions for Sanity CMS content

export interface SanityImage {
  _type: 'image'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface SanityFile {
  _type: 'file'
  asset: {
    _ref: string
    _type: 'reference'
  }
}

export interface SanityBlockContent {
  _type: 'block'
  children: Array<{
    _type: 'span'
    text: string
    marks?: string[]
  }>
  style?: string
  listItem?: string
}

// ============================================
// PAGE TYPES
// ============================================

export interface SanityHomePage {
  heroSection?: {
    badge?: string
    heading?: string
    subheading?: string
    ctaText?: string
    ctaLink?: string
    image?: SanityImage
    annualSavings?: string
    totalClients?: string
  }
  partnersSection?: {
    partners?: Array<{
      name: string
      logo: SanityImage
    }>
  }
  aboutSection?: {
    heading?: string
    description?: SanityBlockContent[]
    image?: SanityImage
  }
  servicesSection?: {
    badge?: string
    heading?: string
    subheading?: string
    problemStatement?: string
    benefitsHeading?: string
    servicesHeading?: string
    ctaHeading?: string
    ctaText?: string
    ctaButtonText?: string
  }
  featuresSection?: {
    enabled?: boolean
    heading?: string
    subheading?: string
  }
  benefitsSection?: {
    badge?: string
    heading?: string
    subheading?: string
  }
  projectsSection?: {
    heading?: string
    subheading?: string
    showCount?: number
  }
  testimonialsSection?: {
    badge?: string
    heading?: string
    subheading?: string
  }
  faqSection?: {
    badge?: string
    heading?: string
    showInitially?: number
    bottomText?: string
    ctaButtonText?: string
  }
  blogSection?: {
    badge?: string
    heading?: string
    subheading?: string
    showCount?: number
  }
  ctaSection?: {
    heading?: string
    description?: string
    buttonText?: string
    buttonLink?: string
  }
}

export interface SanityAboutPage {
  heroSection?: {
    heading?: string
    subheading?: string
    backgroundImage?: SanityImage
  }
  introSection?: {
    badge?: string
    heading?: string
    description?: SanityBlockContent[]
  }
  founderSection?: {
    label?: string
    heading?: string
    founderName?: string
    bio?: SanityBlockContent[]
    image?: SanityImage
    yearsExperience?: string
  }
  differentiatorsSection?: {
    heading?: string
    subheading?: string
    differentiators?: Array<{
      icon: string
      title: string
      description: string
    }>
  }
  missionVisionSection?: {
    missionHeading?: string
    mission?: string
    visionHeading?: string
    vision?: string
  }
  trustSection?: {
    yearsExperience?: string
    happyClients?: string
    installations?: string
    support?: string
  }
}

export interface SanityProjectsPage {
  heroSection?: {
    heading?: string
    subheading?: string
    backgroundImage?: SanityImage
  }
  filterSection?: {
    allProjectsLabel?: string
    residentialLabel?: string
    commercialLabel?: string
    industrialLabel?: string
    offgridLabel?: string
  }
  gridSection?: {
    emptyStateMessage?: string
  }
}

export interface SanityBlogsPage {
  heroSection?: {
    badge?: string
    heading?: string
    subheading?: string
  }
  gridSection?: {
    postsPerPage?: number
    loadMoreText?: string
  }
}

export interface SanityContactPage {
  heroSection?: {
    heading?: string
    subheading?: string
    backgroundImage?: SanityImage
  }
  contactInfoSection?: {
    phone?: string
    email?: string
    address?: string
    whatsappNumber?: string
    facebookUrl?: string
    instagramUrl?: string
    linkedinUrl?: string
  }
  formSection?: {
    heading?: string
    subheading?: string
    nameLabel?: string
    emailLabel?: string
    phoneLabel?: string
    messageLabel?: string
    submitButtonText?: string
    successMessage?: string
  }
  mapSection?: {
    enabled?: boolean
    latitude?: number
    longitude?: number
    mapEmbedUrl?: string
  }
  faqSection?: {
    enabled?: boolean
    heading?: string
    showCount?: number
  }
}

// ============================================
// CONTENT TYPES
// ============================================

// Blog Post from Sanity
export interface SanityPost {
  _id: string
  title: string
  slug: {
    current: string
  }
  category: string
  description: string
  image: SanityImage
  publishedAt: string
  author: string
  color: string
  content: SanityBlockContent[]
}

// Project from Sanity
export interface SanityProject {
  _id: string
  title: string
  slug: {
    current: string
  }
  category: 'residential' | 'commercial' | 'industrial' | 'offgrid'
  location: string
  systemSize: string
  type: string
  image: SanityImage
  monthlySavings?: string
  yearlySavings?: string
  installationTime: string
  panelType: string
  inverter?: string
  battery: string
  content: SanityBlockContent[]
}

// Testimonial from Sanity
export interface SanityTestimonial {
  _id: string
  name: string
  location: string
  systemSize: string
  rating: number
  quote: string
  video: SanityFile
  poster: SanityImage
}

// FAQ from Sanity
export interface SanityFaq {
  _id: string
  question: string
  answer: string
}

// Benefit from Sanity
export interface SanityBenefit {
  _id: string
  title: string
  description: string
  icon: string
  color: string
  category: 'service' | 'general'
}

// Service from Sanity
export interface SanityService {
  _id: string
  title: string
  description?: string
  icon: string
}

// Site Settings from Sanity (Legacy)
export interface SanitySiteSettings {
  heroHeading?: string
  heroSubheading?: string
  heroBadge?: string
  heroImage?: SanityImage
  totalClients?: string
  yearsExperience?: string
  totalInstallations?: string
  aboutHeading?: string
  aboutDescription?: SanityBlockContent[]
  founderName?: string
  founderBio?: SanityBlockContent[]
  founderImage?: SanityImage
  mission?: string
  vision?: string
  phone?: string
  email?: string
  address?: string
  whatsappNumber?: string
  facebookUrl?: string
  instagramUrl?: string
  linkedinUrl?: string
  partners?: Array<{
    name: string
    logo: SanityImage
  }>
}
