'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { supabaseClient } from '@/lib/supabaseClient'

export default function PurchaseHistory() {
  const { user } = useAuth()
  const [purchases, setPurchases] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchPurchaseHistory()
  }, [user])

  const fetchPurchaseHistory = async () => {
    try {
      if (!user) return

      // First, get all orders for the current user
      const { data: orders, error: ordersError } = await supabaseClient
        .from('orders')
        .select('product_id')
        .eq('user_id', user.id)

      if (ordersError) throw ordersError

      if (!orders?.length) {
        setLoading(false)
        return
      }

      // Extract product IDs from orders
      const productIds = orders.map(order => order.product_id)

      // Fetch product details for all ordered products
      const { data: products, error: productsError } = await supabaseClient
        .from('products')
        .select('id, name, download_url, price')
        .in('id', productIds)

      if (productsError) throw productsError

      setPurchases(products || [])
    } catch (error) {
      console.error('Error fetching purchase history:', error)
    } finally {
      setLoading(false)
    }
  }

  if (loading) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="animate-pulse">
          <div className="h-6 bg-gray-200 rounded w-1/4 mb-4"></div>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-20 bg-gray-100 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  if (!purchases.length) {
    return (
      <div className="bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-semibold mb-4">Purchase History</h2>
        <p className="text-gray-500">You haven't made any purchases yet.</p>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <h2 className="text-xl font-semibold mb-4">Purchase History</h2>
      <div className="space-y-4">
        {purchases.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 flex items-center justify-between hover:bg-gray-50"
          >
            <div>
              <h3 className="font-medium">{product.name}</h3>
              <p className="text-gray-500">
                ${(product.price).toFixed(2)}
              </p>
            </div>
            <a
              href={product.download_url}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              Download
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
