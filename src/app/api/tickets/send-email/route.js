import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import { ServerClient } from 'postmark';

// Validate API key format
function isValidPostmarkAPIKey(key) {
  // Postmark API keys are typically in UUID format
  const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
  return uuidRegex.test(key);
}

// Create a client using your Postmark server token
const postmarkClient = new ServerClient(process.env.POSTMARK_API_KEY || '');

async function testPostmarkConnection() {
  try {
    // Validate API key format first
    if (!process.env.POSTMARK_API_KEY) {
      throw new Error('Postmark API key is missing');
    }

    if (!isValidPostmarkAPIKey(process.env.POSTMARK_API_KEY)) {
      throw new Error('Postmark API key format is invalid');
    }

    // Log configuration (safely)
    console.log('Postmark Configuration:', {
      apiKeyPresent: true,
      apiKeyFormat: 'Valid UUID format',
      fromEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL
    });

    // Verify sender email
    if (!process.env.NEXT_PUBLIC_SUPPORT_EMAIL) {
      throw new Error('Support email is missing');
    }

    // Try sending a test email
    const result = await postmarkClient.sendEmail({
      From: process.env.NEXT_PUBLIC_SUPPORT_EMAIL,
      To: process.env.NEXT_PUBLIC_SUPPORT_EMAIL,
      Subject: 'Test Email',
      TextBody: 'This is a test email from Postmark',
      MessageStream: "outbound"
    });

    console.log('Postmark test successful:', {
      messageId: result.MessageID,
      status: 'Sent'
    });

    return true;
  } catch (error) {
    console.error('Postmark test failed:', {
      name: error.name,
      message: error.message,
      code: error.code,
      statusCode: error.statusCode,
      response: error.response?.body
    });

    if (error.code === 10) {
      throw new Error('Invalid Postmark API key - Please check your Server Token');
    }
    if (error.code === 300) {
      throw new Error('Invalid sender email signature');
    }

    throw error;
  }
}

export async function POST(request) {
  try {
    console.log('Starting email send process...');

    // Log environment check
    console.log('Environment check:', {
      hasPostmarkKey: !!process.env.POSTMARK_API_KEY,
      supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL,
      nodeEnv: process.env.NODE_ENV
    });

    const { ticketId, message, userEmail } = await request.json();
    
    // Log request data (excluding sensitive info)
    console.log('Request data:', {
      hasTicketId: !!ticketId,
      hasMessage: !!message,
      userEmail: userEmail ? '****' + userEmail.slice(-10) : null
    });

    // Validate inputs
    if (!ticketId || !message || !userEmail) {
      throw new Error('Missing required fields');
    }

    // Test Postmark connection
    await testPostmarkConnection();

    const supabase = createRouteHandlerClient({ cookies });

    // Get ticket details
    const { data: ticket, error: ticketError } = await supabase
      .from('tickets')
      .select('subject')
      .eq('id', ticketId)
      .single();

    if (ticketError) {
      throw new Error(`Ticket fetch error: ${ticketError.message}`);
    }

    if (!ticket) {
      throw new Error('Ticket not found');
    }

    // Send email via Postmark
    const emailResult = await postmarkClient.sendEmail({
      From: process.env.NEXT_PUBLIC_SUPPORT_EMAIL,
      To: 'hello@adishakti.xyz',
      Subject: `Re: ${ticket.subject} [Ticket #${ticketId}]`,
      HtmlBody: `
        <div>
          <p>${message}</p>
          <hr/>
          <p>To respond to this ticket, simply reply to this email.</p>
          <p>Ticket ID: ${ticketId}</p>
        </div>
      `,
      TextBody: `${message}\n\n---\nTo respond to this ticket, simply reply to this email.\nTicket ID: ${ticketId}`,
      ReplyTo: `ticket.${ticketId}@adishakti.xyz`,
      MessageStream: "outbound"
    });

    console.log('Postmark response:', emailResult);

    return Response.json({ 
      success: true,
      messageId: emailResult.MessageID 
    });

  } catch (error) {
    console.error('Final error in email sending:', {
      name: error.name,
      message: error.message,
      code: error.code,
      statusCode: error.statusCode,
      response: error.response?.body,
      stack: error.stack
    });
    
    return Response.json({ 
      error: error.message || 'Failed to send email',
      details: {
        name: error.name,
        code: error.code,
        statusCode: error.statusCode,
        response: error.response?.body
      }
    }, { 
      status: 500 
    });
  }
} 