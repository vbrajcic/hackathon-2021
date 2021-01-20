import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Instagram from '@material-ui/icons/Instagram';
import LinkedIn from '@material-ui/icons/LinkedIn';
import SocialIcon from 'components/SocialIcon';
import Dribble from 'components/SvgIcons/Dribble';
import Behance from 'components/SvgIcons/Behance';
import useBreakpoint from 'utils/hooks/useBreakpoint';

import { format } from 'date-fns';

import styles from './Footer.module.scss';

const currentYear = format(new Date(), 'yyyy');

const Footer: React.FC<{}> = () => {
  const { isMobile } = useBreakpoint();

  return (
    <footer className={styles.container}>
      <Container>
        <Grid container justify="space-between" alignItems="center" direction={isMobile ? 'column-reverse' : 'row'}>
          <Typography variant="body2">
            &copy;
            {` ${currentYear} Profico`}
          </Typography>
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
