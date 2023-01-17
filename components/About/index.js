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
                  Hello, my name is Daniel Li and I am a Frontend Web Developer.
                </p>
                <p>
                  I am passionate about web development and have dedicated
                  myself to constantly learning and growing in this field. Over
                  the past 2 years, I have gained a wealth of knowledge and
                  experience through my projects.
                </p>
                <p>
                  On my free time, I enjoy making blogs on programming as well
                  as making personal projects.
                </p>
                <p>
                  Thanks for visiting my website. I hope you enjoy your time
                  here!
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
