'use client'

import { useAuth } from '@/contexts/AuthContext'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import AuthGuard from '@/components/AuthGuard'

export default function DashboardLayout({ children }) {
  const { user, logout } = useAuth()
  const pathname = usePathname()

  const menuItems = [
    { id: 'profile', label: 'Profile', icon: '👤', href: '/dashboard' },
    { id: 'orders', label: 'Orders', icon: '📦', href: '/dashboard/orders' },
    { id: 'purchase-history', label: 'Purchase History', icon: '🛍️', href: '/dashboard/purchase-history' },
    { id: 'settings', label: 'Settings', icon: '⚙️', href: '/dashboard/settings' },
  ]

  return (
    <AuthGuard>
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 md:hidden"
            >
              Logout
            </button>
          </div>

          <div className="flex gap-6">
            {/* Sidebar Navigation */}
            <div className="w-64 shrink-0">
              <div className="bg-white rounded-lg shadow-sm p-4">
                <nav className="space-y-2">
                  {menuItems.map((item) => (
                    <Link
                      key={item.id}
                      href={item.href}
                      className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors
                        ${pathname === item.href
                          ? 'bg-blue-50 text-blue-600' 
                          : 'hover:bg-gray-50 text-gray-700'
                        }`}
                    >
                      <span>{item.icon}</span>
                      {item.label}
                    </Link>
                  ))}
                  
                  <button
                    onClick={logout}
                    className="w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors text-red-600 hover:bg-red-50 mt-4 border-t border-gray-100 hidden md:flex"
                  >
                    <span>🚪</span>
                    Logout
                  </button>
                </nav>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex-1">
              {children}
            </div>
          </div>
        </div>
      </div>
    </AuthGuard>
  )
} 