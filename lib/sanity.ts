import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

// Sanity client configuration
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '2j8u7yxd',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01',
  useCdn: true, // Use CDN for faster reads
})

// Image URL builder helper
const builder = imageUrlBuilder(client)

export function urlFor(source: any) {
  return builder.image(source)
}

// Helper to get file URL from Sanity
export function getFileUrl(ref: any): string {
  if (!ref || !ref.asset) return ''
  
  const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '2j8u7yxd'
  const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'
  
  // Extract the file ID from the reference
  const fileId = ref.asset._ref || ref.asset._id
  
  // Construct the file URL
  return `https://cdn.sanity.io/files/${projectId}/${dataset}/${fileId}`
}
