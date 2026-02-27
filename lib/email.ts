import nodemailer from 'nodemailer';

interface ContactEmailData {
  name: string;
  email: string;
  phone: string;
  city: string;
  message: string;
}

// Create reusable transporter using Gmail with App Password
const createTransporter = () => {
  const user = process.env.EMAIL_USER;
  const pass = process.env.EMAIL_APP_PASSWORD;

  if (!user || !pass) {
    throw new Error('Email configuration missing: EMAIL_USER and EMAIL_APP_PASSWORD required');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user,
      pass,
    },
  });
};

// Generate HTML email template
const generateEmailHTML = (data: ContactEmailData): string => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
        <table role="presentation" style="width: 100%; border-collapse: collapse;">
          <tr>
            <td align="center" style="padding: 40px 0;">
              <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <!-- Header -->
                <tr>
                  <td style="padding: 30px 40px; background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); border-radius: 12px 12px 0 0;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 600;">
                      🌞 New Contact Form Submission
                    </h1>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px;">
                    <p style="margin: 0 0 20px; color: #64748b; font-size: 14px;">
                      You have received a new inquiry from your website contact form.
                    </p>
                    
                    <!-- Contact Details -->
                    <table role="presentation" style="width: 100%; border-collapse: collapse; margin-bottom: 30px;">
                      <tr>
                        <td style="padding: 15px; background-color: #f8fafc; border-radius: 8px; margin-bottom: 10px;">
                          <p style="margin: 0 0 5px; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Name</p>
                          <p style="margin: 0; color: #1e293b; font-size: 16px; font-weight: 500;">${data.name}</p>
                        </td>
                      </tr>
                      <tr><td style="height: 10px;"></td></tr>
                      <tr>
                        <td style="padding: 15px; background-color: #f8fafc; border-radius: 8px;">
                          <p style="margin: 0 0 5px; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Email</p>
                          <p style="margin: 0; color: #1e293b; font-size: 16px; font-weight: 500;">
                            <a href="mailto:${data.email}" style="color: #22c55e; text-decoration: none;">${data.email}</a>
                          </p>
                        </td>
                      </tr>
                      <tr><td style="height: 10px;"></td></tr>
                      <tr>
                        <td style="padding: 15px; background-color: #f8fafc; border-radius: 8px;">
                          <p style="margin: 0 0 5px; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Phone</p>
                          <p style="margin: 0; color: #1e293b; font-size: 16px; font-weight: 500;">
                            <a href="tel:${data.phone}" style="color: #22c55e; text-decoration: none;">${data.phone}</a>
                          </p>
                        </td>
                      </tr>
                      <tr><td style="height: 10px;"></td></tr>
                      <tr>
                        <td style="padding: 15px; background-color: #f8fafc; border-radius: 8px;">
                          <p style="margin: 0 0 5px; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">City</p>
                          <p style="margin: 0; color: #1e293b; font-size: 16px; font-weight: 500;">${data.city}</p>
                        </td>
                      </tr>
                    </table>
                    
                    <!-- Message -->
                    <div style="padding: 20px; background-color: #f0fdf4; border-left: 4px solid #22c55e; border-radius: 4px;">
                      <p style="margin: 0 0 10px; color: #64748b; font-size: 12px; text-transform: uppercase; letter-spacing: 0.5px;">Message</p>
                      <p style="margin: 0; color: #1e293b; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
                    </div>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="padding: 20px 40px; background-color: #f8fafc; border-radius: 0 0 12px 12px; text-align: center;">
                    <p style="margin: 0; color: #94a3b8; font-size: 12px;">
                      This email was sent from your Kartik Solar website contact form.<br>
                      Submitted at ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
};

/**
 * Send contact form notification email to admin
 */
export async function sendContactEmail(data: ContactEmailData): Promise<void> {
  const recipient = process.env.EMAIL_RECIPIENT;
  
  if (!recipient) {
    throw new Error('Email configuration missing: EMAIL_RECIPIENT required');
  }

  const transporter = createTransporter();

  const mailOptions = {
    from: `"Kartik Solar Website" <${process.env.EMAIL_USER}>`,
    to: recipient,
    replyTo: data.email,
    subject: `New Contact: ${data.name} from ${data.city}`,
    html: generateEmailHTML(data),
    text: `
New Contact Form Submission

Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
City: ${data.city}

Message:
${data.message}

Submitted at: ${new Date().toISOString()}
    `.trim(),
  };

  await transporter.sendMail(mailOptions);
}

