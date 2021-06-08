import React from 'react';
import Typography from '@material-ui/core/Typography';

import { CandidateDetail } from 'config/idealCandidateDetails';

import styles from './CandidateCard.module.scss';

const CandidateCard: React.FC<CandidateDetail> = ({ title, subtitle, icon: Icon }) => (
  <div className={styles.container}>
    <div className={styles.image}>
      <Icon className={styles.cardIcon} />
    </div>
    <Typography className={styles.title} variant="body1">
      {title}
    </Typography>
    <Typography variant="body2" className={styles.subtitle}>
      {subtitle}
    </Typography>
  </div>
);

export default CandidateCard;
