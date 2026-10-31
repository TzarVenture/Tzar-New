import PDFDocument from "pdfkit";

export async function generateInvoice(data) {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ size: "A4", margin: 50 });

      const buffers = [];
      doc.on("data", (chunk) => buffers.push(chunk));

      const invoiceNo = `2025${Date.now().toString().slice(-4)}`;
      const invoiceDate = new Date().toLocaleDateString("en-GB");

      doc.on("end", () => {
        try {
          const pdfBuffer = Buffer.concat(buffers);
          const base64 = pdfBuffer.toString("base64");
          const dataUrl = `data:application/pdf;base64,${base64}`;

          resolve({
            pdfBuffer,
            base64,
            dataUrl,
            invoiceNo,
            invoiceDate,
          });
        } catch (err) {
          reject(err);
        }
      });

      doc.on("error", (err) => {
        reject(err);
      });

      // ===== PDF CONTENT =====
      const pageWidth = doc.page.width;
      const startX = 50;
      const rightX = 350;

      doc.font("Times-Bold").fontSize(20).text("TZAR", startX, 40);
      doc.fontSize(11).text("TZAR Digital Agency", startX, 70);
      doc.text("DIGITAL MARKETING AGENCY", startX, 90);

      doc.text(`Invoice No: ${invoiceNo}`, startX, 140);
      doc.text(`Date Issued: ${invoiceDate}`, startX, 160);

      let issuedY = 140;
      doc.font("Times-Bold").text("Issued to:", rightX, issuedY);
      issuedY += 25;

      doc.font("Times-Roman").text(data.customerName || "-", rightX, issuedY);
      issuedY += 18;

      if (data.company) {
        doc.text(data.company, rightX, issuedY);
        issuedY += 18;
      }
      if (data.address) {
        doc.text(data.address, rightX, issuedY, { width: 200 });
        issuedY += 40;
      }
      if (data.gstNumber) {
        doc.text(`GST: ${data.gstNumber}`, rightX, issuedY);
      }

      const baseAmount = Number(data.baseAmount || data.amount || 0);
      const cgst = Math.round(baseAmount * 0.09);
      const sgst = Math.round(baseAmount * 0.09);
      const grandTotal = baseAmount + cgst + sgst;

      let tableTop = 260;
      const rowHeight = 35;
      const tableWidth = pageWidth - 100;

      doc.rect(startX, tableTop, tableWidth, rowHeight).stroke();
      doc.font("Times-Bold").text("Description", startX + 10, tableTop + 10);
      doc.text("Amount", pageWidth - 130, tableTop + 10);

      tableTop += rowHeight;

      const description = Array.isArray(data.services)
        ? data.services.join(", ")
        : data.services || "Digital Agency Services";

      doc.rect(startX, tableTop, tableWidth, rowHeight * 2).stroke();
      doc.font("Times-Roman")
        .text(description, startX + 10, tableTop + 10, { width: 350 })
        .text(`Rs ${baseAmount.toLocaleString("en-IN")}`, pageWidth - 130, tableTop + 10);

      tableTop += rowHeight * 2;

      let totalY = tableTop + 30;

      doc.font("Times-Bold").text("SUBTOTAL", pageWidth - 220, totalY);
      doc.text(`Rs ${baseAmount.toLocaleString("en-IN")}`, pageWidth - 130, totalY);

      totalY += 20;
      doc.text("CGST 9%", pageWidth - 220, totalY);
      doc.text(`Rs ${cgst.toLocaleString("en-IN")}`, pageWidth - 130, totalY);

      totalY += 20;
      doc.text("SGST 9%", pageWidth - 220, totalY);
      doc.text(`Rs ${sgst.toLocaleString("en-IN")}`, pageWidth - 130, totalY);

      totalY += 25;
      doc.fontSize(12).text("GRAND TOTAL", pageWidth - 220, totalY);
      doc.text(`Rs ${grandTotal.toLocaleString("en-IN")}`, pageWidth - 130, totalY);

      doc.fontSize(10).text(
        `IN WORDS: Rupees ${numberToWords(grandTotal)} Only`,
        startX,
        totalY + 40
      );

      doc.fontSize(18).text("Thank You !", startX, totalY + 100, {
        align: "right",
        width: tableWidth,
      });

      doc.end();
    } catch (err) {
      reject(err);
    }
  });
}

function numberToWords(num) {
  const a = [
    "", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten",
    "Eleven", "Twelve", "Thirteen", "Fourteen", "Fifteen", "Sixteen", "Seventeen", "Eighteen", "Nineteen",
  ];
  const b = ["", "", "Twenty", "Thirty", "Forty", "Fifty", "Sixty", "Seventy", "Eighty", "Ninety"];
  if (num === 0) return "Zero";
  if (num < 20) return a[num];
  if (num < 100) return b[Math.floor(num / 10)] + " " + a[num % 10];
  if (num < 1000) return a[Math.floor(num / 100)] + " Hundred " + numberToWords(num % 100);
  if (num < 100000) return numberToWords(Math.floor(num / 1000)) + " Thousand " + numberToWords(num % 1000);
  return num.toString();
}
