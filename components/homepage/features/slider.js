"use client";
import { useEffect, useState } from "react";
import styles from "../home.module.scss";

export default function Slider({ percentage }) {
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPercent((prevPercent) => {
        if (prevPercent < percentage) {
          return prevPercent + 1;
        }
        return prevPercent;
      });
    }, 1);

    // Clean up the interval when the component is unmounted
    return () => clearInterval(interval);
    // eslint-disable-next-line
  }, []);

  return (
    <div className={styles.slider}>
      <div style={{ width: `${percent}%` }}>
        <label style={percent <= 60 ? { top: "1.5rem" } : {}}>{percent}%</label>
      </div>
    </div>
  );
}
