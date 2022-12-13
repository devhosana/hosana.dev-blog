import styles from './NavBar.module.css';

function NavBar() {
  return (
    <header className={styles["header__container"]} id="nav__bar">
      <h1 className={styles["nav__title"]}>hosana.dev/blog</h1>

      <nav className={styles.navbar}>
        <li>
          <a href="#" className={styles["navbar__item"]}>
            Home
          </a>
        </li>

        <li>
          <a href="https://github.com/diegodiego1989" target="_blank" className={styles["navbar__item"]}>
            Github
          </a>
        </li>

        <li>
          <a href="https://hosana.dev/#works" target="_blank" className={styles["navbar__item"]}>
            Projects
          </a>
        </li>
      </nav>

    </header>
  );
};

export default NavBar;