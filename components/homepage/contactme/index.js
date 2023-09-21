import Image from "next/image";
import styles from "../home.module.scss";
import {
  BiLogoGithub,
  BiLogoInstagram,
  BiLogoLinkedin,
  BiLogoTelegram,
  BiLogoTwitter,
  BiLogoWhatsapp,
} from "react-icons/bi";
import Form from "./form";
import Link from "next/link";

export default function ContactMe() {
  return (
    <div className={styles.ContactMe} id="تماس با من">
      <label className={styles.title}>تماس با من</label>
      <div className={styles.ContactContainer}>
        <div className={styles.img}>
          <Image src={"/contact.webp"} alt="" fill />
        </div>
        <Form />
      </div>
      <h2>راه های ارتباطی</h2>

      <div className={styles.SocialMedias}>
        <Link href={"https://t.me/I_am_erfan"} className={styles.link}>
          <BiLogoTelegram />
        </Link>
        <Link href={"https://wa.me/00989399486478"} className={styles.link}>
          <BiLogoWhatsapp />
        </Link>
        <Link href={"https://github.com/iamerfan"} className={styles.link}>
          <BiLogoGithub />
        </Link>
        <Link
          href={"https://www.instagram.com/i.am.erfan/"}
          className={styles.link}
        >
          <BiLogoInstagram />
        </Link>
        <Link href={"https://twitter.com/erfan_hz1"} className={styles.link}>
          <BiLogoTwitter />
        </Link>
        <Link
          href={"https://www.linkedin.com/in/erfan-hosseini-83aa45290/"}
          className={styles.link}
        >
          <BiLogoLinkedin />
          <div className={styles.whitediv} />
        </Link>
      </div>
    </div>
  );
}
