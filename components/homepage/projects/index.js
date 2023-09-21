import styles from "../home.module.scss";
import Project from "./project";
import { projects } from "@/libs/data";

export default function Projects() {
  return (
    <div className={styles.Projects} id="نمونه کارها">
      <label className={styles.title}>نمونه کارها</label>
      <div className={styles.ProjectsContainer}>
        {projects.map((project, i) => {
          return <Project data={project} key={i} />;
        })}
      </div>
    </div>
  );
}
