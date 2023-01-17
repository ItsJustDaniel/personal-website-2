import styles from "/styles/hero.module.css";
import Image from "next/image";
import { InView } from "react-intersection-observer";

const Hero = () => {
  return (
    <InView>
      {({ ref, inView }) => {
        return (
          <div className={styles.hero__container}>
            <div
              ref={ref}
              className={`${styles.hero__card} ${
                inView && styles.hero__animate
              }`}
            >
              <Image
                src="/images/headShot.PNG"
                width={100}
                height={100}
                alt="placeholder for profile pic"
                className={styles.profile}
              />
              <div className={styles.hero__card__desc}>
                <h1 className={styles.hero__card__name}>Daniel Li</h1>
                <h3 className={styles.hero__card__job}>Frontend developer</h3>
              </div>
            </div>
          </div>
        );
      }}
    </InView>
  );
};

export default Hero;
