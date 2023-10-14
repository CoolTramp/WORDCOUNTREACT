import { useSelector } from "react-redux";
import styles from "./AnotherCard.module.css";

export default function AnotherCard(prop: { currentColor: number }) {
  const { currentColor } = prop;
  const AVALIABLE_COLOR_INDEX = 2;
  const widthWordCard = currentColor - AVALIABLE_COLOR_INDEX;
  const countedWord = useSelector((state: any) => state.countedWord.value);

  return (
    <div className={styles.another}>
      <table>
        {countedWord.count[widthWordCard] &&
          Object.entries(countedWord.count[widthWordCard])
            .sort((a: any, b: any) => {
              return a[1] - b[1];
            })
            .map((all) => {
              const [word, count] = all;

              if (word && count) {
                return (
                  <tr>
                    <td>{word}</td>
                    <td>{String(count)}</td>
                  </tr>
                );
              }
            })}
      </table>
    </div>
  );
}
// return <p key={index}>{`${word}:  ${count}`}</p>;
