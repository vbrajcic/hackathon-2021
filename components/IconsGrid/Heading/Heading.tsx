import React from 'react';
import cn from 'classnames';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles from './Heading.module.scss';

export interface HeadingProps {
  title: string;
  description: string;
  sectionTitle: string;
  className?: string;
}

const Heading: React.FC<HeadingProps> = ({ sectionTitle, description, title, className }) => (
  <Grid className={cn(styles.container, className)}>
    <Typography variant="overline" color="textSecondary" className={styles.sectionTitle}>
      {sectionTitle}
    </Typography>
    <Typography variant="h2" className={styles.title}>
      {title}
    </Typography>
    <Typography variant="body2" color="textSecondary" className={styles.description}>
      {description}
    </Typography>
  </Grid>
);

export default Heading;
