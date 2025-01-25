import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

// List of allowed static product slugs
const STATIC_PRODUCTS = [
  'jobpilot',
  'adlisting',
  'jugglehire',
  'schooling'
]

export async function middleware(req) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const { pathname } = req.nextUrl

  // Handle authentication for dashboard routes
  if (!session && pathname.startsWith('/dashboard')) {
    const redirectUrl = new URL('/auth/login', req.url)
    return NextResponse.redirect(redirectUrl)
  }

  // Handle /products page
  if (pathname === '/products') {
    // Redirect to home page since products page isn't ready
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

  return res
}

export const config = {
  matcher: [
    // Match dashboard routes for auth protection
    '/dashboard/:path*',
    // Match product routes for access control
    '/products/:path*',
    // Match products index page
    '/products'
  ]
} 