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
    annualSavingsDescription?: string
    totalClients?: string
    trustLine?: string
  }
  trustPartnersSection?: {
    badge?: string
    heading?: string
    subheading?: string
    partners?: Array<{
      name?: string
      color?: string
    }>
  }
  aboutSection?: {
    badge?: string
    heading?: string
    paragraph1?: string
    paragraph2?: string
    backgroundImage?: SanityImage
  }
  servicesSection?: {
    badge?: string
    heading?: string
    subheading?: string
    benefitCards?: Array<{
      icon?: string
      title?: string
      description?: string
      color?: string
    }>
    serviceItems?: Array<{
      icon?: string
      title?: string
    }>
    ctaHeading?: string
    ctaText?: string
    ctaButtonText?: string
    ctaButtonLink?: string
  }
  featuresSection?: {
    heading?: string
    subheading?: string
    features?: Array<{
      icon?: string
      title?: string
      description?: string
      image?: SanityImage
    }>
  }
  benefitsSection?: {
    badge?: string
    heading?: string
    subheading?: string
    comparisonHeading?: string
    comparisonRows?: Array<{
      feature?: string
      kartikSolar?: string
      traditional?: string
    }>
    trustHeading?: string
    trustItems?: string[]
  }
  projectsSection?: {
    badge?: string
    heading?: string
    subheading?: string
    showCount?: number
    viewAllText?: string
    viewAllLink?: string
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
    viewMoreText?: string
    viewLessText?: string
    bottomText?: string
    ctaButtonText?: string
    ctaButtonLink?: string
  }
  blogSection?: {
    badge?: string
    heading?: string
    subheading?: string
    showCount?: number
    viewAllText?: string
    viewAllLink?: string
  }
  ctaSection?: {
    heading?: string
    subheading?: string
    submitButtonText?: string
    successMessage?: string
    mapLocation?: string
    mapDirectionsText?: string
  }
}

export interface SanityAboutPage {
  heroSection?: {
    badge?: string
    heading?: string
    subheading?: string
    ctaText?: string
    ctaLink?: string
    backgroundImage?: SanityImage
  }
  introSection?: {
    badge?: string
    heading?: string
    paragraph1?: string
    paragraph2?: string
    paragraph3?: string
    paragraph4?: string
    statValue?: string
    statLabel?: string
    highlights?: Array<{
      title?: string
      description?: string
    }>
  }
  founderSection?: {
    label?: string
    heading?: string
    founderName?: string
    founderRole?: string
    image?: SanityImage
    quoteParagraph1?: string
    quoteParagraph2?: string
    closingQuote?: string
  }
  teamSection?: {
    heading?: string
    subheading?: string
    members?: Array<{
      name?: string
      role?: string
      tagline?: string
      image?: SanityImage
    }>
  }
  differentiatorsSection?: {
    badge?: string
    heading?: string
    subheading?: string
    differentiators?: Array<{
      icon?: string
      title?: string
      description?: string
    }>
  }
  missionVisionSection?: {
    sectionBadge?: string
    sectionHeading?: string
    missionHeading?: string
    mission?: string
    visionHeading?: string
    vision?: string
  }
  trustSection?: {
    badge?: string
    heading?: string
    stats?: Array<{
      label?: string
      value?: number
      suffix?: string
      icon?: string
    }>
  }
  ctaSection?: {
    heading?: string
    description?: string
    primaryCtaText?: string
    primaryCtaLink?: string
    secondaryCtaText?: string
    secondaryCtaLink?: string
    footnote?: string
  }
}

export interface SanityProjectsPage {
  heroSection?: {
    headingPart1?: string
    headingHighlight?: string
    subheading?: string
    backgroundImage?: SanityImage
  }
  filterSection?: {
    categories?: Array<{
      id?: string
      label?: string
    }>
  }
  gridSection?: {
    columns?: number
    emptyStateMessage?: string
    featuredProjects?: Array<{
      _ref: string
      _type: 'reference'
    }>
  }
  ctaSection?: {
    heading?: string
    description?: string
    ctaText?: string
    ctaLink?: string
    highlights?: Array<{
      icon?: string
      text?: string
    }>
  }
}

