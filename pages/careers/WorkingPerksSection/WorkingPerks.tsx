import React, { FC } from 'react';
import workingPerks from 'config/workingPerks';
import PerkCard from './PerkCard';

import { Container, Grid, Typography } from '@material-ui/core';

import styles from './WorkingPerks.module.scss';

const WorkingPerks: FC = () => (
  <Container className={styles.container} maxWidth="xl" component="section" classes={{ root: styles.root }}>
    <Grid>
      <Typography variant="overline" className={styles.sectionTitle}>
        Work at Profico
      </Typography>
      <Typography variant="h2" className={styles.title}>
        Perks of working
        <br />
        at Profico
      </Typography>
      <Typography variant="body2" className={styles.subtitle}>
        Successful project relationships transform us from
        <br />
        suppliers to partners and beyond.
      </Typography>
    </Grid>
    <Grid className={styles.cardsContainer}>
      {workingPerks.map(({ name, description, icon, image }) => (
        <PerkCard key={name} name={name} description={description} icon={icon} image={image} />
      ))}
    </Grid>
  </Container>
);

export default WorkingPerks;
