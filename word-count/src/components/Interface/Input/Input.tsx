import styles from "./Input.module.css";
import { useEffect, useState } from "react";
import { setText } from "../../../features/userText";
import { useDispatch, useSelector } from "react-redux";
import { useContext } from "react";
import { Ref } from "../Interface";

export default function Input() {
  const userText: string = useSelector((state: any) => state.userText.value);
  const dispatch = useDispatch();
  const [placeholder, setPlaceholder] = useState("...");
  const { contentEditableRef } = useContext(Ref);

  function cleanTextArea() {
    if (contentEditableRef.current?.innerHTML) {
      contentEditableRef.current.innerHTML = "";
    }
  }

  useEffect(() => {
    if (contentEditableRef.current) {
      if (userText.length === 0) {
        cleanTextArea();
      }
    }
  }, [userText]);

  const handlers = (e: any) => {
    dispatch(setText(e.target.innerText));
  };

  const blur = () => {
    if (userText.length === 0) setPlaceholder("...");
  };

  const focus = () => {
    if (userText.length === 0) setPlaceholder("");
  };

  return (
    <div className={styles.main}>
      <div
        onFocus={focus}
        onBlur={blur}
        className={styles.area}
        onInput={handlers}
        contentEditable="true"
        ref={contentEditableRef}
      >
        {placeholder}
      </div>
    </div>
  );
}
