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
        <div className={styles.link}>
          <BiLogoTelegram />
        </div>
        <div className={styles.link}>
          <BiLogoWhatsapp />
        </div>
        <div className={styles.link}>
          <BiLogoGithub />
        </div>
        <div className={styles.link}>
          <BiLogoInstagram />
        </div>
        <div className={styles.link}>
          <BiLogoTwitter />
        </div>
        <div className={styles.link}>
          <BiLogoLinkedin />
          <div className={styles.whitediv} />
        </div>
      </div>
    </div>
  );
}
