'use client'

import { useState, useEffect, useCallback } from 'react'
import { useRouter } from 'next/navigation'
import { supabaseClient } from '@/lib/supabaseClient'
import { useAdminAuth } from '@/contexts/AdminAuthContext'
import { motion } from 'framer-motion'
import { ArrowLeft, Clock, MessageCircle, CheckCircle, AlertCircle, Plus, Send, Download } from 'lucide-react'
import ReactQuill from 'react-quill'
import 'react-quill/dist/quill.snow.css'

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

const createMarkup = (htmlContent) => {
  return { __html: htmlContent };
};

export default function AdminTicketDetail({ params }) {
  const [ticket, setTicket] = useState(null)
  const [newMessage, setNewMessage] = useState('')
  const [newStatus, setNewStatus] = useState('')
  const [sending, setSending] = useState(false)
  const [loading, setLoading] = useState(true)
  const [userEmail, setUserEmail] = useState(null)
  const [attachments, setAttachments] = useState([])
  const [selectedImageCount, setSelectedImageCount] = useState(0)
  const router = useRouter()
  const { admin } = useAdminAuth()

  const fetchTicket = useCallback(async () => {
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
  }, [params.id])

  useEffect(() => {
    if (admin) {
      fetchTicket()
    }
  }, [admin, fetchTicket])

  useEffect(() => {
    if (ticket?.ticket_messages) {
      const messageContainer = document.getElementById('messageContainer');
      if (messageContainer) {
        messageContainer.scrollTop = messageContainer.scrollHeight;
      }
    }
  }, [ticket?.ticket_messages]);

  const downloadAttachment = async (url) => {
    try {
      // Create a temporary anchor element
      const link = document.createElement('a');
      
      // Set link properties
      link.href = url;
      link.target = '_blank'; // Open in new tab if direct download fails
      link.rel = 'noopener noreferrer'; // Security best practice
      
      // Try to set download attribute with filename from URL
      const filename = url.split('/').pop().slice(14); // Remove timestamp prefix
      link.download = filename;
      
      // Append to body, click, and remove
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    } catch (error) {
      console.error('Download failed:', error);
      // Fallback - open in new tab
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    
    if (!newMessage.trim() && attachments.length === 0) {
      alert('Please add a message or attach a file before sending.');
      return;
    }

    if (!admin) return;

    setSending(true);
    try {
      const attachmentUrls = [];

      // Upload attachments if any
      if (attachments.length > 0) {
        const attachmentPromises = attachments.map(async (file) => {
          if (!file || !file.name) {
            console.error('Invalid file:', file);
            return;
          }
          const uniqueFileName = `${Date.now()}_${Math.floor(Math.random() * 100000).toString().padStart(5, '0')}${file.name.slice(file.name.lastIndexOf('.'))}`;

          const { data, error: uploadError } = await supabaseClient
            .storage
            .from('ticket_attachments')
            .upload(uniqueFileName, file);

          if (uploadError) {
            console.error('Upload Error:', uploadError);
            throw uploadError;
          }

          attachmentUrls.push('https://rosjxfydjsfhbpimtuos.supabase.co/storage/v1/object/public/ticket_attachments/' + uniqueFileName);
        });

        await Promise.all(attachmentPromises);
      }

      // Create message in database
      const messageData = {
        ticket_id: ticket.id,
        user_id: admin.id,
        message: newMessage,
        is_agent: true,
        attachment_url: attachmentUrls.length > 0 ? attachmentUrls : [],
      };

      const { error: messageError } = await supabaseClient
        .from('ticket_messages')
        .insert([messageData]);

      if (messageError) throw messageError;

      // Send email notification if we have user's email
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
              userEmail: userEmail,
              attachments: attachmentUrls 
            }),
          });

          const data = await response.json();

          if (!response.ok) {
            console.error('Email error details:', data);
            throw new Error(data.error || 'Failed to send email');
          }
        } catch (emailError) {
          console.error('Error sending email:', emailError);
          // Continue execution even if email fails
        }
      }

      setNewMessage('');
      setAttachments([]);
      setSelectedImageCount(0);
      fetchTicket();
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to send message. Please try again.');
    } finally {
      setSending(false);
    }
  };

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

  const getStatusIcon = (status) => {
    switch (status) {
      case 'open':
        return <Clock className="w-5 h-5 text-yellow-500" />
      case 'pending':
        return <MessageCircle className="w-5 h-5 text-blue-500" />
      case 'closed':
        return <CheckCircle className="w-5 h-5 text-green-500" />
      default:
        return <AlertCircle className="w-5 h-5 text-gray-500" />
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="space-y-6">
        {/* Back Button */}
        <div className="flex justify-end">
          <button
            onClick={() => router.back()}
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Tickets
          </button>
        </div>

        {/* Ticket Header */}
        <div className="flex items-center justify-between mb-6 border-b pb-6">
          <div className="space-y-1">
            <h3 className="text-xl font-medium">Subject: {ticket?.subject}</h3>
            <p className="text-gray-500">Ticket id: #{params.id}</p>
            <p className="text-gray-500">Category: {ticket?.category}</p>
          </div>
          <div className="flex items-center space-x-2">
            {getStatusIcon(ticket?.status)}
            <select
              value={newStatus}
              onChange={(e) => handleStatusChange(e.target.value)}
              className="capitalize border-0 bg-transparent focus:ring-0"
            >
              <option value="open">Open</option>
              <option value="pending">Pending</option>
              <option value="closed">Closed</option>
            </select>
          </div>
        </div>

        {/* Ticket Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 p-4 bg-gray-50 rounded-xl mb-6">
          <div>
            <p className="text-gray-500 text-sm">Created</p>
            <p className="font-medium">{formatDateTime(ticket?.created_at)}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Last Updated</p>
            <p className="font-medium">{formatDateTime(ticket?.updated_at)}</p>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Priority</p>
            <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getPriorityColor(ticket?.priority)}`}>
              {ticket?.priority}
            </span>
          </div>
          <div>
            <p className="text-gray-500 text-sm">Customer Email</p>
            <p className="font-medium">{userEmail || 'N/A'}</p>
          </div>
        </div>

        {/* Message Thread */}
        <div>
          <h4 className="font-medium text-gray-900">Conversation History</h4>
          <div 
            className="h-[500px] overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent hover:scrollbar-thumb-gray-400 border rounded-xl p-4" 
            id="messageContainer"
          >
            <div className="space-y-6">
              {ticket?.ticket_messages?.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.is_agent ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[80%] ${message.is_agent
                    ? 'bg-primary-50 border-primary-100'
                    : 'bg-gray-50 border-gray-100'
                  } border rounded-lg p-4`}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <span className="font-medium">
                        {message.is_agent ? 'Admin' : 'Customer'}
                      </span>
                      <span className="text-sm text-gray-500">
                        {formatDateTime(message.created_at)}
                      </span>
                    </div>
                    <div 
                      className="text-gray-800 mb-2 message-content" 
                      dangerouslySetInnerHTML={createMarkup(message.message)}
                    />
                    <div className="mt-2 space-y-2">
                      {(() => {
                        const urls = typeof message.attachment_url === "string"
                          ? JSON.parse(message.attachment_url)
                          : message.attachment_url;
                          
                        return Array.isArray(urls) && urls.length > 0 ? (
                          urls.map((url, index) => (
                            <div
                              key={index}
                              className="flex items-center space-x-2 border rounded p-2 bg-white"
                            >
                              <div className="w-20 h-16 bg-gray-100 rounded flex items-center justify-center">
                                <img
                                  src={url}
                                  className="w-full h-full object-cover rounded"
                                  alt={`Attachment ${index + 1}`}
                                />
                              </div>
                              <div className="flex flex-col">
                                <span className="text-sm text-gray-500 mb-1">
                                  {url.split('/').pop().slice(14)}
                                </span>
                                <button onClick={() => downloadAttachment(url)}
                                  className="text-primary-600 text-sm hover:underline flex items-center gap-2">
                                  <Download className="w-4 h-4" />
                                  Download
                                </button>
                              </div>
                            </div>
                          ))
                        ) : null;
                      })()}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Reply Form */}
        <div className="mt-6">
          <form onSubmit={handleSendMessage}>
            <ReactQuill
              value={newMessage}
              onChange={setNewMessage}
              placeholder="Type your reply..."
              className="mb-4"
              style={{ height: '120px', width: '100%' }}
            />
            <div className="flex items-center justify-between mt-16">
              <div className="flex items-center space-x-4">
                <label className="cursor-pointer bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg flex items-center space-x-2">
                  <input
                    type="file"
                    className="hidden"
                    multiple
                    onChange={(e) => {
                      const files = Array.from(e.target.files);
                      setAttachments(files);
                      setSelectedImageCount(files.length);
                    }}
                  />
                  <Plus className="w-4 h-4" />
                  <span>Attach Files</span>
                </label>
                <p className="text-sm text-gray-500">
                  {selectedImageCount > 0 ? `${selectedImageCount} file(s) selected` : 'No files selected'}
                </p>
              </div>
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={sending || (!newMessage.trim() && attachments.length === 0)}
                className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 flex items-center space-x-2 disabled:opacity-50"
              >
                <Send className="w-4 h-4" />
                <span>{sending ? 'Sending...' : 'Send Reply'}</span>
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
} 