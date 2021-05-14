import React from 'react';
import Intro from 'components/Intro';
import Button from '@material-ui/core/Button';
import Image from 'next/image';
import Hyperlink from 'components/Hyperlink';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';

import { addAssetPrefix } from 'utils/static/addAssetPrefix';

import styles from './HeroSection.module.scss';

const HeroSection: React.FC = () => (
  <Grid component="section" className={styles.root}>
    <Container className={styles.container} maxWidth="xl">
      <Intro text="Ready to build apps?" className={styles.intro}>
        <Hyperlink
          data-ga-event-name="go_to_services"
          href="#"
          component={
            <Button className={styles.button} color="secondary">
              Hell Yeah! Let&apos;s go
            </Button>
          }
        />
      </Intro>
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
