import Link from "next/link";
import styles from "/styles/navbar.module.css";
import { useRouter } from "next/router";
const Navbar = () => {
  const router = useRouter();
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__content}>
        <h1 className={styles.nav__title}>Daniel Li</h1>
        <div className={styles.nav__links}>
          <Link href="/">
            <a
              className={`${styles.nav__link}  ${
                router.pathname === "/" && styles.nav__clicked
              }`}
            >
              Home
            </a>
          </Link>
          <Link href="/blog">
            <a
              className={`${styles.nav__link}  ${
                router.pathname === "/blog" && styles.nav__clicked
              }`}
            >
              Blog
            </a>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
