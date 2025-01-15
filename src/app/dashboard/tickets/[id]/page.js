'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { supabaseClient } from '@/lib/supabaseClient'
import { useAuth } from '@/contexts/AuthContext'
import { motion } from 'framer-motion'
import {
  ArrowLeft,
  Clock,
  MessageCircle,
  CheckCircle,
  AlertCircle,
  Plus,
  Send
} from 'lucide-react'

const formatDateTime = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  })
}

export default function TicketDetailPage({ params }) {
  const [ticket, setTicket] = useState(null)
  const [newMessage, setNewMessage] = useState('')
  const [sending, setSending] = useState(false)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const { user } = useAuth()

  const fetchTicket = useCallback(async () => {
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
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }, [params.id])

  useEffect(() => {
    fetchTicket();
  }, [fetchTicket])

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
      console.error('Error:', error)
    } finally {
      setSending(false)
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'open':
        return <Clock className="w-5 h-5 text-yellow-500" />
      case 'in_progress':
        return <MessageCircle className="w-5 h-5 text-blue-500" />
      case 'closed':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      default:
        return <AlertCircle className="w-5 h-5 text-gray-500" />
    }
  }

  const dummyTicket = {
    id: 'TIK-001',
    subject: 'Cannot access account',
    category: 'Account Access',
    status: 'in_progress',
    priority: 'high',
    created: '2024-12-28',
    lastUpdate: '2024-12-29',
    messages: [
      {
        id: 1,
        sender: 'John Doe',
        role: 'user',
        content: 'I cannot log into my account. It keeps saying "invalid credentials" even though I\'m sure my password is correct.',
        timestamp: '2024-12-28 09:30',
        attachments: [{
          name: 'error_screenshot.png',
          url: '/placeholder.jpg'
        }]
      },
      {
        id: 2,
        role: 'support',
        sender: 'Sarah Support',
        content: 'Hi John, I\'m sorry to hear you\'re having trouble accessing your account. Could you please try clearing your browser cache and cookies? If that doesn\'t work, I can help you reset your password.',
        timestamp: '2024-12-28 09:45'
      },
      {
        id: 3,
        sender: 'John Doe',
        role: 'user',
        content: 'I tried clearing the cache but still having the same issue.',
        timestamp: '2024-12-28 10:15'
      }
    ]
  }

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Ticket Details</h1>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-8">
          <div className="flex items-center justify-center h-40">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600"></div>
          </div>
        </div>
      </div>
    )
  }

  if (!ticket) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Ticket Details</h1>
        </div>
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <AlertCircle className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-sm font-medium text-gray-900">Ticket not found</h3>
          <p className="mt-1 text-sm text-gray-500">This ticket might have been deleted or doesn't exist.</p>
          <div className="mt-6">
            <button
              onClick={() => router.back()}
              className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Go Back
            </button>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Ticket Header */}
      <div className="flex items-center justify-between mb-6 border-b pb-6">
        <div className="space-y-1">
          <h3 className="text-xl font-medium">Subject: {ticket.subject}</h3>
          <p className="text-gray-500">Ticket id: #{params.id}</p>
          <p className="text-gray-500">Category: {ticket.category}</p>
        </div>
        <div className="flex items-center space-x-2">
          {getStatusIcon(ticket.status)}
          <span className="capitalize">{ticket.status.replace('_', ' ')}</span>
        </div>
      </div>

      {/* Ticket Info Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4 bg-gray-50 rounded-xl mb-6">
        <div>
          <p className="text-gray-500 text-sm">Created</p>
          <p className="font-medium">{formatDateTime(ticket.created_at)}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Last Updated</p>
          <p className="font-medium">{formatDateTime(ticket.updated_at)}</p>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Priority</p>
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
            {ticket.priority}
          </span>
        </div>
        <div>
          <p className="text-gray-500 text-sm">Messages</p>
          <p className="font-medium">{ticket.ticket_messages?.length}</p>
        </div>
      </div>

      {/* Message Thread */}
      <div className="space-y-6">
        <h4 className="font-medium text-gray-900">Conversation History</h4>
        <div className="space-y-6">
          {ticket.ticket_messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.user_id === user.id ? 'justify-end' : 'justify-start'}`}
            >
              <div className={`max-w-[80%] ${message.role === 'user'
                  ? 'bg-primary-50 border-primary-100'
                  : 'bg-gray-50 border-gray-100'
                } border rounded-lg p-4`}
              >
                <div className="flex items-center space-x-2 mb-2">
                  <span className="font-medium">{message.sender}</span>
                  <span className="text-sm text-gray-500">{message.timestamp}</span>
                </div>
                <p className="text-gray-800 mb-2">{message.message}</p>
                {message.attachments && message.attachments.length > 0 && (
                  <div className="mt-2 space-y-2">
                    {message.attachments.map((attachment, index) => (
                      <div key={index} className="flex items-center space-x-2 border rounded p-2 bg-white">
                        <div className="w-20 h-16 bg-gray-100 rounded flex items-center justify-center">
                          <img
                            src={attachment.url}
                            alt={attachment.name}
                            className="w-full h-full object-cover rounded"
                          />
                        </div>
                        <div>
                          <p className="text-sm font-medium">{attachment.name}</p>
                          <button className="text-primary-600 text-sm hover:underline">
                            Download
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Reply Form */}
      <div className="mt-6 border-t pt-6">
        <textarea
          placeholder="Type your reply..."
          className="w-full p-3 border rounded-lg mb-4"
          rows={3}
        />
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg flex items-center space-x-2">
              <input type="file" className="hidden" multiple />
              <Plus className="w-4 h-4" />
              <span>Attach Files</span>
            </label>
            <p className="text-sm text-gray-500">Supported formats: PNG, JPG, PDF</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 flex items-center space-x-2"
          >
            <Send className="w-4 h-4" />
            <span>Send Reply</span>
          </motion.button>
        </div>
      </div>
    </div>
  )
} 