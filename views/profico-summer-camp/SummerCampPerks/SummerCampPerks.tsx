import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import summerCampPerks from 'config/summerCampPerks';

import styles from './SummerCampPerks.module.scss';

const SummerCampPerks: React.FC = () => (
  <Container maxWidth="xl" className={styles.container}>
    <Paper classes={{ root: styles.content }}>
      <Typography variant="h2" className={styles.title}>
        What&apos;s in it for
        <br />
        you?
      </Typography>
      <Grid container className={styles.perksWrapper}>
        {summerCampPerks.map(perk => (
          <Grid item xs={12} sm={6} lg={4} key={perk.heading} className={styles.perk}>
            <Typography variant="body1" className={styles.title}>
              {perk.heading}
            </Typography>
            <Typography variant="body2" className={styles.description}>
              {perk.description}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </Paper>
  </Container>
);

export default SummerCampPerks;
