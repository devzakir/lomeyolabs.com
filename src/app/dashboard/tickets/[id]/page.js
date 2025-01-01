'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { supabaseClient } from '@/lib/supabaseClient'
import { useAuth } from '@/contexts/AuthContext'

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

export default function TicketDetailPage({ params }) {
  const [ticket, setTicket] = useState(null)
  const [newMessage, setNewMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const { user } = useAuth()

  useEffect(() => {
    fetchTicket()
  }, [params.id])

  const fetchTicket = async () => {
    try {
      const { data, error } = await supabaseClient
        .from('tickets')
        .select(`
          *,
          ticket_messages (
            id,
            message,
            created_at,
            is_agent,
            user_id
          )
        `)
        .eq('id', params.id)
        .single()

      if (error) throw error
      setTicket(data)
    } catch (error) {
      console.error('Error fetching ticket:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleSendMessage = async (e) => {
    e.preventDefault()
    if (!newMessage.trim()) return

    setSending(true)
    try {
      const { error } = await supabaseClient
        .from('ticket_messages')
        .insert([
          {
            ticket_id: ticket.id,
            user_id: user.id,
            message: newMessage,
            is_agent: false
          }
        ])

      if (error) throw error

      setNewMessage('')
      fetchTicket()
    } catch (error) {
      console.error('Error sending message:', error)
    } finally {
      setSending(false)
    }
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'open': return 'bg-green-100 text-green-800'
      case 'closed': return 'bg-gray-100 text-gray-800'
      case 'pending': return 'bg-yellow-100 text-yellow-800'
      default: return 'bg-gray-100 text-gray-800'
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
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/2"></div>
          <div className="h-4 bg-gray-200 rounded w-3/4"></div>
        </div>
      </div>
    )
  }

  if (!ticket) {
    return (
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <p className="text-gray-500 text-center">Ticket not found</p>
      </div>
    )
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Ticket Details</h2>
        <button
          onClick={() => router.back()}
          className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
        >
          ← Back
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="space-y-6">
          {/* Ticket Header */}
          <div className="border-b pb-4">
            <h3 className="text-lg font-medium text-gray-900 mb-2">{ticket.subject}</h3>
            <div className="flex gap-3">
              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(ticket.status)}`}>
                {ticket.status}
              </span>
              <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${getPriorityColor(ticket.priority)}`}>
                {ticket.priority}
              </span>
            </div>
          </div>

          {/* Messages */}
          <div className="space-y-4 max-h-[600px] overflow-y-auto p-4 border rounded-lg">
            {ticket.ticket_messages?.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.is_agent ? 'justify-start' : 'justify-end'}`}
              >
                <div className={`rounded-lg p-3 max-w-[80%] ${
                  message.is_agent ? 'bg-gray-100' : 'bg-primary-100'
                }`}>
                  <p className="text-sm">{message.message}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    {formatDateTime(message.created_at)}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Message Input */}
          <form onSubmit={handleSendMessage} className="flex gap-2">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:border-primary-500 focus:outline-none focus:ring-primary-500"
            />
            <button
              type="submit"
              disabled={sending || !newMessage.trim()}
              className="px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:opacity-50"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  )
} 