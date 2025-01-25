'use client'

import { useEffect } from 'react'
import { useRouter, usePathname } from 'next/navigation'
import { useAdminAuth } from '@/contexts/AdminAuthContext'

const publicRoutes = ['/admin/login', '/admin/register']

export default function AdminLayout({ children }) {
  const { admin, loading } = useAdminAuth()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    if (!loading) {
      if (!admin && !publicRoutes.includes(pathname)) {
        router.push('/admin/login')
      }
      if (admin && publicRoutes.includes(pathname)) {
        router.push('/admin/tickets')
      }
    }
  }, [admin, loading, pathname, router])

  if (loading) {
    return <div>Loading...</div>
  }

  return children
}

export const metadata = {
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
} 