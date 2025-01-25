import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function POST(request) {
  try {
    // Log the request body for debugging
    const requestData = await request.json()
    console.log('Request data:', {
      ...requestData,
      userId: 'REDACTED', // Don't log sensitive data
      userEmail: 'REDACTED'
    })

    const { 
      productId, 
      productName, 
      price, 
      userId, 
      userEmail,
      variation_type,
      license_type,
      variation_id
    } = requestData

    // Validate required fields
    if (!productId || !price || !userId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    const supabase = createRouteHandlerClient({ cookies })

    // Create Stripe Checkout Session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: `${productName} - ${variation_type?.toUpperCase()} Version`,
              description: license_type ? 
                `${license_type.replace('_', ' ').toUpperCase()} License` : 
                undefined
            },
            unit_amount: Math.round(price * 100), // Convert to cents and ensure integer
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/dashboard/purchases?success=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/products/${productId}`,
    })

    // Create initial order record
    const { error: orderError } = await supabase
      .from('orders')
      .insert({
        user_id: userId,
        product_id: productId,
        amount: price,
        stripe_session_id: session.id,
        status: 'pending',
        payment_status: 'pending',
        variation_type,
        license_type
      })

    if (orderError) {
      console.error('Supabase order creation error:', orderError)
      throw orderError
    }

    return NextResponse.json({ url: session.url })
  } catch (error) {
    console.error('Error creating invoice:', {
      message: error.message,
      name: error.name,
      stack: error.stack
    })
    
    return NextResponse.json(
      { 
        error: 'Failed to create invoice',
        details: process.env.NODE_ENV === 'development' ? error.message : undefined
      },
      { status: 500 }
    )
  }
} 