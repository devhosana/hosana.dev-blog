import styles from './Footer.module.css';

import { ReactComponent as TwitterIcon } from "../../assets/icons/logo_twitter.svg";
import { ReactComponent as LinkedInIcon } from "../../assets/icons/logo_linkedin.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/logo_facebook.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/logo_instagram.svg";

function Footer() {
  return (
    <footer className={styles.footer}>
      <a
        className={styles.footerLink}
        href="https://hosana.dev/"
        target="_blank"
      >
        hosana.dev
      </a>

      <div className={styles.footerIcons}>

        <LinkedInIcon
          className={styles.footerIcon}
        />

        <TwitterIcon
          className={styles.footerIcon}
        />

        <FacebookIcon
          className={styles.footerIcon}
        />

        <InstagramIcon
          className={styles.footerIcon}
        />
        
      </div>
    </footer>
  );
};

export default Footer;