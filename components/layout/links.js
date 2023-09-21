"use client";
import styles from "./layout.module.scss";
import { links } from "@/libs/data";

export default function Links() {
  const handleClick = (id) => document.getElementById(id).scrollIntoView();
  return (
    <div className={styles.links}>
      {links.map((link, i) => (
        <button
          className={styles.link}
          key={i}
          onClick={() => handleClick(link)}
        >
          {link}
        </button>
      ))}
    </div>
  );
}
