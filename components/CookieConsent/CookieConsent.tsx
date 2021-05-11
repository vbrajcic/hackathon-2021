import React from 'react';
import CookieConsent from 'react-cookie-consent';

import styles from './CookieConsent.module.scss';

const CustomCookieConsent: React.FC = () => (
  <div className={styles.root}>
    <CookieConsent
      disableStyles
      disableButtonStyles
      buttonText="Ok"
      cookieName="profico-web-cookie-consent"
      containerClasses={styles.container}
      buttonClasses={styles.button}
      expires={365}
    >
      This website uses cookies in order to provide a better user experience and functionality. By continuing to browse
      the site you agree to our Cookie and <a href="https://profi.co/privacy-policy">Privacy Policy</a>.
    </CookieConsent>
  </div>
);

export default CustomCookieConsent;
