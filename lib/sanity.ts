import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Sanity client configuration
// useCdn: false ensures fresh data during builds (deploys) and in dev mode.
// Next.js ISR handles production caching via revalidate intervals.
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'd2e8myqh',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: false,
})

// Image URL builder helper
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Helper to get file URL from Sanity
export function getFileUrl(ref: any): string {
  if (!ref || !ref.asset) return ''
  
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'd2e8myqh'
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
  
  // Extract the file ID from the reference
  const fileId = ref.asset._ref || ref.asset._id
  
  // Construct the file URL
  return `https://cdn.sanity.io/files/${projectId}/${dataset}/${fileId}`
}
