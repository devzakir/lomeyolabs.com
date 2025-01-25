import { supabaseClient } from '@/lib/supabaseClient'

// Static product routes
const STATIC_PRODUCTS = [
  {
    slug: 'jobpilot',
    priority: 0.9
  },
  {
    slug: 'adlisting',
    priority: 0.9
  },
  {
    slug: 'jugglehire',
    priority: 0.9
  },
  {
    slug: 'schooling',
    priority: 0.9
  }
]

export default async function sitemap() {
  // Get all dynamic products
  const { data: products } = await supabaseClient
    .from('products')
    .select('slug, updated_at')

  // Get all blog posts
  const { data: posts } = await supabaseClient
    .from('blogs')
    .select('slug, updated_at')

  const productUrls = products?.map((product) => ({
    url: `https://lomeyolabs.com/products/${product.slug}`,
    lastModified: product.updated_at,
    changeFrequency: 'weekly',
    priority: 0.8,
  })) || []

  const blogUrls = posts?.map((post) => ({
    url: `https://lomeyolabs.com/blog/${post.slug}`,
    lastModified: post.updated_at,
    changeFrequency: 'weekly',
    priority: 0.7,
  })) || []

  // Add static product routes
  const staticProductUrls = STATIC_PRODUCTS.map(product => ({
    url: `https://lomeyolabs.com/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly',
    priority: product.priority,
  }))

  return [
    {
      url: 'https://lomeyolabs.com',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://lomeyolabs.com/products',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    {
      url: 'https://lomeyolabs.com/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.8,
    },
    {
      url: 'https://lomeyolabs.com/contact',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    ...staticProductUrls,
    ...productUrls,
    ...blogUrls,
  ]
} 