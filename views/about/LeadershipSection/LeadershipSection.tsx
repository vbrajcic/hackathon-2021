import React, { FC } from 'react';

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';

import leadership from 'config/leadership';
import LeaderCard from './LeaderCard';

import styles from './LeadershipSection.module.scss';

const LeadershipSection: FC = () => (
  <Container className={styles.container} maxWidth="xl" component="section" classes={{ root: styles.root }}>
    <Grid className={styles.textWrapper}>
      <Typography variant="overline" className={styles.sectionTitle}>
        Our management
      </Typography>
      <Typography variant="h2" className={styles.title}>
        Meet the leadership
      </Typography>
    </Grid>

    <Grid container justify="space-between" className={styles.cardsContainer}>
      {leadership.map(leader => (
        <LeaderCard leader={leader} key={leader.name} />
      ))}
    </Grid>
  </Container>
);

export default LeadershipSection;
