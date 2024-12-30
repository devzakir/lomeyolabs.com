import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextResponse } from 'next/server'

export async function middleware(req) {
  const res = NextResponse.next()
  const supabase = createMiddlewareClient({ req, res })

  const {
    data: { session },
  } = await supabase.auth.getSession()

  const { pathname } = req.nextUrl

  // Protected routes
  const protectedPaths = ['/dashboard']
  
  // Auth routes that logged-in users shouldn't access
  const authPaths = ['/login', '/register']

  if (protectedPaths.some(path => pathname.startsWith(path))) {
    if (!session) {
      return NextResponse.redirect(new URL('/login', req.url))
    }
  }

  if (authPaths.includes(pathname)) {
    if (session) {
      return NextResponse.redirect(new URL('/dashboard', req.url))
    }
  }

  return res
}

export const config = {
  matcher: ['/dashboard/:path*', '/login', '/register']
} 