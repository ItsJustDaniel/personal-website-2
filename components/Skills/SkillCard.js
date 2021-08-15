import styles from "/styles/skills.module.css";
import { useEffect, useReducer, useState } from "react";
import reducer from "./reducer";
import { initialState } from "./data";

let list = [1, 2, 3, 4, 5, 6, 7, 8];

const random = (list, setLoading) => {
  const rand = Math.floor(Math.random() * list.length);
  console.log(rand);
  console.log(list);

  const listNum = list.splice(rand, 1);
  console.log(listNum);

  setTimeout(() => {
    setLoading(false);
  }, `${listNum[0] * 100}`);

  return listNum[0];
};

const SkillCard = ({ skill, inView }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [rand, setRand] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (inView) {
      setRand(random(list, setLoading));
    } else {
      setLoading(true);
      list = [1, 2, 3, 4, 5, 6, 7, 8];
    }
  }, [inView]);

  if (loading === true) {
    return <div className={styles.hidden}>{skill}</div>;
  } else if (loading === false) {
    return (
      <div
        className={styles.skill__card}
        style={
          inView
            ? {
                animation: `fadeIn 1s forwards`,
                MozAnimation: `fadeIn 1s forwards`,
                WebkitAnimation: `fadeIn 1s forwards`,
              }
            : {}
        }
      >
        {skill}
      </div>
    );
  }
};

export default SkillCard;
