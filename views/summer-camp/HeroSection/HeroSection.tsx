import React from 'react';
import Image from 'next/image';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { addAssetPrefix } from 'utils/static/addAssetPrefix';

import Intro from './Intro';

import styles from './HeroSection.module.scss';

const HeroSection: React.FC = () => (
  <Grid component="section" className={styles.root}>
    <Container className={styles.container} maxWidth="xl">
      <Intro />
      <Grid className={styles.imageWrapper}>
        <Image
          src={addAssetPrefix('/images/summerCamp/psc-hero.png')}
          alt="hero-image"
          layout="responsive"
          height="1366"
          width="1989"
        />
      </Grid>
    </Container>
  </Grid>
);

export default HeroSection;
