'use client'

import { useAuth } from '@/contexts/AuthContext'

export default function Profile() {
  const { user } = useAuth()

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
} 