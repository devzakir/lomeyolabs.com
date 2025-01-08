'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabaseClient } from '@/lib/supabaseClient'
import { useAdminAuth } from '@/contexts/AdminAuthContext'

const formatDateTime = (dateString) => {
  const date = new Date(dateString)
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const ampm = hours >= 12 ? 'PM' : 'AM'
  const formattedHours = hours % 12 || 12
  const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes

  return `${months[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()} ${formattedHours}:${formattedMinutes} ${ampm}`
}

export default function AdminTicketDetail({ params }) {
  const [ticket, setTicket] = useState(null)
  const [newMessage, setNewMessage] = useState('')
  const [newStatus, setNewStatus] = useState('')
  const [sending, setSending] = useState(false)
  const [loading, setLoading] = useState(true)
  const [userEmail, setUserEmail] = useState(null)
  const router = useRouter()
  const { admin } = useAdminAuth()

  useEffect(() => {
    if (admin) {
      fetchTicket()
    }
  }, [admin, params.id])

  const fetchTicket = async () => {
    try {
      // First get ticket details
      const { data: ticketData, error: ticketError } = await supabaseClient
        .from('tickets')
        .select('*')
        .eq('id', params.id)
        .single()

      if (ticketError) throw ticketError

      // Get user email from profiles table
      const { data: profileData, error: profileError } = await supabaseClient
        .from('profiles')
        .select('email')
        .eq('id', ticketData.user_id)
        .single()

      if (profileError) {
      } else {        
        setUserEmail(profileData?.email)
      }

      // Fetch messages separately
      const { data: messagesData, error: messagesError } = await supabaseClient
        .from('ticket_messages')
        .select('*')
        .eq('ticket_id', params.id)
        .order('created_at', { ascending: true })

      if (messagesError) throw messagesError

      // Combine the data
      const fullTicket = {
        ...ticketData,
        ticket_messages: messagesData,
        user_email: profileData?.email // Add user email to ticket object
      }

      setTicket(fullTicket)
      setNewStatus(fullTicket.status)
    } catch (error) {
    } finally {
      setLoading(false)
    }
  }

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!newMessage.trim() || !admin) return

    setSending(true)
    try {
      // First create the message in database (your existing code)
      const { error: messageError } = await supabaseClient
        .from('ticket_messages')
        .insert([
          {
            ticket_id: ticket.id,
            user_id: admin.id,
            message: newMessage,
            is_agent: true
          }
        ])

      if (messageError) throw messageError

      // Then send email notification if we have user's email
      if (userEmail) {
        try {
          const response = await fetch('/api/tickets/send-email', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              ticketId: ticket.id,
              message: newMessage,
              userEmail: userEmail
            }),
          })

          if (!response.ok) {
            console.error('Failed to send email notification')
          }
        } catch (emailError) {
          console.error('Error sending email:', emailError)
          // Continue execution even if email fails
        }
      }

      setNewMessage('')
      fetchTicket()
    } catch (error) {
      console.error('Error sending message:', error)
    } finally {
      setSending(false)
    }
  }

  const handleStatusChange = async (status) => {
    if (!admin) return

    try {
      const { error } = await supabaseClient
        .from('tickets')
        .update({
          status,
          updated_at: new Date().toISOString()
        })
        .eq('id', ticket.id)

      if (error) throw error

      setNewStatus(status)
      fetchTicket()
    } catch (error) {
      console.error('Error updating status:', error)
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'open': return 'bg-green-100 text-green-800 ring-green-600/20'
      case 'closed': return 'bg-gray-100 text-gray-800 ring-gray-600/20'
      case 'pending': return 'bg-yellow-100 text-yellow-800 ring-yellow-600/20'
      default: return 'bg-gray-100 text-gray-800 ring-gray-600/20'
    }
  }

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'urgent': return 'bg-red-100 text-red-800'
      case 'high': return 'bg-orange-100 text-orange-800'
      case 'normal': return 'bg-blue-100 text-blue-800'
      case 'low': return 'bg-green-100 text-green-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  if (loading) {
    return (
      <div className="p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-gray-200 rounded w-1/4"></div>
          <div className="space-y-3">
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!ticket) {
    return (
      <div className="p-6">
        <div className="bg-white rounded-lg p-6 text-center text-gray-500">
          Ticket not found
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-full">
      <div className="py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-900">Ticket #{params.id}</h1>
            <button
              onClick={() => router.back()}
              className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
            >
              ← Back to Tickets
            </button>
          </div>

          <div className="mt-6 space-y-6">
            {/* Ticket Information Card */}
            <div className="overflow-hidden bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
              <div className="px-4 py-5 sm:p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  {ticket?.subject}
                </h2>

                <dl className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Status</dt>
                    <dd className="mt-1">
                      <select
                        value={newStatus}
                        onChange={(e) => handleStatusChange(e.target.value)}
                        className={`mt-1 block w-full rounded-md border-0 py-1.5 pl-3 pr-10 text-gray-900 ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-primary-600 sm:text-sm sm:leading-6`}
                      >
                        <option value="open">Open</option>
                        <option value="pending">Pending</option>
                        <option value="closed">Closed</option>
                      </select>
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Created</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {formatDateTime(ticket?.created_at)}
                    </dd>
                  </div>
                  <div>
                    <dt className="text-sm font-medium text-gray-500">Customer</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {ticket?.profiles?.email}
                    </dd>
                  </div>
                </dl>
              </div>
            </div>

            {/* Messages Section */}
            <div className="bg-white shadow-sm ring-1 ring-gray-900/5 sm:rounded-xl">
              <div className="p-4 sm:p-6">
                <h3 className="text-lg font-medium text-gray-900 mb-4">Conversation</h3>
                <div className="space-y-4 max-h-[600px] overflow-y-auto p-4 bg-gray-50 rounded-lg">
                  {ticket?.ticket_messages?.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.is_agent ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`rounded-lg p-4 max-w-[80%] ${message.is_agent
                          ? 'bg-primary-600 text-white'
                          : 'bg-white shadow-sm border border-gray-200'
                        }`}>
                        <p className="text-sm">{message.message}</p>
                        <p className={`text-xs mt-2 ${message.is_agent ? 'text-primary-100' : 'text-gray-500'}`}>
                          {formatDateTime(message.created_at)} •
                          {message.is_agent ? ' Admin Response' : ' Customer'}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Reply Form */}
                <form onSubmit={handleSendMessage} className="mt-6">
                  <div>
                    <label htmlFor="message" className="sr-only">
                      Reply to customer
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      value={newMessage}
                      onChange={(e) => setNewMessage(e.target.value)}
                      className="block w-full rounded-lg border-gray-300 shadow-sm focus:border-primary-500 focus:ring-primary-500"
                      placeholder="Type your response..."
                    />
                  </div>
                  <div className="mt-4 flex justify-end">
                    <button
                      type="submit"
                      disabled={sending || !newMessage.trim()}
                      className="inline-flex items-center rounded-md bg-primary-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary-600 disabled:opacity-50"
                    >
                      {sending ? 'Sending...' : 'Send Response'}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
} 