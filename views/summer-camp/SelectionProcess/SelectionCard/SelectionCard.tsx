import React from 'react';
import cn from 'clsx';

import { SelectionStep } from 'config/selectionSteps';
import { Typography } from '@material-ui/core';

import styles from './SelectionCard.module.scss';

const SelectionCard: React.FC<SelectionStep> = ({ id, step, title, subtitle }) => (
  <div className={cn(styles.container, styles[id])}>
    <div className={styles.step}>
      <Typography className={styles.stepNumber} variant="h3">
        {step}
      </Typography>
    </div>
    <div className={styles.textWrapper}>
      <Typography className={styles.title} variant="subtitle1">
        {title}
      </Typography>
      <Typography className={styles.subtitle}>{subtitle}</Typography>
    </div>
  </div>
);

export default SelectionCard;
