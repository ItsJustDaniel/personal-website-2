import Footer from "../Footer";
import Navbar from "../Navbar";
import styles from "/styles/layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.content__container}>
      <div className={styles.content}>
        <Navbar />
        {children}
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
