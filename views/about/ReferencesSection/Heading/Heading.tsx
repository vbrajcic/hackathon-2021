import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import styles from './Heading.module.scss';

const Heading: React.FC = () => (
  <Grid className={styles.container}>
    <Typography variant="overline" color="textSecondary" className={styles.sectionTitle}>
      REFERENCES
    </Typography>
    <Typography variant="h2" className={styles.title}>
      These
      <br />
      companies
      <br />
      trust us
    </Typography>
    <Typography variant="body2" color="textSecondary" className={styles.description}>
      We shape our core capabilities around lean product teams capable of delivering immense value to organisations
      worldwide
    </Typography>
  </Grid>
);

export default Heading;
