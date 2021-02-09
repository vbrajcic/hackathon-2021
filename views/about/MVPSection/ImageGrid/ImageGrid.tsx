import React from 'react';
import Grid from '@material-ui/core/Grid';
import useBreakpoint from 'utils/hooks/useBreakpoint';

import ImageItem from './ImageItem';

import styles from './ImageGrid.module.scss';

const ImageGrid: React.FC = () => {
  const { isMobile, isDesktop } = useBreakpoint();

  return (
    <Grid container className={styles.container} classes={{ root: styles.root }}>
      <Grid container className={styles.column} direction="column">
        <ImageItem src={isMobile ? 'images/careers/who-we-are-4.jpg' : ''} />
        <ImageItem src="images/careers/who-we-are-1.jpg" />
        <ImageItem src={isMobile ? 'images/careers/who-we-are-2.jpg' : ''} doubleHeight={isMobile} />
        {!isMobile && <ImageItem src={!isDesktop ? 'images/careers/who-we-are-3.jpg' : ''} />}
      </Grid>
      <Grid container className={styles.column} direction="column">
        {!isMobile && <ImageItem src="images/careers/who-we-are-4.jpg" />}
        <ImageItem src="images/careers/who-we-are-2.jpg" doubleHeight />
        {isMobile && <ImageItem src="images/careers/who-we-are-3.jpg" />}
        <ImageItem src={isMobile ? 'images/careers/who-we-are-4.jpg' : ''} />
      </Grid>
      {!isMobile && (
        <Grid container className={styles.column} direction="column">
          <ImageItem src="" />
          <ImageItem src="images/careers/who-we-are-1.jpg" />
          <ImageItem src="" />
          <ImageItem src="images/careers/who-we-are-4.jpg" />
        </Grid>
      )}
      {isDesktop && (
        <Grid container className={styles.column} direction="column">
          <ImageItem src="images/careers/who-we-are-1.jpg" />
          <ImageItem src="" />
          <ImageItem src="images/careers/who-we-are-4.jpg" />
          <ImageItem src="" />
        </Grid>
      )}
      {!isMobile && (
        <Grid container className={styles.column} direction="column">
          <ImageItem src={!isDesktop ? 'images/careers/who-we-are-3.jpg' : ''} />
          <ImageItem src="images/careers/who-we-are-2.jpg" doubleHeight />
        </Grid>
      )}
    </Grid>
  );
};

export default ImageGrid;
