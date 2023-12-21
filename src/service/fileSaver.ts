import { saveAs } from "file-saver";

export const downloadPdf = (pdfFilePath: string, fileName: string) => {
  saveAs(pdfFilePath, fileName);
};
