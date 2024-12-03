import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the pathname from the request URL
  const path = request.nextUrl.pathname

  // If already on the recruitx page, allow the request
  if (path === '/products/recruitx') {
    return NextResponse.next()
  }

  // Redirect all other paths to recruitx page
  return NextResponse.redirect(new URL('/products/recruitx', request.url))
}

export const config = {
  // Specify which paths the middleware should run on
  matcher: [
    // Match all paths except static files, api routes, and the recruitx page
    '/((?!api|_next/static|_next/image|favicon.ico|products/recruitx).*)',
  ],
} 