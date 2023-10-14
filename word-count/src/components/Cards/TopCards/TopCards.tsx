import styles from "./TopCards.module.css";
import { CARD_COLORS } from "../../../scripts/card_scripts/colors";
import { setCurrentColor } from "../../../features/currentColor";
import { useDispatch, useSelector } from "react-redux";

export default function TopCards() {
  const currentColor = useSelector((state: any) => state.currentColor.value);
  const countedWord = useSelector((state: any) => state.countedWord.value);
  // first two indexes  for left cards
  const AVALIABLE_COLOR_INDEX = 2;

  const dispatch = useDispatch();

  function active(num: number) {
    dispatch(setCurrentColor(num));
  }

  return (
    <div className={styles.main}>
      {countedWord.count &&
        Object.entries(countedWord?.count).map((num) => {
          const wordLength = Number(num[0]);
          // the card number is equal the word length which
          // the card will be contains
          const cardNumber = wordLength + AVALIABLE_COLOR_INDEX;
          return (
            <button
              key={cardNumber}
              onClick={() => active(cardNumber)}
              style={{
                backgroundColor: CARD_COLORS[cardNumber],
              }}
              className={`${styles.btn} ${
                currentColor === cardNumber && styles.close
              }`}
            >
              {wordLength}
            </button>
          );
        })}
    </div>
  );
}
