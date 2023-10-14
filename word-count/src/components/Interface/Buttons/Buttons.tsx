import styles from "./Buttons.module.css";
import ChooseFile from "./ChooseFile/ChooseFile";
import Clean from "../Buttons/Clean/Clean";
import Start from "./Start/Start";

export default function Buttons() {
  return (
    <div className={styles.main}>
      <ChooseFile />
      <div className={styles.container}>
        <div className={styles.container}>
          <Clean />
        </div>
        <Start />
      </div>
    </div>
  );
}
