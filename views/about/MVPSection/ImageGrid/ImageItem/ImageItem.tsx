import React from 'react';
import cn from 'classnames';
import Grid from '@material-ui/core/Grid';

import styles from './ImageItem.module.scss';

interface ImageItemProps {
  src: string;
  doubleHeight?: boolean;
}

const ImageItem: React.FC<ImageItemProps> = ({ src, doubleHeight }) => (
  <Grid item className={cn(styles.container, { [styles.doubleHeight]: doubleHeight })}>
    <div style={{ backgroundImage: `url(${src})` }} className={styles.image} />
  </Grid>
);

export default ImageItem;
