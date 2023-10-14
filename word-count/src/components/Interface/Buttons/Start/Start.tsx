import { useSelector, useDispatch } from "react-redux";
import styles from "./Start.module.css";
import { getCountedWord } from "../../../../scripts/api.ts";
import { save } from "../../../../features/countedWord.tsx";
import { Words } from "../../../../types/types.tsx";
import { useEffect } from "react";
import { useState } from "react";

export default function Start() {
  const dispatch = useDispatch();
  const userText = useSelector((state: any) => state.userText.value);
  const [newUserText, setNewUserText] = useState<boolean>(true);

  const saveCountedWord = (countedWord: Words) => {
    if (typeof countedWord === "number") {
    }
    dispatch(save(countedWord));
  };

  useEffect(() => {
    setNewUserText(true);
  }, [userText]);

  const handle = () => {
    if (newUserText) {
      getCountedWord(userText, saveCountedWord);
      setNewUserText(false);
    }
  };

  return (
    <button onClick={handle} className={styles.main}>
      start count
    </button>
  );
}
