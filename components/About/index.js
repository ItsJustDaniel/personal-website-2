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
                  Australia and I've been programming since 2019. i believe in
                  to not only do something, but to do it right. I like to spend
                  the extra effort to make sure the code is clean and
                  well-structured and that the website is high-performing and
                  responsive.
                </p>
                <p>
                  I've always enjoyed learning about new things, particularly
                  new tools in the industry. I make sure to keep up to date with
                  the industry and I try to understand the behind-the-scenes of
                  a language or a framework, I believe that knowing how
                  something works help to improve your skill in solving problems
                  in it.
                </p>
                <p>
                  I have a blog that I plan to help teach others and document my
                  experiences within the tech industry.
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
