import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

export async function POST(request) {
  try {
    const emailData = await request.json();
    const supabase = createRouteHandlerClient({ cookies });

    // Extract ticket ID from the email subject or To address
    // This depends on your email service and how you format the emails
    const ticketId = extractTicketId(emailData.to || emailData.subject);
    
    if (!ticketId) {
      throw new Error('No ticket ID found in email');
    }

    // Get the user ID associated with the email
    const { data: userData, error: userError } = await supabase
      .from('profiles')
      .select('id')
      .eq('email', emailData.from)
      .single();

    if (userError || !userData) {
      throw new Error('User not found');
    }

    // Store the message in the database
    const { error: messageError } = await supabase
      .from('ticket_messages')
      .insert([
        {
          ticket_id: ticketId,
          user_id: userData.id,
          message: emailData.text || emailData.html,
          is_agent: false
        }
      ]);

    if (messageError) {
      throw messageError;
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('Error processing email:', error);
    return Response.json({ error: 'Failed to process email' }, { status: 500 });
  }
}

function extractTicketId(str) {
  // Implement logic to extract ticket ID from email subject or address
  // Example: "Re: Your Question [Ticket #123]" -> "123"
  const match = str.match(/Ticket #(\d+)/i);
  return match ? match[1] : null;
} 