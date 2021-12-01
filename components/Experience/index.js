import { InView } from "react-intersection-observer";
import styles from "/styles/experience.module.css";
import ExperienceCard from "./experienceCard";

const Experience = () => {
  return (
    <div className={styles.experience__container}>
      <h1 className={styles.experience__title}>Experience</h1>
      <InView>
        {({ ref, inView }) => {
          return (
            <div className={styles.experience} ref={ref}>
              <ExperienceCard inView={inView} time="100">
                <h1 className={styles.title}>Remote Work/freelance</h1>
                <h3 className={styles.desc}>
                  I've done a remote job, it was with other developers across
                  the world and it was under the Agile methodlogy. It taught me
                  how to work with other people and how things are normally done
                  in corporate jobs
                </h3>
              </ExperienceCard>
              <ExperienceCard inView={inView} time="300">
                <h1 className={styles.title}>Won a hackathon</h1>
                <h3 className={styles.desc}>
                  I won the hackathon (programming competition) HackAlphaX that
                  had over a hundred people participating with another
                  programmer. it taught me more about how to work with other
                  people, learn technologies you know nothing about very quickly
                  and how to work under strict deadlines.
                </h3>
              </ExperienceCard>
              <ExperienceCard inView={inView} time="500">
                <h1 className={styles.title}>Mcdonalds Crewmate</h1>
                <h3 className={styles.desc}>
                  I currently work as a Mcdonalds Crewmate as a casual worker. i
                  work with a crew in a fastpaced environment. it teaches me how
                  to work dealing with stress and how to communicate properly
                  with my fellow crewmates.
                </h3>
              </ExperienceCard>
            </div>
          );
        }}
      </InView>
    </div>
  );
};

export default Experience;
