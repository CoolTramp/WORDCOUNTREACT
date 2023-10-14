import { RenderText } from "../../types/types.tsx";
import getLoadingProcent from "./utils.ts";

const script = document.createElement("script");
script.src =
  "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.min.js";
document.head.appendChild(script);
declare var pdfjsLib: any;

export async function pdfFormat(userFile: any, renderText: RenderText) {
  const reader = new FileReader();

  reader.onload = async function (event) {
    const fileContent = event.target?.result;

    pdfjsLib.GlobalWorkerOptions.workerSrc =
      "https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.11.338/pdf.worker.js";
    const pdf = await pdfjsLib.getDocument({ data: fileContent }).promise;
    let pdfText = "";

    for (let pageNumber = 1; pageNumber <= pdf.numPages; pageNumber++) {
      const page = await pdf.getPage(pageNumber);
      const textContent = await page.getTextContent();

      textContent.items.forEach(function (textItem: any) {
        pdfText += textItem.str + " ";
      });
      renderText(getLoadingProcent(pageNumber, pdf.numPages));
    }
    renderText(pdfText);
  };
  reader.readAsArrayBuffer(userFile);
}
