
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import { TestReport } from "@/types";

// Generate a multi-page PDF from HTML sections
export const usePdfReport = () => {
  const generatePdf = async (
    report: TestReport, 
    sectionRefs: Array<React.RefObject<HTMLDivElement>>,
    onStart?: () => void,
    onFinish?: () => void
  ) => {
    if (onStart) onStart();
    try {
      const pdf = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: 'a4',
      });

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();

      let addedFirstPage = false;

      for (let i = 0; i < sectionRefs.length; i++) {
        const ref = sectionRefs[i];
        if (!ref.current) continue;
        // eslint-disable-next-line no-await-in-loop
        const canvas = await html2canvas(ref.current, {
          scale: 2,
          useCORS: true,
          backgroundColor: "#fff",
        });
        const imgData = canvas.toDataURL('image/png');
        const imgWidth = pdfWidth;
        const imgHeight = (canvas.height * pdfWidth) / canvas.width;

        if (!addedFirstPage) {
          // Add first page
          pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight > pdfHeight ? pdfHeight : imgHeight);
          addedFirstPage = true;
        } else {
          pdf.addPage();
          pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight > pdfHeight ? pdfHeight : imgHeight);
        }
      }
      // Save with user name and date
      pdf.save(
        `soul-compass-report-${
          report.user.name.replace(/\s+/g, "-").toLowerCase()
        }-${new Date().toISOString().split("T")[0]}.pdf`
      );
    } finally {
      if (onFinish) onFinish();
    }
  };

  return { generatePdf };
};

