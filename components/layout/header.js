import ThemeToggle from "./ThemeToggle";
import styles from "./layout.module.scss";
import Links from "./links";

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.right}>
        <Links />
      </div>
    </div>
  );
}
