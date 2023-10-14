import styles from "./LeftCards.module.css";
import { CARD_COLORS } from "../../../scripts/card_scripts/colors";
import { setCurrentColor } from "../../../features/currentColor";
import { useDispatch, useSelector } from "react-redux";

export default function LeftCards() {
  const clicked = useSelector((state: any) => state.currentColor.value);

  const dispatch = useDispatch();

  function active(num: number) {
    dispatch(setCurrentColor(num));
  }

  return (
    <div className={styles.main}>
      <button
        onClick={() => active(0)}
        style={{ backgroundColor: CARD_COLORS[0] }}
        className={`${styles.btn} ${styles.info} ${
          clicked === 0 && styles.close
        }`}
      >
        info
      </button>
      <button
        onClick={() => active(1)}
        style={{ backgroundColor: CARD_COLORS[1] }}
        className={`${styles.btn} ${styles.common} ${
          clicked === 1 && styles.close
        }`}
      >
        common
      </button>
    </div>
  );
}
