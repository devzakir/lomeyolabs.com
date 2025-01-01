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
  const router = useRouter()
  const { admin } = useAdminAuth()

  useEffect(() => {
    if (admin) {
      fetchTicket()
    }
  }, [admin, params.id])

  const fetchTicket = async () => {
    try {
      // Fetch ticket details
      const { data: ticketData, error: ticketError } = await supabaseClient
        .from('tickets')
        .select('*')
        .eq('id', params.id)
        .single()

      if (ticketError) throw ticketError

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
        ticket_messages: messagesData
      }

      console.log('Fetched ticket:', fullTicket)
      setTicket(fullTicket)
      setNewStatus(fullTicket.status)
    } catch (error) {
      console.error('Error fetching ticket:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!newMessage.trim() || !admin) return

    setSending(true)
    try {
      const { error: messageError } = await supabaseClient
        .from('ticket_messages')
        .insert([
          {
            ticket_id: ticket.id,
            user_id: admin.id, // Add the admin's user_id
            message: newMessage,
            is_agent: true
          }
        ])

      if (messageError) throw messageError

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
    <div className="p-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-semibold text-gray-900">Ticket Details</h1>
        <button
          onClick={() => router.back()}
          className="text-gray-600 hover:text-gray-900"
        >
          ← Back to Tickets
        </button>
      </div>

      {/* Ticket Info */}
      <div className="bg-white rounded-lg shadow-sm overflow-hidden">
        <div className="p-6">
          <div className="space-y-6">
            {/* Ticket Header */}
            <div className="border-b pb-4">
              <h2 className="text-xl font-medium text-gray-900 mb-4">
                {ticket.subject}
              </h2>
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">From:</span>
                  <span className="text-sm font-medium text-gray-900">
                    {ticket.profiles?.email}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Priority:</span>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPriorityColor(ticket.priority)}`}>
                    {ticket.priority}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Status:</span>
                  <select
                    value={newStatus}
                    onChange={(e) => handleStatusChange(e.target.value)}
                    className={`px-2 py-1 text-xs font-medium rounded-full border-0 ${getStatusColor(newStatus)}`}
                  >
                    <option value="open">Open</option>
                    <option value="pending">Pending</option>
                    <option value="closed">Closed</option>
                  </select>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-500">Created:</span>
                  <span className="text-sm text-gray-900">
                    {formatDateTime(ticket.created_at)}
                  </span>
                </div>
              </div>
            </div>

            {/* Messages */}
            <div className="space-y-4 max-h-[600px] overflow-y-auto p-4 bg-gray-50 rounded-lg">
              {ticket.ticket_messages?.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.is_agent ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`rounded-lg p-4 max-w-[80%] ${
                    message.is_agent 
                      ? 'bg-primary-100 text-primary-900' 
                      : 'bg-white shadow-sm border border-gray-100'
                  }`}>
                    <p className="text-sm">{message.message}</p>
                    <p className="text-xs text-gray-500 mt-2">
                      {formatDateTime(message.created_at)} • 
                      {message.is_agent ? ' Admin Response' : ' Customer'}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Reply Form */}
            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Reply to Customer
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
              <div className="flex justify-end">
                <button
                  type="submit"
                  disabled={sending || !newMessage.trim()}
                  className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50"
                >
                  {sending ? 'Sending...' : 'Send Response'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
} 