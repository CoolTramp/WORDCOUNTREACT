import styles from "./Clean.module.css";
import "../../../../App.css";
import { useDispatch } from "react-redux";
import { deleteText } from "../../../../features/userText";
import { useContext } from "react";
import { Ref } from "../../Interface.tsx";

export default function Clean() {
  const { chooseFile } = useContext(Ref);
  const dispatch = useDispatch();

  function deleteAll() {
    dispatch(deleteText());
    chooseFile.current.value = null;
  }

  return <button onClick={deleteAll} className={`btn ${styles.main}`}></button>;
}
