import React from 'react';
import Grid from '@material-ui/core/Grid';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import { addAssetPrefix } from 'utils/static/addAssetPrefix';

import ImageItem from './ImageItem';

import styles from './ImageGrid.module.scss';

const ImageGrid: React.FC = () => {
  const { isDesktop } = useBreakpoint();
  const { breakpoints } = useTheme();

  const showFiveColumns = useMediaQuery(() => breakpoints.up(1400));

  return (
    <Grid container className={styles.container} classes={{ root: styles.root }}>
      <Grid container className={styles.column} direction="column">
        <ImageItem src={!isDesktop ? addAssetPrefix('images/mvp/5.png') : ''} />
        <ImageItem src={addAssetPrefix('images/mvp/1.png')} />
        <ImageItem src={!isDesktop ? addAssetPrefix('images/mvp/8.png') : ''} doubleHeight={!isDesktop} />
        {isDesktop && <ImageItem src={!showFiveColumns ? addAssetPrefix('images/mvp/7.png') : ''} />}
      </Grid>
      <Grid container className={styles.column} direction="column">
        {isDesktop && <ImageItem src={addAssetPrefix('images/mvp/2.png')} />}
        <ImageItem src={addAssetPrefix('images/mvp/3.png')} doubleHeight />
        {!isDesktop && <ImageItem src={addAssetPrefix('images/mvp/6.png')} />}
        <ImageItem src={!isDesktop ? addAssetPrefix('images/mvp/4.png') : ''} />
      </Grid>
      {isDesktop && (
        <Grid container className={styles.column} direction="column">
          <ImageItem />
          <ImageItem src={addAssetPrefix('images/mvp/4.png')} />
          <ImageItem />
          <ImageItem src={addAssetPrefix('images/mvp/5.png')} />
        </Grid>
      )}
      {showFiveColumns && (
        <Grid container className={styles.column} direction="column">
          <ImageItem src={addAssetPrefix('images/mvp/6.png')} />
          <ImageItem />
          <ImageItem src={addAssetPrefix('images/mvp/7.png')} />
          <ImageItem />
        </Grid>
      )}
      {isDesktop && (
        <Grid container className={styles.column} direction="column">
          <ImageItem src={!showFiveColumns ? addAssetPrefix('images/mvp/6.png') : ''} />
          <ImageItem src={addAssetPrefix('images/mvp/8.png')} doubleHeight />
        </Grid>
      )}
    </Grid>
  );
};

export default ImageGrid;
