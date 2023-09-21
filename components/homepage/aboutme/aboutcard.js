import styles from "../home.module.scss";
export default function AboutCard({ item }) {
  return (
    <div className={styles.AboutCard}>
      {item.icon}
      <label>{item.title}</label>
      <h3>{item.data}</h3>
    </div>
  );
}
