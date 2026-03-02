import type { MetadataRoute } from 'next'
import { getBlogPosts, getProjects } from '@/lib/data'

// Base URL for the site — update this to your production domain
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.kartiksolar.in'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // ─── Static Pages ───────────────────────────────────────────
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/projects`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/terms-and-conditions`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
    {
      url: `${BASE_URL}/cookies`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 0.3,
    },
  ]

  // ─── Dynamic Blog Pages ─────────────────────────────────────
  let blogPages: MetadataRoute.Sitemap = []
  try {
    const posts = await getBlogPosts()
    blogPages = posts.map((post) => ({
      url: `${BASE_URL}/blogs/${post.slug}`,
      lastModified: post.date ? new Date(post.date) : new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch (error) {
    console.error('Sitemap: failed to fetch blog posts', error)
    // Graceful fallback — only static pages will be in sitemap
  }

  // ─── Dynamic Project Pages ──────────────────────────────────
  let projectPages: MetadataRoute.Sitemap = []
  try {
    const projects = await getProjects()
    projectPages = projects.map((project) => ({
      url: `${BASE_URL}/projects/${project.slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    }))
  } catch (error) {
    console.error('Sitemap: failed to fetch projects', error)
  }

  return [...staticPages, ...blogPages, ...projectPages]
}
