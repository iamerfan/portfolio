import Image from "next/image";
import styles from "../home.module.scss";
import { BiCode, BiLink } from "react-icons/bi";
import Link from "next/link";

export default function Project({ data }) {
  return (
    <div className={`${styles.Project} ${data.reverse && styles.reverse}`}>
      <div className={styles.img}>
        {data.vpn && (
          <div className={styles.vpn}>برای مشاهده لطفا از Vpn استفاده کنید</div>
        )}
        <div className={styles.hidden}>
          <Link href={data.link}>
            <BiLink />
            مشاهده پروژه
          </Link>
          <Link href={data.code}>
            <BiCode />
            مشاهده کد
          </Link>
        </div>
        <Image src={data.src} fill alt="" />
      </div>
      <div className={styles.titles}>
        <h2>{data.title}</h2>
        {data.sections.map((section, i) => {
          return (
            <div className={styles.section} key={i}>
              <label> {section.title} : </label>
              <h4> {section.data}</h4>
            </div>
          );
        })}
      </div>
    </div>
  );
}
