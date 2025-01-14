'use client'

import { useAuth } from '@/contexts/AuthContext'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import AuthGuard from '@/components/AuthGuard'
import { motion } from 'framer-motion'
import { 
  UserCircleIcon,
  ShoppingBagIcon,
  TicketIcon,
  ClockIcon,
  Cog6ToothIcon,
  ArrowLeftOnRectangleIcon
} from '@heroicons/react/24/outline'

export default function DashboardLayout({ children }) {
  const { user, logout } = useAuth()
  const pathname = usePathname()

  const menuItems = [
    { 
      id: 'profile', 
      label: 'Profile', 
      icon: UserCircleIcon, 
      href: '/dashboard',
      description: 'Manage your account details'
    },
    { 
      id: 'orders', 
      label: 'Orders', 
      icon: ShoppingBagIcon, 
      href: '/dashboard/orders',
      description: 'View your order history'
    },
    { 
      id: 'tickets', 
      label: 'Support Tickets', 
      icon: TicketIcon, 
      href: '/dashboard/tickets',
      description: 'Get help with your purchases'
    },
    { 
      id: 'purchase-history', 
      label: 'Purchase History', 
      icon: ClockIcon, 
      href: '/dashboard/purchase-history',
      description: 'Track your purchases'
    },
    { 
      id: 'settings', 
      label: 'Settings', 
      icon: Cog6ToothIcon, 
      href: '/dashboard/settings',
      description: 'Customize your preferences'
    },
  ]

  return (
    <AuthGuard>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Sidebar Navigation */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="lg:w-80 shrink-0"
            >
              <div className="sticky top-8">
                {/* User Profile Card */}
                <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
                  <div className="flex items-center gap-4">
                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-lg font-semibold">
                      {user?.email?.[0].toUpperCase()}
                    </div>
                    <div>
                      <h2 className="font-semibold text-gray-900">Welcome back!</h2>
                      <p className="text-sm text-gray-600">{user?.email}</p>
                    </div>
                  </div>
                </div>

                {/* Navigation Menu */}
                <nav className="bg-white rounded-2xl shadow-sm p-3 space-y-1">
                  {menuItems.map((item) => {
                    const isActive = pathname === item.href
                    return (
                      <Link
                        key={item.id}
                        href={item.href}
                        className={`flex items-center gap-3 p-3 rounded-xl transition-all duration-200 group ${
                          isActive
                            ? 'bg-primary-50 text-primary-600' 
                            : 'hover:bg-gray-50 text-gray-600 hover:text-gray-900'
                        }`}
                      >
                        <item.icon className={`h-5 w-5 ${
                          isActive ? 'text-primary-600' : 'text-gray-400 group-hover:text-gray-600'
                        }`} />
                        <div>
                          <span className="font-medium block">{item.label}</span>
                          <span className="text-xs text-gray-500">{item.description}</span>
                        </div>
                        {isActive && (
                          <motion.div
                            layoutId="activeTab"
                            className="absolute left-0 w-1 h-8 bg-primary-600 rounded-r-full"
                          />
                        )}
                      </Link>
                    )
                  })}
                  
                  {/* Logout Button */}
                  <button
                    onClick={logout}
                    className="w-full flex items-center gap-3 p-3 rounded-xl text-red-600 hover:bg-red-50 transition-colors duration-200 group"
                  >
                    <ArrowLeftOnRectangleIcon className="h-5 w-5 text-red-400 group-hover:text-red-600" />
                    <div>
                      <span className="font-medium block text-left">Logout</span>
                      <span className="text-xs text-gray-500">Sign out of your account</span>
                    </div>
                  </button>
                </nav>
              </div>
            </motion.div>

            {/* Main Content */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex-1 bg-white rounded-2xl shadow-sm p-6"
            >
              {children}
            </motion.div>
          </div>
        </div>
      </div>
    </AuthGuard>
  )
} 