export interface SanityBlogsPage {
  heroSection?: {
    badge?: string
    heading?: string
    headingHighlight?: string
    headingTrailing?: string
    subheading?: string
    viewAllText?: string
    viewAllLink?: string
  }
  gridSection?: {
    postsPerPage?: number
    loadMoreText?: string
    readMoreText?: string
    featuredPosts?: Array<{
      _ref: string
      _type: 'reference'
    }>
  }
}

export interface SanityContactPage {
  heroSection?: {
    badge?: string
    heading?: string
    headingHighlight?: string
    subheading?: string
    backgroundImage?: SanityImage
  }
  formSection?: {
    badge?: string
    heading?: string
    subheading?: string
    sidebarHeading?: string
    sidebarDescription?: string
    contactInfoItems?: Array<{
      icon?: string
      label?: string
      value?: string
      subtext?: string
    }>
    quickStats?: Array<{
      value?: string
      label?: string
    }>
    nameLabel?: string
    emailLabel?: string
    phoneLabel?: string
    cityLabel?: string
    messageLabel?: string
    submitButtonText?: string
    successTitle?: string
    successMessage?: string
    privacyText?: string
  }
  mapSection?: {
    mapEmbedUrl?: string
    locationName?: string
    locationTagline?: string
    address?: string
    addressLine2?: string
    phone?: string
    directionsUrl?: string
    directionsButtonText?: string
    chatButtonText?: string
    mobileHeading?: string
    mobileAddress?: string
    mobilePhoneUrl?: string
  }
  faqSection?: {
    heading?: string
    subheading?: string
    faqs?: Array<{
      question?: string
      answer?: string
    }>
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
  shortDescription?: string
  impactBefore?: string
  impactAfter?: string
  ctaText?: string
  tagline?: string
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

// ============================================
// NEW TYPES — Global Settings, SEO, Legal
// ============================================

export interface SanitySeoFields {
  metaTitle?: string
  metaDescription?: string
  ogTitle?: string
  ogDescription?: string
  ogImage?: SanityImage
  twitterTitle?: string
  twitterDescription?: string
  twitterImage?: SanityImage
  twitterCardType?: 'summary' | 'summary_large_image'
  canonicalUrl?: string
}

export interface SanityGlobalSettings {
  companyName?: string
  phone?: string
  email?: string
  whatsappNumber?: string
  address?: {
    street?: string
    city?: string
    state?: string
    postalCode?: string
    country?: string
  }
  logo?: SanityImage
  favicon?: SanityImage
  facebookUrl?: string
  instagramUrl?: string
  linkedinUrl?: string
  youtubeUrl?: string
  twitterUrl?: string
  // Default SEO
  defaultMetaTitle?: string
  defaultMetaDescription?: string
  defaultOgImage?: SanityImage
  defaultOgTitle?: string
  defaultOgDescription?: string
  defaultTwitterCardType?: string
  defaultTwitterTitle?: string
  defaultTwitterDescription?: string
  defaultTwitterImage?: SanityImage
  defaultCanonicalUrl?: string
}

export interface SanityLegalPage {
  title?: string
  badge?: string
  effectiveDate?: string
  lastUpdated?: string
  content?: SanityBlockContent[]
  seo?: SanitySeoFields
}

export interface SanityFooter {
  brandSection?: {
    logoAlt?: string
    description?: string
    socialLinks?: Array<{
      name?: string
      icon?: string
      url?: string
    }>
  }
  menuSection?: {
    heading?: string
    links?: Array<{
      label?: string
      href?: string
    }>
  }
  solutionsSection?: {
    heading?: string
    links?: Array<{
      label?: string
      href?: string
    }>
  }
  contactSection?: {
    heading?: string
    address?: string
    email?: string
    phone?: string
    phoneUrl?: string
  }
  bottomBar?: {
    copyrightText?: string
    creditText?: string
    creditHighlight?: string
  }
}
