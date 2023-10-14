import { useSelector } from "react-redux";
import styles from "./AnotherCard.module.css";

export default function CommonCard() {
  const countedWord = useSelector((state: any) => state.countedWord.value);

  return (
    <table className={styles.center}>
      <thead>
        <tr>
          <td>word's length:</td>
          <td>word's number:</td>
        </tr>
      </thead>
      <tbody>
        {countedWord.meta &&
          Object.entries(countedWord.meta).map((num) => {
            return (
              <tr>
                <td>{num[0]}</td>
                <td>{String(num[1])}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
}
