import styles from "/styles/about.module.css";
import { useRef, useState } from "react";
import { InView } from "react-intersection-observer";

const About = () => {
  return (
    <InView>
      {({ ref, inView }) => {
        return (
          <div className={`${styles.about}`}>
            <h1 className={styles.about__title}>About</h1>

            <div
              ref={ref}
              className={`${styles.about__card} ${
                inView && styles.about__animate
              } `}
            >
              <div className={styles.about__info}>
                <p>
                  Hi, my name is Daniel Li and i'm self-taught web developer.
                  I'm most focused on frontend, but i know some backend as well
                  such as node, express and mongodb. On the frontend, i know
                  HTML, CSS, JavaScript, React and Next.
                </p>
                <p>
                  I've been programming since 2019, but really it started even
                  before that, when i was child playing Warcraft 3. i loved
                  playing around in the map editor and experimenting with the
                  triggers (a GUI language they had inside). this appears to
                  this day as i love experimenting with the intricacies of
                  languages and frameworks and i'm very passionate and curious
                  about learning new technologies
                </p>
              </div>
            </div>
          </div>
        );
      }}
    </InView>
  );
};

export default About;
