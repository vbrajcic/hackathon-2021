import React from 'react';
import cx from 'clsx';

import { Box, Button, Paper, Typography } from '@material-ui/core';
import { useCookie } from 'react-use';

import styles from './CookieConsent.module.scss';

const CookieConsent: React.FC = () => {
  const [cookie, setCookie] = useCookie('profico-web-cookie-consent');

  if (cookie === 'true') {
    return null;
  }

  const submitCookieConsent = () => {
    setCookie('true', {
      expires: 365,
      sameSite: 'Lax',
      secure: true,
    });
  };

  return (
    <Paper className={cx(styles.root, { [styles.visible]: cookie !== 'true' })} elevation={0} square>
      <Box className={styles.container}>
        <Typography className={styles.text} variant="body2" color="textPrimary">
          This website uses cookies in order to provide a better user experience and functionality. By continuing to
          browse the site you agree to our &nbsp;
          <a href="/cookie-policy">Cookie</a>
          &nbsp;and&nbsp;
          <a href="/privacy-policy">Privacy Policy</a>
          &nbsp;.
        </Typography>
        <Button onClick={submitCookieConsent} className={styles.button}>
          Ok
        </Button>
      </Box>
    </Paper>
  );
};

export default CookieConsent;
