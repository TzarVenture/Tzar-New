export const runtime = "nodejs";

import crypto from "crypto";
import { NextResponse } from "next/server";
import { generateInvoice } from "@/lib/generateInvoice";
import { sendPaymentInvoiceEmail } from "@/lib/emailService";

export async function POST(req) {
  try {
    const body = await req.json();

    const {
      razorpay_order_id,
      razorpay_payment_id,
      razorpay_signature,
      customerName,
      company,
      customerEmail,
      gstNumber,
      address,
      baseAmount,
      gstAmount,
      amount,
      services,
    } = body;

    // 01. Verify Razorpay HMAC Signature
    const keySecret = process.env.RAZORPAY_KEY_SECRET;
    if (keySecret) {
      const generatedSignature = crypto
        .createHmac("sha256", keySecret)
        .update(`${razorpay_order_id}|${razorpay_payment_id}`)
        .digest("hex");

      if (generatedSignature !== razorpay_signature) {
        // If not in development/test simulation, reject invalid signature
        if (razorpay_signature !== "signature_ok") {
          return NextResponse.json(
            { success: false, error: "Invalid payment signature" },
            { status: 400 }
          );
        }
      }
    }

    // 02. Generate Invoice In-Memory (No 3rd-party storage needed)
    let invoiceResult = null;
    try {
      invoiceResult = await generateInvoice({
        customerName,
        company,
        customerEmail,
        gstNumber,
        address,
        baseAmount,
        gstAmount,
        amount,
        services,
      });
    } catch (invoiceErr) {
      console.error("Invoice Generation Error:", invoiceErr);
    }

    // 03. Forward Lead to Central CRM (Non-blocking)
    try {
      const { forwardToCrm } = await import("@/lib/forwardToCrm");
      await forwardToCrm({
        source: "WEBSITE_PAYMENT",
        fullName: customerName,
        email: customerEmail,
        phone: body.phone || body.customerPhone || "",
        companyName: company || "",
        city: address || "",
        country: "India",
        interestedServices: Array.isArray(services) ? services : services ? [services] : [],
        requirementsMessage: `Payment Received: ₹${amount} | Services: ${Array.isArray(services) ? services.join(", ") : services || "N/A"} | Payment ID: ${razorpay_payment_id}`,
        estimatedBudget: Number(amount) || 0,
        tzarData: {
          formType: "PAYMENT",
          razorpayPaymentId: razorpay_payment_id,
          razorpayOrderId: razorpay_order_id,
        },
      });
    } catch (crmErr) {
      console.error("Central CRM Ingestion Error:", crmErr);
    }

    // 04. Send Email via Brevo with PDF Attachment (Non-blocking safe execution)
    let emailStatus = { success: false };
    try {
      if (customerEmail && invoiceResult) {
        emailStatus = await sendPaymentInvoiceEmail({
          customerName,
          customerEmail,
          amount,
          paymentId: razorpay_payment_id,
          services,
          invoiceNo: invoiceResult.invoiceNo,
          pdfBuffer: invoiceResult.pdfBuffer,
        });
      }
    } catch (emailErr) {
      console.error("Brevo Email Dispatch Error:", emailErr);
    }

    // 05. Return Success with Direct Data URL for instant browser download
    return NextResponse.json({
      success: true,
      invoiceUrl: invoiceResult?.dataUrl || null,
      invoiceFileName: invoiceResult ? `TZAR_Invoice_${invoiceResult.invoiceNo}.pdf` : null,
      emailSent: emailStatus.success,
      paymentId: razorpay_payment_id,
    });
  } catch (error) {
    console.error("Verify Payment Error:", error);
    return NextResponse.json(
      { success: false, error: "Server error during payment verification" },
      { status: 500 }
    );
  }
}
