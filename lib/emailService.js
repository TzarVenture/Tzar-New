import nodemailer from "nodemailer";

/**
 * Creates a transporter for sending emails.
 * Primary: Brevo SMTP relay
 * Fallback: Gmail SMTP (if configured)
 */
function createTransporter() {
  const brevoUser = process.env.BREVO_SMTP_USER;
  const brevoPass = process.env.BREVO_SMTP_PASS;
  const brevoHost = process.env.BREVO_SMTP_HOST;
  const brevoPort = Number(process.env.BREVO_SMTP_PORT);

  if (brevoUser && brevoPass) {
    return nodemailer.createTransport({
      host: brevoHost,
      port: brevoPort,
      secure: false, // Port 587 uses STARTTLS
      auth: {
        user: brevoUser,
        pass: brevoPass,
      },
    });
  }

  if (process.env.EMAIL_USER && process.env.EMAIL_PASS) {
    return nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });
  }

  return null;
}

/**
 * Sends a transactional payment receipt & invoice via Brevo.
 */
export async function sendPaymentInvoiceEmail({
  customerName,
  customerEmail,
  amount,
  paymentId,
  services = [],
  invoiceNo,
  pdfBuffer,
}) {
  const transporter = createTransporter();
  if (!transporter) {
    console.warn("No email transporter configured (Brevo or Gmail missing).");
    return { success: false, error: "No email transporter configured" };
  }

  const senderEmail =
    process.env.BREVO_SENDER_EMAIL ||
    process.env.EMAIL_USER ||
    "contact@tzar.co";
  const adminEmail = process.env.ADMIN_EMAIL || "contact@tzar.co";

  const serviceList = Array.isArray(services)
    ? services.join(", ")
    : services || "Digital Agency Services";

  const recipients = [customerEmail];
  if (adminEmail && adminEmail !== customerEmail) {
    recipients.push(adminEmail);
  }

  const mailOptions = {
    from: `"Tzar Digital Agency" <${senderEmail}>`,
    to: recipients.join(", "),
    subject: `Payment Confirmation & Tax Invoice #${invoiceNo} | Tzar Digital Agency`,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8" />
          <style>
            body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f7f9f6; margin: 0; padding: 24px; color: #0E2015; }
            .container { max-width: 580px; margin: 0 auto; background: #ffffff; border-radius: 16px; overflow: hidden; border: 1px solid #e5eae3; box-shadow: 0 4px 20px rgba(0,0,0,0.05); }
            .header { background: #061309; padding: 32px 28px; text-align: center; }
            .header h1 { color: #ffffff; margin: 0; font-size: 22px; font-weight: 800; letter-spacing: 1px; }
            .header p { color: #FFAE00; margin: 6px 0 0; font-size: 11px; text-transform: uppercase; letter-spacing: 2px; font-weight: 700; }
            .content { padding: 32px 28px; }
            .greeting { font-size: 16px; font-weight: 700; margin-bottom: 8px; color: #0E2015; }
            .message { font-size: 14px; line-height: 1.6; color: #4a5950; margin-bottom: 24px; }
            .receipt-box { background: #F8FAF7; border: 1px solid #e1e8df; border-radius: 12px; padding: 20px; margin-bottom: 24px; }
            .receipt-row { display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px dashed #dbe3d8; font-size: 13px; }
            .receipt-row:last-child { border-bottom: none; padding-top: 12px; font-weight: 800; font-size: 15px; color: #1D4224; }
            .receipt-label { color: #5C6860; }
            .receipt-value { font-weight: 600; text-align: right; color: #0E2015; }
            .badge { display: inline-block; background: #E7F6EB; color: #1D4224; padding: 4px 10px; border-radius: 20px; font-size: 11px; font-weight: 700; margin-bottom: 16px; }
            .notice { font-size: 12px; color: #6e7d73; line-height: 1.5; background: #fafbf9; padding: 14px; border-radius: 8px; border-left: 3px solid #1D4224; }
            .footer { background: #F8FAF7; padding: 20px 28px; text-align: center; font-size: 11px; color: #88968d; border-top: 1px solid #e5eae3; }
            .footer a { color: #1D4224; text-decoration: none; font-weight: 600; }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="header">
              <h1>TZAR DIGITAL AGENCY</h1>
              <p>Official Payment Receipt</p>
            </div>
            <div class="content">
              <span class="badge">Payment Verified</span>
              <div class="greeting">Hi ${customerName || "Valued Client"},</div>
              <p class="message">
                Thank you for your payment. Your transaction has been successfully processed and recorded.
                Your official GST Tax Invoice (PDF) is attached to this email.
              </p>

              <div class="receipt-box">
                <div class="receipt-row">
                  <span class="receipt-label">Invoice Number</span>
                  <span class="receipt-value">#${invoiceNo}</span>
                </div>
                <div class="receipt-row">
                  <span class="receipt-label">Payment ID</span>
                  <span class="receipt-value">${paymentId}</span>
                </div>
                <div class="receipt-row">
                  <span class="receipt-label">Services</span>
                  <span class="receipt-value">${serviceList}</span>
                </div>
                <div class="receipt-row">
                  <span class="receipt-label">Amount Paid</span>
                  <span class="receipt-value">₹${Number(amount).toLocaleString("en-IN")}</span>
                </div>
              </div>

              <div class="notice">
                <strong>Attachment:</strong> Please find your official GST Tax Invoice attached (<code>TZAR_Invoice_${invoiceNo}.pdf</code>) for your accounting and tax records.
              </div>
            </div>
            <div class="footer">
              <p>© ${new Date().getFullYear()} Tzar Digital Agency. All rights reserved.</p>
              <p>Need support? Contact us at <a href="mailto:contact@tzar.co">contact@tzar.co</a></p>
            </div>
          </div>
        </body>
      </html>
    `,
    attachments: pdfBuffer
      ? [
        {
          filename: `TZAR_Invoice_${invoiceNo}.pdf`,
          content: pdfBuffer,
          contentType: "application/pdf",
        },
      ]
      : [],
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    return { success: true, messageId: info.messageId };
  } catch (error) {
    console.error("Brevo Email Dispatch Error:", error);
    return { success: false, error: error.message };
  }
}