// Generate user confirmation email HTML
const generateConfirmationEmailHTML = (data: ContactEmailData): string => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Contacting Kartik Solar</title>
      </head>
      <body style="margin: 0; padding: 0; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; background-color: #f4f4f4;">
        <table role="presentation" style="width: 100%; border-collapse: collapse;">
          <tr>
            <td align="center" style="padding: 40px 0;">
              <table role="presentation" style="width: 600px; border-collapse: collapse; background-color: #ffffff; border-radius: 12px; box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);">
                <!-- Header -->
                <tr>
                  <td style="padding: 30px 40px; background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%); border-radius: 12px 12px 0 0; text-align: center;">
                    <h1 style="margin: 0; color: #ffffff; font-size: 28px; font-weight: 600;">
                      🌞 Kartik Solar
                    </h1>
                    <p style="margin: 10px 0 0; color: #dcfce7; font-size: 14px;">Powering your future with clean energy</p>
                  </td>
                </tr>
                
                <!-- Content -->
                <tr>
                  <td style="padding: 40px;">
                    <h2 style="margin: 0 0 15px; color: #1e293b; font-size: 22px; font-weight: 600;">Thank You for Reaching Out!</h2>
                    
                    <p style="margin: 0 0 20px; color: #475569; font-size: 16px; line-height: 1.6;">
                      Hi <strong>${data.name}</strong>,
                    </p>
                    
                    <p style="margin: 0 0 20px; color: #475569; font-size: 16px; line-height: 1.6;">
                      We've received your message and our team is excited to help you with your solar energy journey. We'll review your inquiry and get back to you within <strong>24 hours</strong>.
                    </p>
                    
                    <!-- Summary Box -->
                    <div style="padding: 20px; background-color: #f0fdf4; border-left: 4px solid #22c55e; border-radius: 4px; margin: 25px 0;">
                      <p style="margin: 0 0 10px; color: #64748b; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Your Message</p>
                      <p style="margin: 0; color: #1e293b; font-size: 15px; line-height: 1.6; white-space: pre-wrap;">${data.message}</p>
                    </div>
                    
                    <p style="margin: 0 0 25px; color: #475569; font-size: 16px; line-height: 1.6;">
                      In the meantime, feel free to explore our <a href="https://yourwebsite.com/projects" style="color: #22c55e; text-decoration: none; font-weight: 500;">recent projects</a> or learn more about <a href="https://yourwebsite.com/about" style="color: #22c55e; text-decoration: none; font-weight: 500;">our mission</a>.
                    </p>
                    
                    <!-- CTA Button -->
                    <table role="presentation" style="margin: 30px 0;">
                      <tr>
                        <td style="border-radius: 8px; background: linear-gradient(135deg, #22c55e 0%, #16a34a 100%);">
                          <a href="https://yourwebsite.com" style="display: inline-block; padding: 14px 28px; color: #ffffff; text-decoration: none; font-weight: 600; font-size: 16px;">Visit Our Website</a>
                        </td>
                      </tr>
                    </table>
                    
                    <p style="margin: 20px 0 0; color: #64748b; font-size: 14px; line-height: 1.6;">
                      Best regards,<br>
                      <strong style="color: #1e293b;">The Kartik Solar Team</strong>
                    </p>
                  </td>
                </tr>
                
                <!-- Footer -->
                <tr>
                  <td style="padding: 25px 40px; background-color: #f8fafc; border-radius: 0 0 12px 12px; border-top: 1px solid #e2e8f0;">
                    <table role="presentation" style="width: 100%;">
                      <tr>
                        <td style="text-align: center; padding-bottom: 15px;">
                          <p style="margin: 0 0 8px; color: #1e293b; font-size: 14px; font-weight: 600;">Contact Us</p>
                          <p style="margin: 0; color: #64748b; font-size: 13px;">
                            📧 info@Kartik Solar.com | 📞 +1 (555) 123-4567<br>
                            📍 25/4, Rajpur Road, Dehradun, Uttarakhand 248001
                          </p>
                        </td>
                      </tr>
                      <tr>
                        <td style="text-align: center; padding-top: 15px; border-top: 1px solid #e2e8f0;">
                          <p style="margin: 0; color: #94a3b8; font-size: 12px;">
                            This is an automated confirmation email. Please do not reply to this message.
                          </p>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;
};

/**
 * Send confirmation email to the user who submitted the form
 */
export async function sendUserConfirmationEmail(data: ContactEmailData): Promise<void> {
  const transporter = createTransporter();

  const mailOptions = {
    from: `"Kartik Solar" <${process.env.EMAIL_USER}>`,
    to: data.email,
    subject: 'Thank You for Contacting Kartik Solar - We\'ll Be In Touch Soon!',
    html: generateConfirmationEmailHTML(data),
    text: `
Hi ${data.name},

Thank you for reaching out to Kartik Solar!

We've received your message and our team will review it carefully. You can expect to hear back from us within 24 hours.

Your Message:
${data.message}

In the meantime, feel free to explore our website to learn more about our solar energy solutions.

Best regards,
The Kartik Solar Team

---
Kartik Solar
Email: info@Kartik Solar.com
Phone: +1 (555) 123-4567
Address: 25/4, Rajpur Road, Dehradun, Uttarakhand 248001
    `.trim(),
  };

  await transporter.sendMail(mailOptions);
}
