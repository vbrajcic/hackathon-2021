import React, { useRef } from 'react';
import selectionSteps, { SelectionStep } from 'config/selectionSteps';
import cx from 'clsx';

import { Box, Grid, Typography } from '@material-ui/core';
import { isBefore, isWithinInterval } from 'date-fns';

import SelectionCard from './SelectionCard';

import styles from './SelectionProcess.module.scss';

const getCurrentStage = (): SelectionStep['id'] => {
  const now = new Date();

  if (isBefore(now, new Date(2021, 6, 12))) {
    return 'apply';
  }

  if (
    isWithinInterval(now, {
      start: new Date(2021, 6, 12),
      end: new Date(2021, 6, 21),
    })
  ) {
    return 'talk';
  }

  return 'internship';
};

const SelectionProcess: React.FC = () => {
  const currentStageRef = useRef<SelectionStep['id']>(getCurrentStage());

  return (
    <Grid component="section" className={styles.container}>
      <Typography variant="h2" className={styles.title}>
        Selection process
      </Typography>
      <Box className={styles.dividerWrapper}>
        <Box className={cx(styles.divider, styles[`${currentStageRef.current}Stage`])}>
          <Box className={styles.circle} />
        </Box>
      </Box>
      <Box className={styles.cardsWrapper}>
        {selectionSteps.map(step => (
          <SelectionCard key={step.id} {...step} />
        ))}
      </Box>
    </Grid>
  );
};

export default SelectionProcess;
