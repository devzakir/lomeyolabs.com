'use client'

import { useEffect, useState } from 'react'
import { supabaseClient } from '@/lib/supabaseClient'
import { useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  ShoppingBagIcon, 
  ArrowDownTrayIcon,
  DocumentCheckIcon,
  CheckCircleIcon
} from '@heroicons/react/24/outline'

export default function Orders() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    async function checkAuthAndFetchOrders() {
      try {
        const { data: { session }, error: authError } = await supabaseClient.auth.getSession()

        if (authError || !session) {
          router.push('/login')
          return
        }

        // Fetch orders from Supabase
        const { data, error } = await supabaseClient
          .from('orders')
          .select(`
            *,
            products:product_id (
              name,
              download_url,
              documentation_url
            )
          `)
          .eq('user_id', session.user.id)
          .order('created_at', { ascending: false })

        if (error) throw error

        // Transform data to include product details
        const transformedOrders = data.map(order => ({
          ...order,
          product_name: order.products?.name || 'Unknown Product'
        }))

        setOrders(transformedOrders)
      } catch (error) {
        console.error('Error:', error)
      } finally {
        setLoading(false)
      }
    }

    checkAuthAndFetchOrders()
  }, [router])

  const getStatusColor = (status) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800'
      case 'pending':
        return 'bg-yellow-100 text-yellow-800'
      case 'failed':
        return 'bg-red-100 text-red-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const handleViewInvoice = (order) => {
    if (order.payment_id) {
      window.open(`https://invoice.stripe.com/i/${order.payment_id}`, '_blank')
    }
  }

  const handleDownloadFiles = async (order) => {
    try {
      // Check if URLs exist
      if (!order.products?.download_url) {
        throw new Error('Download URL not found')
      }

      // Track download attempt
      await supabaseClient
        .from('order_downloads')
        .insert([
          {
            order_id: order.id,
            downloaded_at: new Date().toISOString()
          }
        ])

      // Open download URL
      window.open(order.products.download_url, '_blank')
    } catch (error) {
      console.error('Download failed:', error)
      alert('Failed to download files. Please try again or contact support.')
    }
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center justify-center h-40">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Orders</h1>
          <p className="mt-1 text-sm text-gray-500">Manage and download your purchases</p>
        </div>
        <Link href="/products">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-primary-600 bg-primary-50 rounded-lg hover:bg-primary-100"
          >
            <ShoppingBagIcon className="w-4 h-4 mr-2" />
            Browse Products
          </motion.button>
        </Link>
      </div>

      {/* Orders Grid */}
      <div className="grid grid-cols-1 gap-4">
        {orders.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm p-8 text-center">
            <ShoppingBagIcon className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-sm font-medium text-gray-900">No orders</h3>
            <p className="mt-1 text-sm text-gray-500">Get started by browsing our products.</p>
            <div className="mt-6">
              <Link href="/products">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700"
                >
                  Browse Products
                </motion.button>
              </Link>
            </div>
          </div>
        ) : (
          orders.map((order) => (
            <motion.div
              key={order.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="border bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <div className="p-6">
                {/* Product Info Section */}
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <DocumentCheckIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-lg font-semibold text-gray-900 truncate">
                      {order.product_name}
                    </h3>
                    <div className="mt-1 flex items-center gap-3">
                      <span className="text-sm text-gray-500">
                        Order #{order.id}
                      </span>
                      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${getStatusColor(order.status)}`}>
                        <CheckCircleIcon className="h-3.5 w-3.5 mr-1" />
                        {order.status}
                      </span>
                    </div>
                  </div>
                </div>

                {/* License & Support Info */}
                <div className="mt-6 flex flex-col sm:flex-row gap-6">
                  <div className="flex-1 space-y-1">
                    <p className="text-sm text-gray-500">License Type</p>
                    <p className="text-sm font-medium text-gray-900">
                      {order.license_type}
                      <span className="ml-2 text-xs text-gray-500">
                        ({order.downloads} downloads)
                      </span>
                    </p>
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm text-gray-500">Support Until</p>
                    <p className="text-sm font-medium text-gray-900">
                      {new Date(order.support_until).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </p>
                  </div>
                  <div className="flex-1 space-y-1">
                    <p className="text-sm text-gray-500">Amount Paid</p>
                    <p className="text-sm font-medium text-gray-900">
                      ${order.amount}.00
                    </p>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="mt-6 flex items-center justify-end gap-3">
                  {order.payment_id && (
                    <motion.button
                      onClick={() => handleViewInvoice(order)}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-50 rounded-lg hover:bg-gray-100"
                    >
                      <DocumentCheckIcon className="h-4 w-4 mr-2" />
                      View Invoice
                    </motion.button>
                  )}
                  
                  {order.products?.download_url && (
                    <div className="relative">
                      <motion.button
                        onClick={() => handleDownloadFiles(order)}
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700"
                      >
                        <ArrowDownTrayIcon className="h-4 w-4 mr-2" />
                        Download Files
                      </motion.button>
                    </div>
                  )}

                  {order.products?.documentation_url && (
                    <Link 
                      href={order.products.documentation_url}
                      target="_blank"
                      className="text-primary-600 hover:text-primary-700 text-sm font-medium"
                    >
                      View Documentation
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))
        )}
      </div>
    </div>
  )
} 