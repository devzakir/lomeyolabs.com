import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  return NextResponse.next()

  // Get the pathname from the request URL
  const path = request.nextUrl.pathname

  // Allow access to the recruitx page and public assets
  if (
    path === '/products/recruitx' || 
    path.startsWith('/_next') ||
    path.startsWith('/api') ||
    path.startsWith('/public') ||
    path.includes('.') // Allow all files with extensions (images, css, js, etc.)
  ) {
    return NextResponse.next()
  }

  // Redirect all other paths to recruitx page
  return NextResponse.redirect(new URL('/products/recruitx', request.url))
}

export const config = {
  // Specify which paths the middleware should run on
  matcher: [
    // Match all paths except static files and api routes
    '/((?!_next/static|_next/image|favicon.ico).*)',
  ],
} 