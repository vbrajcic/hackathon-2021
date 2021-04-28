import React, { FC } from 'react';

import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import { Grid } from '@material-ui/core';
import aboutUs from 'config/aboutUs';
import styles from './IntroductionSection.module.scss';
import ImageCard from './ImageCard';

const IntroductionSection: FC = () => (
  <Container className={styles.container} component="section" maxWidth="xl" classes={{ root: styles.root }}>
    <Grid className={styles.textWrapper}>
      <Typography variant="h1" className={styles.introText} color="textPrimary">
        {`Digital product agency\nwith a global impact`}
      </Typography>
      <Typography variant="body2" color="textSecondary" className={styles.descriptionText}>
        Profico is a progressive full service digital product agency that focuses on building successful and
        award-winning websites and mobile apps
      </Typography>
    </Grid>
    <Grid className={styles.imageWrapper}>
      <Grid className={styles.innerImageWrapper}>
        {aboutUs.map(card => (
          <ImageCard image={card.image} heading={card.heading} text={card.text} key={card.key} />
        ))}
      </Grid>
    </Grid>
  </Container>
);

export default IntroductionSection;
