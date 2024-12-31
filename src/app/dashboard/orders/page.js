'use client'

export default function Orders() {
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
} 