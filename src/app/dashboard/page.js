'use client'

import { useAuth } from '@/contexts/AuthContext'

export default function Dashboard() {
  const { user, logout } = useAuth()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
            <button
              onClick={logout}
              className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700"
            >
              Logout
            </button>
          </div>
          
          <div className="space-y-4">
            <div className="border-b pb-4">
              <h2 className="text-lg font-semibold text-gray-700">Profile Information</h2>
              <div className="mt-2 space-y-2">
                <p><span className="font-medium">Name:</span> {user?.full_name}</p>
                <p><span className="font-medium">Email:</span> {user?.email}</p>
                {user?.company_name && (
                  <p><span className="font-medium">Company:</span> {user?.company_name}</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 