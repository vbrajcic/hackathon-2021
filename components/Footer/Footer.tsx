import React from 'react';
import { Typography, Grid } from '@material-ui/core';
import SocialIcon from 'components/SocialIcon';
import Container from 'components/Container';

import Instagram from '@material-ui/icons/Instagram';
import Dribble from 'components/SvgIcons/Dribble';
import Behance from 'components/SvgIcons/Behance';
import LinkedIn from '@material-ui/icons/LinkedIn';

import useBreakpoint from 'utils/hooks/useBreakpoint';

import styles from './Footer.module.scss';

const Footer: React.FC<{}> = () => {
  const { isMobile } = useBreakpoint();
  const gridDirection = isMobile ? 'column-reverse' : 'row';
  return (
    <footer className={styles.container}>
      <Container>
        <Grid container justify="space-between" alignItems="center" direction={gridDirection}>
          <Typography variant="body2">&copy; 2021 Profico</Typography>

          <Grid container classes={{ root: styles.socialIcons }}>
            <SocialIcon icon={Instagram} url="https://www.instagram.com/profi.co/" />
            <SocialIcon icon={Dribble} url="https://dribbble.com/Profico" />
            <SocialIcon icon={LinkedIn} url="https://www.linkedin.com/company/profico" />
            <SocialIcon icon={Behance} url="https://www.behance.net/profico" />
          </Grid>
        </Grid>
      </Container>
    </footer>
  );
};

export default Footer;
