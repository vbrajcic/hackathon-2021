import React from 'react';
import Typography from '@material-ui/core/Typography';

import { IdealCandidate } from 'config/idealCandidate';

import styles from './CandidateCard.module.scss';

const CandidateCard: React.FC<IdealCandidate> = ({ title, subtitle, icon: Icon }) => (
  <div className={styles.card}>
    <div className={styles.image}>
      <Icon className={styles.cardIcon} />
    </div>
    <Typography className={styles.text} variant="h4" component="h2">
      {title}
    </Typography>
    <Typography variant="body2" className={styles.subtitle}>
      {subtitle}
    </Typography>
  </div>
);

export default CandidateCard;
