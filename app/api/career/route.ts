import clientPromise from "@/lib/mongodb";
import { forwardToCrm } from "@/lib/forwardToCrm";
import { NextResponse } from "next/server";
import { uploadResumeToCloudinary } from "@/lib/cloudinary";


export async function POST(req: Request) {
  try {
    let fullName = "";
    let email = "";
    let phone = "";
    let role = "General Application";
    let department = "";
    let experience = "";
    let noticePeriod = "";
    let portfolio = "";
    let resumeNote = "";
    let currentCompany = "";
    let city = "Mumbai";
    let filePath = "";

    const contentType = req.headers.get("content-type") || "";

    if (contentType.includes("multipart/form-data")) {
      const form = await req.formData();
      fullName = (form.get("fullName") || form.get("name") || "").toString().trim();
      email = (form.get("email") || "").toString().trim();
      phone = (form.get("phone") || "").toString().trim();
      role = (form.get("role") || form.get("position") || "General Application").toString().trim();
      department = (form.get("department") || "").toString().trim();
      experience = (form.get("experience") || "").toString().trim();
      noticePeriod = (form.get("noticePeriod") || "").toString().trim();
      portfolio = (form.get("portfolio") || form.get("linkedin") || "").toString().trim();
      resumeNote = (form.get("resumeNote") || form.get("message") || "").toString().trim();
      currentCompany = (form.get("currentCompany") || "").toString().trim();
      city = (form.get("city") || "Mumbai").toString().trim();

      const file = form.get("resume");
      if (file && typeof file === "object" && "name" in file && (file as File).size > 0) {
        const fileObj = file as File;

        // Limit file size to 15MB
        if (fileObj.size > 15 * 1024 * 1024) {
          return NextResponse.json(
            { success: false, error: "Resume file must be under 15MB" },
            { status: 400 }
          );
        }

        const bytes = await fileObj.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Upload directly to Cloudinary (Bypasses serverless filesystem completely)
        filePath = await uploadResumeToCloudinary(buffer, fileObj.name);
        console.log("Career resume uploaded successfully to Cloudinary:", filePath);
      } else if (typeof file === "string" && file.length > 0) {
        filePath = file;
      }
    } else {
      const data = await req.json().catch(() => ({}));
      fullName = (data.fullName || data.name || "").toString().trim();
      email = (data.email || "").toString().trim();
      phone = (data.phone || "").toString().trim();
      role = (data.role || data.position || "General Application").toString().trim();
      department = (data.department || "").toString().trim();
      experience = (data.experience || "").toString().trim();
      noticePeriod = (data.noticePeriod || "").toString().trim();
      portfolio = (data.portfolio || data.linkedin || "").toString().trim();
      resumeNote = (data.resumeNote || data.message || "").toString().trim();
      currentCompany = (data.currentCompany || "").toString().trim();
      city = (data.city || "Mumbai").toString().trim();
      filePath = (data.resume || "").toString().trim();
    }

    if (!fullName || !email) {
      return NextResponse.json(
        { success: false, error: "Candidate full name and email are required" },
        { status: 400 }
      );
    }

    // 1. Save to MongoDB (Fault-tolerant)
    let candidateId = Date.now().toString();
    try {
      const client = await clientPromise;
      const db = client.db("contact_db");

      const applicationDoc = {
        fullName,
        email,
        phone,
        role,
        department,
        experience,
        noticePeriod,
        portfolio,
        resumeNote,
        currentCompany,
        city,
        resume: filePath,
        status: "New",
        source: "CAREER_APPLICATION",
        createdAt: new Date(),
      };

      // Store in dedicated 'careers' collection and mirror into 'hireus' for unified admin visibility
      const careerCollection = db.collection("careers");
      const insertResult = await careerCollection.insertOne(applicationDoc);
      candidateId = insertResult.insertedId.toString();

      const hireusCollection = db.collection("hireus");
      await hireusCollection.insertOne({
        fullName,
        email,
        phone,
        internshipType: `Career: ${role}`,
        resume: filePath,
        portfolio,
        resumeNote: `Role: ${role} | Exp: ${experience} | Notice: ${noticePeriod}${
          resumeNote ? ` | Note: ${resumeNote}` : ""
        }`,
        source: "CAREER_PAGE",
        createdAt: new Date(),
      });

      console.log("Saved Career application to MongoDB:", applicationDoc);
    } catch (mongoErr: any) {
      console.warn("MongoDB write warning in /api/career (continuing to CRM):", mongoErr?.message || mongoErr);
    }

    // 2. Forward to Central CRM
    const requirementsMessage = `Job Application for [${role}]
Experience: ${experience || "N/A"}
Notice Period: ${noticePeriod || "N/A"}
Current Company: ${currentCompany || "N/A"}
Portfolio / Profile: ${portfolio || "N/A"}
Resume File: ${filePath || "N/A"}
Candidate Note: ${resumeNote || "N/A"}`;

    await forwardToCrm({
      source: "CAREER_APPLICATION",
      fullName,
      email,
      phone,
      city,
      country: "India",
      interestedServices: [role],
      requirementsMessage,
      tzarData: {
        formType: "CAREER_APPLICATION",
        role,
        department,
        experience,
        noticePeriod,
        portfolio,
        resumeUrl: filePath,
        currentCompany,
      },
    });

    // 3. Post to Google Sheets webhook if configured
    const sheetsWebhook = process.env.GOOGLE_SHEETS_WEBHOOK;
    if (sheetsWebhook) {
      try {
        await fetch(sheetsWebhook, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            id: candidateId,
            type: "Career Application",
            fullName,
            email,
            phone,
            role,
            department,
            experience,
            noticePeriod,
            portfolio,
            resume: filePath,
            resumeNote,
            createdAt: new Date().toISOString(),
          }),
        });
      } catch (sheetErr) {
        console.warn("Google Sheets webhook error:", sheetErr);
      }
    }

    return NextResponse.json({
      success: true,
      message: "Application submitted successfully! Our talent team will review your profile.",
      id: candidateId,
      resume: filePath,
    });
  } catch (err: any) {
    console.error("Error in /api/career:", err);
    return NextResponse.json(
      { success: false, error: err?.message || "Internal server error" },
      { status: 500 }
    );
  }
}
