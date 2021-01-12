import React from 'react';
import Intro from 'components/Intro';
import Button from '@material-ui/core/Button';
import Image from 'next/image';
import Hyperlink from 'components/Hyperlink';

import { Grid } from '@material-ui/core';

import styles from './HeroSection.module.scss';

const HeroSection: React.FC = () => (
  <Grid className={styles.container} container>
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
  </Grid>
);

export default HeroSection;
