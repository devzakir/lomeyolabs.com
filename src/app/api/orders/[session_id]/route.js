import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { NextResponse } from 'next/server'
import Stripe from 'stripe'

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY)

export async function GET(request, { params }) {
  try {
    const sessionId = params.session_id
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    
    const supabase = createRouteHandlerClient({ cookies })
    
    // Update the order with payment details
    const { data, error } = await supabase
      .from('orders')
      .update({
        payment_status: session.payment_status,
        payment_id: session.payment_intent,
        stripe_session_id: session.id,
        status: session.payment_status === 'paid' ? 'completed' : 'pending'
      })
      .eq('stripe_session_id', sessionId)
      .select()
      .single()

    if (error) throw error

    return NextResponse.json(data)
  } catch (error) {
    console.error('Error processing order:', error)
    return NextResponse.json({ error: 'Failed to process order' }, { status: 500 })
  }
} 