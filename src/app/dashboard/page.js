'use client'

import { useAuth } from '@/contexts/AuthContext'
import { motion } from 'framer-motion'
import { 
  EnvelopeIcon, 
  BuildingOfficeIcon,
  PhoneIcon,
  CalendarIcon,
  CheckBadgeIcon,
  ClockIcon
} from '@heroicons/react/24/outline'

export default function Profile() {
  const { user } = useAuth()
  const metadata = user?.user_metadata || {}
  const lastSignIn = new Date(user?.last_sign_in_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
  const joinedDate = new Date(user?.created_at).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-900">Profile Information</h1>
        {/* <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
        >
          Edit Profile
        </motion.button> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Main Profile Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:col-span-2 bg-white rounded-xl shadow-sm overflow-hidden"
        >
          <div className="p-6">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-2xl font-semibold">
                {metadata.full_name?.[0]?.toUpperCase()}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{metadata.full_name}</h2>
                <p className="text-sm text-gray-500">{metadata.company_name}</p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <EnvelopeIcon className="h-5 w-5 text-gray-400" />
                <span>{metadata.email}</span>
                {metadata.email_verified && (
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                    <CheckBadgeIcon className="h-4 w-4 mr-1" />
                    Verified
                  </span>
                )}
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <BuildingOfficeIcon className="h-5 w-5 text-gray-400" />
                <span>{metadata.company_name}</span>
              </div>

              {metadata.phone && (
                <div className="flex items-center gap-3 text-gray-600">
                  <PhoneIcon className="h-5 w-5 text-gray-400" />
                  <span>{metadata.phone}</span>
                </div>
              )}
            </div>
          </div>
        </motion.div>

        {/* Account Details Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-xl shadow-sm overflow-hidden"
        >
          <div className="p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Account Details</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-600">
                <CalendarIcon className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Joined</p>
                  <p className="text-sm text-gray-500">{joinedDate}</p>
                </div>
              </div>

              <div className="flex items-center gap-3 text-gray-600">
                <ClockIcon className="h-5 w-5 text-gray-400" />
                <div>
                  <p className="text-sm font-medium text-gray-900">Last Sign In</p>
                  <p className="text-sm text-gray-500">{lastSignIn}</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Debug Information - Only show in development */}
      {process.env.NODE_ENV === 'development' && (
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-8 p-4 bg-gray-50 rounded-xl"
        >
          <details>
            <summary className="text-sm font-medium text-gray-500 cursor-pointer">Debug Information</summary>
            <pre className="mt-2 text-xs text-gray-600 overflow-auto">
              {JSON.stringify(user, null, 2)}
            </pre>
          </details>
        </motion.div>
      )}
    </div>
  )
} 