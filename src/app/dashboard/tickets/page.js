'use client'

import { useState, useEffect, useCallback } from 'react'
import { supabaseClient } from '@/lib/supabaseClient'
import { useAuth } from '@/contexts/AuthContext'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  Search,
  Plus,
  MessageCircle,
  Clock,
  CheckCircle,
  AlertCircle
} from 'lucide-react'

export default function TicketsPage() {
  const [tickets, setTickets] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState('')
  const { user } = useAuth()

  const fetchTickets = useCallback(async () => {
    try {
      const { data, error } = await supabaseClient
        .from('tickets')
        .select(`
          *,
          ticket_messages (
            id,
            message,
            created_at,
            is_agent
          )
        `)
        .eq('user_id', user.id)
        .order('created_at', { ascending: false })

      if (error) throw error
      setTickets(data || [])
    } catch (error) {
      console.error('Error fetching tickets:', error)
    } finally {
      setLoading(false)
    }
  }, [user.id])

  useEffect(() => {
    fetchTickets()
  }, [fetchTickets])

  const getStatusColor = (status) => {
    switch (status) {
      case 'open':
        return 'text-yellow-500'
      case 'in_progress':
        return 'text-blue-500'
      case 'closed':
        return 'text-green-500'
      default:
        return 'text-gray-500'
    }
  }

  const getStatusIcon = (status) => {
    switch (status) {
      case 'open':
        return <Clock className={`${getStatusColor(status)} w-5 h-5`} />
      case 'in_progress':
        return <MessageCircle className={`${getStatusColor(status)} w-5 h-5`} />
      case 'closed':
        return <CheckCircle className={`${getStatusColor(status)} w-5 h-5`} />
      default:
        return <AlertCircle className="text-gray-500 w-5 h-5" />
    }
  }

  const filteredTickets = tickets.filter(ticket =>
    ticket.subject?.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ticket.id?.toLowerCase().includes(searchQuery.toLowerCase())
  )

  // Add this dummy data
  const dummyUser = {
    name: 'Zakir Hossen',
    email: 'web.zakirbd@gmail.com',
    avatar: '/placeholder-avatar.jpg'
  }

  const dummyTickets = [
    {
      id: 'TIK-001',
      subject: 'Cannot access account',
      category: 'Account Access',
      status: 'open',
      priority: 'high',
      created: '2024-12-28',
      lastUpdate: '2024-12-29',
      messages: 3
    },
    {
      id: 'TIK-002',
      subject: 'Billing inquiry about last invoice',
      category: 'Billing Question',
      status: 'in_progress',
      priority: 'medium',
      created: '2024-12-27',
      lastUpdate: '2024-12-29',
      messages: 2
    },
    {
      id: 'TIK-003',
      subject: 'Feature request: Dark mode',
      category: 'Feature Request',
      status: 'closed',
      priority: 'low',
      created: '2024-12-25',
      lastUpdate: '2024-12-28',
      messages: 4
    }
  ]

  if (loading) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">Support Tickets</h1>
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
    <div className="space-y-12">
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Support Tickets</h1>
          <p className="mt-1 text-sm text-gray-500">Manage your support requests</p>
        </div>
        <Link href="/dashboard/tickets/create">
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Ticket
          </motion.button>
        </Link>
      </div>

      {/* Search and Tickets List */}
      <div>
          {/* Search Bar */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search tickets..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
          </div>

          {/* Tickets Grid */}
          <div className="grid gap-4">
            {filteredTickets.length === 0 ? (
              <div className="text-center py-12">
                <AlertCircle className="mx-auto h-12 w-12 text-gray-400" />
                <h3 className="mt-2 text-sm font-medium text-gray-900">No tickets found</h3>
                <p className="mt-1 text-sm text-gray-500">Get started by creating a new support ticket.</p>
                <div className="mt-6">
                  <Link href="/dashboard/tickets/create">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700"
                    >
                      Create New Ticket
                    </motion.button>
                  </Link>
                </div>
              </div>
            ) : (
              filteredTickets.map((ticket) => (
                <Link 
                  key={ticket.id}
                  href={`/dashboard/tickets/${ticket.id}`}
                >
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    className="p-4 border rounded-lg cursor-pointer hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-medium text-sm text-gray-600">#{ticket.id}</span>
                      {getStatusIcon(ticket.status)}
                    </div>
                    <h3 className="font-medium mb-2 text-gray-900">{ticket.subject}</h3>
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <span>Priority: {ticket.priority}</span>
                      <span>
                        {new Date(ticket.created_at).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                    <div className="mt-2 flex items-center gap-2 text-sm text-gray-500">
                      <MessageCircle className="w-4 h-4" />
                      <span>{ticket.ticket_messages?.length || 0} messages</span>
                    </div>
                  </motion.div>
                </Link>
              ))
            )}
          </div>
      </div>

      {/* Design Preview */}
      <div className="border-t pt-12">
            {/* User Info Header */}
            <div className="flex items-center justify-between mb-6">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Support Tickets</h1>
                <p className="mt-1 text-sm text-gray-500">Manage your support requests</p>
              </div>
              <Link href="/dashboard/tickets/create">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  New Ticket
                </motion.button>
              </Link>
            </div>

            {/* Search Bar */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Search tickets..."
                className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
              <Search className="absolute left-3 top-2.5 text-gray-400 w-5 h-5" />
            </div>

            {/* Tickets Grid */}
            <div className="grid gap-4">
              {dummyTickets.map((ticket) => (
                <div
                  key={ticket.id}
                  className="p-4 border rounded-lg cursor-pointer hover:shadow-md transition-all duration-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-medium text-sm text-gray-600">
                      {ticket.id}
                    </span>
                    {getStatusIcon(ticket.status)}
                  </div>
                  <h3 className="font-medium mb-2 text-gray-900">
                    {ticket.subject}
                  </h3>
                  <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{ticket.category}</span>
                    <span>Updated: {ticket.lastUpdate}</span>
                  </div>
                  <div className="mt-3 flex items-center gap-4">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${
                      ticket.priority === 'high' 
                        ? 'bg-red-100 text-red-800'
                        : ticket.priority === 'medium'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-green-100 text-green-800'
                    }`}>
                      {ticket.priority}
                    </span>
                    <span className="flex items-center gap-1 text-sm text-gray-500">
                      <MessageCircle className="w-4 h-4" />
                      {ticket.messages} messages
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Empty State */}
            <div className="hidden text-center py-12">
              <AlertCircle className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-sm font-medium text-gray-900">
                No tickets found
              </h3>
              <p className="mt-1 text-sm text-gray-500">
                Get started by creating a new support ticket.
              </p>
              <div className="mt-6">
                <Link href="/dashboard/tickets/create">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700"
                  >
                    Create New Ticket
                  </motion.button>
                </Link>
              </div>
            </div>
      </div>
    </div>
  )
} 