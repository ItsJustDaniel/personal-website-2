import { useEffect, useState } from "react";
import styles from "/styles/experience.module.css";

const ExperienceCard = ({ inView, time, children }) => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (inView === true) {
      setTimeout(() => {
        setLoading(true);
      }, time);
    } else {
      setLoading(false);
    }
  }, [inView]);
  return (
    <div
      className={
        loading
          ? `${styles.experience__card} ${inView && styles.animate}`
          : styles.none
      }
    >
      {children}
    </div>
  );
};

export default ExperienceCard;
