import { generateProductMetadata } from '@/lib/productMetadata'

export const metadata = generateProductMetadata({
  name: 'AdListing - Self-Hosted Classified Listing PHP Script',
  description: 'Feature-rich classified ads platform with advanced location features, custom fields, admin panel, and subscription management. Build your own marketplace.',
  slug: 'adlisting',
  previewUrl: '/products/adlisting/adlisting.png',
  oldSlug: 'demo/adlisting-classified-ads-script'
})

export default function Layout({ children }) {
  return children
} 