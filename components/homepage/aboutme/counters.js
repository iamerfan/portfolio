"use client";
import Image from "next/image";
import styles from "../home.module.scss";

import CountUp from "react-countup/";
export default function Counters() {
  return (
    <div className={styles.Counters}>
      <Image
        className={styles.img}
        src={"/bg1.webp"}
        priority
        alt=""
        fill
        quality={1}
      />
      <div className={styles.CountersContainer}>
        <div className={styles.Counter}>
          <CountUp className={styles.countup} end={10} duration={5} />
          <label>پروژه های انجام شده</label>
        </div>
        <div className={styles.Counter}>
          <CountUp className={styles.countup} end={7} duration={5} />
          <label>رضایت مشتریان</label>
        </div>
        <div className={styles.Counter}>
          <CountUp className={styles.countup} end={200} duration={5} />
          <label>ساعت آموزش تخصصی</label>
        </div>
      </div>
    </div>
  );
}
