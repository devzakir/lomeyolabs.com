import { serve } from "https://deno.land/std@0.168.0/http/server.ts"
import { createClient } from "https://esm.sh/@supabase/supabase-js@2.38.4"

interface EmailPayload {
  message: string;
  subject: string;
}

// Initialize Supabase client
const supabaseClient = createClient(
  Deno.env.get('SUPABASE_URL') ?? '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
  {
    auth: {
      persistSession: false,
    }
  }
)

function extractActualMessage(message: string): string {
  // Remove any trailing arrows, dashes, and extra spaces
  let cleanMessage = message.replace(/>\s*>+\s*$/, '').trim();
  
  // Try to split by both email patterns
  const templateSplit = cleanMessage.split(/On .+<hello@templatecookie\.com> wrote:/);
  const userSplit = cleanMessage.split(/On .+<[^>]+> wrote:/);
  
  // Take the first part (the actual message)
  cleanMessage = (templateSplit[0] || userSplit[0] || cleanMessage).trim();
  
  // Remove any remaining ">" characters at the start of lines
  cleanMessage = cleanMessage.replace(/^>\s*/gm, '');
  
  // Remove any remaining dashes
  cleanMessage = cleanMessage.replace(/[-]+>?\s*$/, '');
  
  // Remove any "To respond to this ticket" text
  cleanMessage = cleanMessage.split(/To respond to this ticket/)[0].trim();
  
  // Remove any "Ticket ID:" text
  cleanMessage = cleanMessage.split(/Ticket ID:/)[0].trim();
  
  return cleanMessage;
}

serve(async (req) => {
  try {
    // Parse the request body
    const payload: EmailPayload = await req.json()

    // Extract ticket_id from subject using regex
    const ticketIdMatch = payload.subject.match(/\[Ticket #([a-f0-9-]+)\]/)
    if (!ticketIdMatch) {
      throw new Error('Ticket ID not found in subject')
    }
    const ticketId = ticketIdMatch[1]

    // First, get the ticket information to verify it exists and get user_id
    const { data: ticket, error: ticketError } = await supabaseClient
      .from('tickets')
      .select('id, user_id')
      .eq('id', ticketId)
      .single()

    if (ticketError) {
      console.error('Error fetching ticket:', ticketError)
      throw new Error(`Ticket fetch error: ${ticketError.message}`)
    }

    if (!ticket) {
      throw new Error('No ticket found')
    }

    // Extract the actual message from the email reply
    const cleanMessage = extractActualMessage(payload.message);

    // Prepare the message data
    const messageData = {
      ticket_id: ticketId,
      user_id: ticket.user_id,
      message: cleanMessage,
      is_agent: false,
    }

    // Insert the message into ticket_messages
    const { data: message, error: messageError } = await supabaseClient
      .from('ticket_messages')
      .insert([messageData])
      .select()
      .single()

    if (messageError) {
      console.error('Error inserting message:', messageError)
      throw new Error(`Message insert error: ${messageError.message}`)
    }

    // Return success response
    return new Response(
      JSON.stringify({
        success: true,
        data: message
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
        status: 200,
      }
    )
  } catch (error) {
    // Handle any errors
    console.error('Error processing request:', error)
    return new Response(
      JSON.stringify({
        error: 'Internal server error',
        details: error.message,
        stack: error.stack
      }),
      {
        headers: {
          "Content-Type": "application/json",
        },
        status: 500,
      }
    )
  }
}) 