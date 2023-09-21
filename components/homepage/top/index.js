import Image from "next/image";
import styles from "../home.module.scss";
import {
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoTwitter,
  BiLogoWhatsapp,
} from "react-icons/bi";
import Hello from "./hello";

export default function Top() {
  return (
    <div className={styles.top}>
      <Image src={"/bg1.webp"} alt="" fill className={styles.bg} />
      <div className={styles.card}>
        <div className={styles.divider} />
        <div className={styles.img}>
          <Image src={"/erfan.webp"} alt="" fill />
        </div>

        <div className={styles.titles}>
          <Hello />
          <p>
            میتونم در سریعترین زمان ممکن وب اپلیکیشن های مد نظرتونو با بهترین
            کیفیت طراحی کنم و بهت تحویل بدم . همین حالا پیام بده و سفارشتو ثبت
            کن
          </p>
        </div>

        <div className={styles.icons}>
          <BiLogoTwitter />
          <BiLogoInstagram />
          <BiLogoWhatsapp />
          <BiLogoGithub />
        </div>
      </div>
    </div>
  );
}
