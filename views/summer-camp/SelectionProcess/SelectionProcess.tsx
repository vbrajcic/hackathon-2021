import React from 'react';
import selectionSteps from 'config/selectionSteps';

import { Box, Divider, Grid, Container, Typography } from '@material-ui/core';

import SelectionCard from './SelectionCard';

import styles from './SelectionProcess.module.scss';

const SelectionProcess: React.FC = () => (
  <Grid component="section" className={styles.container}>
    <Typography variant="h2" className={styles.title}>
      Selection process
    </Typography>

    <Container className={styles.cardsWrapper}>
      <Box className={styles.dividers}>
        <Divider className={styles.verticalDivider} />
        <Divider className={styles.horizontalDivider} />
      </Box>
      {selectionSteps.map(step => (
        <SelectionCard key={step.id} {...step} />
      ))}
    </Container>
  </Grid>
);

export default SelectionProcess;
