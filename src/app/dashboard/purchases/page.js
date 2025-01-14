'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { supabaseClient } from '@/lib/supabaseClient'
import { motion } from 'framer-motion'
import { 
  CheckCircleIcon, 
  XCircleIcon, 
  ArrowDownTrayIcon,
  ClockIcon,
  DocumentTextIcon,
  ArrowLeftIcon
} from '@heroicons/react/24/outline'
import Link from 'next/link'

export default function PurchasesPage() {
  const [status, setStatus] = useState('loading')
  const [orderDetails, setOrderDetails] = useState(null)
  const searchParams = useSearchParams()
  
  useEffect(() => {
    const sessionId = searchParams.get('session_id')
    const success = searchParams.get('success')

    if (success && sessionId) {
      // First update the order status via our API
      fetch(`/api/orders/${sessionId}`)
        .then(res => res.json())
        .then(async (data) => {
          if (data.error) {
            setStatus('error')
          } else {
            // Then fetch the complete order details including product info
            const { data: orderData, error } = await supabaseClient
              .from('orders')
              .select(`
                *,
                products:product_id (
                  name,
                  description
                )
              `)
              .eq('stripe_session_id', sessionId)
              .single()

            if (error) {
              setStatus('error')
            } else {
              setOrderDetails(orderData)
              setStatus('success')
            }
          }
        })
        .catch(() => setStatus('error'))
    } else {
      setStatus('error')
    }
  }, [searchParams])

  if (status === 'loading') {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center"
        >
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600 mx-auto mb-4"></div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Processing your order...</h2>
          <p className="text-gray-500">Please wait while we confirm your payment</p>
        </motion.div>
      </div>
    )
  }

  if (status === 'success' && orderDetails) {
    return (
      <div className="max-w-3xl mx-auto py-8 px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-xl shadow-sm overflow-hidden"
        >
          {/* Success Header */}
          <div className="bg-green-50 p-6 sm:p-8 text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2 }}
              className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100"
            >
              <CheckCircleIcon className="h-8 w-8 text-green-600" />
            </motion.div>
            <h1 className="mt-4 text-2xl font-bold text-gray-900">Payment Successful!</h1>
            <p className="mt-2 text-sm text-gray-500">
              Thank you for your purchase. Your order has been confirmed.
            </p>
          </div>

          {/* Order Details */}
          <div className="p-6 sm:p-8">
            <div className="space-y-6">
              {/* Product Info */}
              <div className="bg-gray-50 rounded-lg p-4">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-primary-50 flex items-center justify-center flex-shrink-0">
                    <DocumentTextIcon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900">{orderDetails.products?.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{orderDetails.products?.description}</p>
                  </div>
                </div>
              </div>

              {/* Order Summary */}
              <div className="border rounded-lg divide-y">
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Order ID</span>
                    <span className="font-medium">#{orderDetails.id}</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Amount Paid</span>
                    <span className="font-medium">${orderDetails.amount}.00</span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Status</span>
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      {orderDetails.status}
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Purchase Date</span>
                    <span className="font-medium">
                      {new Date(orderDetails.created_at).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6">
                <Link 
                  href="/dashboard/orders"
                  className="flex-1"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-primary-600 bg-primary-50 rounded-lg hover:bg-primary-100"
                  >
                    <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                    Download Files
                  </motion.button>
                </Link>
                <Link 
                  href="/dashboard"
                  className="flex-1"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full inline-flex items-center justify-center px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
                  >
                    <ArrowLeftIcon className="h-5 w-5 mr-2" />
                    Go to Dashboard
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center px-4"
      >
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-red-100 mb-4">
          <XCircleIcon className="h-8 w-8 text-red-600" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Something went wrong
        </h2>
        <p className="text-gray-500 mb-6">We couldn't process your order. Please try again.</p>
        <Link href="/">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700"
          >
            Return Home
          </motion.button>
        </Link>
      </motion.div>
    </div>
  )
} 