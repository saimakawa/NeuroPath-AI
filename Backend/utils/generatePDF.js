import PDFDocument from "pdfkit";
import fs from "fs";

export const generatePDF = (skills, ideas) => {
  const doc = new PDFDocument();
  doc.pipe(fs.createWriteStream("report.pdf"));

  doc.fontSize(20).text("FutureProof AI Report");
  doc.moveDown();

  doc.fontSize(14).text("Skills:");
  skills.forEach((s) =>
    doc.text(`${s.skillName} - ${s.status} (${s.decayPercent.toFixed(1)}%)`),
  );

  doc.moveDown();
  doc.text("Ideas:");
  ideas.forEach((i) =>
    doc.text(`${i.title} - ${i.category} (${i.longevityScore})`),
  );

  doc.end();
};
