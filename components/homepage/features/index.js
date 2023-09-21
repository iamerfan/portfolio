import styles from "../home.module.scss";
import Feature from "./Feature";
import { features } from "@/libs/data";

export default function Features() {
  return (
    <div className={styles.Features} id="مهارت ها">
      <label className={`${styles.title} ${styles.middle}`}> مهارت ها</label>
      <div className={styles.FeaturesContainer}>
        {features.map((feature, i) => (
          <Feature key={i} data={feature} />
        ))}
      </div>
    </div>
  );
}
