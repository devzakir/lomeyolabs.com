import { Metadata } from 'next'

/**
 * Generates metadata for product pages
 * @param {Object} props - Product metadata properties
 * @param {string} props.name - Product name
 * @param {string} props.description - Product description
 * @param {string} props.slug - Product URL slug
 * @param {string} props.previewUrl - Product preview image URL
 * @param {string} [props.oldSlug] - Optional old product URL for canonical redirect
 * @returns {Object} Metadata object for Next.js
 */
export function generateProductMetadata({
  name,
  description,
  slug,
  previewUrl,
  oldSlug
}) {
  return {
    title: `${name} - Premium Self-Hosted Solution`,
    description,
    alternates: {
      canonical: oldSlug 
        ? `https://templatecookie.com/products/${oldSlug}`
        : `https://lomeyolabs.com/products/${slug}`,
    },
    openGraph: {
      title: name,
      description,
      images: [previewUrl],
      type: 'website',
      url: `https://lomeyolabs.com/products/${slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title: name,
      description,
      images: [previewUrl],
    }
  }
} 