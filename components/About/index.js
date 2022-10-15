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
                  Hello, my name is Daniel Li. Ever since I was a teenager I’ve
                  been passionate about programming. I love building projects
                  and seeing my vision come to life. I want to be able turn this
                  passion into something I can do for the rest of my life.
                </p>
                <p>
                  I’m a frontend devloper, but I know backend stuff as well. I
                  have a strong understanding of HTML, CSS, Javascript, PHP and
                  React. I am highly passionate about learning and love learning
                  about new tools as well as building on my fundalmentals.
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
