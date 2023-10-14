import styles from "./Interface.module.css";
import Input from "./Input/Input";
import Buttons from "./Buttons/Buttons";
import { useRef, createContext } from "react";

export const Ref = createContext<any>(null);

export default function Interface() {
  const contentEditableRef = useRef<HTMLDivElement | null>(null);
  const chooseFile = useRef<HTMLDivElement | null>(null);

  return (
    <div className={styles.main}>
      <Ref.Provider value={{ contentEditableRef, chooseFile }}>
        <Input />
        <Buttons />
      </Ref.Provider>
    </div>
  );
}
