import clientPromise from "@/lib/mongodb";
import { forwardToCrm } from "@/lib/forwardToCrm";
import { NextResponse } from "next/server";
import { writeFile, mkdir } from "fs/promises";
import path from "path";

export async function POST(req: Request) {
  try {
    let fullName = "";
    let email = "";
    let phone = "";
    let internshipType = "";
    let filePath = "";
    let portfolio = "";
    let resumeNote = "";

    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      const form = await req.formData();
      fullName = (form.get("fullName") || form.get("name") || "").toString();
      email = (form.get("email") || "").toString();
      phone = (form.get("phone") || "").toString();
      internshipType = (form.get("internshipType") || form.get("role") || "").toString();
      portfolio = (form.get("portfolio") || "").toString();
      resumeNote = (form.get("resumeNote") || "").toString();

      const file = form.get("resume");
      if (file && typeof file === "object" && "name" in file && (file as File).size > 0) {
        const fileObj = file as File;
        const bytes = await fileObj.arrayBuffer();
        const buffer = Buffer.from(bytes);

        const uploadsDir = path.join(process.cwd(), "public", "uploads");
        await mkdir(uploadsDir, { recursive: true });

        const safeName = `${Date.now()}-${fileObj.name.replace(/[^a-zA-Z0-9.-]/g, "_")}`;
        filePath = `/uploads/${safeName}`;
        const fullPath = path.join(uploadsDir, safeName);

        await writeFile(fullPath, buffer);
        console.log("Resume file saved:", fullPath);
      } else if (typeof file === "string") {
        filePath = file;
      }
    } else {
      const data = await req.json().catch(() => ({}));
      fullName = data.fullName || data.name || "";
      email = data.email || "";
      phone = data.phone || "";
      internshipType = data.internshipType || data.role || "";
      filePath = data.resume || "";
      portfolio = data.portfolio || "";
      resumeNote = data.resumeNote || "";
    }

    // 1. Save to MongoDB
    const client = await clientPromise;
    const db = client.db("contact_db");
    const collection = db.collection("hireus");

    const mongoDoc = {
      fullName,
      email,
      phone,
      internshipType,
      resume: filePath,
      portfolio,
      resumeNote,
      createdAt: new Date(),
    };

    const insertResult = await collection.insertOne(mongoDoc);
    console.log("Saved to MongoDB (hireus):", mongoDoc);

    // 2. Forward to Central CRM
    await forwardToCrm({
      source: "HIRE_US",
      fullName,
      email,
      phone,
      interestedServices: internshipType ? [internshipType] : [],
      requirementsMessage: `Role: ${internshipType || "N/A"}${filePath ? ` | Resume: ${filePath}` : ""}${portfolio ? ` | Portfolio: ${portfolio}` : ""}${resumeNote ? ` | Note: ${resumeNote}` : ""}`,
      tzarData: {
        formType: "HIRE_US",
        resumeUrl: filePath,
        portfolio,
      },
    });

    // 3. Post to Google Sheets
    const sheetsWebhook = process.env.GOOGLE_SHEETS_WEBHOOK;
    if (sheetsWebhook) {
      try {
        await fetch(sheetsWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            ...mongoDoc,
            id: insertResult.insertedId.toString(),
          }),
        });
      } catch (sheetErr) {
        console.warn("Google Sheets webhook error:", sheetErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully",
      file: filePath,
      id: insertResult.insertedId.toString(),
    });
  } catch (err: any) {
    console.error("Error in /api/hireus:", err);
    return NextResponse.json(
      { success: false, error: err?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
