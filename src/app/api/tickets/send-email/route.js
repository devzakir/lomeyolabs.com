import { Resend } from 'resend';
import { createRouteHandlerClient } from '@supabase/auth-helpers-nextjs';
import { cookies } from 'next/headers';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const { ticketId, message, userEmail } = await request.json();
    const supabase = createRouteHandlerClient({ cookies });

    // Get ticket details
    const { data: ticket } = await supabase
      .from('tickets')
      .select('subject')
      .eq('id', ticketId)
      .single();

    // Send email via Resend
    const { data, error: emailError } = await resend.emails.send({
      from: process.env.NEXT_PUBLIC_SUPPORT_EMAIL,
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
      reply_to: `ticket.${ticketId}@adishakti.xyz`
    });

    if (emailError) {
      throw emailError;
    }

    return Response.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
} 