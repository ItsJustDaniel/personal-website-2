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
                  Hi there! My name is Daniel Li and I am a Frontend Web
                  Developer.
                </p>
                <p>
                  I have always been passionate about web development and have
                  dedicated myself to constantly learning and growing in this
                  field. Over the years, I have gained a wealth of knowledge and
                  experience through my projects.
                </p>
                <p>
                  {" "}
                  I do freelance work as well. On my free time, I enjoy making
                  blogs on programming as well as making personal projects.
                </p>
                <p>
                  Thank you for visiting my website. I hope you find the
                  information here helpful and look forward to connecting with
                  you.
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
