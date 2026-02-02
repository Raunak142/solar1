// GROQ queries for fetching content from Sanity CMS

// ============================================
// PAGE QUERIES
// ============================================

// Home Page
export const homePageQuery = `*[_type == "homePage"][0] {
  heroSection,
  partnersSection,
  aboutSection,
  servicesSection,
  featuresSection,
  benefitsSection,
  projectsSection,
  testimonialsSection,
  faqSection,
  blogSection,
  ctaSection
}`

// About Page
export const aboutPageQuery = `*[_type == "aboutPage"][0] {
  heroSection,
  introSection,
  founderSection,
  differentiatorsSection,
  missionVisionSection,
  trustSection
}`

// Projects Page
export const projectsPageQuery = `*[_type == "projectsPage"][0] {
  heroSection,
  filterSection,
  gridSection
}`

// Blogs Page
export const blogsPageQuery = `*[_type == "blogsPage"][0] {
  heroSection,
  gridSection
}`

// Contact Page
export const contactPageQuery = `*[_type == "contactPage"][0] {
  heroSection,
  contactInfoSection,
  formSection,
  mapSection,
  faqSection
}`

// ============================================
// CONTENT QUERIES
// ============================================

// Blog Posts
export const allPostsQuery = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  category,
  description,
  image,
  publishedAt,
  author,
  color,
  "content": content
}`

export const postBySlugQuery = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  category,
  description,
  image,
  publishedAt,
  author,
  color,
  content
}`

export const postsLimitQuery = `*[_type == "post"] | order(publishedAt desc) [0...$limit] {
  _id,
  title,
  slug,
  category,
  description,
  image,
  publishedAt,
  author,
  color
}`

// Projects
export const allProjectsQuery = `*[_type == "project"] | order(orderRank asc, _createdAt desc) {
  _id,
  title,
  slug,
  category,
  location,
  systemSize,
  type,
  image,
  monthlySavings,
  yearlySavings,
  installationTime,
  panelType,
  inverter,
  battery,
  content
}`

export const projectsByCategoryQuery = `*[_type == "project" && category == $category] | order(orderRank asc, _createdAt desc) {
  _id,
  title,
  slug,
  category,
  location,
  systemSize,
  type,
  image,
  monthlySavings,
  yearlySavings,
  installationTime,
  panelType,
  inverter,
  battery,
  content
}`

export const projectsLimitQuery = `*[_type == "project"] | order(orderRank asc, _createdAt desc) [0...$limit] {
  _id,
  title,
  slug,
  category,
  location,
  systemSize,
  type,
  image,
  monthlySavings,
  yearlySavings,
  installationTime,
  panelType,
  inverter,
  battery
}`

export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0] {
  _id,
  title,
  slug,
  category,
  location,
  systemSize,
  type,
  image,
  monthlySavings,
  yearlySavings,
  installationTime,
  panelType,
  inverter,
  battery,
  content
}`

// Testimonials
export const allTestimonialsQuery = `*[_type == "testimonial"] | order(orderRank asc, _createdAt desc) {
  _id,
  name,
  location,
  systemSize,
  rating,
  quote,
  video,
  poster
}`

// FAQs
export const allFaqsQuery = `*[_type == "faq"] | order(orderRank asc, _createdAt desc) {
  _id,
  question,
  answer
}`

export const faqsLimitQuery = `*[_type == "faq"] | order(orderRank asc, _createdAt desc) [0...$limit] {
  _id,
  question,
  answer
}`

// Benefits
export const allBenefitsQuery = `*[_type == "benefit"] | order(orderRank asc, _createdAt desc) {
  _id,
  title,
  description,
  icon,
  color,
  category
}`

export const benefitsByCategoryQuery = `*[_type == "benefit" && category == $category] | order(orderRank asc, _createdAt desc) {
  _id,
  title,
  description,
  icon,
  color,
  category
}`

// Services
export const allServicesQuery = `*[_type == "service"] | order(orderRank asc, _createdAt desc) {
  _id,
  title,
  description,
  icon
}`

// Site Settings (Legacy - for backward compatibility)
export const siteSettingsQuery = `*[_type == "siteSettings"][0] {
  heroHeading,
  heroSubheading,
  heroBadge,
  heroImage,
  totalClients,
  yearsExperience,
  totalInstallations,
  aboutHeading,
  aboutDescription,
  founderName,
  founderBio,
  founderImage,
  mission,
  vision,
  phone,
  email,
  address,
  whatsappNumber,
  facebookUrl,
  instagramUrl,
  linkedinUrl,
  partners
}`
