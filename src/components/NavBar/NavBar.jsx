import styles from './NavBar.module.css';

function NavBar() {
  return (
    <header className={styles["header__container"]}>
      <h1 className={styles["nav__title"]}>hosana.dev/blog</h1>

      <nav className={styles.navbar}>
        <li className={styles["navbar__item"]}>
          Home
        </li>

        <li className={styles["navbar__item"]}>
          Github
        </li>

        <li className={styles["navbar__item"]}>
          Projects
        </li>
      </nav>

    </header>
  );
};

export default NavBar;