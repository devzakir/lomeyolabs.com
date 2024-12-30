'use client'

import { useAuth } from '@/contexts/AuthContext'
import { useState } from 'react'

export default function Dashboard() {
  const { user, logout } = useAuth()
  const [activeTab, setActiveTab] = useState('profile')

  const menuItems = [
    { id: 'profile', label: 'Profile', icon: '👤' },
    { id: 'orders', label: 'Orders', icon: '📦' },
    { id: 'purchase-history', label: 'Purchase History', icon: '🛍️' },
    { id: 'settings', label: 'Settings', icon: '⚙️' },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 'profile':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Profile Information</h2>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="space-y-3">
                <p><span className="font-medium">Name:</span> {user?.full_name}</p>
                <p><span className="font-medium">Email:</span> {user?.email}</p>
                {user?.company_name && (
                  <p><span className="font-medium">Company:</span> {user?.company_name}</p>
                )}
              </div>
            </div>
          </div>
        )
      case 'orders':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Recent Orders</h2>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-gray-500 text-center py-8">
                No orders found
              </div>
            </div>
          </div>
        )
      case 'purchase-history':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Purchase History</h2>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="text-gray-500 text-center py-8">
                Your purchase history will appear here
              </div>
            </div>
          </div>
        )
      case 'settings':
        return (
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800">Account Settings</h2>
            <div className="bg-white rounded-lg p-6 shadow-sm">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="font-medium">Email Notifications</span>
                  <button className="px-3 py-1 text-sm border rounded-full">
                    Manage
                  </button>
                </div>
                <div className="flex items-center justify-between">
                  <span className="font-medium">Password</span>
                  <button className="px-3 py-1 text-sm border rounded-full">
                    Change
                  </button>
                </div>
              </div>
            </div>
          </div>
        )
      default:
        return null
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <button
            onClick={logout}
            className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
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
                  <button
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg flex items-center gap-3 transition-colors
                      ${activeTab === item.id 
                        ? 'bg-blue-50 text-blue-600' 
                        : 'hover:bg-gray-50 text-gray-700'
                      }`}
                  >
                    <span>{item.icon}</span>
                    {item.label}
                  </button>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {renderContent()}
          </div>
        </div>
      </div>
    </div>
  )
} 