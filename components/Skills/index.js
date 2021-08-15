import { InView } from "react-intersection-observer";
import styles from "/styles/skills.module.css";
import { useState, useEffect, useReducer } from "react";
import SkillCard from "./SkillCard";
import reducer from "./reducer";
import { initialState } from "./data";

const Skills = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className={styles.skills__container}>
      <h1 className={styles.skills__title}>Skills</h1>
      <InView>
        {({ ref, inView }) => {
          return (
            <div className={styles.skills__board} ref={ref}>
              <div className={styles.row}>
                <SkillCard skill="HTML" inView={inView} />
                <SkillCard skill="CSS" inView={inView} />{" "}
                <SkillCard skill="Javascript" inView={inView} />{" "}
              </div>
              <div className={styles.row}>
                <SkillCard skill="React" inView={inView} />{" "}
                <SkillCard skill="Next.js" inView={inView} />
                <SkillCard skill="Gatsby" inView={inView} />{" "}
              </div>
              <div className={styles.row}>
                <SkillCard skill="HTML" inView={inView} />{" "}
                <SkillCard skill="Express" inView={inView} />
              </div>
            </div>
          );
        }}
      </InView>
    </div>
  );
};

export default Skills;
