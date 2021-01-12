import React, { FC } from 'react';

import expertiseCategories from 'config/expertiseCategories';
import useBreakpoint from 'utils/hooks/useBreakpoint';
import { Container, Grid, Typography } from '@material-ui/core';

import SideTitle from '../SideTitle';
import styles from './WhatWeDoSection.module.scss';
import CategoryCard from './CategoryCard';

const WhatWeDoSection: FC<{}> = () => {
  const { isDesktop } = useBreakpoint();
  const sectionTitle = 'What we do';

  return (
    <Container className={styles.container} maxWidth="xl" component="section">
      <Typography variant="h2" className={styles.textPrimary}>
        Like an agency,
        <br />
        unlike any agency
      </Typography>
      <Typography variant="body2" className={styles.textSecondary}>
        We shape our core capabilities around lean
        <br />
        product teams capable of delivering immense
        <br />
        value to organisations worldwide
      </Typography>

      <Grid container alignItems="flex-start">
        {isDesktop && (
          <div className={styles.translate}>
            <SideTitle title={sectionTitle} />
          </div>
        )}
        <Grid item container justify="space-between" className={styles.cardsContainer}>
          {expertiseCategories.map(({ name, description, icon }) => (
            <CategoryCard name={name} description={description} icon={icon} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default WhatWeDoSection;
