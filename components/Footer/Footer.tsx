import Container from '@material-ui/core/Container';

import Hyperlink from 'components/Hyperlink';

import styles from './Footer.module.scss';

const Footer = () => (
  <footer className={styles.container}>
    <Container>
      <div className={styles.padding}>
        <h4 className={styles.text}>&copy; 2020 Profico. All rights reserved.</h4>
        <div className={styles.column}>
          <Hyperlink href="/privacy-policy" AnchorProps={{ className: styles.link }}>
            Privacy policy
          </Hyperlink>
          <a href="https://profi.co/" target="_blank" rel="noreferrer" className={styles.link}>
            View old site
          </a>
        </div>
      </div>
    </Container>
  </footer>
);

export default Footer;
