import clientPromise from "@/lib/mongodb";
import { forwardToCrm } from "@/lib/forwardToCrm";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const fullName = data.fullname || data.name || "Anonymous";
    const email = data.email || "";
    const phone = data.phone || "";
    const service = data.services || data.service || "General Inquiry";
    const message =
      data.message ||
      `Service: ${service}${data.city ? ` | City: ${data.city}` : ""}${
        data.state ? ` | State: ${data.state}` : ""
      }${data.pincode ? ` | PIN: ${data.pincode}` : ""}`;

    // 1. Save to MongoDB
    const client = await clientPromise;
    const db = client.db("contact_db");
    const collection = db.collection("contacts");

    const mongoDoc = {
      name: fullName,
      email,
      phone,
      service,
      city: data.city || "",
      state: data.state || "",
      pincode: data.pincode || "",
      country: data.country || "India",
      message,
      createdAt: new Date(),
    };

    await collection.insertOne(mongoDoc);
    console.log("Saved to MongoDB (contacts):", mongoDoc);

    // 2. Forward to Central CRM
    await forwardToCrm({
      source: "WEBSITE_CONTACT",
      name: fullName,
      email,
      phone,
      city: data.city || "",
      country: data.country || "India",
      interestedServices: [service],
      message,
      tzarData: {
        formType: "CONTACT",
        pincode: data.pincode || "",
        state: data.state || "",
      },
    });

    // 3. Post to Google Sheets Webhook if configured
    const sheetsWebhook = process.env.GOOGLE_SHEETS_WEBHOOK;
    if (sheetsWebhook) {
      try {
        await fetch(sheetsWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...mongoDoc,
            fullname: fullName,
          }),
        });
      } catch (sheetErr) {
        console.warn("Google Sheets webhook error:", sheetErr);
      }
    }

    return NextResponse.json({ success: true, message: "Enquiry submitted successfully" });
  } catch (err: any) {
    console.error("Error in /api/submit-form:", err);
    return NextResponse.json(
      { success: false, error: err?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
