import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import { InView } from "react-intersection-observer";
import styles from "/styles/project.module.css";

const Projects = () => {
  return (
    <div className={styles.projects__container}>
      <h1 className={styles.projects__title}>Projects</h1>

      <div className={styles.projects}>
        {/* project 1 */}
        <InView>
          {({ ref, inView }) => {
            console.log(inView);
            return (
              <a
                href="https://code-clothes.com/"
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
                      src="/images/projects/Code-Clothing().PNG"
                      alt="placeholder for image"
                      width="300"
                      height="100"
                      className={styles.image}
                    />
                    <div className={styles.project__info}>
                      <h1 className={styles.project__name}>Code-Clothing()</h1>
                      <h3 className={styles.project__desc}>
                        Functional e-commerce site that sells programming
                        clothes. Uses stripe payment system
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
                href="https://covid-information-app.vercel.app/"
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
                          Covid Information
                        </h1>
                        <h3 className={styles.project__desc}>
                          A website that details basic information about
                          covid-19. contains data visualisations built with
                          d3.js
                        </h3>
                      </div>
                      <Image
                        src="/images/projects/Covid Information.PNG"
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
            console.log(inView);
            return (
              <a
                href="https://itsjustdaniel.github.io/interactive-comment-section/"
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
                      src="/images/projects/interactive-comment-section.png"
                      width="300"
                      height="100"
                      alt="image for jeopardy site"
                      className={styles.image}
                    />
                    <div className={styles.project__info}>
                      <h1 className={styles.project__name}>
                        Interactive Comment Section
                      </h1>
                      <h3 className={styles.project__desc}>
                        Interactive comment section. challenge by frontend
                        mentors
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
