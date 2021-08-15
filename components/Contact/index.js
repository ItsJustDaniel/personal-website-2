import styles from "/styles/contact.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faGithub,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact = () => {
  return (
    <div className={styles.contact__container}>
      <h1 className={styles.contact__title}>You can find me on:</h1>
      <div className={styles.contacts}>
        <a href="https://twitter.com/Justdaniel5">
          <FontAwesomeIcon
            icon={faTwitter}
            className={styles.social}
          ></FontAwesomeIcon>
        </a>
        <a href="https://discords.com/bio/p/leinad">
          <FontAwesomeIcon
            icon={faDiscord}
            className={styles.social}
          ></FontAwesomeIcon>
        </a>
        <a href="mailto:danielli12750@gmail.com">
          <FontAwesomeIcon
            icon={faEnvelope}
            className={styles.social}
          ></FontAwesomeIcon>
        </a>
        <a href="https://www.linkedin.com/in/daniel-li-7709621a3/">
          <FontAwesomeIcon
            icon={faLinkedin}
            className={styles.social}
          ></FontAwesomeIcon>
        </a>
        <a href="https://github.com/ItsJustDaniel">
          <FontAwesomeIcon
            icon={faGithub}
            className={styles.social}
          ></FontAwesomeIcon>
        </a>
      </div>
    </div>
  );
};

export default Contact;
