import styles from "../home.module.scss";
import Slider from "./slider";

export default function Feature({ data }) {
  return (
    <div className={styles.Feature}>
      <div className={styles.FeatureTitle}>
        <h3>
          {data.logo}
          {data.title}
        </h3>
        <label>{data.time}</label>
      </div>
      <div className={styles.FeatureData}>
        <h2>{data.titleLeft}</h2>
        <p>{data.description}</p>
        <Slider percentage={data.percentage} />
      </div>
    </div>
  );
}
