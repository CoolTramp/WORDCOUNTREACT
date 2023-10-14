import styles from "./ChooseFile.module.css";
import { readFileAndDisplayContent } from "../../../../scripts/work_with_text/format_detector.ts";
import { useDispatch } from "react-redux";
import { setText } from "../../../../features/userText";
import { useContext, useEffect, useState } from "react";
import { Ref } from "../../Interface.tsx";

export default function ChooseFile() {
  const { contentEditableRef, chooseFile } = useContext(Ref);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loading
      ? contentEditableRef.current.classList.add(styles.loading)
      : contentEditableRef.current.classList.remove(styles.loading);
  }, [loading]);

  const renderText = (text: string | number) => {
    dispatch(setText(text));

    if (typeof text === "number") {
      setLoading(true);
      contentEditableRef.current.innerHTML = text + "%";
    } else {
      setLoading(false);
      contentEditableRef.current.innerHTML = text;
    }
  };

  function handleFile(e: any) {
    const userFile = e.target.files[0];
    readFileAndDisplayContent(userFile, renderText);
  }

  return (
    <div>
      <input
        ref={chooseFile}
        onChange={(e) => handleFile(e)}
        type="file"
        accept=".txt,.pdf"
        className={styles.main}
      ></input>
    </div>
  );
}
