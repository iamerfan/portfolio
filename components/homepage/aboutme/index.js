import Counters from "@/components/homepage/aboutme/counters";
import styles from "../home.module.scss";
import { abouts } from "@/libs/data";
import AboutCard from "@/components/homepage/aboutme/aboutcard";

export default function Aboutme() {
  //map abouts
  const mapAbouts = abouts.map((about, i) => {
    return <AboutCard item={about} key={i} />;
  });

  return (
    <div className={styles.AboutMe}>
      <Counters />
      <label className={styles.title}>درباره من</label>
      <div className={styles.Abouts}>{mapAbouts}</div>
    </div>
  );
}
