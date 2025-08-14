
'use server';

import { MailerSend, EmailParams, Sender, Recipient } from 'mailersend';
import { z } from 'zod';

// Schema for validating contact form input
const ContactFormSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "A valid email address is required." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters long." }),
});

export async function sendContactEmailAction(formData: {
  name: string;
  email: string;
  message: string;
}): Promise<{ success: boolean; message: string; errors?: Record<string, string[] | undefined> }> {
  const validatedFields = ContactFormSchema.safeParse(formData);

  if (!validatedFields.success) {
    return {
      success: false,
      message: "Validation failed. Please check your input.",
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { name, email, message } = validatedFields.data;

  const mailersendApiKey = process.env.MAILERSEND_API_KEY;
  const recipientEmail = process.env.RECIPIENT_EMAIL_ADDRESS;
  const senderEmailAddress = process.env.SENDER_EMAIL_ADDRESS;

  if (!mailersendApiKey || !recipientEmail || !senderEmailAddress) {
    console.error('MailerSend configuration is incomplete. Check MAILERSEND_API_KEY, RECIPIENT_EMAIL_ADDRESS, and SENDER_EMAIL_ADDRESS environment variables.');
    return { success: false, message: 'Email service is not configured correctly on the server. Please contact the site administrator.' };
  }

  const mailerSend = new MailerSend({
    apiKey: mailersendApiKey,
  });

  // It's good practice to use a name associated with your website/portfolio for the sender.
  const fromName = "Portfolio Contact Form"; 
  const sentFrom = new Sender(senderEmailAddress, fromName);
  
  // The recipient is you, the portfolio owner.
  const portfolioOwnerName = "Portfolio Owner"; // Or your name
  const recipients = [new Recipient(recipientEmail, portfolioOwnerName)];

  const emailParams = new EmailParams()
    .setFrom(sentFrom)
    .setTo(recipients)
    .setReplyTo(new Sender(email, name)) // Sets the Reply-To header to the sender's email and name
    .setSubject(`New Contact Form Message from ${name} (${email})`)
    .setHtml(
      `
      <p>You have a new message from your portfolio contact form:</p>
      <ul>
        <li><strong>Name:</strong> ${name}</li>
        <li><strong>Email:</strong> ${email}</li>
      </ul>
      <p><strong>Message:</strong></p>
      <p>${message.replace(/\n/g, '<br>')}</p>
      `
    )
    .setText(
      `
      You have a new message from your portfolio contact form:
      Name: ${name}
      Email: ${email}
      Message:
      ${message}
      `
    );

  try {
    // The SDK's send method will throw an error for non-2xx responses.
    // If it doesn't throw, it means MailerSend accepted the request.
    await mailerSend.email.send(emailParams);
    return { success: true, message: "Your message has been sent successfully! I'll get back to you soon." };
  } catch (error: any) {
    console.error('Error sending email with MailerSend:');
    let errorMessage = "An unexpected error occurred on the server.";
    if (error.response && error.response.body) {
      if (error.response.body.message) {
        errorMessage = `Server error: ${error.response.body.message}`;
      }
      if (error.response.body.errors) {
        console.error('MailerSend Error Details:', error.response.body.errors);
      }
    } else if (error.message) {
      errorMessage = error.message;
    }
    return { success: false, message: `Failed to send message. ${errorMessage}` };
  }
}
