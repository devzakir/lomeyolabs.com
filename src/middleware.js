import { NextResponse } from 'next/server'

// List of allowed static product slugs
const STATIC_PRODUCTS = [
  'jobpilot',
  'adlisting',
  'jugglehire',
  'schooling'
]

export async function middleware(req) {
  const { pathname } = req.nextUrl

  // Handle /products page
  if (pathname === '/products') {
    return NextResponse.redirect(new URL('/', req.url))
  }

  // Handle dynamic product pages
  if (pathname.startsWith('/products/')) {
    const slug = pathname.split('/')[2] // Get the slug from the URL

    // Allow access only to static product pages
    if (!STATIC_PRODUCTS.includes(slug)) {
      return NextResponse.redirect(new URL('/', req.url))
    }
  }

  return NextResponse.next()
}

export const config = {
  matcher: [
    // Match product routes for access control
    '/products/:path*',
    // Match products index page
    '/products'
  ]
} 