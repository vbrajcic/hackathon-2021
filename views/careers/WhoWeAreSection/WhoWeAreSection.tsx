import React, { FC } from 'react';

import { Container, Grid, Typography } from '@material-ui/core';
import { addAssetPrefix } from 'utils/static/addAssetPrefix';

import styles from './WhoWeAreSection.module.scss';

const WhoWeAreSection: FC = () => (
  <Container className={styles.container} maxWidth="xl" component="section" classes={{ root: styles.root }}>
    <Grid>
      <Typography variant="overline" className={styles.sectionTitle}>
        Who we are
      </Typography>
      <Typography variant="h2" className={styles.title}>
        Keeping great people
        <br />
        busy since 2012
      </Typography>
      <Typography variant="body2" className={styles.subtitle}>
        With offices in two of the largest cities in Croatia (Zagreb & Split), we’re always looking for talented people
        that want to make something they’re proud of across all experience levels.
      </Typography>
    </Grid>
    <Grid className={styles.imageWrapper}>
      <Grid className={styles.innerImageWrapper}>
        <img src={addAssetPrefix('images/careers/who-we-are-1.jpg')} className={styles.image} alt="Who we are 01>" />
        <img src={addAssetPrefix('images/careers/who-we-are-2.jpg')} className={styles.image} alt="Who we are 02>" />
        <img src={addAssetPrefix('images/careers/who-we-are-3.jpg')} className={styles.image} alt="Who we are 03>" />
        <img src={addAssetPrefix('images/careers/who-we-are-4.jpg')} className={styles.image} alt="Who we are 04>" />
      </Grid>
    </Grid>
  </Container>
);

export default WhoWeAreSection;
