import txtFormat from "./file_reader.ts";
import { pdfFormat } from "./read_pdf.ts";
import { RenderText, FORMAT_TYPE } from "../../types/types.tsx";

// "application/pdf"
// "application/vnd.oasis.opendocumen" odt
// "application/vnd.openxmlformats-officedocument.wordprocessingml.document" docx
// "application/msword" doc

function defineFormat(userFileType: string): string | null {
  const FORMATS: FORMAT_TYPE = {
    "text/plain": "txt",
    "application/pdf": "pdf",
  };

  return Boolean(FORMATS[userFileType]) ? FORMATS[userFileType] : null;
}
/**
 * Read text file from input type="file" and
 * render the text on HTMLElement;
 * @param {Object} userFile - contains text's user object
 * @param {HTMLElement} element - a place in webpage
 * where will be to render the user text
 */
export function readFileAndDisplayContent(
  userFile: File,
  renderText: RenderText
) {
  const userTextFormat: string | null | number = defineFormat(userFile.type);
  if (!userTextFormat) {
    console.warn("format is not defined");
    return null;
  }

  const formatReaders: any = {
    txt: txtFormat,
    pdf: pdfFormat,
  };

  if (userTextFormat) {
    formatReaders[userTextFormat](userFile, renderText);
  }
}
