import React from 'react';
import Image from 'next/image';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { addAssetPrefix } from 'utils/static/addAssetPrefix';
import useBreakpoint from 'utils/hooks/useBreakpoint';

import Intro from './Intro';

import styles from './HeroSection.module.scss';

const HeroSection: React.FC = () => {
  const { isExtraSmall } = useBreakpoint();
  return (
    <Grid component="section" className={styles.root}>
      <Container className={styles.container} maxWidth="xl">
        <Intro />
        <Grid className={styles.imageWrapper}>
          {!isExtraSmall && (
            <Image
              src={addAssetPrefix('/images/summerCamp/hero-image.png')}
              alt="hero-image"
              layout="responsive"
              height="1366"
              width="1989"
            />
          )}
        </Grid>
      </Container>
    </Grid>
  );
};

export default HeroSection;
