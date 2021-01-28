import React, { FC } from 'react';
import workingBenefits from 'config/workingBenefits';
import PerkCard from './PerkCard';

import { Container, Grid, Typography } from '@material-ui/core';

import styles from './WorkBenefits.module.scss';

const WorkBenefits: FC = () => (
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
      {workingBenefits.map(({ name, description, icon, image }) => (
        <PerkCard key={name} {...{ name, description, icon, image }} />
      ))}
    </Grid>
  </Container>
);

export default WorkBenefits;
