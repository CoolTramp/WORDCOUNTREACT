import { RenderText } from "../../types/types.tsx";

export default function txtFormat(userFile: any, renderText: RenderText) {
  const reader = new FileReader();
  reader.onerror = (error) => {
    console.error("Произошла ошибка чтения файла: ", error);
  };

  let fileContent = "";
  reader.onload = (event: any) => {
    fileContent = event.target.result;
    renderText(fileContent);
  };
  reader.readAsText(userFile);
}
