import React from 'react';
import cn from 'clsx';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import styles from './Intro.module.scss';

interface IntroProps {
  text: string;
  className?: string;
}

const Intro: React.FC<IntroProps> = ({ text, className, children }) => (
  <Grid className={cn(styles.container, className)}>
    <Typography variant="h1">{text}</Typography>
    {children}
  </Grid>
);

export default Intro;
