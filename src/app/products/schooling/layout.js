import { generateProductMetadata } from '@/lib/productMetadata'

export const metadata = generateProductMetadata({
  name: 'Schooling - Self-Hosted School Management System',
  description: 'Complete school management system with student information system, attendance tracking, grade management, and parent portal.',
  slug: 'schooling',
  previewUrl: '/products/schooling/schooling.png',
  oldSlug: 'demo/schooling-school-management-system-script'
})

export default function Layout({ children }) {
  return children
} 