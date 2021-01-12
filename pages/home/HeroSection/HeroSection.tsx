import React from 'react';
import Intro from 'components/Intro';
import Button from '@material-ui/core/Button';
import Image from 'next/image';
import Hyperlink from 'components/Hyperlink';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import styles from './HeroSection.module.scss';

const HeroSection: React.FC = () => (
  <Container component="section" classes={{ root: styles.root }} className={styles.container} maxWidth="xl">
    <Intro text="Mobile app and web development agency" className={styles.intro}>
      <Hyperlink
        href="/services"
        component={
          <Button className={styles.button} color="primary">
            Find out what we do
          </Button>
        }
      />
    </Intro>
    <Grid className={styles.imageWrapper}>
      <Image src="/images/hero-section-image.png" layout="responsive" height="579" width="421" />
    </Grid>
  </Container>
);

export default HeroSection;
