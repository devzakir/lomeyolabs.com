import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';
import nodemailer from 'nodemailer';

// Create Gmail transporter
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Test Gmail connection
async function testGmailConnection() {
  try {
    // Validate credentials
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      throw new Error('Gmail credentials are missing');
    }

    // Log configuration (safely)
    console.log('Gmail Configuration:', {
      gmailUser: process.env.GMAIL_USER,
      credentialsPresent: true
    });

    // Verify connection
    await transporter.verify();
    console.log('Gmail connection successful');
    return true;
  } catch (error) {
    console.error('Gmail test failed:', {
      name: error.name,
      message: error.message
    });
    throw error;
  }
}

export async function POST(request) {
  try {
    console.log('Starting email send process...');

    // Log environment check
    console.log('Environment check:', {
      hasGmailUser: !!process.env.GMAIL_USER,
      hasGmailPassword: !!process.env.GMAIL_APP_PASSWORD,
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

    // Test Gmail connection
    await testGmailConnection();

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

    // Send email via Gmail
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: userEmail,
      subject: `Re: ${ticket.subject} [Ticket #${ticketId}]`,
      html: `
        <div>
          <p>${message}</p>
          <hr/>
          <p>To respond to this ticket, simply reply to this email.</p>
          <p>Ticket ID: ${ticketId}</p>
        </div>
      `,
      text: `${message}\n\n---\nTo respond to this ticket, simply reply to this email.\nTicket ID: ${ticketId}`,
    };

    const emailResult = await transporter.sendMail(mailOptions);
    console.log('Gmail response:', emailResult);

    return Response.json({ 
      success: true,
      messageId: emailResult.messageId 
    });

  } catch (error) {
    console.error('Final error in email sending:', {
      name: error.name,
      message: error.message,
      stack: error.stack
    });
    
    return Response.json({ 
      error: error.message || 'Failed to send email',
      details: {
        name: error.name,
      }
    }, { 
      status: 500 
    });
  }
} 