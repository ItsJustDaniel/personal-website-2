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
                  Hi, i'm a self-taught frontend web developer located in
                  Australia and i've been programming since 2019. i believe in
                  to not only do something, but to do it right. i like to spend
                  the extra effort to make sure the code is clean and
                  well-structured and that the website is high-performing and
                  responsive.
                </p>
                <p>
                  I enjoy learning about new things, particularly new tool in
                  the industry. i make sure to keep up to date with the industry
                  and i try to understand the behind-the-scenes of a language or
                  a framework, i believe that knowing how something works help
                  to improve your skill in solving problems in it.
                </p>
                <p>
                  i have a blog that i plan to help teach others and document my
                  experiences and opinions within the tech industry.
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
