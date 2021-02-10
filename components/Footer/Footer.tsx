import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Instagram from '@material-ui/icons/Instagram';
import LinkedIn from '@material-ui/icons/LinkedIn';
import SocialIcon from 'components/SocialIcon';
import Dribbble from 'components/SvgIcons/Dribbble/DribbbleIcon';
import Behance from 'components/SvgIcons/Behance/BehanceIcon';

import { format } from 'date-fns';

import styles from './Footer.module.scss';

const currentYear = format(new Date(), 'yyyy');

const Footer: React.FC = () => (
  <Container component="footer" maxWidth="xl" className={styles.container}>
    <Container maxWidth={false} className={styles.wrapper}>
      <Typography variant="body2">
        &copy;
        {` ${currentYear} Profico`}
      </Typography>
      <Grid container classes={{ root: styles.socialIcons }}>
        <SocialIcon icon={Instagram} url="https://www.instagram.com/profi.co/" />
        <SocialIcon icon={Dribbble} url="https://dribbble.com/Profico" />
        <SocialIcon icon={LinkedIn} url="https://www.linkedin.com/company/profico" />
        <SocialIcon icon={Behance} url="https://www.behance.net/profico" />
      </Grid>
    </Container>
  </Container>
);

export default Footer;
