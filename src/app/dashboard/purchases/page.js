'use client'

import { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { supabaseClient } from '@/lib/supabaseClient'

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
      <div className="my-5 py-5 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold mb-2">Processing your order...</h2>
          <p>Please wait while we confirm your payment.</p>
        </div>
      </div>
    )
  }

  if (status === 'success' && orderDetails) {
    return (
      <div className="max-w-2xl mx-auto my-5 py-5">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center justify-center mb-4">
            <div className="bg-green-100 rounded-full p-2">
              <svg className="h-8 w-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-center text-green-600 mb-4">
            Payment Successful!
          </h2>
          <div className="border-t border-b border-gray-200 py-4 my-4">
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Product:</span>
              <span className="font-medium">{orderDetails.products?.name}</span>
            </div>
            <div className="flex justify-between mb-2">
              <span className="text-gray-600">Amount:</span>
              <span className="font-medium">${orderDetails.amount}</span>
            </div>
            <div className="flex justify-between">
              <span className="text-gray-600">Status:</span>
              <span className="font-medium capitalize">{orderDetails.status}</span>
            </div>
          </div>
          <div className="text-center">
            <a
              href="/dashboard"
              className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              View Dashboard
            </a>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="my-5 py-5 flex items-center justify-center">
      <div className="text-center">
        <h2 className="text-2xl font-semibold mb-2 text-red-600">
          Something went wrong
        </h2>
        <p className="mb-4">We couldn't process your order. Please try again.</p>
        <a
          href="/"
          className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
        >
          Return Home
        </a>
      </div>
    </div>
  )
} 