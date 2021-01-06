import Hyperlink from 'components/Hyperlink';
import styles from './Header.module.scss';

const Header = () => (
  <h2 className={styles.heading}>
    <Hyperlink href="/" AnchorProps={{ className: styles.link }}>
      Profico
    </Hyperlink>
    .
  </h2>
);

export default Header;
