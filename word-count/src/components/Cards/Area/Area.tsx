import styles from "./Area.module.css";
import { CARD_COLORS } from "../../../scripts/card_scripts/colors";
import { useSelector } from "react-redux";
import CommonCard from "./Card/CommonCard";
import InfoCard from "./Card/InfoCard";
import AnotherCard from "./Card/AnotherCard";

export default function Area() {
  const currentColor: number = useSelector(
    (state: any) => state.currentColor.value
  );

  const style = {
    backgroundColor: CARD_COLORS[currentColor],
  };

  return (
    <div style={style} className={styles.main}>
      {currentColor === 0 && <InfoCard />}
      {currentColor === 1 && <CommonCard />}
      {currentColor > 1 && <AnotherCard currentColor={currentColor} />}
    </div>
  );
}
