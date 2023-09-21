"use client";
import styles from "../home.module.scss";
import { TypeAnimation } from "react-type-animation";

export default function Hello() {
  return (
    <TypeAnimation
      className={styles.hello}
      sequence={[
        "سلام من عرفان هستم.",
        1000,
        "سلام من توسعه دهنده وب هستم.",
        1000,
        "سلام من طراح هستم.",
        1000,
        "سلام من برنامه نویس هستم.",
        1000,
      ]}
      wrapper="span"
      speed={50}
      style={{ fontSize: "2.5rem", display: "inline-block" }}
      repeat={Infinity}
    />
  );
}
