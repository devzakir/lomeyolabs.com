import { generateProductMetadata } from '@/lib/productMetadata'

export const metadata = generateProductMetadata({
  name: 'Jobpilot - Self-Hosted Job Board PHP Script',
  description: 'Complete job board solution with advanced job search, job listing, candidate profiles, candidate user panel, employer user panel, admin panel, and employer management. 8+ payment gateways supported.',
  slug: 'jobpilot',
  previewUrl: '/products/jobpilot/jobpilot.png',
  oldSlug: 'demo/jobpilot-job-portal-script-php-laravel'
})

export default function Layout({ children }) {
  return children
} 