import React, { FC } from 'react';
import workingBenefits from 'config/workingBenefits';
import { Container, Grid, Typography } from '@material-ui/core';
import PerkCard from './PerkCard';

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
        We are building a cosy and stimulating environment that challenges your personal growth, with dedication to
        creating a workplace that drives the inner best from people. A place where career and passion come together. New
        career, new technologies and new friends – let the exciting adventure begin!
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
