import React, { FC } from 'react';
import expertiseCategories from 'config/expertiseCategories';

import { Container, Grid, Typography } from '@material-ui/core';

import CategoryCard from './CategoryCard';

import styles from './WhatWeDoSection.module.scss';

const WhatWeDoSection: FC = () => (
  <Container className={styles.container} maxWidth="xl" component="section" classes={{ root: styles.root }}>
    <Typography variant="h2" className={styles.title}>
      Like an agency,
      <br />
      unlike any agency
    </Typography>
    <Typography variant="body2" className={styles.subtitle}>
      We shape our core capabilities around lean
      <br />
      product teams capable of delivering immense
      <br />
      value to organisations worldwide
    </Typography>

    <Grid container justify="space-between" className={styles.cardsContainer}>
      {expertiseCategories.map(({ name, description, icon }) => (
        <CategoryCard key={name} name={name} description={description} icon={icon} />
      ))}
    </Grid>
  </Container>
);

export default WhatWeDoSection;
