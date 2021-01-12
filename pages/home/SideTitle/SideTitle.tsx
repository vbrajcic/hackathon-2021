import { Grid, Typography } from '@material-ui/core';
import React, { FC } from 'react';

import styles from './SideTitle.module.scss';

interface SideTitleProps {
  title: string;
}

const SideTitle: FC<SideTitleProps> = ({ title }) => (
  <Grid container alignItems="center" justify="flex-end" className={styles.container}>
    <div className={styles.line} />
    <Typography variant="caption" className={styles.title}>
      {title}
    </Typography>
  </Grid>
);

export default SideTitle;
