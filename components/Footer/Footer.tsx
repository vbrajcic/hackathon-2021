import React from 'react';
import cn from 'clsx';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Instagram from '@material-ui/icons/Instagram';
import LinkedIn from '@material-ui/icons/LinkedIn';
import SocialIcon from 'components/SocialIcon';

import { format } from 'date-fns';

import styles from './Footer.module.scss';

export interface FooterProps {
  bgColor?: 'grey' | 'blue';
}

const currentYear = format(new Date(), 'yyyy');

const Footer: React.FC<FooterProps> = ({ bgColor }) => (
  <footer
    className={cn(styles.container, {
      [styles.greyBackground]: bgColor === 'grey',
      [styles.blueBackground]: bgColor === 'blue',
    })}
  >
    <Container maxWidth="xl">
      <Container maxWidth={false} className={styles.wrapper}>
        <Typography variant="body2" className={styles.copyright}>
          &copy;
          {` ${currentYear} Startsiden`}
          <a href="/legal-info" className={styles.link}>
            Legal info
          </a>
        </Typography>
        <Grid container classes={{ root: styles.socialIcons }}>
          <SocialIcon icon={Instagram} url="" />
          <SocialIcon icon={LinkedIn} url="" />
        </Grid>
      </Container>
    </Container>
  </footer>
);

export default Footer;
