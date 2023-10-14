import styles from "./Cards.module.css";
import TopCards from "./TopCards/TopCards";
import Area from "./Area/Area";
import LeftCards from "./LeftCards/LeftCards";

export default function Cards() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <LeftCards />
        <div className={styles.area}>
          <TopCards />
          <Area />
        </div>
      </div>
    </div>
  );
}
