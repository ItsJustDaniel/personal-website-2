import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import styles from "/styles/project.module.css";
import { useState } from "react";

const Projects = (projects) => {
  const [sortedProjects] = useState(
    projects.projects.sort((a, b) => {
      if (a.acf.piority > b.acf.piority) {
        return 1;
      } else if (a.acf.piority < b.acf.piority) {
        return -1;
      }
      return 0;
    })
  );

  return (
    <div className={styles.projects__container}>
      <h1 className={styles.projects__title}>Projects</h1>

      <div className={styles.projects}>
        {/* project 1 */}
        <InView>
          {({ ref, inView }) => {
            return (
              <a
                href={sortedProjects[0].acf.project_link.url}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={`${styles.project__card} ${
                    inView && styles.project__animate
                  }`}
                  ref={ref}
                >
                  <div className={`${styles.play}`}>
                    <FontAwesomeIcon icon={faPlay} />
                  </div>{" "}
                  <div className={styles.project__content}>
                    <Image
                      src={sortedProjects[0].acf.imageUrl}
                      alt="placeholder for image"
                      width="300"
                      height="100"
                      className={styles.image}
                    />
                    <div className={styles.project__info}>
                      <h1 className={styles.project__name}>
                        {sortedProjects[0].title.rendered}
                      </h1>
                      <h3 className={styles.project__desc}>
                        {sortedProjects[0].acf.excerpt}
                      </h3>
                    </div>
                  </div>
                </div>
              </a>
            );
          }}
        </InView>
        {/* project 2 */}
        <InView>
          {({ ref, inView }) => {
            return (
              <a
                href={sortedProjects[1].acf.project_link.url}
                target="_blank"
                rel="noreferrer"
              >
                <div className={styles.right} ref={ref}>
                  <div
                    className={`${styles.project__card} ${
                      styles.project__card__right
                    } ${inView && styles.project__right__animate}`}
                  >
                    <div
                      className={`${styles.project__content} ${styles.project__right__content}`}
                    >
                      <div className={styles.project__info}>
                        <h1 className={styles.project__name}>
                          {sortedProjects[1].title.rendered}
                        </h1>
                        <h3 className={styles.project__desc}>
                          {sortedProjects[1].acf.excerpt}
                        </h3>
                      </div>
                      <Image
                        src={sortedProjects[1].acf.imageUrl}
                        width="300"
                        height="100"
                        alt="placeholder for image"
                        className={styles.image}
                      />
                    </div>

                    <div className={`${styles.rightPlay}`}>
                      <FontAwesomeIcon icon={faPlay} />
                    </div>
                  </div>
                </div>
              </a>
            );
          }}
        </InView>
        {/* project 3 */}
        <InView>
          {({ ref, inView }) => {
            return (
              <a
                href={sortedProjects[2].acf.project_link.url}
                target="_blank"
                rel="noreferrer"
              >
                <div
                  className={`${styles.project__card} ${
                    inView && styles.project__animate
                  }`}
                  ref={ref}
                >
                  <div className={`${styles.play}`}>
                    <FontAwesomeIcon icon={faPlay} />
                  </div>

                  <div className={styles.project__content}>
                    <Image
                      src={sortedProjects[2].acf.imageUrl}
                      width="300"
                      height="100"
                      alt="image for jeopardy site"
                      className={styles.image}
                    />
                    <div className={styles.project__info}>
                      <h1 className={styles.project__name}>
                        {sortedProjects[2].title.rendered}
                      </h1>
                      <h3 className={styles.project__desc}>
                        {sortedProjects[2].acf.excerpt}
                      </h3>
                    </div>
                  </div>
                </div>
              </a>
            );
          }}
        </InView>
      </div>
    </div>
  );
};

export default Projects;
