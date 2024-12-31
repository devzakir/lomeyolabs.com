'use client'

export default function Settings() {
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
} 