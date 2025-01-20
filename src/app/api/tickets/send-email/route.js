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

    // Verify connection
    await transporter.verify();
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
    const { ticketId, message, userEmail, attachments } = await request.json();
    
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

    // Prepare HTML content with attachments
    let htmlContent = `
      <div>
        <p>${message}</p>
        ${attachments && attachments.length > 0 ? `
          <div style="margin-top: 20px; padding-top: 20px; border-top: 1px solid #eee;">
            <p style="font-weight: bold;">Attachments:</p>
            <ul style="list-style: none; padding: 0;">
              ${attachments.map((url, index) => `
                <li style="margin: 10px 0;">
                  <a href="${url}" 
                     style="color: #0066cc; text-decoration: none; display: inline-flex; align-items: center; padding: 8px 16px; background-color: #f0f0f0; border-radius: 4px;"
                     target="_blank">
                    📎 Download Attachment ${index + 1}
                  </a>
                </li>
              `).join('')}
            </ul>
          </div>
        ` : ''}
        <hr/>
        <p>To respond to this ticket, simply reply to this email.</p>
        <p>Ticket ID: ${ticketId}</p>
      </div>
    `;

    // Send email via Gmail
    const mailOptions = {
      from: process.env.GMAIL_USER,
      to: userEmail,
      subject: `Re: ${ticket.subject} [Ticket #${ticketId}]`,
      html: htmlContent,
    };

    const emailResult = await transporter.sendMail(mailOptions);

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