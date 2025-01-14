'use client'

import { useState, useEffect } from 'react'
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
      console.error('Error:', error)
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
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <button
            onClick={() => router.back()}
            className="mb-2 text-sm text-gray-500 hover:text-gray-700 inline-flex items-center"
          >
            <ArrowLeft className="w-4 h-4 mr-1" />
            Back to Tickets
          </button>
          <h1 className="text-2xl font-bold text-gray-900">#{params.id}: {ticket.subject}</h1>
        </div>
        <div className="flex items-center gap-2">
          {getStatusIcon(ticket.status)}
          <span className="capitalize text-sm font-medium">
            {ticket.status.replace('_', ' ')}
          </span>
        </div>
      </div>

      {/* Ticket Details Card */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="p-6 border-b">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            <div>
              <p className="text-sm text-gray-500">Created</p>
              <p className="mt-1 text-sm font-medium">
                {formatDateTime(ticket.created_at)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Last Updated</p>
              <p className="mt-1 text-sm font-medium">
                {formatDateTime(ticket.updated_at)}
              </p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Priority</p>
              <p className="mt-1 text-sm font-medium capitalize">{ticket.priority}</p>
            </div>
            <div>
              <p className="text-sm text-gray-500">Messages</p>
              <p className="mt-1 text-sm font-medium">
                {ticket.ticket_messages?.length || 0}
              </p>
            </div>
          </div>
        </div>

        {/* Messages Section */}
        <div className="p-6">
          <h2 className="text-lg font-semibold mb-4">Conversation</h2>
          <div className="space-y-6 max-h-[600px] overflow-y-auto p-4 bg-gray-50 rounded-lg mb-6">
            {ticket.ticket_messages?.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.user_id === user.id ? 'justify-end' : 'justify-start'}`}
              >
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`max-w-[80%] rounded-lg p-4 ${
                    message.user_id === user.id
                      ? 'bg-primary-600 text-white'
                      : 'bg-white border'
                  }`}
                >
                  <p className="text-sm">{message.message}</p>
                  <p className={`text-xs mt-2 ${
                    message.user_id === user.id ? 'text-primary-100' : 'text-gray-500'
                  }`}>
                    {formatDateTime(message.created_at)}
                  </p>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Reply Form */}
          {ticket.status !== 'closed' && (
            <form onSubmit={handleSendMessage} className="space-y-4">
              <div>
                <textarea
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  placeholder="Type your message..."
                  rows={3}
                  className="w-full rounded-lg border focus:ring-2 focus:ring-primary-500 focus:border-primary-500 p-3"
                  required
                />
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <label className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-lg hover:bg-gray-200">
                    <input type="file" className="hidden" multiple />
                    <Plus className="w-4 h-4" />
                    Attach Files
                  </label>
                  <span className="text-sm text-gray-500">
                    Supported: PNG, JPG, PDF
                  </span>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={sending || !newMessage.trim()}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 disabled:opacity-50"
                >
                  <Send className="w-4 h-4 mr-2" />
                  {sending ? 'Sending...' : 'Send Message'}
                </motion.button>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Dummy Design Preview */}
      <div className="mt-12 border-t pt-12">
        {/* Ticket Header */}
        <div className="flex items-center justify-between mb-6">
          <div className="space-y-1">
            <h3 className="text-xl font-medium">{dummyTicket.subject}</h3>
            <p className="text-gray-500">Category: {dummyTicket.category}</p>
          </div>
          <div className="flex items-center space-x-2">
            {getStatusIcon(dummyTicket.status)}
            <span className="capitalize">{dummyTicket.status.replace('_', ' ')}</span>
          </div>
        </div>

        {/* Ticket Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4 bg-gray-50 rounded-xl mb-6">
          <div>
            <p className="text-gray-500 text-sm">Created</p>
            <p className="font-medium">{dummyTicket.created}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Last Updated</p>
            <p className="font-medium">{dummyTicket.lastUpdate}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Priority</p>
            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
              {dummyTicket.priority}
            </span>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Messages</p>
            <p className="font-medium">{dummyTicket.messages.length}</p>
          </div>
        </div>

        {/* Message Thread */}
        <div className="space-y-6">
          <h4 className="font-medium text-gray-900">Conversation History</h4>
          <div className="space-y-6">
            {dummyTicket.messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div className={`max-w-[80%] ${
                  message.role === 'user'
                    ? 'bg-primary-50 border-primary-100'
                    : 'bg-gray-50 border-gray-100'
                  } border rounded-lg p-4`}
                >
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="font-medium">{message.sender}</span>
                    <span className="text-sm text-gray-500">{message.timestamp}</span>
                  </div>
                  <p className="text-gray-800 mb-2">{message.content}</p>
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
    </div>
  )
} 