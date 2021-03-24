import React from 'react';
import Grid from '@material-ui/core/Grid';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import ImageItem from './ImageItem';

import styles from './ImageGrid.module.scss';

const ImageGrid: React.FC = () => {
  const { isDesktop } = useBreakpoint();
  const { breakpoints } = useTheme();

  const showFiveColumns = useMediaQuery(() => breakpoints.up(1400));

  return (
    <Grid container className={styles.container} classes={{ root: styles.root }}>
      <Grid container className={styles.column} direction="column">
        <ImageItem src={!isDesktop ? 'images/careers/who-we-are-4.jpg' : ''} />
        <ImageItem src="images/careers/who-we-are-1.jpg" />
        <ImageItem src={!isDesktop ? 'images/careers/who-we-are-2.jpg' : ''} doubleHeight={!isDesktop} />
        {isDesktop && <ImageItem src={!showFiveColumns ? 'images/careers/who-we-are-3.jpg' : ''} />}
      </Grid>
      <Grid container className={styles.column} direction="column">
        {isDesktop && <ImageItem src="images/careers/who-we-are-4.jpg" />}
        <ImageItem src="images/careers/who-we-are-2.jpg" doubleHeight />
        {!isDesktop && <ImageItem src="images/careers/who-we-are-3.jpg" />}
        <ImageItem src={!isDesktop ? 'images/careers/who-we-are-4.jpg' : ''} />
      </Grid>
      {isDesktop && (
        <Grid container className={styles.column} direction="column">
          <ImageItem />
          <ImageItem src="images/careers/who-we-are-1.jpg" />
          <ImageItem />
          <ImageItem src="images/careers/who-we-are-4.jpg" />
        </Grid>
      )}
      {showFiveColumns && (
        <Grid container className={styles.column} direction="column">
          <ImageItem src="images/careers/who-we-are-1.jpg" />
          <ImageItem />
          <ImageItem src="images/careers/who-we-are-4.jpg" />
          <ImageItem />
        </Grid>
      )}
      {isDesktop && (
        <Grid container className={styles.column} direction="column">
          <ImageItem src={!showFiveColumns ? 'images/careers/who-we-are-3.jpg' : ''} />
          <ImageItem src="images/careers/who-we-are-2.jpg" doubleHeight />
        </Grid>
      )}
    </Grid>
  );
};

export default ImageGrid;
