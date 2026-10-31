import { v2 as cloudinary } from "cloudinary";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  secure: true,
});

/**
 * Uploads a document buffer (PDF, DOC, DOCX) directly to Cloudinary
 * Bypasses local filesystem writes for 100% Vercel/serverless compatibility.
 */
export async function uploadResumeToCloudinary(
  buffer: Buffer,
  originalFileName: string
): Promise<string> {
  const cleanBase = originalFileName
    .replace(/\.[^/.]+$/, "")
    .replace(/[^a-zA-Z0-9_-]/g, "_");
  const publicId = `${Date.now()}-${cleanBase}`;

  return new Promise((resolve, reject) => {
    const uploadStream = cloudinary.uploader.upload_stream(
      {
        folder: "tzar/resumes",
        resource_type: "auto",
        public_id: publicId,
      },
      (error, result) => {
        if (error) {
          console.error("Cloudinary upload error:", error);
          return reject(new Error(error.message || "Failed to upload resume to Cloudinary"));
        }
        if (!result?.secure_url) {
          return reject(new Error("Cloudinary did not return a secure URL"));
        }
        resolve(result.secure_url);
      }
    );

    uploadStream.end(buffer);
  });
}

export default cloudinary;

