import ContactMe from "./contactme";
import AboutMe from "./aboutme";
import Features from "./features";
import styles from "./home.module.scss";
import Projects from "./projects";
import TopCard from "./top";

export default function Homepage() {
  return (
    <div className={styles.home}>
      <TopCard />
      <AboutMe />
      <Features />
      <Projects />
      <ContactMe />
    </div>
  );
}
