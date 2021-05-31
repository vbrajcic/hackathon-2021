import React from 'react';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Hyperlink from 'components/Hyperlink';

import styles from './Intro.module.scss';

const Intro: React.FC = () => (
  <Grid className={styles.container}>
    <Typography variant="h1" className={styles.title}>
      Profico Summer Camp
      <div className={styles.label}>2021</div>
    </Typography>
    <Typography variant="body1" className={styles.subtitle}>
      July 26 - August 6
    </Typography>
    <Hyperlink
      data-ga-event-name="go_to_services"
      href="#"
      component={
        <Button className={styles.button} color="secondary">
          Apply now
        </Button>
      }
    />
    <Typography variant="body2" className={styles.disclaimer}>
      Applications close on June 7
    </Typography>
  </Grid>
);

export default Intro;
