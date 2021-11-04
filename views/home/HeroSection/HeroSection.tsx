import React from 'react';
import Intro from 'components/Intro';
import Button from '@material-ui/core/Button';
import Hyperlink from 'components/Hyperlink';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Img from 'components/Img';

import { Theme } from '@material-ui/core/styles';
import { addAssetPrefix } from 'utils/static/addAssetPrefix';

import styles from './HeroSection.module.scss';

const HeroSection: React.FC = () => {
  const isBelowSm = useMediaQuery((theme: Theme) => theme.breakpoints.down('sm'));
  const isBetweenMdXl = useMediaQuery((theme: Theme) => theme.breakpoints.between('md', 1680));
  const isUpXl = useMediaQuery((theme: Theme) => theme.breakpoints.up('xl'));

  return (
    <Grid component="section" className={styles.root}>
      <Container className={styles.container} maxWidth="xl">
        <Intro text="Mobile app and web development agency" className={styles.intro}>
          <Hyperlink
            data-ga-event-name="go_to_services"
            href="/services"
            component={
              <Button className={styles.button} color="primary">
                Find out what we do
              </Button>
            }
          />
        </Intro>
        <Grid className={styles.imageWrapper}>
          {isBelowSm && (
            <Img
              src={addAssetPrefix('/images/hero-image-mb.png')}
              alt="hero-image"
              layout="responsive"
              height="1924"
              width="1128"
            />
          )}
          {isBetweenMdXl && (
            <Img
              src={addAssetPrefix('/images/hero-image-1440.png')}
              alt="hero-image"
              layout="responsive"
              height="701"
              width="906"
            />
          )}
          {isUpXl && (
            <Img
              src={addAssetPrefix('/images/hero-image.png')}
              alt="hero-image"
              layout="responsive"
              height="1398"
              width="1510"
            />
          )}
        </Grid>
      </Container>
    </Grid>
  );
};

export default HeroSection;
