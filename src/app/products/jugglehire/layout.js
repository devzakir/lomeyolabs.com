import { generateProductMetadata } from '@/lib/productMetadata'

export const metadata = generateProductMetadata({
  name: 'JuggleHire - Self-Hosted Recruitment Software',
  description: 'Recruitment software for modern teams, with job posting, 3rd party integrations, email templates, hiring pipeline, candidate screening, interview scheduling, and team collaboration features.',
  slug: 'jugglehire',
  previewUrl: '/products/jugglehire/jugglehire.png',
  oldSlug: 'demo/jugglehire'
})

export default function Layout({ children }) {
  return children
} 