import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import ServiceCategories from './ServiceCategories';

import styles from './HeroSection.module.scss';

const words = ['Supporting', 'Creating', 'Implementing'];

const HeroSection: React.FC = () => (
  <Container className={styles.container} component="section" maxWidth="xl" classes={{ root: styles.root }}>
    <Grid className={styles.textWrapper}>
      <Typography variant="h1" color="secondary">
        {words[0]}
      </Typography>
      <Typography variant="h1" className={styles.introText} color="textPrimary">
        good ideas at any stage, platform, scale
      </Typography>
      <Typography variant="body2" color="textSecondary" className={styles.descriptionText}>
        We shape our services around lean product teams capable of delivering immense value to organisations worldwide.
      </Typography>
    </Grid>
    <ServiceCategories />
  </Container>
);
export default HeroSection;
